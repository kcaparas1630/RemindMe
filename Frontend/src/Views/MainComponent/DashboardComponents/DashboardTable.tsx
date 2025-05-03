import { FC } from 'react';
import {
  TableRow,
  TableHeader,
  TableCell,
  TableCellPriority,
} from '../../../Commons/StyledCommons/StyledDesktopTable.ts';
import {
  DataRow,
  DataCellHeader,
  DataCell,
  MobileDivider,
} from '../../../Commons/StyledCommons/StyledMobileTable';
import TaskInterface from '../../../Interface/TaskInterface.ts';
import TableLayout from '../../../types/ViewLayoutTypes.ts';
import Table from '../../../Commons/Table.tsx';

interface DashboardTableProps {
  userTasks: TaskInterface[] | undefined;
  variant: TableLayout;
}
const DashboardTable: FC<DashboardTableProps> = ({ userTasks, variant }) => {
  const headerContent = () => {
    return (
      <>
        <TableHeader>Task Name</TableHeader>
        <TableHeader>Priority</TableHeader>
        <TableHeader>Progress</TableHeader>
        <TableHeader>Due Date</TableHeader>
      </>
    );
  };

  const bodyContent = () => {
    return (
      <>
        {userTasks &&
          userTasks.map((task, index) => {
            return variant === 'desktop' ? (
              <TableRow key={task.id}>
                <TableCell>{task.taskName}</TableCell>
                <TableCell>
                  <TableCellPriority priority={task.taskPriority as 'LOW' | 'MEDIUM' | 'HIGH'}>
                    {task.taskPriority}
                  </TableCellPriority>
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
            ) : variant === 'mobile' ? (
              <div key={task.id}>
                <DataRow>
                  <DataCellHeader>Task Name</DataCellHeader>
                  <DataCell>{task.taskName}</DataCell>
                </DataRow>
                <DataRow>
                  <DataCellHeader>Priority</DataCellHeader>
                  <DataCell>
                    <TableCellPriority priority={task.taskPriority as 'LOW' | 'MEDIUM' | 'HIGH'}>
                      {task.taskPriority}
                    </TableCellPriority>
                  </DataCell>
                </DataRow>
                <DataRow>
                  <DataCellHeader>Due Date</DataCellHeader>
                  <DataCell>
                    {new Date(task.taskDueDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </DataCell>
                </DataRow>
                {index !== userTasks.length - 1 && <MobileDivider />}
              </div>
            ) : (
              <div>Invalid Layout. Only 'desktop' or 'mobile' are allowed.</div>
            );
          })}
      </>
    );
  };

  return (
    <Table
      headerContent={headerContent()}
      bodyContent={bodyContent()}
      layout={variant}
    />
  );
};

export default DashboardTable;
