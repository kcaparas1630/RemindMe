import styled from '@emotion/styled';
import { motion } from 'motion/react';


const MainContainer = styled.main`
    width: 100%;
    height: calc(100vh - 50px); // minus header height
    display: flex;
`;

const MainContent = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0 24px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export { MainContainer, MainContent };
