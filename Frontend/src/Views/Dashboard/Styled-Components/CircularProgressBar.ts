import styled from '@emotion/styled';

const CircularProgressBarContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
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

const ProgressBarHeaderContainer = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    border-bottom: 1px solid #fff;
    position: relative;

    @media(min-width: 1024px) {
        height: 10%;
    }
`;
const ProgressBarHeaderText = styled.h3`
    font-size: 1.3rem;
    font-weight: 600;
    color: #fff;
    position: absolute;
    margin: 0;
    top: 10%;
    left: 3%;

    @media(min-width: 1024px) {
        font-size: 1.5rem;
        top: 0;
        left: 0;
    }
`;
const ProgressBarDateTodayText = styled.p`
    font-size: 0.8rem;
    font-weight: 400;
    color: #fff;
    position: absolute;
    margin: 0;
    top: 25%;
    right: 3%;

    @media(min-width: 1024px) {
        font-size: 1rem;
        top: 20%;
        right: 0;
    }
`;

const ProgressBarContainer = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center; 
`;

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
    color: #fff;
    margin: 0;
    display: inline;

    @media(min-width: 1024px) {
        font-size: 1.5rem;
    }
`;
const ProgressBarText = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
    margin: 0;
    display: inline;

    @media(min-width: 1024px) {
        font-size: 1.3rem;
    }
`;

export { CircularProgressBarContainer, ProgressBarHeaderContainer, ProgressBarHeaderText, ProgressBarDateTodayText, ProgressBarContainer, ProgressBarTextContainer, ProgressBarGraphContainer, ProgressBarText, ProgressBarTextHeader    };
