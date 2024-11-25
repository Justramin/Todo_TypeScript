import express from "express";
import TaskController from "../controllers/TaskController";

const router = express.Router();
const taskController = new TaskController();

// Get all tasks
router.get("/", (req, res) => {
  const tasks = taskController.getTasks();
  res.render("index", { tasks });
});

// Add a new task
router.post("/add", (req, res) => {
  const { title, deadline } = req.body;
  if (deadline) {
    taskController.addTask(title, new Date(deadline));
  } else {
    taskController.addTask(title);
  }
  res.redirect("/");
});

// Mark task complete
router.post("/complete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  taskController.markTaskComplete(id);
  res.redirect("/");
});

// Delete a task
router.post("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  taskController.deleteTask(id);
  res.redirect("/");
});

export default router;
