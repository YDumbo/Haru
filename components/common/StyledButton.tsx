import styled from 'styled-components';

type Tcolor = 'green' | 'blue' | 'red'
type TSize = 'small' | 'medium' | 'large'
type Tvariant = 'outline' | 'fill-none' | 'fill'

interface IStyledButton {
  color?: Tcolor,
  size?: TSize,
  variant?: Tvariant,
}

interface IStyledButtonProps {
  color?: Tcolor,
  size?: TSize,
  text: string,
  label? : React.ReactNode,
  variant?: Tvariant,
}

const Button = styled.button<IStyledButton>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => (props.variant === 'fill' ? props.theme.color[props.color] : 'none')};
  border: ${(props) => (props.variant === 'outline' ? `1px solid ${props.theme.color[props.color]}` : 'none')};
  color: ${(props) => (props.variant === 'fill' ? 'white' : props.theme.color[props.color])};;
  padding: 10px;
  border-radius: 3px;
  width: ${(props) => props.theme.buttonSize[props.size]};
  cursor: pointer;
`;

function StyledButton({
  color = 'green', size = 'medium', text, label, variant = 'fill',
}: IStyledButtonProps):JSX.Element {
  return (
    <Button type="button" color={color} size={size} variant={variant}>
      {text} {label}
    </Button>
  );
}

export default StyledButton;
