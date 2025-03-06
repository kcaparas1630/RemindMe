import styled from '@emotion/styled';

const QuickActionsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
`;

const QuickActionsItem = styled.div<{ isDarkMode: boolean }>`
    width: 80%;
    height: 20%;
    min-height: 40px;
    display: flex;
    border-radius: 8px; 
    position: relative;
    background-color: ${(props) => {
        return props.isDarkMode ? '#212529' : '#F8F9FA'}
    };
    @media(min-width: 1024px) {
        width: 80%;
    }
`;

const QuickActionsItemIcon = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    right: 10px;
    top: 0;
`;

const QuickActionsItemText = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    position: absolute;
    left: 10px;
    top: 0;
    align-items: center;
`;

export { QuickActionsContainer, QuickActionsItem, QuickActionsItemIcon, QuickActionsItemText };
