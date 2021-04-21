import React from 'react';
import Chip, { IProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'cdk / atoms / Chip',
  component: Chip,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '375px', width: '100vw' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<IProps> = (args) => {
  return <Chip {...args}>왕복</Chip>;
};

/** tab_type1_on, tab_type2_off 대체 */
export const chip = Template.bind({});
chip.args = {
  active: true,
};
