import styled from '@emotion/styled';

const Container = styled.section`
    label: ContainerWrapper;
    display: flex;
    width: 100vw;
    height: 100vh;
    padding: 20px;
    justify-content: center;
    align-items: center;
`;

const LoginFormContainer = styled.div`
    label: LoginFormContainer;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 10px;
    width: 20%;
    height: 50%;
    border-radius: 4%;
`;

export { Container, LoginFormContainer };
