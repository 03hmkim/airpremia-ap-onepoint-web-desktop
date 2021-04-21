import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import SeatPayTemplate from '.';
import {
  PayTitle,
  PayMethod,
  PayReceipt,
} from 'src/components';
import { dummyPayReceipt } from 'src/components/organisms/payReceipt/dummy';

export default {
  title: 'desktop / Templates / SeatPayTemplate',
  component: SeatPayTemplate,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'SeatPayTemplate',
  },
};

export const 체크인_좌석결제화면: FC = () => {
  const onChange = () => {};

  return (
    <SeatPayTemplate
      title={
        <PayTitle
          title="좌석 구매"
          description="유료 좌석 구매 (4A, 4B)"
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
  );
};
