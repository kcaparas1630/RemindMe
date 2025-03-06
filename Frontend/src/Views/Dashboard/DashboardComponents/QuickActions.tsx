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

const QuickActions: FC<isDarkMode> = ({ isDarkMode }) => {

  return (
    <CardLayout title="Quick Actions" isDarkMode={isDarkMode}>
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
