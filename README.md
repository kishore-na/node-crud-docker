# 📦 Node CRUD API (Node.js + Express + MongoDB + Docker)

A clean and production-ready CRUD API built using:

- Node.js
- Express.js
- MongoDB
- Mongoose
- Docker & Docker Compose

This project demonstrates how to build and containerize a backend API with a real MongoDB database running inside Docker.

---

## 🚀 Features

- Create tasks
- Get all tasks
- Get task by ID
- Update tasks
- Delete tasks
- MongoDB via Docker container
- REST API architecture
- Clean MVC folder structure
- Uses environment variables via `.env`

---

## 📂 Folder Structure

node-crud-docker/
│
├── src/
│ ├── app.js
│ ├── config/
│ │ └── database.js
│ ├── controllers/
│ ├── models/
│ ├── routes/
│
├── Dockerfile
├── docker-compose.yml
├── package.json
├── .gitignore
└── README.md


---

## 🐳 Run the App Using Docker (Recommended)

This project is fully containerized.  
You can run both backend + MongoDB with one command.
