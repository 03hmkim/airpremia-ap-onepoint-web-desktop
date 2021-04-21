import React, { FC, useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import TicketPassenger from '.';
import {
  BoardingPersonInfo,
  BookingPersonInfo,
  EuCitizenRadio,
  Caution,
} from 'src/components';
import { TaskButton } from 'src/components';

export default {
  title: 'desktop / Templates / TicketPassenger',
  component: TicketPassenger,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'TicketPassenger',
  },
};

export const 탑승자정보입력: FC = () => {
  const [hasEUCitizen, setHasEUCitizen] = useState(false);
  const title = '유의사항';
  const body = [
    '탑승자의 이름과 휴대폰 번호를 기준으로 포인트가 적립됩니다.',
    '예약 후 탑승자 이름 변경 시 n만원의 수수료가 부과됩니다.',
  ];

  return (
    <TicketPassenger
      boardingPersonInfo={<BoardingPersonInfo />}
      bookingPersonInfo={
        <BookingPersonInfo
          userPhone={'+82 1012345678'}
          userEmail={'test@airpremia.com'}
        />
      }
      euCitizenRadio={
        <EuCitizenRadio
          hasEUCitizen={hasEUCitizen}
          onChange={setHasEUCitizen}
        />
      }
      taskButton={<TaskButton>다음</TaskButton>}
      caution={<Caution title={title} body={body} />}
    />
  );
};
