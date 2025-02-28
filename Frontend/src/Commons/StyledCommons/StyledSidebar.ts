import styled from '@emotion/styled';
 // need to fix still
const SidebarContainer = styled.div<{ isOpen: boolean; isDarkMode: boolean }>`
  width: 100%;
  height: 100vh;
  background-color: ${props => {
    if (props.isDarkMode) {
      return '#1a1a1a';
    } else {
      return '#ffffff';
    }
  }};
  position: fixed;
  left: ${props => {
    if (props.isOpen) {
      return '0';
    } else {
      return '-150%';
    }
  }};
  top: 0;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
  z-index: 1000;

  @media (min-width: 768px) {
    width: 20vw;
    position: relative;
    height: calc(100vh - 50px);
    left: 0;
  }
`;

const HamburgerButton = styled.button<{ isDarkMode: boolean }>`
  display: none;
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 1001;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => {
    if (props.isDarkMode) {
      return '#ffffff';
    } else {
      return '#333333';
    }
  }};

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SidebarItem = styled.div<{ isDarkMode: boolean, isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  margin: 25px 0;
  border-radius: 6px;
  background-color: ${(props) => {
    return props.isActive ? '#333333' : 'transparent';
  }};
  cursor: pointer;
  color: ${props => {
    if (props.isDarkMode) {
      return '#ffffff';
    } else {
      return '#333333';
    }
  }};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => {
      if (props.isDarkMode) {
        return '#333333';
      } else {
        return '#f0f0f0';
      }
    }};
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  display: none;
  @media (max-width: 768px) {
    display: ${props => {
      if (props.isOpen) {
        return 'block';
      } else {
        return 'none';
      }
    }};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

export { SidebarContainer, HamburgerButton, SidebarItem, Overlay };
