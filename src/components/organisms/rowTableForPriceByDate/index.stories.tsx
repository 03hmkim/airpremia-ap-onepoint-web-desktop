import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import RowTableForPriceByDate from '.';
import { getPivotDate } from '@airpremia/core/lib/booking';
import dummy from './dummy';
import { action } from '@storybook/addon-actions';

export default {
  title: 'desktop / Organisms / RowTableForPriceByDate',
  component: RowTableForPriceByDate,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Row Table Date Picker',
  },
};

export const 일정선택한줄달력: FC = () => {
  const selectedDate = getPivotDate(dummy);
  return (
    <RowTableForPriceByDate
      list={dummy}
      selectedDate={selectedDate}
      onClickNext={action('onClickNext event')}
      onClickPrev={action('onClickPrev event')}
      onLoad={action('onLoad event')}
    />
  );
};
