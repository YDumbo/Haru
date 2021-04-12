export type Tcolor = 'green' | 'blue' | 'red'
export type TSize = 'auto' | 'small' | 'medium' | 'large'
export type Tvariant = 'outline' | 'fill-none' | 'fill'

export interface IStyledButton {
  color?: Tcolor,
  size?: TSize,
  variant?: Tvariant,
}

export interface IStyledButtonProps {
  color?: Tcolor,
  size?: TSize,
  text: string,
  label? : React.ReactNode,
  variant?: Tvariant,
  onClick?: () => void;
}
