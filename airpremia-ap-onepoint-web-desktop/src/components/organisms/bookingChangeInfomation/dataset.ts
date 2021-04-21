import { BLUE1, RED2 } from '@airpremia/cdk/styles/colors';

export const changeFeelist = [
  { condition: '출발 90일 전', fee: '0%' },
  { condition: '출발 30 - 89일 전', fee: '10%' },
  { condition: '출발 15 - 29일 전', fee: '20%' },
  { condition: '출발 3 - 14일 전', fee: '30%' },
  { condition: '출발 2일 전 -', fee: '50%' },
  {
    condition: '출발 이후',
    fee:
      'No - Show 위약금 지불 후 50% (포인트 결제 시 위약금 포함 60%)',
  },
];

export const ssrRefundList = [
  {
    title: '모든 부가서비스',
    condition: '출발 72시간 이전 취소/환불',
    option: '환불 가능',
    optionColor: BLUE1,
  },
  {
    title: '유료 기내식',
    condition: '출발 72시간 이전 취소/환불',
    option: '환불 불가',
    optionColor: RED2,
  },
  {
    title:
      '위탁 수하물, 유료 좌석, 유료 간식/주류, 기내 Wi-Fi,  기내 편의 용품',
    condition: '출발 24시간 이전 취소/환불',
    option: '환불 불가',
    optionColor: RED2,
  },
];

export const caution = {
  title: '예약 취소 유의사항',

  descriptions: [
    '온라인 체크인 신청을 완료하시면 출발 24시간 전에 자동으로 체크인이 완료되며, 입력하신 휴대전화 번호로 탑승권이 전송됩니다.',
    '온라인 체크인 신청 완료 후에도 좌석 변경 및 항공편 변경이 가능합니다.',
    '입력한 여권 정보가 부정확하거나 유효하지 않을 경우 출/도착지 사전 심사결과에 따라 탑승권 발급이 불가할 수도 있습니다.',
  ],
};

export const fee = {
  title: '예약 변경 수수료',

  descriptions: [
    '취소 시 운임에서 아래 금액을 수수료로 감액하고 환불됩니다.',
    '유류할증료, 공항 사용료 금액은 100% 환불됩니다.',
  ],
};

export const ssr = {
  title: '부가서비스 환불 규정',

  descriptions: [
    '출발 72시간 이전에 예약 변경 시, 전체 부가서비스 취소, 환불이 가능하며 72시간 이내에 예약 변경 시 시점에 따라 환불 불가한 항목이 있을 수 있습니다.',
  ],
};
