import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import TabType2, { IProps } from './';

export default {
  title: 'cdk / Atoms / TabType2',
  component: TabType2,
};

const Template: Story<IProps> = (args) => (
  <TabType2 {...args}>{args.children}</TabType2>
);

export const 탭_타입_2 = Template.bind({});
탭_타입_2.args = {
  isActive: false,
  children: '탭 영역 1',
};
