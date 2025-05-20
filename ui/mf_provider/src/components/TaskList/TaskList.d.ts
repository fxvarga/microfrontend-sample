import React from 'react';
import './TaskList.css';
type TaskStatus = 'not_started' | 'waiting' | 'started' | 'completed';
interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}
type TaskListProps = {
   tasks: Task[];
};
export declare const TaskList: React.FC<TaskListProps>;
export {};
