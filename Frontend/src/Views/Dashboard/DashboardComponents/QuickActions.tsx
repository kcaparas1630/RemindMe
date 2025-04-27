import { FC } from 'react';
import CardLayout from '../../../Commons/CardLayout';
import { Plus } from 'lucide-react';
import {
  QuickActionsContainer,
  QuickActionsItem,
  QuickActionsItemIcon,
  QuickActionsItemText,
} from '../Styled-Components/QuickActions';
import isDarkMode from '../../../Interface/General/isDarkMode';
import { Dispatch, SetStateAction } from 'react';
import { CardLayoutRightItemButton } from '../../../Commons/StyledCommons/StyledCard';

interface QuickActionsProps extends isDarkMode {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
const QuickActions: FC<QuickActionsProps> = ({ isDarkMode, setIsModalOpen }) => {
  const handleAddGoal = () => {
    setIsModalOpen(true);
  };
  const plusIconButton = (
    <CardLayoutRightItemButton
      isDarkMode={isDarkMode}
      type="button"
      name="Add Quick Action"
      disabled={false}
      onClick={handleAddGoal}
    >
      <Plus size={24} />
    </CardLayoutRightItemButton>
  );
  return (
    <CardLayout
      title="Quick Actions"
      isDarkMode={isDarkMode}
      rightItem={plusIconButton}
    >
      <QuickActionsContainer>
        <QuickActionsItem isDarkMode={isDarkMode}>
          <QuickActionsItemText>Add Task</QuickActionsItemText>
          <QuickActionsItemIcon>
            <Plus />
          </QuickActionsItemIcon>
        </QuickActionsItem>
        <QuickActionsItem isDarkMode={isDarkMode}>
          <QuickActionsItemText>Add Task</QuickActionsItemText>
          <QuickActionsItemIcon>
            <Plus />
          </QuickActionsItemIcon>
        </QuickActionsItem>
        <QuickActionsItem isDarkMode={isDarkMode}>
          <QuickActionsItemText>Add Task</QuickActionsItemText>
          <QuickActionsItemIcon>
            <Plus />
          </QuickActionsItemIcon>
        </QuickActionsItem>
      </QuickActionsContainer>
    </CardLayout>
  );
};

export default QuickActions;
