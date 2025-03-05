import { FC } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from '@emotion/styled';

const CircularProgressBarContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1a1a1a;
    border-radius: 8px;

    .CircularProgressbar {
        width: 80%;
        height: 80%;
    }

@media(min-width: 1024px) {
    width: 30%; 
    height: 40%;
    padding: 20px;
    display: flex;
    
}

 
`;

const CircularProgressContainer: FC = () => {
    const constantProgressNumber: number = 66; // Will change with an api call
    return (
        <CircularProgressBarContainer>
            <CircularProgressbar 
                value={constantProgressNumber}
                text={`${constantProgressNumber}%`}
                styles={{
                    path: {
                        stroke: `#4CAF50`,
                    },
                    text: {
                        fill: '#ffffff',
                        fontSize: '16px',
                    },
                    trail: {
                        stroke: '#404040',
                    }
                }}
            />
        </CircularProgressBarContainer>
    );
};

export default CircularProgressContainer;
