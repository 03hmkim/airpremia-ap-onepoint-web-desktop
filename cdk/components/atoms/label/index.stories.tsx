import React from 'react';
import Label, { IProps } from '.';
import { Story } from '@storybook/react/types-6-0';
import { ORANGE1 } from '../../../styles/colors';

export default {
  title: 'cdk / Atoms / Label',
  component: Label,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    color: {
      control: 'color',
    },
  },
};

const Template: Story<IProps> = (args) => {
  return <Label {...args} />;
};

export const 라벨 = Template.bind({});
라벨.args = {
  backgroundColor: ORANGE1,
  children: 'D-32',
};
