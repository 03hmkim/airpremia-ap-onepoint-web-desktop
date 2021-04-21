import React, { FC, useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import PointsPayMethod from './';
import { EInputType } from 'src/components/atoms/input';

export default {
  title: 'desktop / Organisms / PointsPayMethod',
  component: PointsPayMethod,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'PointsPayMethod',
  },
};

export const 포인트결제방법: FC = () => {
  const [isSave, setSave] = useState<boolean>(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [points, setPoints] = useState('');
  const [
    selectedPayMethod,
    setSelectedPayMethod,
  ] = useState<string>('bank');

  const [selectedCard, setSelectedCard] = useState<string>(
    'empty',
  );

  const [
    selectedCashReceiptMethod,
    setSelectedCashReceiptMethod,
  ] = useState<string>('personal'); // 개인 소득공제

  const [isCashReceipt, setIsCashReceipt] = useState<
    boolean
  >(false);

  const [
    selectedInstallment,
    setSelectedInstallment,
  ] = useState<string>('0'); // 일시불

  const onChangeSave = () => setSave(!isSave);
  const onChangeCashReceipt = () =>
    setIsCashReceipt(!isCashReceipt);

  const pointsData = {
    value: points,
    target: 'points',
    type: EInputType.NUMBER,
    placeholder: '충전할 마일리지 입력 (1만 단위)',
    maxLength: 20,
    onChange: (e: any) => setPoints(e.target.value),
  };

  const phoneNumberData = {
    value: phoneNumber,
    target: 'phoneNumber',
    type: EInputType.NUMBER,
    placeholder: '휴대폰 번호 입력',
    maxLength: 15,
    onChange: (e: any) => setPhoneNumber(e.target.value),
  };

  return (
    <PointsPayMethod
      isSave={isSave}
      onChangeSave={onChangeSave}
      method={selectedPayMethod}
      onChangeMethod={setSelectedPayMethod}
      card={selectedCard}
      onChangeCard={setSelectedCard}
      cashReceiptMethod={selectedCashReceiptMethod}
      onChangeCashReceiptMethod={
        setSelectedCashReceiptMethod
      }
      isCashReceipt={isCashReceipt}
      onChangeCashReceipt={onChangeCashReceipt}
      installment={selectedInstallment}
      onChangeInstallment={setSelectedInstallment}
      pointsData={pointsData}
      phoneNumberData={phoneNumberData}
    />
  );
};
