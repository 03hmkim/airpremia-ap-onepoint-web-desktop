import React, { FC, useState } from 'react';
import SsrInputBaggage from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Molecules / SsrInputBaggage',
  component: SsrInputBaggage,
  parameters: {
    componentSubtitle: 'SsrInputBaggage 컴포넌트 Docs',
  },
};

export const 부가서비스_입력_위탁수하물: FC = () => {
  const [count, setCount] = useState(0);
  const onChange = (payload: number) => {
    setCount(payload);
  };
  return (
    <S.container>
      <SsrInputBaggage
        isDefault={false}
        label="위탁 수하물 23kg"
        price={35000}
        count={count}
        min={0}
        max={7}
        onChange={onChange}
      />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 492px;
  `,
};
