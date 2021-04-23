import { get } from 'lodash';
import {
  useEffect,
  useState,
  useMemo,
  useCallback,
} from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import {
  PayTitle,
  PayMethod,
  PayReceipt,
  TicketPayCheckout,
} from 'src/components';
import { useBookingLocal } from 'src/hooks';
import {
  useBooking,
  useScroll,
} from '@airpremia/core/hooks';
import { toggleBoolean } from '@airpremia/core/lib/util';
import { usePay } from '@airpremia/core/hooks';

interface IProps {}

const PayCheckout: NextPage<IProps> = () => {
  const router = useRouter();
  const { upScroll } = useScroll();
  const { onPaySuccess, openPopup, showLoading, hideLoading } = usePay();
  const {
    tripTypeText,
    titleJourneyLabel,
    titlePassengersLabel,
    totalTaxAndFee,
    balanceDue,
    priceDataset,
    voucherPayment,
    isBookingSessionFail,
    getContactInfo,
  } = useBookingLocal();
  const {
    currencyCode,
    onLoadBookingSessionSearch,
    bookingStore,
  } = useBooking();
  const {
    isChangeSellProcess,
  } = bookingStore;


  const [isSavePayMethod, setIsSavePayMethod] = useState(
    false,
  );
  const [
    selectedPayMethod,
    setSelectedPayMethod,
  ] = useState<string>('credit'); // 신용/체크카드
  const [
    selectedCashReceiptMethod,
    setSelectedCashReceiptMethod,
  ] = useState<string>('personal'); // 개인 소득공제
  const [isCashReceipt, setIsCashReceipt] = useState<
    boolean
  >(false);
  const [selectedCard, setSelectedCard] = useState<string>(
    'empty', // 카드사 선택
  );
  const [
    selectedInstallment,
    setSelectedInstallment,
  ] = useState<string>('0'); // 일시불

  const description = useMemo(() => {
    return `${tripTypeText} 항공권 (${titlePassengersLabel})`;
  }, [tripTypeText, titlePassengersLabel]);
  const isSelectedCard = useMemo(() => {
    return selectedCard != 'empty';
  }, [selectedCard]);
  
  let isRedirect = false;
  const receiveMessage = async (e: any) => {
    if (
      get(e, 'data.amount') === undefined &&
      get(e, 'data.message') === undefined
    ) {
      return;
    } else if (get(e, 'data.amount') !== undefined) {
      isRedirect = true;
      await onPaySuccess(e.data, isChangeSellProcess, router);
    } else if (
      !isRedirect &&
      get(e, 'data.message') === 'windowClosed'
    ) {
      await hideLoading();
      return;
    }
  };

  const onPay = useCallback(() => {
    //smartport.mhh 결제 금액 없을 시 고객센터에서 처리
    if (0 >= balanceDue) {
      alert('결제할 금액이 없습니다. \n고객센터에 문의해주세요.')
      return;
    }
    openPopup({
      methodType: selectedPayMethod,
      cardCode: selectedCard,
      title: titleJourneyLabel,
      currency: currencyCode,
      totalAmount: balanceDue,
      taxAmount: totalTaxAndFee,
      productName: description,
      installments: Number(selectedInstallment),
      buyer: getContactInfo.buyer || '',
      email: getContactInfo.email || '',
    });
  }, [
    selectedPayMethod,
    selectedCard,
    selectedInstallment,
  ]);

  const canPay = useMemo(() => {
    switch (selectedPayMethod) {
      case 'credit':
        return isSelectedCard;
      case 'creditNational':
        return isSelectedCard;
      case 'kakaoPay':
        return isSelectedCard;
      case 'bank':
      default:
        return false;
    }
  }, [isSelectedCard, selectedPayMethod]);

  // scroll
  useEffect(() => {
    upScroll();
  }, []);

  useEffect(() => {
    setSelectedCard('empty');
    setSelectedInstallment('0');
  }, [selectedPayMethod]);

  // 결제 postMessage
  useEffect(() => {
    window.addEventListener('message', receiveMessage);
    return () => {
      window.removeEventListener('message', receiveMessage);
    };
  }, []);

  // API
  useEffect(() => {
    onLoadBookingSessionSearch();
  }, []);

  useEffect(() => {
    if (isBookingSessionFail) {
      showLoading();
      alert(
        '진행중인 항공권이 없습니다. \n항공권 예매를 다시 진행해주세요.',
      );
      window.location.replace('/');
    }
  }, [isBookingSessionFail])

  return (
    <S.container>
      <TicketPayCheckout
        title={
          <PayTitle
            title={titleJourneyLabel}
            description={description}
          />
        }
        payMethod={
          <PayMethod
            isSave={isSavePayMethod}
            method={selectedPayMethod}
            cashReceiptMethod={selectedCashReceiptMethod}
            isCashReceipt={isCashReceipt}
            card={selectedCard}
            installment={selectedInstallment}
            onChangeSave={toggleBoolean(
              setIsSavePayMethod,
              isSavePayMethod,
            )}
            onChangeMethod={setSelectedPayMethod}
            onChangeCashReceiptMethod={
              setSelectedCashReceiptMethod
            }
            onChangeCard={setSelectedCard}
            onChangeInstallment={setSelectedInstallment}
            onChangeCashReceipt={toggleBoolean(
              setIsCashReceipt,
              isCashReceipt,
            )}
            voucherPayment={voucherPayment}
          />
        }
        receipt={
          <PayReceipt
            dataset={priceDataset}
            buttonLabel="결제"
            disabled={!canPay}
            onClick={onPay}
          />
        }
      />
    </S.container>
  );
};

const S = {
  container: styled.div`
  `,
};

export default PayCheckout;
