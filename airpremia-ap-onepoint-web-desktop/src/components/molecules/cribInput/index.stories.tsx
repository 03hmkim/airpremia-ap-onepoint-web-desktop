import React, { FC } from 'react';
import CribInput from '.';
import styled from 'styled-components';
import { dummyCribInput } from './dummy';

export default {
  title: 'desktop / Molecules / CribInput',
  component: CribInput,
  parameters: {
    componentSubtitle: 'CribInput 컴포넌트 Docs',
  },
};

export const 유아용침대_입력: FC = () => {
  const onClick = (id: string, action: string) => {
    console.log(id, action);
  };
  return (
    <S.container>
      <CribInput {...dummyCribInput} onClick={onClick} />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 700px;
  `,
};
