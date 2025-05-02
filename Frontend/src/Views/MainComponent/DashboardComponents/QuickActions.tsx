import { FC } from 'react';
import { OverviewContainer, OverviewHeader, QuickActionsButtonContainer, QuickActionsButtonGroup } from '../Styled-Components/StyledOverview';
import Button from '../../../Commons/Button';
import isDarkMode from '../../../Interface/General/isDarkMode';
import { useNavigate } from 'react-router-dom';


const QuickActions: FC<isDarkMode> = ({ isDarkMode }) => {
  const navigate = useNavigate();

  const navigateToAddTask = () => {
    navigate('/main/addTasks');
  }

  const navigateToCalendar = () => {
    //eslint-disable-next-line no-console
    console.log('Calendar'); // TODO: Add calendar functionality
    // navigate('/main/calendar');
  }

  const navigateToSettings = () => {
    //eslint-disable-next-line no-console
    console.log('Settings'); // TODO: Add settings functionality
    // navigate('/main/settings');
  }
    return (
        <OverviewContainer>
            <OverviewHeader isDarkMode={isDarkMode}>Quick Actions</OverviewHeader>
            <QuickActionsButtonContainer>
              <QuickActionsButtonGroup>
                <Button type="button"  isDarkMode={isDarkMode} name="Add Task" handleClick={navigateToAddTask} disabled={false} >
                    Add Task
                </Button>
                <Button type="button" isDarkMode={isDarkMode} name="Calendar" handleClick={navigateToCalendar} disabled={false} >
                    Calendar
                </Button>
                <Button type="button" isDarkMode={isDarkMode} name="Settings" handleClick={navigateToSettings} disabled={false} >
                    Settings
                </Button>
              </QuickActionsButtonGroup>
            </QuickActionsButtonContainer>
        </OverviewContainer>
    )
}

export default QuickActions;
