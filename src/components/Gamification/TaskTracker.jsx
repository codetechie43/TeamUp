// src/components/TaskTracker.jsx
import React, { useState } from 'react';

const TaskTracker = () => {
  const [tasks, setTasks] = useState([]);
  const [points, setPoints] = useState(0);

  const addTask = () => {
    // Implement task addition logic
    // Example: This function would add a task and update points accordingly
    setTasks([...tasks, { name: 'Example Task', points: 10 }]);
    setPoints(points + 10);
  };

  return (
    <div>
      <h2>Task Tracker</h2>
      <button onClick={addTask}>Add Task</button>
      <div>Points: {points}</div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.name} - Points: {task.points}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskTracker;
