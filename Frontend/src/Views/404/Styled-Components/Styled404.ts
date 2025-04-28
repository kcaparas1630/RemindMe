import styled from '@emotion/styled';

const Styled404Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 51px);
    width: 100%;
    position: relative;
`;

const Styled404ImageContainer = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Styled404Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Styled404TextContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const Styled404HeaderText = styled.h2`
    font-size: 5rem;
    font-weight: 600;
    margin: 0;
`;

const Styled404ContentText = styled.p`
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
`;

const Styled404ButtonContainer = styled.div`
    width: 30%; 
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledUnderline = styled.div`
    width: 5%;
    height: 1px;
    background-color: #ddd;
`;
const StyledErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 12px;
`;

export { Styled404Container, Styled404ImageContainer, Styled404Image, Styled404HeaderText, Styled404ContentText, Styled404TextContainer, Styled404ButtonContainer, StyledUnderline, StyledErrorContainer };
