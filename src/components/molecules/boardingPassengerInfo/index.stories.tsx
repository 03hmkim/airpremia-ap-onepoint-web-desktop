import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import BoardingPassengerInfo from '.';
import { bookingDetailInfo } from 'src/components/templates/checkin/bookingDetailInfo/dummy';

export default {
  title: 'desktop / Molecules / BoardingPassengerInfo',
  component: BoardingPassengerInfo,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'BoardingPassengerInfo',
  },
};

export const 탑승객정보: FC = () => {
  return (
    <BoardingPassengerInfo
      passenger={bookingDetailInfo.passengers[0]}
      isCanceled={true}
    />
  );
};
