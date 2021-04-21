import React from 'react';

import ProgressIndicator, { IProps } from './';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'cdk / Molecules / ProgressIndicator',
  component: ProgressIndicator,
  argTypes: {
    curr: {
      control: {
        type: 'inline-radio',
        options: [0, 1, 2, 3],
      },
    },
  },
};

const Template: Story<IProps> = (args) => (
  <ProgressIndicator {...args} />
);

export const 진행률_표시기 = Template.bind({});
진행률_표시기.args = {
  curr: 0,
};
