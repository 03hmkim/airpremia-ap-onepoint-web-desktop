import { EPayReceiptType } from '.';

export const dummyPayReceipt = {
  dataset: [
    {
      type: EPayReceiptType.ITEM,
      label: '항공 운임',
      price: 500000,
      currencyLabel: '원',
    },
    {
      type: EPayReceiptType.ITEM,
      label: '세금 및 제반 요금',
      price: 44000,
      currencyLabel: '원',
    },
    {
      type: EPayReceiptType.ITEM,
      label: '부가서비스 추가 금액',
      price: 0,
      currencyLabel: '원',
    },
    {
      type: EPayReceiptType.SUM,
      label: '총 결제 금액',
      price: 548000,
      currencyLabel: '원',
    },
  ],
  // accruedMileage: 500,
  // disabled: false,
  emptyDescription: '추가한 유료 부가서비스 없음',
  // buttonLabel: '온라인 체크인 완료',
};
