import React from 'react';

import DateGroup, { IProps } from './';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'cdk / Molecules / DateGroup',
  component: DateGroup,
};

const Template: Story<IProps> = (args) => {
  return <DateGroup {...args} />;
};

export const 요일_그룹 = Template.bind({});
요일_그룹.args = {};
