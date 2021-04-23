import { flow, map, get, concat } from 'lodash/fp';
import React, {
  useState,
  useCallback,
  useMemo,
  Fragment,
} from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import {
  Checkbox,
  SubTitle,
  Select,
  Input,
  PopupTitle,
  NewModal,
  PopupDescription,
  TaskButton,
} from 'src/components';

import { BankThumbnail } from 'src/components';
import {
  DARK_GRAY1,
  LIGHT_GRAY6,
  LIGHT_GRAY1,
  WHITE1,
  RED2,
  LIGHT_GRAY5,
} from '@airpremia/cdk/styles/colors';
import { ESelectPosition } from 'src/components/molecules/select';
import {
  getLabelInList,
  toggleBoolean,
} from '@airpremia/core/lib/util';
import {
  usePay,
  useBooking,
  useAuth,
  useLoading,
} from '@airpremia/core/hooks';
import { IIdLabel } from '@airpremia/core/lib/types';
import { getVoucherInfo } from '@airpremia/core/api/booking/session';
import { EInputType } from 'src/components/atoms/input';
import { ifProp } from 'styled-tools';
import OneLineBox from 'src/components/molecules/oneLineBox';
import { useModal } from 'src/hooks';
import { EScrollType } from 'src/components/templates/centerPopup';

interface IStyleProps {
  isActive?: boolean;
}

interface IProps extends IStyleProps {
  /** 결제 수단 저장 유무 */
  isSave: boolean;
  /** 결제 수단 타입 */
  method: string;
  /** 현금영수증 방법 타입 */
  cashReceiptMethod?: string;
  /** 현금영수증 발행 신청 유무 */
  isCashReceipt?: boolean;
  /** 카드 번호 */
  card: string;
  /** 할부 */
  installment: string;
  onChangeSave: () => void;
  onChangeMethod: (payload: string) => void;
  onChangeCashReceiptMethod?: (payload: string) => void;
  onChangeCard: (payload: string) => void;
  onChangeInstallment: (payload: string) => void;
  onChangeCashReceipt?: () => void;
  voucherPayment?: [];
}

