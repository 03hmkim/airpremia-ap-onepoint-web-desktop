import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import BtnType7, { IProps } from './';
import { BLUE1 } from '../../../styles/colors';

export default {
  title: 'cdk / Atoms / BtnType7',
  component: BtnType7,
  argTypes: {
    color: {
      control: 'color',
    },
  },
};

const Template: Story<IProps> = (args) => (
  <BtnType7 {...args}>{args.children}</BtnType7>
);

export const 버튼_타입_7 = Template.bind({});
버튼_타입_7.args = {
  color: BLUE1,
  children: '나이 계산기',
};
