import React, { useState } from 'react';

import DatePicker, { IProps } from '.';
import { Story } from '@storybook/react/types-6-0';

import Dummy from './dummy';
import { Dayjs } from 'dayjs';

export default {
  title: 'cdk / Molecules / DatePicker',
  component: DatePicker,
};

const Template: Story<IProps> = (args) => {
  const [date, setDate] = useState<Dayjs[]>([]);
  const onClickDate = (day: Dayjs) => {
    setDate((prev) => [...prev, day]);
  };
  return (
    <DatePicker
      {...args}
      onClickDate={onClickDate}
      date={date}
    />
  );
};

export const 캘린더 = Template.bind({});
캘린더.args = {
  lowfares: Dummy,
  type: 'ey',
};
