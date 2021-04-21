import React, { FC } from 'react';
import Mieleage from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Organisms / 결제 / Mieleage',
  component: Mieleage,
  parameters: {
    componentSubtitle: 'Mieleage 컴포넌트 Docs',
  },
};

export const 포인트: FC = () => {
  return (
    <S.container>
      <Mieleage remainedMileage={100500} isMember={true} />
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 765px;
  `,
};
