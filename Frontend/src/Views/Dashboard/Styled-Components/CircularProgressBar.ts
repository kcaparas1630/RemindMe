import styled from '@emotion/styled';

const ProgressBarTextContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const ProgressBarGraphContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ProgressBarTextHeader = styled.h4`
    font-size: 1.3rem;
    font-weight: 600;

    margin: 0;
    display: inline;

    @media(min-width: 1024px) {
        font-size: 1.5rem;
    }
`;
const ProgressBarText = styled.p`
    font-size: 1rem;
    font-weight: 400;

    margin: 0;
    display: inline;

    @media(min-width: 1024px) {
        font-size: 1.3rem;
    }
`;

export { ProgressBarTextContainer, ProgressBarGraphContainer, ProgressBarTextHeader, ProgressBarText };
