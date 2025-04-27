import styled from '@emotion/styled';

const HeaderContainer = styled.header<{ isDarkMode: boolean }>`
  position: sticky;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${(props) => {
        return props.isDarkMode ? '#212529' : '#F8F9FA'}
    };
  z-index: 5;
  border-bottom: 1px solid #ced4da;
`;

const HeaderLeft = styled.div`
    position: absolute;
    left: 12%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const PageTitle = styled.h1`
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
`;

const ThemeToggle = styled.div`
  position: absolute;
  right: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export { HeaderContainer, HeaderLeft, PageTitle, ThemeToggle };
