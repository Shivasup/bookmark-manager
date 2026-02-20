import { useEffect, useState } from "react";
import {
  getBookmarks,
  addBookmark,
  updateBookmark,
  deleteBookmark,
} from "./api";
import "./App.css";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);

  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const loadBookmarks = async () => {
    setLoading(true);
    const data = await getBookmarks();
    setBookmarks(data);
    setLoading(false);
  };

  useEffect(() => {
    loadBookmarks();
  }, []);

  const handleSubmit = async () => {
    if (!title || !url) return;

    if (editId) {
      await updateBookmark(editId, { title, url });
      setEditId(null);
    } else {
      await addBookmark({ title, url });
    }

    setTitle("");
    setUrl("");
    loadBookmarks();
  };

  return (
    <>
      <nav className="navbar">
        <span className="logo">PrimeBookmarks</span>
      </nav>

      <div className="app fade-in">
        <h2>Your Bookmarks</h2>

        <div className="form">
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            placeholder="URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button onClick={handleSubmit}>{editId ? "Update" : "Add"}</button>
        </div>

        {loading ? (
          <div className="skeleton-list">
            <div className="skeleton"></div>
            <div className="skeleton"></div>
            <div className="skeleton"></div>
          </div>
        ) : (
          <ul className="list">
            {bookmarks.map((b) => (
              <li key={b.id} className="card">
                <a href={b.url} target="_blank" rel="noreferrer">
                  {b.title}
                </a>
                <div>
                  <button
                    onClick={() => {
                      setEditId(b.id);
                      setTitle(b.title);
                      setUrl(b.url);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={async () => {
                      const confirmDelete = window.confirm(
                        "Are you sure you want to delete this bookmark?",
                      );

                      if (confirmDelete) {
                        await deleteBookmark(b.id);
                        loadBookmarks();
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Delete Bookmark?</h3>
            <p>Are you sure you want to delete this bookmark?</p>

            <div className="modal-actions">
              <button className="cancel" onClick={() => setShowConfirm(false)}>
                Cancel
              </button>
              <button
                className="delete"
                onClick={async () => {
                  await deleteBookmark(deleteId);
                  setShowConfirm(false);
                  loadBookmarks();
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
