import styled from '@emotion/styled';

const StyledApp  = styled.main<{isDarkMode: boolean}>`
    label: StyledApp;
    background-color: ${(props) => {
        return props.isDarkMode ? '#212529' : '#F8F9FA'}
    };
    color: ${(props) => {
        return props.isDarkMode ? '#DEE2E6' : '#212529' }
    }}

    h2 {
        opacity: ${(props) => {
            return props.isDarkMode && '0.95';
        }}
    }
    h3 {
        opacity: ${(props) => {
            return props.isDarkMode && '0.9';
        }}
    }
    h4 {
        opacity: ${(props) => {
            return props.isDarkMode && '0.85';
        }}
    }
`;

export default StyledApp;
