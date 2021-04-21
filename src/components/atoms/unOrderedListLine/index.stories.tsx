import React, { FC, Fragment } from 'react';
import styled from 'styled-components';
import UnOrderedListLine from './';

export default {
  title: 'desktop / Atoms / UnOrderedListLine',
  component: UnOrderedListLine,
  parameters: {
    componentSubtitle: 'UnOrderedListLine 컴포넌트 Docs',
  },
};

export const 순서없는_목록: FC = () => {
  return (
    <S.container>
      <UnOrderedListLine>
        시각, 청각 장애인 안내견을 동반하는 시각장애
        고객님의 경우 안내견 무료 운송
      </UnOrderedListLine>
    </S.container>
  );
};

export const 순서없는_목록_두줄이상: FC = () => {
  return (
    <S.container>
      <UnOrderedListLine>
        <Fragment>
          시각, 청각 장애인 안내견을 동반하는 시각장애
          고객님의 경우 안내견 무료 운송
          <br />
          (단, 공인 인증서 소지 및 Harness 착용하고, 장애
          고객과 동행할 경우에만 기내 탑승 가능)
        </Fragment>
      </UnOrderedListLine>
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
