import React, { FC } from 'react';
import PayMethod from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Organisms / 결제 / PayMethod',
  component: PayMethod,
  parameters: {
    componentSubtitle: 'PayMethod 컴포넌트 Docs',
  },
};

export const 결제방법: FC = () => {
  const onChange = (payload: string) =>
    console.log(payload);
  return (
    <S.container>
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
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 765px;
  `,
};
