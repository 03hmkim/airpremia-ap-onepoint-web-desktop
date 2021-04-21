import React, { FC, useState } from 'react';
import Textarea from './';
import styled from 'styled-components';

export default {
  title: 'desktop / Atoms / Textarea',
  component: Textarea,
  parameters: {
    componentSubtitle: 'Textarea 컴포넌트 Docs',
  },
};

export const textarea: FC = () => {
  const [value, setValue] = useState('');
  return (
    <S.container>
      <Textarea
        value={value}
        placeholder="기타 도움이 필요한 경우 요청 내용을 작성해주세요."
        onChange={setValue}
      />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 700px;
    height: 300px;
  `,
};
