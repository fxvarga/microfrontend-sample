import React from 'react';
import { TaskList } from '@shared/ui';

const TaskComponent: React.FC<TaskListProps> = ({ tasks }) => {
  return (
      <TaskList tasks={tasks}/>
  );
};

export default TaskComponent;
