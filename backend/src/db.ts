export type TaskStatus = "todo" | "in-progress" | "done";

export type Task = {
  id: number;
  title: string;
  userId: number;
  status: TaskStatus;
};

export const tasks: Task[] = [
  { id: 1, title: "Prepare interview", userId: 1, status: "done" },
  { id: 2, title: "Build backend", userId: 1, status: "in-progress" },
  { id: 3, title: "Write tests", userId: 1, status: "done" },
  { id: 4, title: "Review task", userId: 2, status: "todo" },
];