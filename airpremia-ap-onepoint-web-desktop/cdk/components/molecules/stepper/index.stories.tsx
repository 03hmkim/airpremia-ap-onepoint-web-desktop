import React, { FC, useState } from 'react';
import Stepper from '.';
import styled from 'styled-components';

export default {
  title: 'cdk / Molecules / Stepper',
  component: Stepper,
  parameters: {
    componentSubtitle: 'Stepper 컴포넌트 Docs',
  },
};

export const 숫자_스테퍼: FC = () => {
  const [number, setNumber] = useState<number>(0);

  const onChange = (rightHand: number) => () => {
    setNumber(number + rightHand);
  };

  return (
    <S.container>
      <Stepper
        value={number}
        onMinus={onChange(-1)}
        onPlus={onChange(1)}
        min={0}
        max={7}
      />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 174px;
  `,
};
