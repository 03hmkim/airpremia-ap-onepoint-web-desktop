import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import TripInformationBox from '.';

export default {
  title: 'desktop / Molecules / TripInformationBox',
  component: TripInformationBox,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Trip Infomation Box content',
  },
};

const leg = {
  arrivalStation: 'ICN',
  arrivalTime: '2020-07-24T18:20:00',
  departureStation: 'HAN',
  departureTime: '2020-07-24T12:10:00',
  equipmentType: '789',
  flightTimeInMinute: 250,
  identifier: 'AP1234',
  carrierCodeText: '에어프레미아',
  isTransferAtNext: true,
  termToNextLegInMinute: 360,
};

export const 여정정보내부박스: FC = () => {
  return (
    <TripInformationBox
      leg={leg}
      language={{ code: 'ko', text: '한국어' }}
    />
  );
};
