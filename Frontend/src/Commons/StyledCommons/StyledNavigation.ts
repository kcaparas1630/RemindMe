import styled from '@emotion/styled';

export const NavigationContainer = styled.div<{ isDarkMode?: boolean }>`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 600px;
  height: 60px;
  background-color: ${({ isDarkMode }) => {
    return isDarkMode ? '#2D3748' : '#FFFFFF';
  }};
  border-radius: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;

  @media (min-width: 1024px) {
    width: 100vw;
    max-width: 100%;
    border-radius: 0;
    box-shadow: none;
    padding: 0 40px;
  }
`;

export const NavigationItem = styled.div<{ isActive?: boolean; isDarkMode?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  cursor: pointer;
  flex: 1;
  transition: all 0.2s ease;
  color: ${({ isActive, isDarkMode }) => {
    return isActive 
      ? '#4CAF50' 
      : isDarkMode 
        ? '#A0AEC0' 
        : '#718096';
  }};

  &:hover {
    color: #4CAF50;
  }

`;

export const NavigationLabel = styled.span<{ isActive?: boolean; isDarkMode?: boolean }>`
  font-size: 12px;
  margin-top: 4px;
  font-weight: ${({ isActive }) => {
    return isActive ? '600' : '400';
  }};
  transition: all 0.2s ease;
`;

export const ActiveIndicator = styled.div`
  height: 4px;
  width: 100%;
  background-color: #4CAF50;
  border-radius: 2px;
  margin-top: 4px;
  transition: all 0.3s ease;
`; 
