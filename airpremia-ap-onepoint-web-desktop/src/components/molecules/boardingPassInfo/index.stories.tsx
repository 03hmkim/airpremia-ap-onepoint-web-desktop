import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { bookingDetailInfo } from '../../templates/checkin/bookingDetailInfo/dummy';

import BoardingPassInfo from '.';

export default {
  title: 'desktop / Molecules / BoardingPassInfo',
  component: BoardingPassInfo,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'BoardingPassInfo',
  },
};

export const 탑승객정보_상세내역: FC = () => {
  return (
    <BoardingPassInfo
      recordLocator="D3D3D3"
      boardingPassInfo={bookingDetailInfo.boardingPassInfo}
      isCommingSoon={true}
    />
  );
};
