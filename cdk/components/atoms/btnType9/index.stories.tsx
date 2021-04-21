import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import BtnType9, { IProps } from './';

export default {
  title: 'cdk / Atoms / BtnType9',
  component: BtnType9,
};

const Template: Story<IProps> = (args) => (
  <BtnType9 {...args}>{args.children}</BtnType9>
);

export const 버튼_타입_9 = Template.bind({});
버튼_타입_9.args = {
  children: '삭제하기',
};
