import React, { FC } from 'react';
import styled from 'styled-components';
import AppDownLoadButton2 from '.';

export default {
  title: 'desktop / Molecules / appDownloadButton2',
  component: AppDownLoadButton2,
  parameters: {
    componentSubtitle:
      '예약 완료 페이지에 나오는 앱다운로드버튼2 컴포넌트',
  },
};

export const 앱다운로드버튼2: FC = () => {
  return (
    <S.container>
      <AppDownLoadButton2 />
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 1200px;
  `,
};
