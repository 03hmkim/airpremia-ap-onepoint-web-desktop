import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { bookingDetailInfo } from '../../templates/checkin/bookingDetailInfo/dummy';

import BoardingPassInfoGroup from '.';

export default {
  title: 'desktop / Organisms / BoardingPassInfoGroup',
  component: BoardingPassInfoGroup,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'BoardingPassInfoGroup',
  },
};

export const 항공권정보그룹: FC = () => {
  return (
    <BoardingPassInfoGroup
      recordLocator="D8F7F3"
      boardingPassInfo={bookingDetailInfo.boardingPassInfo}
      isCommingSoon={true}
    />
  );
};
