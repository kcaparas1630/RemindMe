import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid #ced4da;
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

export { HeaderContainer, ThemeToggle };
