import React, { FC, useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import RoundedNavigationTab from '.';

export default {
  title: 'desktop / Molecules / RoundedNavigationTab',
  component: RoundedNavigationTab,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Trip Reservation Tab',
  },
};

export const 예매내역확인리스트탭: FC = () => {
  const [currIdx, setCurrIdx] = useState(0);
  return (
    <RoundedNavigationTab
      currIdx={currIdx}
      list={['다가오는 여정', '지난 여정']}
      onClick={setCurrIdx}
    />
  );
};
