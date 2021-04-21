import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import BookingSearchTemplate from '.';
import {
  InquiryForm,
  LinkBarWithImage,
} from 'src/components';

export default {
  title: 'desktop / Templates / BookingSearchTemplate',
  component: BookingSearchTemplate,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '',
  },
};

export const 체크인메인화면: FC = () => {
  return (
    <BookingSearchTemplate
      title="예약 조회"
      inquiryForm={
        <InquiryForm
          needReservationNumber
          title="조회할 여정의 탑승자 정보를 입력해주세요 :-)"
          onClick={() => {}}
        />
      }
      linkBarWithImage={<LinkBarWithImage />}
    />
  );
};
