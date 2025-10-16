const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// 👉 Root route — shows "Hello" in browser
app.get('/', (req, res) => {
  res.send('Hello Welcome');
});

// Sample data
let books = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 2, title: "Atomic Habits", author: "James Clear" },
  { id: 3, title: "Wings of Fire", author: "A.P.J Abdul Kalam" }
];

// 👉 GET all books
app.get('/books', (req, res) => {
  res.json(books);
});

// 👉 POST add a new book
app.post('/books', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.json(newBook);
});

// 👉 PUT update a book by ID
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  books[index] = { ...books[index], ...req.body };
  res.json(books[index]);
});

// 👉 DELETE a book by ID
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  const deleted = books.splice(index, 1);
  res.json(deleted[0]);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});












/*

---

## ⚙️ Step 1: Save and Run the Server

1. **Save** your file as `server.js` (for example).
2. Open **Terminal / Command Prompt** in the same folder.
3. Run:

   ```bash
   npm init -y
   npm install express body-parser cors
   node server.js
   ```
4. You should see:

   ```
   Server running at http://localhost:3000
   ```



### 🔹 **1. GET all books**

**Request type:** `GET`
**URL:** `http://localhost:3000/books`



### 🔹 **2. POST (Add a book)**

**Request type:** `POST`
**URL:** `http://localhost:3000/books`

**Steps:**

* Choose `POST`.
* Go to **Body → raw → JSON**.
* Paste:

  ```json
  {
    "id": 4,
    "title": "Rich Dad Poor Dad",
    "author": "Robert Kiyosaki"
  }
  ```
* Click **Send**.


### 🔹 **3. PUT (Update a book)**

**Request type:** `PUT`
**URL:** `http://localhost:3000/books/2`

**Steps:**

* Choose `PUT`.
* Body → raw → JSON.
* Paste:

  ```json
  {
    "author": "James Clear (Updated)"
  }
  ```
* Click **Send**.


### 🔹 **4. DELETE (Remove a book)**

**Request type:** `DELETE`
**URL:** `http://localhost:3000/books/3`



*/