function PayMethod({
  isSave,
  method,
  cashReceiptMethod,
  isCashReceipt,
  card,
  installment,
  onChangeSave,
  onChangeMethod,
  onChangeCashReceiptMethod,
  onChangeCard,
  onChangeInstallment,
  onChangeCashReceipt,
  voucherPayment,
}: IProps) {
  const {
    payMethodList,
    cashReceiptMethodList,
    creditList,
    creditNationalList,
    installmentList,
  } = usePay();
  const { onAddVoucherPayment, onDeleteVoucherPayment } = useBooking();
  const { isLoading, showLoading, hideLoading } = useLoading();

  const [isOpenMenuPayMethod, setIsOpenMenuPayMethod] = useState<boolean>(false);
  const [isOpenMenuCashReceiptMethod, setIsOpenMenuCashReceiptMethod] = useState<boolean>(false);
  const [isOpenMenuCard, setIsOpenMenuCard] = useState<boolean>(false);
  const [isOpenMenuInstallments, setIsOpenMenuInstallments] = useState<boolean>(false);

  const selectedPayMethodLabel = useMemo(() => {
    return flow(getLabelInList(method))(payMethodList);
  }, [method]);

  const selectedCashReceiptMethodLabel = useMemo(() => {
    return flow(getLabelInList(cashReceiptMethod))(
      cashReceiptMethodList,
    );
  }, [cashReceiptMethod]);

  const selectedCardLabel = useMemo(() => {
    return flow(
      concat(creditNationalList),
      getLabelInList(card),
    )(creditList);
  }, [card, creditList, creditNationalList]);

  const selectedInstallmentsLabel = useMemo(() => {
    return flow(getLabelInList(installment))(
      installmentList,
    );
  }, [installment]);
  
  const getPayMethodButtons = useMemo(() => {
    return flow(
      map((payMethod: IIdLabel) => {
        return (
          <div
            key={payMethod.id}
            className="buttonWrapper"
            data-id={payMethod.id}
          >
            <button>{payMethod.label}</button>
          </div>
        );
      }),
    )(payMethodList);
  }, [payMethodList]);

  const getCashReceiptMethodButtons = useMemo(() => {
    return flow(
      map((cashReceiptMethod: IIdLabel) => {
        return (
          <div
            className="buttonWrapper"
            data-id={cashReceiptMethod.id}
          >
            <button>{cashReceiptMethod.label}</button>
          </div>
        );
      }),
    )(cashReceiptMethodList);
  }, [cashReceiptMethodList]);

  const getCardButtons = useCallback((list: IIdLabel[]) => {
    return flow(
      map((card: IIdLabel) => {
        return (
          <div
            key={card.id}
            data-id={card.id}
            className="buttonWrapper"
          >
            <button>
              <div className="thumbnail">
                <BankThumbnail code={card.id} />
              </div>
              <div className="label">{card.label}</div>
            </button>
          </div>
        );
      }),
    )(list);
  }, []);

  const getInstallmentsButtons = useMemo(() => {
    return flow(
      map((installment: IIdLabel) => {
        return (
          <div
            key={installment.id}
            className="buttonWrapper"
            data-id={installment.id}
          >
            <button>{installment.label}</button>
          </div>
        );
      }),
    )(installmentList);
  }, [installmentList]);

  // TODO 뒷 함수와 함칠 수 있을듯(Composition, curry)
  const onChangePayMethodLocal = useCallback((e) => {
    flow(get('target.dataset.id'), onChangeMethod)(e);
    setIsOpenMenuPayMethod(false);
  }, []);

  const onChangeCashReceiptMethodLocal = useCallback(
    (e) => {
      if (typeof onChangeCashReceiptMethod != 'function')
        return false;
      flow(
        get('target.dataset.id'),
        onChangeCashReceiptMethod,
      )(e);
      setIsOpenMenuCashReceiptMethod(false);
    },
    [],
  );

  const onChangeCardLocal = useCallback((e: any) => {
    flow(get('target.dataset.id'), onChangeCard)(e);
    setIsOpenMenuCard(false);
  }, []);

  const onChangeInstallmentsLocal = useCallback(
    (e: any) => {
      flow(
        get('target.dataset.id'),
        onChangeInstallment,
      )(e);
      setIsOpenMenuInstallments(false);
    },
    [],
  );

  const onOpenCardInfo = () => {
    // TODO '제휴 카드 및 무이자 할부 안내' 클릭
  };
  
  
  /** 바우처 S */
  const { authStore } = useAuth();
  const [voucher, setVoucher] = useState('');
  const [voucherErrorMsg, setVoucherErrorMsg] = useState('');

  //login modal
  const {
    onShowNewModal,
    UIStore: { newModal },
  } = useModal();

  const router = useRouter();
  const onClickLogin = () => {
    router.push('/auth/login');
  }

  // TODO: floatingFoldableItinerary modal과 통합 필요
  const onClickModal = () => {
    switch (newModal.target) {
      case 'promotion_login':
        return (
          <NewModal
            className="min hAuto"
            type={EScrollType.TYPE1}
            title={
              <S.modalTitle>
                <PopupTitle>에어프레미아 회원이십니까?</PopupTitle>
                <PopupDescription>로그인을 하시면 쿠폰을 이용하실 수 있습니다.</PopupDescription>
              </S.modalTitle>
            }
            body={
              <S.modalBody>
                <TaskButton onClick={onClickLogin}>
                  로그인 하기
                </TaskButton>
              </S.modalBody>
            }
          />
        );
      default:
        return null;
    }
  };


  const onAdoptVoucher = async () => {

    try {
      if (!authStore.isLogIn) {
        onShowNewModal('promotion_login');
        return;
      }

      if (voucherPayment) {
        setVoucherErrorMsg('이미 등록된 쿠폰이 있습니다.');
        return;
      }
      
      await showLoading();
      setVoucher('');
      setVoucherErrorMsg('');
      const data = await getVoucherInfo(voucher);

      // catch 에서 처리... 지워도 될듯
      if(data?.hasOwnProperty('message')) {
        if (data.message == 'nsk-server:VoucherNotFound') {
          setVoucherErrorMsg('해당 쿠폰을 찾을 수 없습니다.')
          return;
        } else if (data.message == 'nsk:Booking:NoBookingInState') {
          alert(
            '진행중인 항공권이 없습니다. \n항공권 예매를 다시 진행해주세요.',
          );
          window.location.replace('/');
        } else return;
      } else {

        const { status } = data;
        let error = undefined;
        switch (status) {
          case 'Available':
            break;
          case 'Redeemed':
            error = '이미 사용된 쿠폰 코드 입니다.';
            break;
          case 'Expired':
            error = '만료된 쿠폰 코드 입니다.';
            break;
          case 'Void':
          default:
            error = status;
        }

        if (error) {
          setVoucherErrorMsg(error);
          hideLoading();
          return;
        } else {
          await onAddVoucherPayment(data);
          await hideLoading();
        }
      }
    } catch (e) {
      const message = e.response.data.message;
      await hideLoading();
      if (message == 'nsk-server:VoucherNotFound') {
        setVoucherErrorMsg('해당 쿠폰을 찾을 수 없습니다.')
        hideLoading();
        return;
      } else if (message == 'nsk:Booking:NoBookingInState') {
        alert(
          '진행중인 항공권이 없습니다. \n항공권 예매를 다시 진행해주세요.',
        );
        showLoading();
        window.location.replace('/');
      } else throw e;
    }
  };

  const onDeleteVoucher = async () => {
    try {
      const payload = { ...voucherPayment };
      await showLoading();
      await onDeleteVoucherPayment(payload);
    } catch (e) {
      if (isLoading) hideLoading();
      const message = e.response.data.message;
      if (message == 'nsk:Booking:NoBookingInState') {
        alert(
          '진행중인 항공권이 없습니다. \n항공권 예매를 다시 진행해주세요.',
        );
      }
      showLoading();
      window.location.replace('/');
    } 
  }
  
  const voucherPaymentLabel = useMemo(() => {
    const voucherCode = flow(get('voucherCodeText'))(
      voucherPayment,
    );
    //return voucherCode ? voucherCode : '';
    return voucherCode ? (
      <div className="voucher">
        <OneLineBox onClose={onDeleteVoucher}>
          {voucherCode}
        </OneLineBox>
      </div>
    ) : null;
  }, [voucherPayment]);

  /** 바우처 E */

  return (
    <S.container>
      {onClickModal()}
      <div className="subtitleWrapper">
        <SubTitle>결제 방법</SubTitle>
        <div className="cardInfoButtonWrapper">
          <button onClick={onOpenCardInfo}>
            제휴 카드 및 무이자 할부 안내
          </button>
        </div>
      </div>
      <div className="methodWrapper">
        <div className="row">
          <div className="label">결제수단</div>
          <div className="value">
            <Select
              position={ESelectPosition.DOWN}
              isShowMenu={isOpenMenuPayMethod}
              onClick={toggleBoolean(
                setIsOpenMenuPayMethod,
                isOpenMenuPayMethod,
              )}
              label={selectedPayMethodLabel}
            >
              <div
                className="selectButtonsWrapper"
                onClick={onChangePayMethodLocal}
              >
                {getPayMethodButtons}
              </div>
            </Select>
          </div>
          {method == 'bank' && (
            <div className="cashReceiptWrapper">
              <Checkbox
                isActive={
                  isCashReceipt ? isCashReceipt : false
                }
                onChange={onChangeCashReceipt}
              >
                현금영수증 발행 신청
              </Checkbox>
            </div>
          )}
        </div>
        {method == 'credit' && (
          <Fragment>
            <div className="row">
              <div className="label">카드사</div>
              <div className="value">
                <Select
                  position={ESelectPosition.DOWN}
                  isShowMenu={isOpenMenuCard}
                  onClick={toggleBoolean(
                    setIsOpenMenuCard,
                    isOpenMenuCard,
                  )}
                  label={selectedCardLabel}
                  placeholder="카드사 선택"
                >
                  <div
                    className="selectButtonsWrapper"
                    onClick={onChangeCardLocal}
                  >
                    {getCardButtons(creditList)}
                  </div>
                </Select>
              </div>
            </div>
            <div className="row">
              <div className="label">할부기간</div>
              <div className="value">
                <Select
                  position={ESelectPosition.DOWN}
                  isShowMenu={isOpenMenuInstallments}
                  onClick={toggleBoolean(
                    setIsOpenMenuInstallments,
                    isOpenMenuInstallments,
                  )}
                  label={selectedInstallmentsLabel}
                >
                  <div
                    className="selectButtonsWrapper"
                    onClick={onChangeInstallmentsLocal}
                  >
                    {getInstallmentsButtons}
                  </div>
                </Select>
              </div>
            </div>
          </Fragment>
        )}
        {method == 'bank' && isCashReceipt && (
          <div className="row">
            <div className="label">현금영수증 발행</div>
            <div className="value">
              <Select
                position={ESelectPosition.DOWN}
                isShowMenu={isOpenMenuCashReceiptMethod}
                onClick={toggleBoolean(
                  setIsOpenMenuCashReceiptMethod,
                  isOpenMenuCashReceiptMethod,
                )}
                label={selectedCashReceiptMethodLabel}
              >
                <div
                  className="selectButtonsWrapper"
                  onClick={onChangeCashReceiptMethodLocal}
                >
                  {getCashReceiptMethodButtons}
                </div>
              </Select>
            </div>
          </div>
        )}
        {method == 'creditNational' && (
          <Fragment>
            <div className="row">
              <div className="label">카드사</div>
              <div className="value">
                <Select
                  position={ESelectPosition.DOWN}
                  isShowMenu={isOpenMenuCard}
                  onClick={toggleBoolean(
                    setIsOpenMenuCard,
                    isOpenMenuCard,
                  )}
                  label={selectedCardLabel}
                  placeholder="카드사 선택"
                >
                  <div
                    className="selectButtonsWrapper"
                    onClick={onChangeCardLocal}
                  >
                    {getCardButtons(creditNationalList)}
                  </div>
                </Select>
              </div>
            </div>
            <div className="row">
              <div className="label">할부기간</div>
              <div className="value">
                <Select
                  position={ESelectPosition.DOWN}
                  isShowMenu={isOpenMenuInstallments}
                  onClick={toggleBoolean(
                    setIsOpenMenuInstallments,
                    isOpenMenuInstallments,
                  )}
                  label={selectedInstallmentsLabel}
                >
                  <div
                    className="selectButtonsWrapper"
                    onClick={onChangeInstallmentsLocal}
                  >
                    {getInstallmentsButtons}
                  </div>
                </Select>
              </div>
            </div>
          </Fragment>
        )}
      </div>
      {
        isSave &&
        <div className="checkboxWrapper">
          <Checkbox isActive={isSave} onChange={onChangeSave}>
            <div className="label">선택한 결제 방법 저장</div>
          </Checkbox>
        </div>
      }
      <div className="promotionCouponWrapper">
        <div className="row">
          <div className="label">쿠폰 코드</div>
          <div className="valueWrapper">
            <div className="value">
              <Input
                value={voucher ? voucher : ''}
                target="voucher"
                type={EInputType.TEXT}
                placeholder="쿠폰 코드 입력"
                onChange={(e: any) => setVoucher(e.target.value)}
              />
              {voucherErrorMsg && (
                <S.errorMessage>
                  {voucherErrorMsg}
                </S.errorMessage>
              )}
            </div>
            <div className="buttonWrapper">
              <S.adoptButton
                onClick={onAdoptVoucher}
                isActive={voucher ? true : false}
              >
                적용
              </S.adoptButton>
            </div>
          </div>
        </div>
        {/* {voucherPaymentLabel && (
          <div className="voucher">
            <OneLineBox onClose={onDeleteVoucher}>{voucherPaymentLabel}</OneLineBox>
          </div>
        )} */}
        {voucherPaymentLabel}
      </div>
    </S.container>
  );
}

