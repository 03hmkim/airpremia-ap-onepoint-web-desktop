import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Caution from '.';

export default {
  title: 'desktop / Molecules / Caution',
  component: Caution,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '주의사항',
  },
};

const title = '유의사항';
const body = [
  '항공권 운임은 잔여 좌석에 따라 변동됨으로 구매 시점에 따라 실기간으로 변동될 수 있습니다.',
  '항공권 운임은 출발지 국가의 통화로 책정되며, 결제 시에는 해당 환율이 적용됩니다.',
  '항공권 금액은 유류할증료와 공항시설사용료가 포함된 금액입니다.',
  '유류할증료와 공항시설사용료는 예약 시점에 따라 변경될 수 있습니다.',
  '환불 불가 항공권의 경우 결제 시점을 기준으로 24시간 초과 시 환불이 불가한 항공권입니다.',
  '환불 불가 항공권은 모든 구간에 일괄 적용되며, 단일 구간에 적용할 수 없습니다.',
];

export const 주의사항: FC = () => {
  return <Caution title={title} body={body} />;
};
