import { FC } from 'react';
import DesktopTable from '../../../Commons/DesktopTable';
import {TableRow, TableHeader, TableCell, TableCellPriority } from '../../../Commons/StyledCommons/StyledDesktopTable';
import TaskInterface from '../../../Interface/TaskInterface.ts';
import { DataCellActions } from '../../../Commons/StyledCommons/StyledMobileTable';
import Button from '../../../Commons/Button.tsx';
import isDarkMode from '../../../Interface/General/isDarkMode.ts';
import TaskFormSection from './TaskFormSection.tsx';
import { useQueryClient } from '@tanstack/react-query';

interface DesktopTableProps extends isDarkMode {
    userTasks: TaskInterface[] | undefined;
    userName: string;
    // eslint-disable-next-line no-unused-vars
    handleEditClick: (task: TaskInterface) => void;
    handleCancelClick: () => void;
    editingTaskId: number | null;
}
const DesktopTableTaskComponent: FC<DesktopTableProps> = ({ userTasks, isDarkMode, userName, handleEditClick, handleCancelClick, editingTaskId }) => {
  const queryClient = useQueryClient();

  const headerContent = () => {
    return (
      <>
        {editingTaskId === null && (
          <>
            <TableHeader>Task Name</TableHeader>
            <TableHeader>Priority</TableHeader>
            <TableHeader>Progress</TableHeader>
            <TableHeader>Due Date</TableHeader>
            <TableHeader>Actions</TableHeader>
          </>
        )}
      </>
    )
  }

  const bodyContent = () => {
    return (
      <>
        {userTasks &&
          userTasks.map((task) => {
            return (
              <>
                {editingTaskId === task.id ? (
                  <TaskFormSection isDarkMode={isDarkMode} onCancel={handleCancelClick} isEditing={true} userName={userName} queryClient={queryClient} task={task} />
                ) : (
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
                    <TableCell>
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
                          handleClick={() => {
                            handleCancelClick();
                          }}
                        >
                          Delete
                        </Button>
                      </DataCellActions>
                    </TableCell>
                  </TableRow>
                )}
              </>
            );
          })}
      </>
    );
  };

  return (
    <DesktopTable headerContent={headerContent()} bodyContent={bodyContent()} />
  );
};

export default DesktopTableTaskComponent;
