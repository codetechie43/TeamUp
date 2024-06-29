import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskCard = ({ task }) => {
  const { dispatch } = useContext(TaskContext);

  const handleDelete = () => {
    dispatch({ type: 'DELETE_TASK', payload: task.id });
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>Deadline: {task.deadline}</p>
      <p>Priority: {task.priority}</p>
      <p>Stage: {task.stage}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskCard;
