import { FC } from 'react';
import {TableRow, TableHeader, TableCell, TableCellPriority } from '../Styled-Components/StyledTable';
import TaskInterface from '../../../Interface/TaskInterface';
import Table from '../../../Commons/Table.tsx';
interface MobileTableProps {
    userTasks: TaskInterface[] | undefined;
}
const MobileTable: FC<MobileTableProps> = ({ userTasks }) => {
  const headerContent = () => {
    return (
      <>
        <TableHeader>Task Name</TableHeader>
        <TableHeader>Priority</TableHeader>
        <TableHeader>Due Date</TableHeader>
      </>
    );
  };

  const bodyContent = () => {
    return (
      <>
      {userTasks && userTasks.map((task) => {
            return (
              <TableRow key={task.id}>
                <TableCell>{task.taskName}</TableCell>
                <TableCell><TableCellPriority priority={task.taskPriority as 'LOW' | 'MEDIUM' | 'HIGH'}>{task.taskPriority}</TableCellPriority></TableCell>
                <TableCell>
                  {new Date(task.taskDueDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </TableCell>
              </TableRow>
            );
          })}

      </>
    );
  };

  return (
    <Table headerContent={headerContent()} bodyContent={bodyContent()} />
  );
};

export default MobileTable;
