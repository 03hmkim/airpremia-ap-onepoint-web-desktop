import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import BtnType2, { IProps } from './';
import { BLUE1, DARK_BLUE1 } from '../../../styles/colors';

export default {
  title: 'cdk / Atoms / BtnType2',
  component: BtnType2,
  argTypes: {
    backgroundColor: {
      control: {
        type: 'inline-radio',
        options: [BLUE1, DARK_BLUE1],
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '325px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<IProps> = (args) => (
  <BtnType2 {...args}>{args.children}</BtnType2>
);

export const 버튼_타입_2 = Template.bind({});
버튼_타입_2.args = {
  backgroundColor: BLUE1,
  children: '홈',
};
