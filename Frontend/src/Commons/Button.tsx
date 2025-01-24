/**
 * @params props - it's the group of attributes of ButtonProps
 * @returns A ReactNode, rendered as an HTML element
 * @author @Kcaparas
 */
import { FC } from 'react';
import StyledButton from './StyledCommons/StyledButton';
import ButtonProps from '../Interface/ButtonProps';

const Button: FC<ButtonProps> = (props) => {
  // only called what's important.
  const { name, children, handleClick } = props;

  const handleClickWrapper = () => {
    if (handleClick) {
      handleClick();
    }
  };
  return (
    // Used props spreading to avoid enumerating everything.
    <StyledButton
      {...props}
      onClick={handleClickWrapper}
    >
      {children || name}
    </StyledButton>
  );
};

export default Button;
