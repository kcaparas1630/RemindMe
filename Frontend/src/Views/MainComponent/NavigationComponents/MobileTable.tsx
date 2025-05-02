import { FC, useState } from 'react';
import TaskInterface from '../../../Interface/TaskInterface';
import MobileTableComponent from '../../../Commons/MobileTableComponent';
import {
  DataRow,
  DataCellHeader,
  DataCell,
  DataCellActions,
} from '../../../Commons/StyledCommons/StyledMobileTable';
import { TableCellPriority } from '../../../Commons/StyledCommons/StyledDesktopTable.ts';
import Button from '../../../Commons/Button.tsx';
import isDarkMode from '../../../Interface/General/isDarkMode.ts';
import TaskFormSection from './TaskFormSection.tsx';
import { useQueryClient } from '@tanstack/react-query';
interface MobileTableProps extends isDarkMode {
  userTasks: TaskInterface[] | undefined;
  userName: string;
}
const MobileTable: FC<MobileTableProps> = ({ userTasks, isDarkMode, userName }) => {
  const queryClient = useQueryClient();
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [, setEditValues] = useState<{
    taskName: string;
    taskPriority: 'LOW' | 'MEDIUM' | 'HIGH';
    taskDueDate: Date;
  }>({ taskName: '', taskPriority: 'LOW', taskDueDate: new Date() });

  const handleEditClick = (task: TaskInterface) => {
    setEditingTaskId(task.id);
    setEditValues({
      taskName: task.taskName,
      taskPriority: task.taskPriority as 'LOW' | 'MEDIUM' | 'HIGH',
      taskDueDate: task.taskDueDate,
    });
  };

  const handleCancelClick = () => {
    setEditingTaskId(null);
  };

  const tableContent = () => {
    return (
      <>
        {userTasks &&
          userTasks.map((task) => {
            return (
              <div key={task.id}>
                {editingTaskId === task.id ? (
                  <TaskFormSection isDarkMode={isDarkMode} onCancel={handleCancelClick} isEditing={true} userName={userName} queryClient={queryClient} task={task} />
                ) : (
                  <>
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
                    <DataRow>
                      <DataCellHeader>Actions</DataCellHeader>
                      <DataCellActions>
                        <Button
                          isDarkMode={isDarkMode}
                          name="Edit"
                          type="button"
                          bgType="transparent"
                          disabled={false}
                          handleClick={() => {
                            handleEditClick(task);
                          }}
                        >
                          Edit
                        </Button>
                        <Button
                          isDarkMode={isDarkMode}
                          name="Delete"
                          type="button"
                          bgType="transparent"
                          disabled={false}
                        >
                          Delete
                        </Button>
                      </DataCellActions>
                    </DataRow>
                  </>
                )}
              </div>
            );
          })}
      </>
    );
  };
  return <MobileTableComponent content={tableContent()} />;
};

export default MobileTable;
