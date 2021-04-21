import React, { FC, useState } from 'react';
import PassengerButton from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Molecules / PassengerButton',
  component: PassengerButton,
  parameters: {
    componentSubtitle:
      '부가서비스 선택시 나오는 승객버튼 컴포넌트',
  },
};

export const 승객버튼: FC = () => {
  const [isActive, setisActive] = useState(false);

  const onToggle = () => {
    setisActive(!isActive);
  };

  return (
    <S.container>
      <PassengerButton
        isActive={isActive}
        name="KYU HOON"
        label="기본 제공"
        onClick={onToggle}
        value={0}
      />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 250px;
    padding: 30px;
  `,
};
