import { FC } from 'react';
import CardLayout from '../../../Commons/CardLayout';
import isDarkMode from '../../../Interface/General/isDarkMode';

const Goals: FC<isDarkMode> = ({ isDarkMode }) => {
    console.log('Goals', isDarkMode);
    return (
        <CardLayout title="Goals" isDarkMode={isDarkMode}>
            <div>
                <h1>Goals</h1>
            </div>
        </CardLayout>
    );
};

export default Goals;
