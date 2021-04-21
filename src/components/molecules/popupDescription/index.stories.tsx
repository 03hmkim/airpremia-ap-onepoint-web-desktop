import React, { FC, Fragment } from 'react';
import PopupDescription from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Molecules / PopupDescription',
  component: PopupDescription,
  parameters: {
    componentSubtitle: 'PopupDescription 컴포넌트 Docs',
  },
};

export const 팝업제목설명: FC = () => {
  return (
    <S.container>
      <PopupDescription>
        <Fragment>
          휴대폰 번호를 입력해주세요.
          <br />
          항공권 예약 정보나 스케줄 변동이 생겼을 때
          알려드려요.
        </Fragment>
      </PopupDescription>
    </S.container>
  );
};
const S = {
  container: styled.div``,
};
