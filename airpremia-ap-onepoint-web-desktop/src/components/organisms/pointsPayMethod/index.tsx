import { FC, useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { flow, find, map, get } from 'lodash/fp';
import { usePay } from '@airpremia/core/hooks';
import { Select, Checkbox } from 'src/components';
import { ESelectPosition } from 'src/components/molecules/select';
import { toggleBoolean } from '@airpremia/core/lib/util';
import {
  LIGHT_GRAY1,
  DARK_GRAY1,
  BLUE1,
  ORANGE1,
} from '@airpremia/cdk/styles/colors';
import { IIdLabel } from '@airpremia/core/lib/types';
import { BankThumbnail } from 'src/components';
import TextInput from 'src/components/molecules/textInput';
import { IProps as IInputProps } from 'src/components/atoms/input';
import Caution from 'src/components/molecules/caution';
import { addComma } from '@airpremia/core/lib/service';
interface IProps {
  /** 결제 수단 저장 유무 */
  isSave?: boolean;
  /** 결제 수단 타입 */
  method?: string;
  /** 현금영수증 방법 타입 */
  cashReceiptMethod?: string;
  /** 현금영수증 발행 신청 유무 */
  isCashReceipt?: boolean;
  /** 카드 번호 */
  card?: string;
  /** 할부 */
  installment?: string;
  /** 소득공제시 휴대폰 번호 데이터 */
  phoneNumberData?: IInputProps;
  /** 충전할 포인트 데이터 */
  pointsData: IInputProps;
  /** 결제 수단 저장 유무 변경 함수 */
  onChangeSave?: () => void;
  onChangeMethod?: (payload: string) => void;
  onChangeCashReceipt?: () => void;
  onChangeCashReceiptMethod?: (payload: string) => void;
  onChangeCard?: (payload: string) => void;
  onChangeInstallment?: (payload: string) => void;
}

const PointsPayMethod: FC<IProps> = ({
  isSave = false,
  method = 'credit',
  card = 'C006',
  installment = '0',
  cashReceiptMethod,
  isCashReceipt = true,
  phoneNumberData,
  pointsData,
  onChangeSave = () => {},
  onChangeMethod = () => {},
  onChangeCashReceipt = () => {},
  onChangeCashReceiptMethod = () => {},
  onChangeCard = () => {},
  onChangeInstallment = () => {},
}) => {
  const {
    payMethodList,
    cashReceiptMethodList,
    creditList,
    installmentList,
  } = usePay();

  const [
    isOpenMenuPayMethod,
    setIsOpenMenuPayMethod,
  ] = useState<boolean>(false);
  const [
    isOpenMenuCashReceiptMethod,
    setIsOpenMenuCashReceiptMethod,
  ] = useState<boolean>(false);
  const [isOpenMenuCard, setIsOpenMenuCard] = useState<
    boolean
  >(false);
  const [
    isOpenMenuInstallments,
    setIsOpenMenuInstallments,
  ] = useState<boolean>(false);
  const toBeChargePoints = Number(pointsData.value) || 0;

  const selectedPayMethodLabel = useMemo(() => {
    return flow(
      find(['id', method]),
      get('label'),
    )(payMethodList);
  }, [method]);

  const selectedCashReceiptMethodLabel = useMemo(() => {
    return flow(
      find(['id', cashReceiptMethod]),
      get('label'),
    )(cashReceiptMethodList);
  }, [cashReceiptMethod]);

  const selectedCardLabel = useMemo(() => {
    return flow(
      find(['id', card]),
      get('label'),
    )(creditList);
  }, [card]);

  const selectedInstallmentsLabel = useMemo(() => {
    return flow(
      find(['id', installment]),
      get('label'),
    )(installmentList);
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

  const getCardButtons = useMemo(() => {
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
    )(creditList);
  }, [creditList]);

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

  return (
    <S.container>
      <S.contentWrapper>
        <S.chargePoints>
          <S.label>충전할 마일리지</S.label>
          <S.intputWrapper>
            <TextInput
              borderColor="transparent"
              inputProps={pointsData}
            />
          </S.intputWrapper>
          <S.caution>
            <Caution title="1pp = 3원, 최소 구매 가능 금액 10,000pp" />
          </S.caution>
        </S.chargePoints>

        <S.payMethod>
          <S.label>결제 수단 선택</S.label>
          <S.dropdownWrapper>
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
          </S.dropdownWrapper>
          {method === 'bank' && (
            <S.checkbox>
              <Checkbox
                isActive={isCashReceipt}
                onChange={onChangeCashReceipt}
              >
                현금 영수증 발행 신청
              </Checkbox>
            </S.checkbox>
          )}
          <S.checkbox>
            <Checkbox
              isActive={isSave}
              onChange={onChangeSave}
            >
              이 결제 수단을 다음에도 사용
            </Checkbox>
          </S.checkbox>
        </S.payMethod>

        {method === 'credit' && (
          <S.creditCardMethod>
            <S.dropdownWrapper>
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
                  {getCardButtons}
                </div>
              </Select>
            </S.dropdownWrapper>
            <S.dropdownWrapper>
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
            </S.dropdownWrapper>
            <S.cardInfoButton>
              <button>제휴 카드 및 무이자 할부 안내</button>
            </S.cardInfoButton>
          </S.creditCardMethod>
        )}

        {method === 'bank' && isCashReceipt && (
          <S.creditCardMethod>
            <S.dropdownWrapper>
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
            </S.dropdownWrapper>
            <S.dropdownWrapper>
              <TextInput
                borderColor="transparent"
                inputProps={phoneNumberData}
              />
            </S.dropdownWrapper>
          </S.creditCardMethod>
        )}
      </S.contentWrapper>

      <S.result>
        <S.row>
          <p>충전 포인트</p>
          <S.price>{addComma(toBeChargePoints)} pp</S.price>
        </S.row>
        <S.row>
          <p>결제 금액</p>
          <S.price color={ORANGE1}>
            {addComma(toBeChargePoints * 3)} 원
          </S.price>
        </S.row>
      </S.result>
    </S.container>
  );
};

const S = {
  container: styled.div`
    height: 607px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 0 50px;
  `,

  contentWrapper: styled.div``,

  payMethod: styled.div`
    margin-top: 47px;
  `,

  chargePoints: styled.div``,

  intputWrapper: styled.div`
    border-radius: 8px;
    border: solid 1px #222222;
    padding: 8px 15px;
    margin-top: 10px;
  `,

  caution: styled.div`
    margin-top: 10px;
  `,

  label: styled.div`
    font-size: 14px;
    line-height: 30px;
    letter-spacing: -0.28px;
  `,

  dropdownWrapper: styled.div`
    margin-top: 5px;
    border-bottom: solid 1px ${DARK_GRAY1};
    height: 40px;
    display: flex;
    align-items: center;

    input {
      font-weight: 600;
      &::placeholder {
        font-weight: normal;
      }
    }

    .selectButtonsWrapper {
      width: 373px;
      max-height: 209.8px;
      overflow: auto;
      padding: 15px 0;
      top: 20px;
      left: 0;
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
  `,

  checkbox: styled.div`
    margin-top: 15px;
    font-size: 13px;
    line-height: 22px;
    font-weight: 600;
  `,

  creditCardMethod: styled.div`
    margin-top: 50px;

    & > div:first-of-type {
      margin-bottom: 25px;
    }
  `,

  cardInfoButton: styled.div`
    margin-top: 15px;
    button {
      font-weight: 600;
      text-decoration: underline;
      color: ${BLUE1};
      font-size: 12px;
      line-height: 24px;
      letter-spacing: -0.24px;
    }
  `,

  result: styled.div`
    margin-top: 60px;
    & > div:first-of-type {
      margin-bottom: 10px;
    }
  `,
  row: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 13px;
      line-height: 24px;
      letter-spacing: -0.26px;
    }
  `,
  price: styled.div<{ color?: string }>`
    color: ${prop('color', DARK_GRAY1)};
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.32px;
  `,
};

export default PointsPayMethod;