PayMethod.defaultProps = {};

const S = {
  container: styled.div`
    .subtitleWrapper {
      position: relative;
      border-top: 2px solid ${DARK_GRAY1};
      padding-top: 30px;
      .cardInfoButtonWrapper {
        position: absolute;
        top: 33px;
        right: 0;
        button {
          font-size: 12px;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: -0.24px;
          border-bottom: 1px solid ${DARK_GRAY1};
        }
      }
    }
    .methodWrapper {
      padding: 30px 0 10px;
    }
    .row {
      position: relative;
      display: flex;
      align-items: center;
      padding: 20px 0;
      border-bottom: 1px solid ${LIGHT_GRAY6};
      font-size: 15px;
      letter-spacing: -0.3px;
      color: ${DARK_GRAY1};

      .label {
        width: 160px;
      }
      .value {
        padding-left: 40px;
        font-weight: 600;
      }
    }
    .checkboxWrapper {
      display: flex;
      align-items: center;
      padding: 10px 0;
      .label {
        padding-left: 5px;
        font-weight: 600;
      }
    }
    .promotionCouponWrapper {
      padding-top: 40px;
      .promotion {
        padding: 10px 0;
      }
      .voucher {
        padding: 10px 0;
      }
    }
    .valueWrapper {
      flex: 1;
      position: relative;
      .buttonWrapper {
        position: absolute;
        bottom: 0;
        right: 0;
      }
      button {
        border-radius: 15px;
        border: solid 1px ${LIGHT_GRAY6};
      }
    }
    .selectButtonsWrapper {
      width: 400px;
      max-height: 209.8px;
      overflow: auto;
      padding: 15px 0;
      top: 20px;
      left: -30px;
      .buttonWrapper {
        display: flex;
        align-items: center;
        height: 50px;
        padding-left: 25px;
        button {
          pointer-events: none;
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
          text-align: left;
          font-size: 14px;
          font-weight: 600;
          .label {
            padding-left: 8px;
          }
        }
        &:hover {
          background-color: ${LIGHT_GRAY1};
        }
      }
    }
    .cashReceiptWrapper {
      position: absolute;
      top: 19px;
      right: 0;
    }

    @media only screen and (max-width: 767px) { 
      .row {
        .label {
          width: 90px;
          word-break: keep-all;
          line-height: 1.5em;
        }
        .value {
          padding-left: 10px;
          line-height: 1.5em;
          input {
            font-size: 14px;
          } 
        }
      }
      .selectButtonsWrapper {
        width: 200px;

        .buttonWrapper {
          height: 40px;
          padding-left: 15px;

          button {
            font-size: 14px;
          }
        }
      }
    }

    @media only screen and (max-width: 479px) {
      .cashReceiptWrapper {
        width: 90px;
        top: 8px;
      }
    }
  `,
  adoptButton: styled.button<IStyleProps>`
    display: flex;
    align-items: center;
    height: 30px;
    padding: 0 19px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    border-radius: 15px;
    border: 1px solid;
    cursor: ${ifProp('isActive', 'pointer', 'default')};
    pointer-events: ${ifProp(
      'isActive',
      'initial',
      'none',
    )};
    font-weight: 600;  
    background-color: ${ifProp(
      'isActive',
      WHITE1,
      LIGHT_GRAY1,
    )};
    color: ${ifProp('isActive', DARK_GRAY1, LIGHT_GRAY6)};
      /* border: solid 1px ${ifProp(
      'isActive',
      DARK_GRAY1,
      LIGHT_GRAY6,
    )}; */
    border-color: ${DARK_GRAY1};
  `,
  errorMessage: styled.sub`
    font-size: 12px;
    line-height: 20px;
    letter-spacing: -0.24px;
    bottom: 0;
    color: ${RED2};
    /* margin-left: 196px; */
  `,

  modalTitle : styled.div``,

  modalBody: styled.div`
    padding: 40px 50px 0;
    .select {
      margin-top: 40px;
      font-size: 15px;
      line-height: 30px;
      letter-spacing: -0.23px;
      box-sizing: border-box;
      &>div{
        height: 40px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid ${LIGHT_GRAY5};
      }
      .newPosition{
        >div{
          max-height: 120px;
        }
      }
    }
  `,
};

export default PayMethod;
