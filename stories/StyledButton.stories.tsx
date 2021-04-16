import { Story } from '@storybook/react';
import styled from 'styled-components';
import StyledButton from '../components/common/StyledButton';
import { IStyledButtonProps } from '../types/styledButton';

const Inline = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default {
  title: 'components|StyledButton',
  component: StyledButton,
};
const Template: Story<IStyledButtonProps> = (args) => <StyledButton {...args} />;

export const DefualtButton = Template.bind({});
DefualtButton.args = {
  text: '예시버튼',
  color: 'blue',
};

export const FillButton = ():JSX.Element => (
    <Inline>
      <StyledButton text='버튼' color='red' />
      <StyledButton text='버튼' color='green' />
      <StyledButton text='버튼' color='blue' />
    </Inline>
);
export const VariantButton = ():JSX.Element => (
  <Inline>
    <StyledButton text='버튼' variant='outline' />
    <StyledButton text='버튼' variant='fill' />
    <StyledButton text='버튼' variant='fill-none' />
  </Inline>
);
export const SizeButton = ():JSX.Element => (
  <Inline>
    <StyledButton text='버튼' size='small' />
    <StyledButton text='버튼' size='medium' />
    <StyledButton text='버튼' size='medium' />
  </Inline>
);
FillButton.parameters = {
  docs: {
    storyDescription: '버튼은 3가지의 컬러를 가지고 있습니다.',
  },
};
VariantButton.parameters = {
  docs: {
    storyDescription: '배경채우기, 아웃라인만 그리기, 투명색으로 하기 등의 3가지 속성을 가질 수 있습니다.',
  },
};
SizeButton.parameters = {
  docs: {
    storyDescription: '사이즈는 small, medium, large 3가지의 크기속성을 가질 수 있습니다.',
  },
};
