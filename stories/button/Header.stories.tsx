import { Story } from '@storybook/react';
import Header, { IHeaderProps } from '../../components/common/Header';

export default {
  title: 'components|button/StyledButton',
  component: Header,
};

const Template: Story<IHeaderProps> = (args) => <Header {...args} />;

export const MyPageHeader = Template.bind({});

MyPageHeader.args = {
  isMyPage: true,
};

export const DefualtHeader = Template.bind({});

DefualtHeader.args = {
  isMyPage: false,
};
