import styled from '@emotion/styled';

const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;
const StyledSelect = styled.select`
    width: 97%;
    height: 100%;
    min-height: 25px;
    border-radius: 4px;
    border: 1px solid #CED4DA;
    padding: 5px;
`;
const StyledLabel = styled.label`
    font-size: 1.5rem;
    font-weight: 700;
`;

export { InputContainer, StyledSelect, StyledLabel };
