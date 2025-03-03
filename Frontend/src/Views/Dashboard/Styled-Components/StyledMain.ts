import styled from '@emotion/styled';
import { motion } from 'motion/react';


const MainContainer = styled.main`
    width: 100%;
    height: calc(100vh - 50px); // minus header height
    display: flex;
`;

const MainContent = styled(motion.div)<{ isOpen: boolean }>`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0 24px;
    flex-direction: column;
    width: ${props => {
        return props.isOpen ? '80%' : '100%'
    }};
    transition: all 0.3s ease-in-out;
    margin-left: auto;
    transform: translateX(${props => {
        return props.isOpen ? '0' : '20%'
    }});
`;

const DashboardHeader1 = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    margin-top: 5rem;
`;


export { MainContainer, MainContent, DashboardHeader1 };
