import React, { FC } from 'react';
import ReservationAgree from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Organisms / 결제 / ReservationAgree',
  component: ReservationAgree,
  parameters: {
    componentSubtitle: 'ReservationAgree 컴포넌트 Docs',
  },
};

export const 예약규정동의: FC = () => {
  return (
    <S.container>
      <ReservationAgree
        isAgree={false}
        onChange={() => {}}
      />
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 765px;
  `,
};
