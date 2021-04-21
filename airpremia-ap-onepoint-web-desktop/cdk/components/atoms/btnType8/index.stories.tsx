import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import BtnType8, { IProps } from './';
import { BLUE1 } from '../../../styles/colors';

export default {
  title: 'cdk / Atoms / BtnType8',
  component: BtnType8,
  argTypes: {
    color: {
      control: 'color',
    },
  },
};

const Template: Story<IProps> = (args) => (
  <BtnType8 {...args}>{args.children}</BtnType8>
);

export const 버튼_타입_8 = Template.bind({});
버튼_타입_8.args = {
  color: BLUE1,
  children: '마이페이지 바로가기',
};
