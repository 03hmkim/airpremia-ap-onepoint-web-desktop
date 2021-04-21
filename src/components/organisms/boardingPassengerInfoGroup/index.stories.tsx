import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import BoardingPassengerInfoGroup from '.';
import { bookingDetailInfo } from 'src/components/templates/checkin/bookingDetailInfo/dummy';

export default {
  title: 'desktop / Organisms / BoardingPassengerInfoGroup',
  component: BoardingPassengerInfoGroup,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'BoardingPassengerInfoGroup',
  },
};

export const 탑승객정보상세: FC = () => {
  return (
    <BoardingPassengerInfoGroup
      passengers={bookingDetailInfo.passengers}
      isCanceled={bookingDetailInfo.bookingInfo.status === 'Canceled'}
    />
  );
};
