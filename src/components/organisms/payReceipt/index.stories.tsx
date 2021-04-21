import React, { FC } from 'react';
import PayReceipt from '.';
import styled from 'styled-components';
import { dummyPayReceipt } from './dummy';

export default {
  title: 'desktop / Organisms / 결제 / PayReceipt',
  component: PayReceipt,
  parameters: {
    componentSubtitle: 'PayReceipt 컴포넌트 Docs',
  },
};

export const 결제영수증: FC = () => {
  return (
    <S.container>
      <PayReceipt {...dummyPayReceipt} />
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
