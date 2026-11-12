const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let books = [];
let nextId = 1;

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Library API is running" });
});

app.get("/api/books", (req, res) => res.json(books));

app.post("/api/books", (req, res) => {
  const { title, author, isbn, category, status } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: "Title and author are required" });
  }
  const book = {
    _id: String(nextId++), title, author,
    isbn: isbn || "", category: category || "",
    status: status || "Available"
  };
  books.push(book);
  res.status(201).json(book);
});

app.put("/api/books/:id", (req, res) => {
  const index = books.findIndex(b => b._id === req.params.id);
  if (index === -1) return res.status(404).json({ message: "Book not found" });
  books[index] = { ...books[index], ...req.body, _id: req.params.id };
  res.json(books[index]);
});

app.delete("/api/books/:id", (req, res) => {
  const oldLength = books.length;
  books = books.filter(b => b._id !== req.params.id);
  if (books.length === oldLength) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.json({ message: "Book deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Library API running at http://localhost:${PORT}`);
});
