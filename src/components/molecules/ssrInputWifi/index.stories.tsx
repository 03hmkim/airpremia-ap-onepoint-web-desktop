import React, { FC, useState } from 'react';
import SsrInputWifi from '.';
import styled from 'styled-components';
import ImageWifi10 from 'public/images/img_bookflight_wifi_10.svg';

export default {
  title: 'desktop / Molecules / SsrInputWifi',
  component: SsrInputWifi,
  parameters: {
    componentSubtitle: 'SsrInputWifi(radio) 컴포넌트 Docs',
  },
};

export const 부가서비스_입력_와이파이: FC = () => {
  const [isActive, setIsActive] = useState(false);

  const onToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <S.container>
      <SsrInputWifi
        isActive={isActive}
        onClick={onToggle}
        image={<ImageWifi10 />}
        value="0"
        price={0}
      ></SsrInputWifi>
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
