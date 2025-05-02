import { FC } from 'react';
import TaskInterface from '../../../Interface/TaskInterface';
import MobileTableComponent from '../../../Commons/MobileTableComponent';
import {
  DataRow,
  DataCellHeader,
  DataCell,
  DataCellActions
} from '../../../Commons/StyledCommons/StyledMobileTable';
import { TableCellPriority } from '../../../Commons/StyledCommons/StyledDesktopTable.ts';
import Button from '../../../Commons/Button.tsx';
import { EditIcon, TrashIcon } from 'lucide-react';
import isDarkMode from '../../../Interface/General/isDarkMode.ts';

interface MobileTableProps extends isDarkMode {
  userTasks: TaskInterface[] | undefined;
}
const MobileTable: FC<MobileTableProps> = ({ userTasks, isDarkMode }) => {
  const tableContent = () => {
    return (
      <>
        {userTasks &&
          userTasks.map((task) => {
            return (
              <div key={task.id}>
                <DataRow>
                  <DataCellHeader>Task Name</DataCellHeader>
                  <DataCell>{task.taskName}</DataCell>
                </DataRow>
                <DataRow>
                  <DataCellHeader>Priority</DataCellHeader>
                  <DataCell>
                    <TableCellPriority priority={task.taskPriority as 'LOW' | 'MEDIUM' | 'HIGH'}>{task.taskPriority}</TableCellPriority>
                  </DataCell>
                </DataRow>

                <DataRow>
                  <DataCellHeader>Due Date</DataCellHeader>
                  <DataCell>{new Date(task.taskDueDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}</DataCell>
                </DataRow>

                <DataRow>
                  <DataCellHeader>Actions</DataCellHeader>
                  <DataCellActions>
                    <Button
                      isDarkMode={isDarkMode}
                      name="Edit"
                      type="button"
                      bgType='transparent'
                      disabled={false}
                    >
                      Edit
                    </Button>
                    <Button
                      isDarkMode={isDarkMode}
                      name="Delete"
                      type="button"
                      bgType='transparent'
                      disabled={false}
                    >
                      Delete
                    </Button>
                  </DataCellActions>
                </DataRow>
              </div>
            );
          })}
      </>
    );
  };
  return <MobileTableComponent content={tableContent()} />;
};

export default MobileTable;
