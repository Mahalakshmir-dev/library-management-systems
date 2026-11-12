# Library Management System (MERN)

A beginner-friendly full-stack Library Management System built with MongoDB, Express, React, and Node.js.

## Features
- Add, view, edit, search, and delete books (CRUD)
- Form validation for required fields and numeric values
- Book status: Available / Issued
- Responsive dashboard UI
- REST API with Express and MongoDB
- Clear loading and error messages

## Requirements
- Node.js 18+ (recommended)
- npm
- MongoDB local installation or a MongoDB Atlas connection string

## Project structure
```text
library-management-system/
├── backend/
│   ├── models/Book.js
│   ├── routes/books.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
└── frontend/
    ├── src/
    │   ├── App.jsx
    │   ├── App.css
    │   ├── main.jsx
    │   └── api.js
    ├── index.html
    ├── vite.config.js
    └── package.json
```

## 1. Configure the backend
Open a terminal in the `backend` folder:

```bash
npm install
```

Copy `.env.example` to `.env` and update the MongoDB connection string if needed.

Windows PowerShell:
```powershell
Copy-Item .env.example .env
```

Example `.env`:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/library_management
```

If you use MongoDB Atlas, replace `MONGO_URI` with your Atlas connection string.

Start the backend:
```bash
npm run dev
```

The API runs at `http://localhost:5000`.
Health check: `http://localhost:5000/api/health`

## 2. Start the frontend
Open a second terminal in the `frontend` folder:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## API endpoints
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/books` | Get all books (optional `?search=term`) |
| GET | `/api/books/:id` | Get one book |
| POST | `/api/books` | Add a book |
| PUT | `/api/books/:id` | Update a book |
| DELETE | `/api/books/:id` | Delete a book |

## Common issues
- **MongoDB connection error:** Make sure MongoDB is running, or check your Atlas URI and network access.
- **Port already in use:** Change `PORT` in `backend/.env`.
- **Frontend cannot reach API:** Keep the backend running on port 5000. If you change it, update `VITE_API_URL` in `frontend/.env`.
- **No books shown:** Add a book using the form. The database starts empty.

## Submission checklist
- [ ] Run backend and frontend
- [ ] Add at least two sample books
- [ ] Test edit and delete
- [ ] Capture a screenshot of the working app
- [ ] Push the project folder to GitHub
