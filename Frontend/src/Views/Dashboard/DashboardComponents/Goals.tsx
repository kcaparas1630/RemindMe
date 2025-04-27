import { Dispatch, FC, SetStateAction } from 'react';
import CardLayout from '../../../Commons/CardLayout';
import isDarkMode from '../../../Interface/General/isDarkMode';
import { Plus } from 'lucide-react';
import { CardLayoutRightItemButton } from '../../../Commons/StyledCommons/StyledCard';

interface GoalsProps extends isDarkMode {
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
const Goals: FC<GoalsProps> = ({ isDarkMode, setIsModalOpen }) => {
    const handleAddGoal = () => {
        setIsModalOpen(true);
    }
    const plusIconButton = 
    <CardLayoutRightItemButton isDarkMode={isDarkMode} type="button" name="Add Goal" disabled={false} onClick={handleAddGoal}>
        <Plus size={24} />
    </CardLayoutRightItemButton>
    return (
        <CardLayout title="Goals" isDarkMode={isDarkMode} rightItem={plusIconButton}>
            <div>
                <h1>Goals</h1>
            </div>
        </CardLayout>
    );
};

export default Goals;
