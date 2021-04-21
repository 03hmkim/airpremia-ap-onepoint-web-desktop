import React, { FC } from 'react';
import PassengerFormExpansionPanel from '.';
import styled from 'styled-components';

export default {
  title:
    'desktop / Organisms / PassengerFormExpansionPanel',
  component: PassengerFormExpansionPanel,
  parameters: {
    componentSubtitle:
      'PassengerFormExpansionPanel 컴포넌트 Docs',
  },
};

export const 탑승객_폼_확장_패널: FC = () => {
  return (
    <S.container>
      <PassengerFormExpansionPanel
        disabled={true}
        buttonLabel="신청 완료"
      >
        PassengerForm2
      </PassengerFormExpansionPanel>
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 1200px;
  `,
};
