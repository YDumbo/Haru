import styled from 'styled-components';

export type TSize = 'small' | 'medium' | 'large' | 'full';
export interface IStyledInputProps {
  inputSize?: TSize,
  onChange?: () => void,
  placeholder?: string,
  icon?: React.ReactNode,
}
export interface IInput {
  inputSize?: TSize,
}
const size = {
  small: '200px',
  medium: '300px',
  large: '400px',
  full: '100%',
};
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  padding: 10px 7px;
  margin: 0 15px;
  & img {
    width: 25px;
  }
`;
const Input = styled.input<IInput>`
  border: none;
  font-size: 17px;
  width: ${({ inputSize }) => size[inputSize]};
  background-color: inherit;
  &:focus {
    outline: none;
  }
`;

function StyledInput({
  inputSize = 'small', onChange, placeholder = '검색어를 입력하세요', icon = <img src="/images/search.png" alt="search_icon" />,
}: IStyledInputProps):JSX.Element {
  return (
    <InputWrapper>
      <Input placeholder={placeholder} inputSize={inputSize} onChange={onChange} />
      {icon}
    </InputWrapper>
  );
}

export default StyledInput;
