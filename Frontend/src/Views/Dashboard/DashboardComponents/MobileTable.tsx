import { FC } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableHeader, TableCell, TableBody, TableCellPriority } from '../Styled-Components/StyledTable';
import TaskInterface from '../../../Interface/TaskInterface';

interface MobileTableProps {
    userTasks: TaskInterface[] | undefined;
}
const MobileTable: FC<MobileTableProps> = ({ userTasks }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Task Name</TableHeader>
            <TableHeader>Priority</TableHeader>
            <TableHeader>Due Date</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
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
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MobileTable;
