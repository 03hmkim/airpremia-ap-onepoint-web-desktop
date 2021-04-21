import React, { FC, useState } from 'react';
import NumberStepper from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Molecules / NumberStepper',
  component: NumberStepper,
  parameters: {
    componentSubtitle: 'NumberStepper 컴포넌트 Docs',
  },
};

export const 숫자_스테퍼: FC = () => {
  const [number, setNumber] = useState<number>(0);

  const onChange = (rightHand: number) => () => {
    setNumber(number + rightHand);
  };

  return (
    <S.container>
      <NumberStepper
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
