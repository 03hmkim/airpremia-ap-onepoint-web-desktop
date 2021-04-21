import React, { FC } from 'react';
import SeatButton from '.';
import styled from 'styled-components';
import { ESeatType } from '../../../../core/hooks/useSsr/seat';

export default {
  title: 'cdk / Atoms / SeatButton',
  component: SeatButton,
  parameters: {
    componentSubtitle: '좌석 선택 팝업에 나오는 좌석 버튼',
  },
};

export const 좌석_버튼: FC = () => {
  return (
    <S.container>
      <SeatButton
        seatType={ESeatType.SELECTED}
        initialName="YJ"
      />
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
