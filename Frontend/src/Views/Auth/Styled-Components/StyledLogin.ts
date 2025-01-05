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
    align-items: center;
    gap: 24px;
    padding: 24px 30px 24px 30px;
    width: 20%;
    height: 40%;
    background-color: #E9ECEF;
    color: #343A40;
    border-radius: 4%;
`;

export { Container, LoginFormContainer };
