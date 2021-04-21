import React, { FC } from 'react';
import moment from 'moment';
import AgeCalculater from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Molecules / AgeCalculater',
  component: AgeCalculater,
  parameters: {
    componentSubtitle: 'AgeCalculater 컴포넌트 Docs',
  },
};

export const 나이계산기: FC = () => {
  return (
    <S.container>
      <AgeCalculater baseDate={moment()} />
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 380px;
    height: 353px;
  `,
};
