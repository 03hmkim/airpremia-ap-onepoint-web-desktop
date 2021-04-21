import React, { FC } from 'react';
import CheckinSsr from '.';
import styled from 'styled-components';
import { Title } from 'src/components';
import { PayReceipt } from 'src/components';
import { dummyPayReceipt } from 'src/components/organisms/payReceipt/dummy';

export default {
  title: 'desktop / Templates / CheckinSsr',
  component: CheckinSsr,
  parameters: {
    componentSubtitle: 'CheckinSsr 컴포넌트 Docs',
  },
};

export const 체크인_부가서비스_화면: FC = () => {
  return (
    <S.container>
      <CheckinSsr
        title={<Title>제목</Title>}
        receipt={<PayReceipt {...dummyPayReceipt} />}
      />
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
