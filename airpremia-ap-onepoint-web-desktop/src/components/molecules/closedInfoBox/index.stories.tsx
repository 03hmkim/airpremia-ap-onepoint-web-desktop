import React, { FC } from 'react';
import ClosedInfoBox from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Molecules / ClosedInfoBox',
  component: ClosedInfoBox,
  parameters: {
    componentSubtitle: 'ClosedInfoBox 컴포넌트 Docs',
  },
};

export const 마감_안내_박스형태: FC = () => {
  return (
    <S.container>
      <ClosedInfoBox
        title="출발지 기내식 신청이 마감되었습니다."
        description="기내식 신청은 출발 72시간 전까지 가능하며, 유료 기내식 및 특별 기내식을 신청하지 않는 경우 일반식으로 제공됩니다."
      />
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
