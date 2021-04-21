import React, { FC, useState } from 'react';
import SsrCheckbox from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Molecules / SsrCheckbox',
  component: SsrCheckbox,
  parameters: {
    componentSubtitle:
      '부가서비스 - 임산부 승객 선택시 나오는 보더있는 체크박스',
  },
};

export const 부가서비스_체크박스: FC = () => {
  const [isActive, setisActive] = useState(false);

  const onToggle = () => {
    setisActive(!isActive);
  };

  return (
    <S.container>
      <SsrCheckbox isActive={isActive} onClick={onToggle}>
        YUNJUNG SEO
      </SsrCheckbox>
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 700px;
  `,
};
