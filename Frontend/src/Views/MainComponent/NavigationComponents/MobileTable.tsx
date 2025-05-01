import { FC } from 'react';
import {
  TableRow,
  TableHeader,
  TableCell,
  TableCellPriority,
  TableCellActionsGroup,
} from '../../../Commons/StyledCommons/StyledTable.ts';
import TaskInterface from '../../../Interface/TaskInterface';
import Table from '../../../Commons/Table.tsx';
import Button from '../../../Commons/Button.tsx';
import { EditIcon, TrashIcon } from 'lucide-react';
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
        <TableHeader>Actions</TableHeader>
      </>
    );
  };

  const bodyContent = () => {
    return (
      <>
        {userTasks &&
          userTasks.map((task) => {
            return (
              <TableRow key={task.id}>
                <TableCell>{task.taskName}</TableCell>
                <TableCell>
                  <TableCellPriority priority={task.taskPriority as 'LOW' | 'MEDIUM' | 'HIGH'}>
                    {task.taskPriority}
                  </TableCellPriority>
                </TableCell>
                <TableCell>
                  {new Date(task.taskDueDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </TableCell>
                <TableCell>
                  <TableCellActionsGroup>
                    <Button
                      name="Edit"
                      type="button"
                      disabled={false}
                      isDarkMode={false}
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      name="Delete"
                      type="button"
                      disabled={false}
                      isDarkMode={false}
                    >
                      <TrashIcon />
                    </Button>
                  </TableCellActionsGroup>
                </TableCell>
              </TableRow>
            );
          })}
      </>
    );
  };

  return (
    <Table
      headerContent={headerContent()}
      bodyContent={bodyContent()}
    />
  );
};

export default MobileTable;
