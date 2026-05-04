import express from "express";
import { tasks, TaskStatus } from "./db";

export const app = express();

app.use(express.json());

const allowedStatuses: TaskStatus[] = ["todo", "in-progress", "done"];

app.get("/api/tasks/count", (req, res) => {
  const { userId, status } = req.query;

  if (!userId || !status) {
    return res.status(400).json({
      error: "userId and status are required",
    });
  }

  const parsedUserId = Number(userId);

  if (Number.isNaN(parsedUserId)) {
    return res.status(400).json({
      error: "userId must be a number",
    });
  }

  if (!allowedStatuses.includes(status as TaskStatus)) {
    return res.status(400).json({
      error: "Invalid status",
    });
  }

  const count = tasks.filter(
    (task) => task.userId === parsedUserId && task.status === status
  ).length;

  return res.json({
    userId: parsedUserId,
    status,
    count,
  });
});