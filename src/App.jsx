import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import FileSharing from './src/components/RealTimeCollab/FileSharing';
import RealTimeEditor from './src/components/RealTimeCollab/RealTimeEditor';
import VideoCall from './src/components/RealTimeCollab/VideoCall';
import TimeTracker from './src/components/Productivity/TimeTracker';
import PomodoroTimer from './src/components/Productivity/PomodoroTimer';
import DailyStandup from './src/components/Productivity/DailyStandup';
import TaskTracker from './src/components/TGamification/askTracker';
import Leaderboard from './src/components/Gamification/Leaderboard';
import Badges from './src/components/Gamification/Badges';
import { TaskProvider } from '/src/components/TaskManagement/Context/TaskContext';
import TaskForm from './src/components/TaskManagement/TaskForm';
import TaskList from '../src/components/TaskManagement/TaskList';
import KanbanBoard from './src/components/TaskManagement/KanbanBoard';

const App = () => {
  return (
    <div>
      <FileSharing />
      <RealTimeEditor />
      <VideoCall />
      <TimeTracker />
      <PomodoroTimer />
      <DailyStandup />
      <TaskTracker />
      <Leaderboard />
      <Badges />
      <TaskProvider>
      <Router>
        <div>
          <h1>Task Management System</h1>
          <TaskForm />
          <Routes>
            <Route path="/kanban" element={<KanbanBoard />} />
            <Route path="/" element={<TaskList />} />
          </Routes>
        </div>
      </Router>
    </TaskProvider>
    </div>
  );
};

export default App;
