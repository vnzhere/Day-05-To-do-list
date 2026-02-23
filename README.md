# Day-05-To-do-list

# 📝 To-Do List Web App

A simple and responsive To-Do List application built using **HTML, CSS, and JavaScript**.  
This app allows users to add, delete, and mark tasks as completed.  
It also uses **localStorage** to save tasks even after refreshing the page.

---

## 🚀 Features

- ➕ Add new tasks
- ✅ Mark tasks as completed
- ❌ Delete tasks
- 💾 Data persistence using localStorage
- 📱 Fully responsive design
- 🎨 Clean and modern UI with gradient background

---

## 🛠️ Tech Stack

- **HTML5** – Structure
- **CSS3** – Styling & Layout (Flexbox)
- **JavaScript (ES6)** – Functionality & DOM manipulation
- **LocalStorage API** – Data persistence

---

## 📂 Project Structure

todo-app/
│
├── index.html   # Main structure
├── style.css    # Styling
└── script.js    # Application logic


## ⚙️ How It Works

1. User enters a task in the input field.
2. Clicking the **Add** button:
   - Creates a new list item dynamically.
   - Adds event listeners for completion and deletion.
   - Saves task to localStorage.
3. When the page loads:
   - Tasks are retrieved from localStorage.
   - List is rebuilt dynamically.
4. Clicking a task toggles its completed state.
5. Clicking the delete button removes the task and updates storage.

---

## 🧠 Concepts Used

- DOM Manipulation
- Event Handling
- Dynamic Element Creation
- Class Toggling
- JSON.stringify() & JSON.parse()
- Browser Local Storage
- Responsive Design using Flexbox