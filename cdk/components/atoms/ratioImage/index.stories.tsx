import React from 'react';
import RatioImage, { IProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'cdk / Atoms / RatioImage ',
  component: RatioImage,
  decorators: [
    (Story) => (
      <div style={{ width: '375px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<IProps> = (args) => {
  return <RatioImage {...args} />;
};

export const 비율_이미지 = Template.bind({});
비율_이미지.args = {
  src: '//via.placeholder.com/375x240',
};
