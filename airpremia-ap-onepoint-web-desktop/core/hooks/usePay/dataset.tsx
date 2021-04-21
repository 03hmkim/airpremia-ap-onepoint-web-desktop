import { IIdLabel } from '@airpremia/core/lib/types';

export const payMethodList: IIdLabel[] = [
  {
    id: 'credit',
    label: '신용/체크카드',
  },
  {
    id: 'bank',
    label: '실시간 계좌이체',
  },
  {
    id: 'creditNational',
    label: '해외 발행 신용카드',
  },
  {
    id: 'kakaoPay',
    label: '카카오페이',
  },
];

export const cashReceiptMethodList: IIdLabel[] = [
  {
    id: 'personal',
    label: '개인 소득공제',
  },
  {
    id: 'corporate',
    label: '사업자 지출증빙',
  },
];

export const creditList: IIdLabel[] = [
  {
    id: 'C001',
    label: '롯데카드',
  },
  {
    id: 'C002',
    label: '삼성카드',
  },
  {
    id: 'C003',
    label: '현대카드',
  },
  {
    id: 'C004',
    label: '비씨카드',
  },
  {
    id: 'C005',
    label: '신한카드',
  },
  {
    id: 'C006',
    label: '국민카드',
  },
  {
    id: 'C007',
    label: '하나(외환)',
  },
  {
    id: 'C008',
    label: 'NH농협',
  },
  {
    id: 'C009',
    label: '하나카드',
  },
  {
    id: 'C010',
    label: '씨티카드',
  },
  {
    id: 'C011',
    label: '우리카드',
  },
  {
    id: 'C012',
    label: '광주은행',
  },
  {
    id: 'C013',
    label: '전북은행',
  },
  {
    id: 'C014',
    label: '제주은행',
  },
  {
    id: 'C015',
    label: '수협',
  },
  {
    id: 'C016',
    label: '산업은행',
  },
  {
    id: 'C017',
    label: '저축은행',
  },
  {
    id: 'C018',
    label: '우체국',
  },
  {
    id: 'C019',
    label: '새마을금고',
  },
  {
    id: 'C020',
    label: '하나BC카드',
  },
  {
    id: 'C021',
    label: '신협',
  },
  {
    id: 'C022',
    label: '현대증권',
  },
  {
    id: 'C023',
    label: '교보증권',
  },
  {
    id: 'C024',
    label: '유진투자증권',
  },
  {
    id: 'C025',
    label: 'IBK기업',
  },
];

const creditNationalList: IIdLabel[] = [
  {
    id: 'C101',
    label: 'VISA',
  },
  {
    id: 'C102',
    label: 'MASTER',
  },
  {
    id: 'C103',
    label: 'AMERICANEXPRESS',
  },
  {
    id: 'C104',
    label: 'JCB',
  },
  {
    id: 'C105',
    label: 'UNIONPAY',
  },
];

const installmentListFrom4 = Array(12)
  .fill(true)
  .map((_: any, index: number) => {
    const month = `${index + 4}`;
    return {
      id: month,
      label: `${month}개월`,
    };
  });

export const installmentList: IIdLabel[] = [
  {
    id: '0',
    label: '일시불',
  },
  {
    id: '2',
    label: '2개월 (무이자)',
  },
  {
    id: '3',
    label: '3개월 (무이자)',
  },
  ...installmentListFrom4,
];

export const apgCallbackParameters = [
  'payment_id',
  'card_issuer',
  'card_number',
  'amount',
  'currency',
];

export const apgFallbackParameters = [
  'result_code',
  'result_message',
];

export const apgAppId = 2;

export default {
  payMethodList,
  cashReceiptMethodList,
  creditList,
  creditNationalList,
  installmentList,
  apgCallbackParameters,
  apgFallbackParameters,
  apgAppId,
};
