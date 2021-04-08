import { withKnobs, text, select } from '@storybook/addon-knobs';
import StyledButton from '../../components/common/StyledButton';
import { Tcolor, Tvariant } from '../../types/styledButton';

export default {
  title: 'components|button/StyledButton',
  component: StyledButton,
  decorators: [withKnobs],
};
export const defualtButton = ():JSX.Element => {
  const variantOptions:Tvariant[] = ['outline', 'fill-none', 'fill'];
  const colorOptions:Tcolor[] = ['green', 'blue', 'red'];
  const variant = select<Tvariant>('variant', variantOptions, 'fill');
  const color = select<Tcolor>('color', colorOptions, 'green');
  const buttonText = text('text', '테스트버튼');
  return (
    <StyledButton text={buttonText} variant={variant} color={color} />
  );
};
