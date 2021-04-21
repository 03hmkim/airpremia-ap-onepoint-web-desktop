import React, { FC } from 'react';
import InquiryForm from '.';
import styled from 'styled-components';

export default {
  title: 'desktop / Organisms / InquiryForm',
  component: InquiryForm,
  parameters: {
    componentSubtitle: 'InquiryForm 컴포넌트 Docs',
  },
};

export const 조회_폼: FC = () => {
  return (
    <S.container>
      <InquiryForm
        title="조회할 여정의 탑승자 정보를 입력해주세요 :-)"
        needReservationNumber={true}
        onClick={() => {}}
      />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 1200px;
  `,
};
