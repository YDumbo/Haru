import styled from 'styled-components';
import { rgba, darken } from 'polished';
import { IStyledButton, IStyledButtonProps } from '../../types/styledButton';

const buttonSize = {
  auto: 'auto',
  small: '100px',
  medium: '200px',
  large: '400px',
};

const Button = styled.button<IStyledButton>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ variant, theme, color }) => (variant === 'fill' ? `${theme[color]}` : 'inherit')};
  border: ${({ variant, theme, color }) => (variant === 'outline' ? `1px solid ${theme[color]}` : 'none')};
  color: ${({ variant, theme, color }) => (variant === 'fill' ? 'white' : theme[color])};
  padding: 10px;
  border-radius: 3px;
  width: ${({ size }) => buttonSize[size]};
  cursor: pointer;
  &:hover {
    background-color: ${({ variant, theme, color }) => (variant === 'fill' ? darken(0.06, theme[color]) : variant === 'outline' ? rgba(theme[color], 0.1) : 'none')};
    transition: 0.2s;
  }
`;

function StyledButton({
  color = 'green', size = 'medium', text, label, variant = 'fill', onClick,
}: IStyledButtonProps):JSX.Element {
  return (
    <Button type="button" color={color} size={size} variant={variant} onClick={onClick}>
      {text} {label}
    </Button>
  );
}

export default StyledButton;
