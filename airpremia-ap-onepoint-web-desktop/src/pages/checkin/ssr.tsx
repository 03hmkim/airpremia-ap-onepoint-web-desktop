import { NextPage } from 'next';
import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { CheckinSsr, PayReceipt } from 'src/components';
import { Title } from 'src/components';
import { dummyPayReceipt } from 'src/components/organisms/payReceipt/dummy';
import { useSsr } from 'src/hooks';

interface IProps {}

const Index: NextPage<IProps> = () => {
  const TitleChildren = (
    <Fragment>
      나에게 필요한 여행 옵션을
      <br />
      관리 해보세요 :-)
    </Fragment>
  );
  const { onLoadAvailableSsrs } = useSsr();

  useEffect(() => {
    onLoadAvailableSsrs();
  }, []);

  return (
    <S.container>
      <CheckinSsr
        title={<Title>{TitleChildren}</Title>}
        // panelsOriginal={<SsrExpansionPanelsOriginal />}
        // panelsSpecial={<SsrExpansionPanelsSpecial />}
        receipt={<PayReceipt {...dummyPayReceipt} />}
      />
    </S.container>
  );
};

const S = {
  container: styled.div``,
};

export default Index;
