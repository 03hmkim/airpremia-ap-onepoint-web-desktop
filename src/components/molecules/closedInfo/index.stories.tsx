import React, { FC } from 'react';
import ClosedInfo from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Molecules / ClosedInfo',
  component: ClosedInfo,
  parameters: {
    componentSubtitle: 'ClosedInfo 컴포넌트 Docs',
  },
};

export const 마감_안내: FC = () => {
  const closedTitle =
    '기내 편의 용품 신청이 마감되었습니다.';
  const closedDescription = (
    <div>
      기내 편의용품 신청은 출발 24시간 전까지 가능합니다.
      <br />
      추가 구매는 기내 탑승 후 승무원에게 문의해주세요.
    </div>
  );
  return (
    <S.container>
      <ClosedInfo
        title={closedTitle}
        description={closedDescription}
      ></ClosedInfo>
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
