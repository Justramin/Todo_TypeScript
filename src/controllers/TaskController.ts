import { Task, UrgentTask } from "../models/Task";

class TaskController {
  private tasks: Task[] = [];

  addTask(title: string, deadline?: Date): Task {
    const task = deadline ? new UrgentTask(title, deadline) : new Task(title);
    this.tasks.push(task);
    return task;
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  markTaskComplete(id: number): void {
    const task = this.tasks.find(task => task.id === id);
    if (task) task.markComplete();
  }
}

export default TaskController;
