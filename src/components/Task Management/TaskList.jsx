import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskCard from './TaskCard';

const TaskList = () => {
  const { state } = useContext(TaskContext);

  return (
    <div>
      {state.tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
