import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import BtnType10, { IProps } from './';
import { DARK_GRAY1 } from '../../../styles/colors';

export default {
  title: 'cdk / Atoms / BtnType10',
  component: BtnType10,
  argTypes: {
    color: {
      control: 'color',
    },
  },
};

const Template: Story<IProps> = (args) => (
  <BtnType10 {...args}>{args.children}</BtnType10>
);

export const 버튼_타입_10_폰트_12 = Template.bind({});
버튼_타입_10_폰트_12.args = {
  color: DARK_GRAY1,
  fontSize: '12px',
  children: '상세내역 보기',
};

export const 버튼_타입_10_폰트_13 = Template.bind({});
버튼_타입_10_폰트_13.args = {
  color: DARK_GRAY1,
  fontSize: '13px',
  children: '다른 계정으로 로그인하기',
};
