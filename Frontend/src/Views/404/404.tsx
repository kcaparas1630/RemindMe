import { FC } from 'react';
import { Styled404Container, Styled404ImageContainer, Styled404Image, Styled404HeaderText, Styled404ContentText, Styled404TextContainer, Styled404ButtonContainer, StyledErrorContainer, StyledUnderline } from './Styled-Components/Styled404';
import isDarkMode from '../../Interface/General/isDarkMode';
import coffeeholding from '../../../assets/coffee holding.svg';
import Button from '../../Commons/Button';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: FC<isDarkMode> = ({ isDarkMode }) => {
    const navigate = useNavigate();
    const handleGoToDashboardClick = () => {
        navigate('/main/dashboard');
    }
    return (
        <Styled404Container>
            <Styled404ImageContainer>
                <Styled404Image src={coffeeholding} alt="404 coffee holding" />
            </Styled404ImageContainer>
            <Styled404TextContainer>
                <StyledErrorContainer>
                    <Styled404ContentText>Error 404</Styled404ContentText>
                    <StyledUnderline />
                </StyledErrorContainer>
                <Styled404HeaderText>there is {isDarkMode ? 'dark' : 'light'} here too.</Styled404HeaderText>
                <Styled404ContentText>The page you are looking for does not exist. It might have been moved or deleted.</Styled404ContentText>
                <Styled404ButtonContainer>
                    <Button
                        type="button"
                        name="Go to Dashboard"
                        disabled={false}
                        isDarkMode={isDarkMode}
                        handleClick={handleGoToDashboardClick}
                >
                        Go to Dashboard
                    </Button>
                </Styled404ButtonContainer>
            </Styled404TextContainer>
        </Styled404Container>
    )   
}

export default NotFoundPage;
