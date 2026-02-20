const API_URL = "http://127.0.0.1:8000/api/bookmarks/";

export const getBookmarks = () =>
  fetch(API_URL).then(res => res.json());

export const addBookmark = (data) =>
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

export const updateBookmark = (id, data) =>
  fetch(`${API_URL}${id}/`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

export const deleteBookmark = (id) =>
  fetch(`${API_URL}${id}/`, { method: "DELETE" });