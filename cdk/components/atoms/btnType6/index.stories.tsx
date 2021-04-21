import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import BtnType6, { IProps } from './';
import { DARK_GRAY1, WHITE1 } from '../../../styles/colors';

export default {
  title: 'cdk / atoms / BtnType6',
  component: BtnType6,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    color: {
      control: 'color',
    },
    borderColor: {
      control: 'color',
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
  <BtnType6 {...args}>{args.children}</BtnType6>
);

export const 버튼_타입_6 = Template.bind({});
버튼_타입_6.args = {
  backgroundColor: WHITE1,
  color: DARK_GRAY1,
  children: '적용',
};
