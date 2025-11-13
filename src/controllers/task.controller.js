import { Task } from "../models/task.model.js";

// GET all tasks
export const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// CREATE new task
export const createTask = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const task = await Task.create({ title });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET task by ID
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json(task);
  } catch (error) {
    res.status(400).json({ message: "Invalid ID format" });
  }
};

// UPDATE task
export const updateTask = async (req, res) => {
  try {
    const { title, completed } = req.body;

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title, completed },
      { new: true }
    );

    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json(task);
  } catch (error) {
    res.status(400).json({ message: "Invalid ID format" });
  }
};

// DELETE task
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json({ message: "Task deleted", deletedTask: task });
  } catch (error) {
    res.status(400).json({ message: "Invalid ID format" });
  }
};
