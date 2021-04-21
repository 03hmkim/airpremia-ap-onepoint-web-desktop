import React, { FC } from 'react';
import AppDownLoadButton1 from '.';

export default {
  title: 'desktop / Molecules / appDownloadButton1',
  component: AppDownLoadButton1,
  parameters: {
    componentSubtitle:
      '네비게이션에 나오는 앱다운로드1 컴포넌트',
  },
};

export const 앱다운로드1: FC = () => {
  return <AppDownLoadButton1 />;
};
