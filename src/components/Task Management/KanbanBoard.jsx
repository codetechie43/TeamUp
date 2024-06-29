import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskCard from './TaskCard';

const KanbanBoard = () => {
  const { state } = useContext(TaskContext);

  const stages = ['To Do', 'In Progress', 'Done'];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {stages.map(stage => (
        <div key={stage} style={{ margin: '10px', padding: '10px', border: '1px solid black' }}>
          <h2>{stage}</h2>
          {state.tasks
            .filter(task => task.stage === stage)
            .map(task => (
              <TaskCard key={task.id} task={task} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
