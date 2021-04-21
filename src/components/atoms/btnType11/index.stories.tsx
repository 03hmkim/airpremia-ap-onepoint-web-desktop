import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import BtnType11, { IProps } from './';

export default {
  title: 'cdk / Atoms / BtnType11',
  component: BtnType11,
};

const Template: Story<IProps> = (args) => (
  <BtnType11 {...args}>{args.children}</BtnType11>
);

export const 버튼_타입_11_폰트_기본 = Template.bind({});
버튼_타입_11_폰트_기본.args = {
  fontWeight: 'normal',
  children: '이메일 찾기',
};

export const 버튼_타입_11_폰트_굵게 = Template.bind({});
버튼_타입_11_폰트_굵게.args = {
  fontWeight: 'bold',
  children: '다음에 변경',
};
