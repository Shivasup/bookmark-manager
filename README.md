# Smart Bookmark Manager

A full-stack **Bookmark Manager CRUD application** built using  
**React (.jsx) and Django REST Framework**.

The application allows users to **add, view, update, and delete bookmarks** through a RESTful API and a modern frontend interface.

---

## 🚀 Live Application

- **Frontend**: http://localhost:5173/ 
- **Backend API**: http://127.0.0.1:8000/api/bookmarks/

---

## 🛠️ Tech Stack

### Frontend
- React (Functional Components)
- JavaScript (ES6)
- JSX
- CSS

### Backend
- Django
- Django REST Framework (DRF)
- SQLite (default database)

### Tools & Deployment
- Git & GitHub
- Netlify (Frontend)
- Render (Backend)

---

## ✨ Features

- Add a bookmark (Title & URL)
- View all bookmarks
- Update existing bookmarks
- Delete bookmarks (with confirmation alert)
- RESTful API design
- Responsive user interface
- Separation of frontend and backend

---

## 📂 Project Structure

bookmark-manager/
├── backend/
│ ├── backend/
│ ├── bookmarks/
│ └── manage.py
│
├── frontend/
│ └── src/
│ ├── App.jsx
│ ├── api.js
│ ├── App.css
│ └── index.jsx
│
└── README.md


---

## ⚙️ Backend Setup (Django)

```bash
cd backend
pip install django djangorestframework django-cors-headers
python manage.py makemigrations
python manage.py migrate
python manage.py runserver

Backend runs at:

http://127.0.0.1:8000

API endpoint:

http://127.0.0.1:8000/api/bookmarks/


🎨 Frontend Setup (React)
cd frontend
npm install
npm start

Frontend runs at:

http://localhost:3000
🔄 API Endpoints
Method	Endpoint	Description
GET	/api/bookmarks/	Fetch all bookmarks
POST	/api/bookmarks/	Add a new bookmark
PUT	/api/bookmarks/{id}/	Update a bookmark
DELETE	/api/bookmarks/{id}/	Delete a bookmark
🧪 Backend Verification

Django Admin Panel

http://127.0.0.1:8000/admin

DRF Browsable API

http://127.0.0.1:8000/api/bookmarks/

🧠 Project Explanation 

“This project is a full-stack CRUD application where the backend is implemented using Django REST Framework with ModelViewSet,
and the frontend is built using React functional components. The frontend communicates with the backend through REST APIs
to perform all CRUD operations.


