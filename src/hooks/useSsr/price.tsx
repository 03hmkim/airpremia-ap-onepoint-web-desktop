import { useMemo } from 'react';
import { EPayReceiptType } from '../../components/organisms/payReceipt';
import { flow, get } from 'lodash/fp';
import useSsr from './useSsr';

export default () => {
  const { ssrStore } = useSsr();

  const totalFarePrice = useMemo(() => {
    return flow(get('totalFarePrice'))(ssrStore);
  }, [ssrStore.totalFarePrice]);

  const totalFarePriceDiscount = useMemo(() => {
    return flow(get('totalFarePriceDiscount'))(ssrStore);
  }, [ssrStore.totalFarePriceDiscount])

  const totalTaxAndFee = useMemo(() => {
    return flow(get('totalTaxAndFee'))(ssrStore);
  }, [ssrStore.totalTaxAndFee]);

  const totalSsrPrice = useMemo(() => {
    return flow(get('totalSsrPrice'))(ssrStore);
  }, [ssrStore.totalSsrPrice]);
  
  const totalPromotionDiscount = useMemo(() => { //smartport.mhh 프로모션 추가
    return flow(get('totalPromotionDiscount'))(ssrStore);
  }, [ssrStore.totalPromotionDiscount]);

  const balanceDue = useMemo(() => {
    return flow(get('balanceDue'))(ssrStore);
  }, [ssrStore.balanceDue]);

  const priceDataset = useMemo(() => {
    return [
      {
        type: EPayReceiptType.ITEM,
        label: '항공 운임',
        price: totalFarePrice,
        currencyLabel: '원',
      },
      {
        type: EPayReceiptType.ITEM,
        label: '세금 및 제반 요금',
        price: totalTaxAndFee,
        currencyLabel: '원',
      },
      {
        type: EPayReceiptType.ITEM,
        label: '부가서비스 추가 금액',
        price: totalSsrPrice,
        currencyLabel: '원',
      },
      {
        type: EPayReceiptType.ITEM,
        label: '운임 할인 금액',
        minus: '(-)',
        price: totalFarePriceDiscount,
        currencyLabel: '원',
      },
      {
        type: EPayReceiptType.ITEM,
        label: '프로모션 할인 금액',
        minus: '(-)',
        price: totalPromotionDiscount,
        currencyLabel: '원',
      },
      {
        type: EPayReceiptType.SUM,
        label: '총 결제 금액',
        price: balanceDue,
        currencyLabel: '원',
      },
    ];
  }, [
    totalFarePrice,
    totalTaxAndFee,
    totalSsrPrice,
    balanceDue,
  ]);

  return {
    priceDataset,
    totalFarePrice,
    totalTaxAndFee,
    totalSsrPrice,
    balanceDue,
  };
};
