import React, { FC, useState } from 'react';
import SsrModalMedical, { ISsrModalMedicalInput } from '.';
import styled from 'styled-components';
import { dummySsrModalMedical } from './dummy';

export default {
  title: 'desktop / Organisms / SsrModalMedical',
  component: SsrModalMedical,
  parameters: {
    componentSubtitle: 'SsrModalMedical 컴포넌트 Docs',
  },
};

export const 부가서비스_모달_의료: FC = () => {
  const [inputs, setInputs] = useState<
    ISsrModalMedicalInput[]
  >(dummySsrModalMedical);

  const onChangeInputs = (
    payload: ISsrModalMedicalInput[],
  ) => {
    setInputs(payload);
  };
  return (
    <S.container>
      <SsrModalMedical
        inputs={inputs}
        onChangeInputs={onChangeInputs}
        onClickButton={() => {}}
      />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 800px;
  `,
};
