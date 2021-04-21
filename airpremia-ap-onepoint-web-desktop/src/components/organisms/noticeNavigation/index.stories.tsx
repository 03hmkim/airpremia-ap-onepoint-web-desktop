import React, { FC } from 'react';
import NoticeNavigation from '.';
import styled from 'styled-components';
import { dummyNoticeNavigation } from './dummy';

export default {
  title: 'desktop / Molecules / NoticeNavigation',
  component: NoticeNavigation,
  parameters: {
    componentSubtitle:
      '홈 페이지에서 사용하는 NoticeNavigation 컴포넌트',
  },
};

export const 공지사항_네비게이션: FC = () => {
  return (
    <S.container>
      <NoticeNavigation {...dummyNoticeNavigation} />
    </S.container>
  );
};

const S = {
  container: styled.div``,
};
