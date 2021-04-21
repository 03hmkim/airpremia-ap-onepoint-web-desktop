import React from 'react';
import BtnSns, { IProps } from './';
import { Story, Meta } from '@storybook/react/types-6-0';

import InstagramSvg from '../../../public/images/ico_sns_instagram.svg';
import FacebookSvg from '../../../public/images/ico_sns_facebook.svg';

export default {
  title: 'cdk / Atoms / BtnSns',
  component: BtnSns,
} as Meta;

const Template: Story<IProps> = (args) => {
  return <BtnSns {...args} />;
};

export const 버튼_SNS_Instagram = Template.bind({});
버튼_SNS_Instagram.args = {
  SvgImg: <InstagramSvg />,
};

export const 버튼_SNS_Facebook = Template.bind({});
버튼_SNS_Facebook.args = {
  SvgImg: <FacebookSvg />,
};
