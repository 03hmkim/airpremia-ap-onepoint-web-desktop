import React, { FC, useState } from 'react';
import SsrInputCheckboxRadio from '.';
import styled from 'styled-components';
import { ESsrInputType } from '.';

export default {
  title: 'desktop / Molecules / SsrInputCheckboxRadio',
  component: SsrInputCheckboxRadio,
  parameters: {
    componentSubtitle:
      '부가서비스 선택시 사용하는 Checkbox, Radio',
  },
};

export const 부가서비스_입력_체크박스: FC = () => {
  const [isActive, setIsActive] = useState(false);

  const onToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <S.container>
      <SsrInputCheckboxRadio
        inputType={ESsrInputType.CHECKBOX}
        isActive={isActive}
        value={0}
        name="프리미엄 기내식"
        description="신선한 재료로 엄선한 프리미엄 식단"
        price={22000}
        onClick={onToggle}
      ></SsrInputCheckboxRadio>
    </S.container>
  );
};

export const 부가서비스_입력_라디오박스: FC = () => {
  const [isActive, setIsActive] = useState(false);

  const onToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <S.container>
      <SsrInputCheckboxRadio
        inputType={ESsrInputType.RADIO}
        isActive={isActive}
        value={0}
        name="프리미엄 기내식"
        description="신선한 재료로 엄선한 프리미엄 식단"
        price={22000}
        onClick={onToggle}
      ></SsrInputCheckboxRadio>
    </S.container>
  );
};

const S = {
  container: styled.div``,
};
