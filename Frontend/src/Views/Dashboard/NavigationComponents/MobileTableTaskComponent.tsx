import { FC } from 'react';
import TaskInterface from '../../../Interface/TaskInterface.ts';
import {
  DataRow,
  DataCellHeader,
  DataCell,
  DataCellActions,
  MobileDivider
} from '../../../Commons/StyledCommons/StyledMobileTable.ts';
import { TableCellPriority } from '../Styled-Components/StyledTable.ts';
import Button from '../../../Commons/Button.tsx';
import isDarkMode from '../../../Interface/General/isDarkMode.ts';
import TaskFormSection from './TaskFormSection.tsx';
import { useQueryClient } from '@tanstack/react-query';
import ReusableMobileTableComponent from '../../../Commons/MobileTableComponent.tsx';
interface MobileTableProps extends isDarkMode {
  userTasks: TaskInterface[] | undefined;
  userName: string;
  // eslint-disable-next-line no-unused-vars
  handleEditClick: (task: TaskInterface) => void;
  handleCancelClick: () => void;
  editingTaskId: number | null;
}

const MobileTableTaskComponent: FC<MobileTableProps> = ({ userTasks, isDarkMode, userName, handleEditClick, handleCancelClick, editingTaskId }) => {
  const queryClient = useQueryClient();
  

  const tableContent = () => {
    return (
      <>
        {userTasks &&
          userTasks.map((task, index) => {
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
                {index !== userTasks.length - 1 && <MobileDivider />}
              </div>
            );
          })}
      </>
    );
  };
  return <ReusableMobileTableComponent content={tableContent()} />;
};

export default MobileTableTaskComponent;
