// src/components/TimeTracker.jsx
import React, { useState } from 'react';

const TimeTracker = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const handleTaskChange = (event) => {
    setCurrentTask(event.target.value);
  };

  const addTask = () => {
    if (currentTask.trim() !== '') {
      setTasks([...tasks, currentTask.trim()]);
      setCurrentTask('');
    }
  };

  return (
    <div>
      <h2>Time Tracking for Tasks</h2>
      <input type="text" value={currentTask} onChange={handleTaskChange} placeholder="Enter task" />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TimeTracker;
