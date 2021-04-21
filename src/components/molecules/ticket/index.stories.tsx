import React, { FC } from 'react';
import Ticket from '.';
import styled from 'styled-components';
import { Tag } from 'src/components';
import {
  DARK_GRAY1,
  RED2,
} from '@airpremia/cdk/styles/colors';

export default {
  title: 'desktop / Molecules / Ticket',
  component: Ticket,
  parameters: {
    componentSubtitle: 'Ticket 컴포넌트 Docs',
  },
};

export const 티켓: FC = () => {
  const getTags = [
    <Tag key={0} backgroundColor={DARK_GRAY1}>
      가는날
    </Tag>,
    <Tag key={0} backgroundColor={RED2}>
      환불불가
    </Tag>,
  ];
  return (
    <S.container>
      <Ticket
        tags={getTags}
        passengers="성인 2, 소아 1, 유아 1"
        origin="서울/인천"
        originTime="09 : 00"
        destination="하노이"
        destinationTime="12 : 30"
        startDate="2019. 9. 14. (일)"
        classType="이코노미"
        price="470,500"
        currency="원"
      />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 1140px;
  `,
};
