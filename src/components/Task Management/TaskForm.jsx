import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskForm = () => {
  const { dispatch } = useContext(TaskContext);
  const [task, setTask] = useState({ title: '', deadline: '', priority: 'Low', stage: 'To Do' });

  const handleChange = e => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_TASK', payload: { ...task, id: Date.now() } });
    setTask({ title: '', deadline: '', priority: 'Low', stage: 'To Do' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={task.title}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="deadline"
        value={task.deadline}
        onChange={handleChange}
        required
      />
      <select name="priority" value={task.priority} onChange={handleChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
