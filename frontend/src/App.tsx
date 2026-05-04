import { useState } from "react";
import "./App.css";

type TaskStatus = "todo" | "in-progress" | "done";

function App() {
  const [userId, setUserId] = useState("1");
  const [status, setStatus] = useState<TaskStatus>("done");
  const [count, setCount] = useState<number | null>(null);
  const [error, setError] = useState("");

  const fetchTaskCount = async () => {
    setError("");
    setCount(null);

    try {
      const response = await fetch(
        `/api/tasks/count?userId=${userId}&status=${status}`
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      setCount(data.count);
    } catch {
      setError("Failed to fetch task count");
    }
  };

  return (
    <main>
      <h1>Task Counter</h1>

      <label>
        User ID
        <input
          aria-label="User ID"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        />
      </label>

      <label>
        Status
        <select
          aria-label="Status"
          value={status}
          onChange={(event) => setStatus(event.target.value as TaskStatus)}
        >
          <option value="todo">Todo</option>
          <option value="in-progress">In progress</option>
          <option value="done">Done</option>
        </select>
      </label>

      <button onClick={fetchTaskCount}>Get task count</button>

      {count !== null && <p>Task count: {count}</p>}
      {error && <p role="alert">{error}</p>}
    </main>
  );
}

export default App;