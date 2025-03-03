import styled from '@emotion/styled';
import isDarkMode from '../../Interface/General/isDarkMode';
import { motion } from 'framer-motion';
interface SidebarProps extends isDarkMode {
  isOpen?: boolean;
  isActive?: boolean;
}

const SidebarContainer = styled(motion.div)<SidebarProps>`
  width: 70%;
  height: 100%;
  background-color: ${(props) => {
    return props.isDarkMode ? '#1a1a1a' : '#ffffff';
  }};
  z-index: 2;
  position: fixed;

  @media (min-width: 1024px) {
    width: 20%;
    position: ${(props) => {
      return props.isOpen ? 'relative' : 'fixed';
    }};
    padding-top: 3%;
  }
`;

const HamburgerButton = styled.button<isDarkMode>`
  display: none;
  position: fixed;
  top: 10%;
  left: 15px;
  z-index: 1;
  background: none;
  border: 1px solid
    ${(props) => {
      if (props.isDarkMode) {
        return '#ffffff';
      } else {
        return '#333333';
      }
    }};
  border-radius: 6px;
  cursor: pointer;
  color: ${(props) => {
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

const ArrowIcon = styled.button<SidebarProps>`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    background-color: ${(props) => {
      return props.isDarkMode ? '#1a1a1a' : '#ffffff';
    }};
    color: ${(props) => {
      if (props.isDarkMode) {
        return '#ffffff';
      } else {
        return '#333333';
      }
    }};
    border: 1px solid
      ${(props) => {
        if (props.isDarkMode) {
          return '#ffffff';
        } else {
          return '#333333';
        }
      }};
    border-radius: 100%;
    padding: 0.5rem;
    position: absolute;
    top: 6%;
    left: ${(props) => {
      return props.isOpen ? '22rem' : '1rem';
    }};
    z-index: 5;
    transition: left 0.3s ease-in-out;
    
  }
`;

const SidebarItem = styled.div<SidebarProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  margin: 25px 0;
  border-radius: 6px;

  background-color: ${(props) => {
    return props.isDarkMode ? props.isActive ? '#333333' : 'transparent' : props.isActive ? '#ccc' : 'transparent';
  }};
  cursor: pointer;
  color: ${(props) => {
    if (props.isDarkMode) {
      return '#ffffff';
    } else {
      return '#333333';
    }
  }};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => {
      if (props.isDarkMode) {
        return '#333333';
      } else {
        return '#f0f0f0';
      }
    }};
  }
  // &:nth-child(1) {
  //   margin-top: 20%;
  // }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  display: none;
  @media (max-width: 768px) {
    display: ${(props) => {
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
    z-index: 1;
  }
`;

const LogoutButtonWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  padding: 0 1rem;
  width: 90%;
`;
export { SidebarContainer, HamburgerButton, SidebarItem, Overlay, LogoutButtonWrapper, ArrowIcon };
