import { FC, useState } from 'react';
import {
    DataRow,
    DataCellHeader,
    DataCell,
    DataCellActions,
    MobileDivider
    
  } from '../../../Commons/StyledCommons/StyledMobileTable';
  
import { TableCellPriority, TableHeader,  TableRow, TableCell } from '../../../Commons/StyledCommons/StyledDesktopTable';
import Button from '../../../Commons/Button';
import isDarkMode from '../../../Interface/General/isDarkMode';
import TaskFormSection from './TaskFormSection';
import { useQueryClient } from '@tanstack/react-query';
import TaskInterface from '../../../Interface/TaskInterface.ts';
import TableLayout from '../../../types/ViewLayoutTypes.ts';
import Table from '../../../Commons/Table';
import Modal from '../../../Commons/Modal';
interface TaskTableProps extends isDarkMode {
    userTasks: TaskInterface[] | undefined;
    userName: string;
    variant: TableLayout;
}

const TaskTable: FC<TaskTableProps> = ({ userTasks, isDarkMode, userName, variant }) => {
    const queryClient = useQueryClient();

    const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
    const [, setEditValues] = useState<{
      taskName: string;
      taskPriority: 'LOW' | 'MEDIUM' | 'HIGH';
      taskDueDate: Date;
    }>({ taskName: '', taskPriority: 'LOW', taskDueDate: new Date() });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTask, setModalTask] = useState<TaskInterface | null>(null);

    const handleEditClick = (task: TaskInterface) => {
      setEditingTaskId(task.id);
      setEditValues({
        taskName: task.taskName,
        taskPriority: task.taskPriority as 'LOW' | 'MEDIUM' | 'HIGH',
        taskDueDate: task.taskDueDate,
      });
      setModalTask(task);
      setIsModalOpen(true);
    };
  
    const handleCancelClick = () => {
      setEditingTaskId(null);
    };
   
    const headerContent = () => {
        return (
            <>
        <TableHeader>Task Name</TableHeader>
        <TableHeader>Priority</TableHeader>
        <TableHeader>Progress</TableHeader>
        <TableHeader>Due Date</TableHeader>
        <TableHeader>Actions</TableHeader>
      </>
        )
    }
    const handleModalClose = () => {
        setIsModalOpen(false);
        setModalTask(null);
    };

    const bodyContent = () => {
        return (
            <>
            {userTasks && userTasks.map((task, index) => {
                return (
                    variant === 'desktop' ? (
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
                        >
                          Delete
                        </Button>
                            </DataCellActions>
                        </TableCell>
                      </TableRow>
                    ): variant === 'mobile' ? (
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
                ): <div>Invalid Layout. Only 'desktop' or 'mobile' are allowed.</div>
                )
            })}
            </>
        )
    }
    return (
        <>
            <Table
                headerContent={headerContent()}
                bodyContent={bodyContent()}
                layout={variant}
            />
            {modalTask && (
                <Modal isOpen={isModalOpen} isDarkMode={isDarkMode} setIsOpen={setIsModalOpen}>
                    <TaskFormSection
                        isDarkMode={isDarkMode}
                        onCancel={handleModalClose}
                        isEditing={true}
                        userName={userName}
                        queryClient={queryClient}
                        task={modalTask}
                    />
                </Modal>
            )}
        </>
    )
};

export default TaskTable;
