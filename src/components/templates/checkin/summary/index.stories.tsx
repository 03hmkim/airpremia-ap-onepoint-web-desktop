import React, { FC, Fragment } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  ContainerTitle,
  ReservationSummary,
} from 'src/components';

import CheckinSummaryTemplate from '.';
import { TaskButton } from 'src/components';
import { BLUE1 } from '@airpremia/cdk/styles/colors';

export default {
  title: 'desktop / Templates / CheckinSummaryTemplate',
  component: CheckinSummaryTemplate,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'CheckinSummaryTemplate',
  },
};

export const 온라인체크인완료템플릿: FC = () => {
  return (
    <CheckinSummaryTemplate
      header={
        <ContainerTitle
          title={
            <Fragment>
              온라인 체크인 신청이
              <br />
              완료되었습니다 :-)
            </Fragment>
          }
          description="탑승 24시간 전에 탑승권이 자동으로 발급됩니다."
        />
      }
      body={
        <ReservationSummary
          ticketTitle="[왕복] 서울/인천 － 하노이 항공권"
          passengers="성인 1, 유아 1"
          reservationNumber="AP1234"
        />
      }
      button={
        <Fragment>
          <TaskButton backgroundColor={BLUE1}>
            홈
          </TaskButton>
          <TaskButton backgroundColor={BLUE1}>
            예약상세
          </TaskButton>
        </Fragment>
      }
    />
  );
};
