import React, { useState } from "react";

function TaskForm({ onAddTask }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("medium");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTask(text, priority);
      setText("");
      setPriority("medium");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="priority-select"
      >
        <option value="low" className="low-priority">
          Low
        </option>
        <option value="medium" className="medium-priority">
          Medium
        </option>
        <option value="high" className="high-priority">
          High
        </option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
