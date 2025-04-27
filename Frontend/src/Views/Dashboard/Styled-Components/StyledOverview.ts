import styled from '@emotion/styled';
import isDarkMode from '../../../Interface/General/isDarkMode';

const OverviewContainer = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

const OverviewHeader = styled.h3<isDarkMode>`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) => {
        return props.isDarkMode ? '#fff' : '#000';
    }};
    margin: 0;
`;

const OverviewGroup = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
`;

const OverviewItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const OverviewItemHeader = styled.h4<isDarkMode>`
    font-size: 1rem;
    font-weight: 400;
    opacity: 0.7;
    text-align: center;
    color: ${(props) => {
        return props.isDarkMode ? '#fff' : '#B89A55';
    }};
    margin: 0;
`;

const OverviewItemContent = styled.p<isDarkMode>`
    font-size: 1.5rem;
    font-weight: 600;
    opacity: 0.7;
    text-align: center;
    color: ${(props) => {
        return props.isDarkMode ? '#fff' : '#000';
    }};
    margin: 0;
`;

export { OverviewContainer, OverviewHeader, OverviewGroup, OverviewItem, OverviewItemHeader, OverviewItemContent };
