import styled from '@emotion/styled';
import { motion } from 'framer-motion';
const CarouselContainer = styled.div`
    width: 60%;
    height: 60%;
    position: relative;
    display: flex;
    flex-direction: column;
`;

const CarouselHeading = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
    color: ${({ theme }) => {
        return theme.isDarkMode ? '#DEE2E6' : '#212529';
    }};
`;  
const ImageWrapper = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const CarouselImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const CarouselIndicatorWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-direction: row;
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
`;

const CarouselIndicator = styled.div<{ isActive: boolean }>`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => {
        return props.isActive ? '#9a8c98' : '#4a4e69';
    }};
`;

export { CarouselContainer, ImageWrapper, CarouselImage, CarouselIndicatorWrapper, CarouselIndicator, CarouselHeading };
