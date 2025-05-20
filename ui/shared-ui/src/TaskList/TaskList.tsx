import React from 'react';
import './TaskList.css';

type TaskStatus = 'not_started' | 'waiting' | 'started' | 'completed';

interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}

interface TaskListProps {
  tasks: Task[];
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const completedCount = tasks.filter(task => task.status === 'completed').length;
  const progressPercent = Math.round((completedCount / tasks.length) * 100);

  return (
    <div className="task-list-container">
      <div className="task-header">
        <span className="task-title">Search Actors</span>
        <span className="task-progress">{progressPercent}%</span>
      </div>
      <div className="task-progress-bar">
        <div className="task-progress-filled" style={{ width: `${progressPercent}%` }} />
      </div>

      <ul className="task-items">
        {tasks.map(task => (
          <li key={task.id} className={`task-item ${task.status}`}>
            <span className="task-checkmark">
              {task.status === 'completed' && '✓'}
              {task.status === 'started' && '⏳'}
              {task.status === 'not_started' && '…'}
            </span>
            <span className="task-text">{task.title}</span>
          </li>
        ))}
      </ul>

      <div className="task-footer">VIEW COMPLETED TASKS</div>
    </div>
  );
};