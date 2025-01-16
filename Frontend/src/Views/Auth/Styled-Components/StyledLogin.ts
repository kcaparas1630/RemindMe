import styled from '@emotion/styled';

const Container = styled.section`
    label: ContainerWrapper;
    display: flex;
    width: 100%;
    height: 90vh;
    justify-content: center;
    align-items: center;
`;

const LoginFormContainer = styled.div<{ isDarkMode: boolean }>`
    label: LoginFormContainer;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 16px;
    width: 90%;
    max-width: 400px;
    background-color: ${(props) => {
       return props.isDarkMode ? '#2C2F33' : '#E9ECEF'
    }};
    color: ${(props) => {
        return props.isDarkMode ? '#DEE2E6' : '#212529'
    }};
    border-radius: 8px;
    box-shadow: ${(props) => {
        return props.isDarkMode ? '0 4px 6px rgba(255, 255, 255, 0.1)' : '0 4px 6px rgba(0, 0, 0, 0.1)'
    }};

    @media (min-width: 768px) {
        padding: 24px 30px;
        gap: 24px;
    }
`;

export { Container, LoginFormContainer };
