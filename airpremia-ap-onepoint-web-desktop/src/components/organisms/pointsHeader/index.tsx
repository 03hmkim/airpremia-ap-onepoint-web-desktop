import { FC, useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { addComma } from '@airpremia/core/lib/service';
import { ORANGE1 } from '@airpremia/cdk/styles/colors';
/* import IconCharge from 'public/images/ico_charge.svg';
import IconCheckIn from 'public/images/ico-check-in.svg';
import IconCheck from 'public/images/ico_check.svg';
import IconWithText, {
  EIconWithTextType,
} from 'src/components/molecules/IconWithText'; */
import { ifProp } from 'styled-tools';
import { useModal } from 'src/hooks';
import PointsPayMethod from '../pointsPayMethod';
import {
  NewModal,
  PopupTitle,
  PopupDescription,
  SavePointsAfterBoarding,
  SuccessSavePoints,
} from 'src/components';
import { EInputType } from 'src/components/atoms/input';
import { TaskButton } from 'src/components';
import { useMe } from '@airpremia/core/hooks';

interface IProps {
  name?: string;
  points?: number;
  expirationDate?: string | null;
  toBeExpiratedPoints?: number;
}

const PointsHeader: FC<IProps> = ({
  name = '',
  points = 0,
  expirationDate = null,
  toBeExpiratedPoints = 0,
}) => {
  const {
    UIStore: { newModal },
    // onShowNewModal,
  } = useModal();

  const {
    meStore,
    onBuyPoints,
    onSavePointsAfterBoarding,
  } = useMe();
  const {
    isPointsBuyRequest,
    isPointsSaveAfterBoardingSuccess,
  } = meStore;

  const [isSave, setSave] = useState<boolean>(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [chargePoints, setChargePoints] = useState('');
  const [
    selectedPayMethod,
    setSelectedPayMethod,
  ] = useState<string>('credit');

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

  const [isActive, setActive] = useState<boolean>(false);

  const onChangeSave = () => setSave(!isSave);
  const onChangeCashReceipt = () =>
    setIsCashReceipt(!isCashReceipt);

  const pointsData = {
    value: chargePoints,
    target: 'points',
    type: EInputType.NUMBER,
    placeholder: '충전할 마일리지 입력 (1만 단위)',
    maxLength: 20,
    onChange: (e: any) => setChargePoints(e.target.value),
  };

  const phoneNumberData = {
    value: phoneNumber,
    target: 'phoneNumber',
    type: EInputType.NUMBER,
    placeholder:
      selectedCashReceiptMethod === 'personal'
        ? '휴대폰 번호 입력'
        : '사업자 번호',
    maxLength: 15,
    onChange: (e: any) => setPhoneNumber(e.target.value),
  };

  useEffect(() => {
    if (
      Number(chargePoints) >= 10000 &&
      selectedCard !== 'empty' &&
      !isPointsBuyRequest
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [chargePoints, selectedCard, isPointsBuyRequest]);

  const renderModal = () => {
    switch (newModal.target) {
      case 'chargePoints':
        return (
          <NewModal
            title={<PopupTitle>포인트 충전</PopupTitle>}
            body={
              <PointsPayMethod
                isSave={isSave}
                onChangeSave={onChangeSave}
                method={selectedPayMethod}
                onChangeMethod={setSelectedPayMethod}
                card={selectedCard}
                onChangeCard={setSelectedCard}
                cashReceiptMethod={
                  selectedCashReceiptMethod
                }
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
            }
            button={
              <TaskButton
                disabled={!isActive}
                onClick={onBuyPoints}
              >
                결제
              </TaskButton>
            }
          />
        );

      case 'savePoints':
        return (
          <NewModal
            title={
              !isPointsSaveAfterBoardingSuccess ? (
                <S.modalTitle>
                  <PopupTitle>탑승 후 적립</PopupTitle>
                  <PopupDescription>
                    지난 탑승에 대한 마일리지를​ 적립할 수
                    있어요.​
                  </PopupDescription>
                </S.modalTitle>
              ) : (
                <PopupTitle>
                  <Fragment>
                    탑승 후 적립이
                    <br />
                    완료되었습니다 :-)
                  </Fragment>
                </PopupTitle>
              )
            }
            body={
              !isPointsSaveAfterBoardingSuccess ? (
                <SavePointsAfterBoarding
                  onClickSave={onSavePointsAfterBoarding}
                />
              ) : (
                <SuccessSavePoints />
              )
            }
          />
        );
      default:
        return null;
    }
  };

/*   const onClickShowModal = (target: string) => () =>
    onShowNewModal(target); */

  return (
    <S.container>
      {renderModal()}
      <S.left>
        <S.title>
          <b>{name}</b>
          <p>님의 보유 포인트</p>
        </S.title>
        <S.points>
          <h3 className="font-bold">
            {addComma(points)} pp
          </h3>
        </S.points>
        <S.expirationGuide>
          {toBeExpiratedPoints > 0 && expirationDate && (
            <S.guide isShow>
              {moment(expirationDate).format('M월 D일')}에{' '}
              {addComma(toBeExpiratedPoints)} pp 소멸 예정
            </S.guide>
          )}
        </S.expirationGuide>
      </S.left>
      {/* <S.right>
        <S.wrapper
          onClick={onClickShowModal('chargePoints')}
        >
          <IconWithText
            icon={<IconCharge />}
            text="포인트 충전"
            type={EIconWithTextType.HORIZON}
          />
        </S.wrapper>
        <S.wrapper onClick={onClickShowModal('savePoints')}>
          <IconWithText
            icon={<IconCheckIn />}
            text="탑승 후 적립"
            type={EIconWithTextType.HORIZON}
          />
        </S.wrapper>
        <S.wrapper
          onClick={() => {
            alert('준비중입니다.');
          }}
        >
          <IconWithText
            icon={<IconCheck />}
            text="사용 가이드"
            type={EIconWithTextType.HORIZON}
          />
        </S.wrapper>
      </S.right> */}
    </S.container>
  );
};

const S = {
  container: styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  `,

  left: styled.div``,

  right: styled.div`
    display: flex;
    & > div {
      margin-left: 40px;
      cursor: pointer;
    }
  `,

  title: styled.div`
    line-height: 17px;
    font-weight: 600;
    display: flex;
    align-items: flex-end;

    b {
      font-size: 16px;
      letter-spacing: -0.32px;
    }
    p {
      margin-left: 3px;
      font-size: 15px;
      letter-spacing: -0.3px;
    }
  `,

  points: styled.div`
    margin-top: 7px;
    h3 {
      font-size: 32px;
      line-height: 47px;
      letter-spacing: -0.64px;
    }
  `,

  expirationGuide: styled.div`
    height: 22px;
    margin-top: 36px;
  `,

  guide: styled.div<{ isShow: boolean }>`
    font-size: 15px;
    line-height: 17px;
    letter-spacing: -0.3px;
    color: ${ORANGE1};
    font-weight: 600;
    display: ${ifProp('isShow', 'block', 'none')};
  `,

  wrapper: styled.div``,
  modalTitle: styled.div``,
};

export default PointsHeader;