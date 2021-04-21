import React, { FC } from 'react';
import SeatRowLabels from './';

export default {
  title: 'desktop / Molecules / SeatRowLabels',
  component: SeatRowLabels,
  parameters: {
    componentSubtitle: 'SeatRowLabels 컴포넌트 Docs',
  },
};

export const 좌석_줄넘버_라벨: FC = () => {
  return <SeatRowLabels rows={[1, 2, 3, 4]} />;
};
