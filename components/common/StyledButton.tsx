import styled from 'styled-components';
import { IStyledButton, IStyledButtonProps } from '../../types/styledButton';

const Button = styled.button<IStyledButton>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ variant, theme, color }) => (variant === 'fill' ? theme.color[color] : 'none')};
  border: ${({ variant, theme, color }) => (variant === 'outline' ? `1px solid ${theme.color[color]}` : 'none')};
  color: ${({ variant, theme, color }) => (variant === 'fill' ? 'white' : theme.color[color])};;
  padding: 10px;
  border-radius: 3px;
  width: ${({ theme, size }) => theme.buttonSize[size]};
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
