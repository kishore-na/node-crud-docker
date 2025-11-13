import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/database.js";
import taskRoutes from "./routes/task.routes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "API is healthy 💚" });
});

// Default route
app.get("/", (req, res) => {
  res.send("Task Manager API is running 🚀");
});

app.use("/tasks", taskRoutes);

// Port from env or fallback
const PORT = process.env.PORT || 3001;

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
