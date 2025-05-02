import { FC } from 'react';
import DesktopTable from '../../../Commons/DesktopTable.tsx';
import {TableRow, TableHeader, TableCell, TableCellPriority } from '../../../Commons/StyledCommons/StyledDesktopTable.ts';
import TaskInterface from '../../../Interface/TaskInterface';

interface DesktopTableProps {
    userTasks: TaskInterface[] | undefined;
}
const DesktopTableComponent: FC<DesktopTableProps> = ({ userTasks }) => {
  const headerContent = () => {
    return (
      <>
        <TableHeader>Task Name</TableHeader>
        <TableHeader>Priority</TableHeader>
        <TableHeader>Progress</TableHeader>
        <TableHeader>Due Date</TableHeader>
      </>
    )
  }

  const bodyContent = () => {
    return (
      <>
        {userTasks &&
          userTasks.map((task) => {
            return (
              <TableRow key={task.id}>
                <TableCell>{task.taskName}</TableCell>
                <TableCell>
                  <TableCellPriority priority={task.taskPriority as 'LOW' | 'MEDIUM' | 'HIGH'}>{task.taskPriority}</TableCellPriority>
                </TableCell>
                <TableCell>{task.taskProgress}</TableCell>
                <TableCell>
                  {new Date(task.taskDueDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </TableCell>
              </TableRow>
            )
          })}
      </>
    );
  };

  return (
    <DesktopTable headerContent={headerContent()} bodyContent={bodyContent()} />
  );
};

export default DesktopTableComponent;
