import React, { FC, Fragment } from 'react';
import Title from './';
import styled from 'styled-components';

export default {
  title: 'desktop / Atoms / Title',
  component: Title,
  parameters: {
    componentSubtitle: '페이지의 Title',
  },
};

export const 타이틀: FC = () => {
  return (
    <S.container>
      <Title>
        <Fragment>
          나에게 필요한 여행 옵션을
          <br />
          관리 해보세요 :-)
        </Fragment>
      </Title>
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
