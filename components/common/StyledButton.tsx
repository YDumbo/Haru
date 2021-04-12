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
  background-color: ${({ variant, theme, color }) => (variant === 'fill' ? `${theme.color[color]}` : 'white')};
  border: ${({ variant, theme, color }) => (variant === 'outline' ? `1px solid ${theme.color[color]}` : 'none')};
  color: ${({ variant, theme, color }) => (variant === 'fill' ? 'white' : theme.color[color])};
  padding: 10px;
  border-radius: 3px;
  width: ${({ size }) => buttonSize[size]};
  &:hover {
    background-color: ${({ variant, theme, color }) => (variant === 'fill' ? darken(0.06, theme.color[color]) : variant === 'outline' ? rgba(theme.color[color], 0.1) : 'none')};
    transition: 0.3s;
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
