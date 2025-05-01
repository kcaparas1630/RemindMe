import styled from '@emotion/styled';

const TaskContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    width: 100%;
    height: 100%;
`;

const TaskNavigation = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 2rem;

    @media (min-width: 1024px) {
        margin-top: 8rem;
    }
`;


export { TaskContainer, TaskNavigation };
