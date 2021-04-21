import { FC } from 'react';
import styled from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';
import {
  PayTitle,
  PayMethod,
  PayReceipt,
} from 'src/components';
import { Tag } from 'src/components';
import { dummyPayReceipt } from 'src/components/organisms/payReceipt/dummy';

import TicketPayCheckout from '.';

export default {
  title: 'desktop / Templates / TicketPayCheckout',
  component: TicketPayCheckout,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'TicketPayCheckout 컴포넌트 Docs',
  },
};

export const 결제화면: FC = () => {
  const onChange = (payload: string) =>
    console.log(payload);

  return (
    <S.container>
      <TicketPayCheckout
        title={
          <PayTitle
            tag={<Tag>환불불가</Tag>}
            title="서울/인천 - 하노이"
            description="왕복 항공권 (성인 1, 유아 1, 소아 1 )"
          />
        }
        payMethod={
          <PayMethod
            isSave={false}
            method="credit"
            card="C006"
            installment="0"
            onChangeSave={() => {}}
            onChangeMethod={onChange}
            onChangeCard={onChange}
            onChangeInstallment={onChange}
          />
        }
        receipt={<PayReceipt {...dummyPayReceipt} />}
      />
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 1200px;
    margin: 0 auto;
  `,
};
