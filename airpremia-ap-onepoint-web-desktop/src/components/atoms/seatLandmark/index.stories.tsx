import React, { FC } from 'react';
import SeatLandmark, { ESeatLandmarkType } from './';
import styled from 'styled-components';

export default {
  title: 'desktop / Atoms / SeatLandmark',
  component: SeatLandmark,
  parameters: {
    componentSubtitle: 'SeatLandmark 컴포넌트 Docs',
  },
};

export const 좌석_이정표: FC = () => {
  return (
    <S.container>
      <SeatLandmark
        type={ESeatLandmarkType.TOILET_DOUBLE}
      />
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 242px;
    height: 56px;
  `,
};
