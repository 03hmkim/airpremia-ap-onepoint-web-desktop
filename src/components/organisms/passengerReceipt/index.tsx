import styled, { css } from 'styled-components';
import { commaNumber } from '@airpremia/core/lib/util';
import {
  LIGHT_GRAY6,
  WHITE1,
  DARK_GRAY1,
  ORANGE2,
  LIGHT_GRAY7,
  LIGHT_GRAY1,
  LIGHT_GRAY5,
} from '@airpremia/cdk/styles/colors';
import { useState, useCallback, useMemo } from 'react';
import { Tag, Triangle } from 'src/components';
import { ticketReceiptLabel } from '../ticketReceipt';
import { ifProp } from 'styled-tools';
import { EPosition } from 'src/components/atoms/arrow';

export enum EPassengerReceiptItemType {
  /** 항공 운임 */
  AIR_FARE,
  /** 항공 운임 할인 금액 */
  AIR_FARE_DISCOUNT,
  /** 프로모션 할인 금액 */
  PROMOTION_DISCOUNT,
  /** 유류할증료 */
  FUEL_SURCHARGE,
  /** 공항시설 사용료 */
  AIRPORT_FACILITY_FEE,
  // /** 위탁수하물 */
  // BAGGAGE,
  /** 좌석 */
  SEAT,
  // /** 와이파이 */
  // WIFI,
  // /** 기내식 */
  // MEAL,
  // /** 기내 편의 용품 */
  // AMENITY,
  /** 결제 포인트 */
  // SUBTOTAL_POINT,
  /** 결제 금액 */
  SUBTOTAL_AMOUNT,
}

const passengerReceiptLabel = {
  ...ticketReceiptLabel,
  // [EPassengerReceiptItemType.SUBTOTAL_POINT]: '결제 포인트',
  [EPassengerReceiptItemType.SUBTOTAL_AMOUNT]: '결제 금액',
};

export interface IPassengerReceiptItem {
  type: EPassengerReceiptItemType;
  value: number;
}

interface IStyleProps {}
interface IProps extends IStyleProps {
  /** 이름  */
  name: string;
  /** 승객 타입(성인, 소아, 유아)  */
  passengerTypeLabel: string;
  /** 총 결제 금액  */
  total: number;
  /** 총 결제 포인트  */
  // totalMileage: number;
  /** 출발지 영수증 세부항목 */
  beginDateItems: IPassengerReceiptItem[];
  /** 도착지 영수증 세부항목 */
  endDateItems?: IPassengerReceiptItem[];
}

function PassengerReceipt({
  name,
  passengerTypeLabel,
  total,
  // totalMileage,
  beginDateItems,
  endDateItems,
}: IProps) {
  // TODO false 로 변경
  const [isShowDetail, setIsShowDetail] = useState(false);

  const toggleShowDetail = useCallback(() => {
    setIsShowDetail(!isShowDetail);
  }, [isShowDetail]);

  const trianglePosition = useMemo(() => {
    return isShowDetail ? EPosition.UP : EPosition.DOWN;
  }, [isShowDetail]);

  const isSubtotalItem = useCallback(
    (type: EPassengerReceiptItemType) => {
      return (
        type ===
          EPassengerReceiptItemType.SUBTOTAL_AMOUNT
          //  ||
        // type === EPassengerReceiptItemType.SUBTOTAL_POINT
      );
    },
    [],
  );

  const EachItems = useCallback(
    (items: IPassengerReceiptItem[]) =>
      items.filter((item) => !isSubtotalItem(item.type)),
    [],
  );

  const subtotalItems = useCallback(
    (items: IPassengerReceiptItem[]) =>
      items.filter((item) => isSubtotalItem(item.type)),
    [],
  );

  const isSubtotalItems = useCallback(
    (items: IPassengerReceiptItem[]) => {
      return !!subtotalItems(items).length;
    },
    [],
  );

  if (endDateItems) {

    return (
      <S.container>
        <div className="summaryWrapper">
          <div className="name">{name}</div>
          <div className="passengerType">
            {passengerTypeLabel}
          </div>
          <div className="totalWrapper">
            {/* {totalMileage && (
              <div className="row">
                <div className="label">총 결제 포인트</div>
                <div className="value">
                  {commaNumber(totalMileage)} pp
                </div>
              </div>
            )} */}
            {total && (
              <div className="row">
                <div className="label">총 결제 금액</div>
                <div className="value">
                  {commaNumber(total)} 원
                </div>
              </div>
            )}
          </div>
        </div>
        <S.detailWrapper isShow={isShowDetail}>
          {isShowDetail && (
            <div className="innerWrapper">
              <div className="beginDateWrapper">
                <div className="tagWrapper">
                  <Tag backgroundColor={DARK_GRAY1}>
                    출발지
                  </Tag>
                </div>
                <div className="itemsWrapper">
                  <div className="eachItemsWrapper">
                    {EachItems(beginDateItems).map(
                      (item: IPassengerReceiptItem) => (
                        <S.rowItem
                          className="row"
                          key={item.type}
                          isSubtotal={false}
                        >
                          <div className="label">
                            {passengerReceiptLabel[item.type]}
                          </div>
                          <div className="value">
                            {commaNumber(item.value)} 원
                          </div>
                        </S.rowItem>
                      ),
                    )}
                  </div>
                  <S.subtotalItemsWrapper
                    isShow={isSubtotalItems(beginDateItems)}
                  >
                    {subtotalItems(beginDateItems).map(
                      (item: IPassengerReceiptItem) => (
                        <S.rowItem
                          className="row"
                          key={item.type}
                          isSubtotal={true}
                        >
                          <div className="label bold">
                            {passengerReceiptLabel[item.type]}
                          </div>
                          <div className="value orange">
                            {commaNumber(item.value)} 원
                          </div>
                        </S.rowItem>
                      ),
                    )}
                  </S.subtotalItemsWrapper>
                </div>
              </div>
              <hr className="solid" />
              <div className="endDateWrapper">
                <div className="tagWrapper">
                  <Tag backgroundColor={DARK_GRAY1}>
                    도착지
                  </Tag>
                </div>
                <div className="itemsWrapper">
                  <div className="eachItemsWrapper">
                    {EachItems(endDateItems).map(
                      (item: IPassengerReceiptItem) => (
                        <S.rowItem
                          className="row"
                          key={item.type}
                          isSubtotal={false}
                        >
                          <div className="label">
                            {passengerReceiptLabel[item.type]}
                          </div>
                          <div className="value">
                            {commaNumber(item.value)} 원
                          </div>
                        </S.rowItem>
                      ),
                    )}
                  </div>
                  <S.subtotalItemsWrapper
                    isShow={isSubtotalItems(endDateItems)}
                  >
                    {subtotalItems(endDateItems).map(
                      (item: IPassengerReceiptItem) => (
                        <S.rowItem
                          className="row"
                          key={item.type}
                          isSubtotal={true}
                        >
                          <div className="label bold">
                            {passengerReceiptLabel[item.type]}
                          </div>
                          <div className="value orange">
                            {commaNumber(item.value)} 원
                          </div>
                        </S.rowItem>
                      ),
                    )}
                  </S.subtotalItemsWrapper>
                </div>
              </div>
            </div>
          )}
        </S.detailWrapper>
        <div className="detailButtonWrapper">
          <button onClick={toggleShowDetail}>
            <span>상세보기</span>
            <div className="triangleWrapper">
              <Triangle position={trianglePosition} />
            </div>
          </button>
        </div>
      </S.container>
    );
  } else {
    return (
      <S.container>
        <div className="summaryWrapper">
          <div className="name">{name}</div>
          <div className="passengerType">
            {passengerTypeLabel}
          </div>
          <div className="totalWrapper">
            {/* {totalMileage && (
              <div className="row">
                <div className="label">총 결제 포인트</div>
                <div className="value">
                  {commaNumber(totalMileage)} pp
                </div>
              </div>
            )} */}
            {total && (
              <div className="row">
                <div className="label">총 결제 금액</div>
                <div className="value">
                  {commaNumber(total)} 원
                </div>
              </div>
            )}
          </div>
        </div>
        <S.detailWrapper isShow={isShowDetail}>
          {isShowDetail && (
            <div className="innerWrapper">
              <div className="beginDateWrapper">
                <div className="tagWrapper">
                  <Tag backgroundColor={DARK_GRAY1}>
                    출발지
                  </Tag>
                </div>
                <div className="itemsWrapper">
                  <div className="eachItemsWrapper">
                    {EachItems(beginDateItems).map(
                      (item: IPassengerReceiptItem) => (
                        <S.rowItem
                          className="row"
                          key={item.type}
                          isSubtotal={false}
                        >
                          <div className="label">
                            {passengerReceiptLabel[item.type]}
                          </div>
                          <div className="value">
                            {commaNumber(item.value)} 원
                          </div>
                        </S.rowItem>
                      ),
                    )}
                  </div>
                  <S.subtotalItemsWrapper
                    isShow={isSubtotalItems(beginDateItems)}
                  >
                    {subtotalItems(beginDateItems).map(
                      (item: IPassengerReceiptItem) => (
                        <S.rowItem
                          className="row"
                          key={item.type}
                          isSubtotal={true}
                        >
                          <div className="label bold">
                            {passengerReceiptLabel[item.type]}
                          </div>
                          <div className="value orange">
                            {commaNumber(item.value)} 원
                          </div>
                        </S.rowItem>
                      ),
                    )}
                  </S.subtotalItemsWrapper>
                </div>
              </div>
            </div>
          )}
        </S.detailWrapper>
        <div className="detailButtonWrapper">
          <button onClick={toggleShowDetail}>
            <span>상세보기</span>
            <div className="triangleWrapper">
              <Triangle position={trianglePosition} />
            </div>
          </button>
        </div>
      </S.container>
    );
  }
}

PassengerReceipt.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    border-radius: 8px;
    border: solid 1px ${LIGHT_GRAY6};
    background-color: ${WHITE1};
    .row + .row {
      padding-top: 8px;
    }
    .summaryWrapper {
      padding: 25px;
      .name {
        font-size: 18px;
        font-weight: 600;
        line-height: 1.44;
        letter-spacing: -0.36px;
        color: ${DARK_GRAY1};
      }
      .passengerType {
        padding-top: 3px;
        font-size: 13px;
        font-weight: 600;
        line-height: 2;
        letter-spacing: -0.26px;
        color: ${LIGHT_GRAY7};
      }
      .totalWrapper {
        padding-top: 23px;
      }
      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .label {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: -0.26px;
          color: ${DARK_GRAY1};
        }
        .value {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.44;
          letter-spacing: -0.36px;
          color: ${ORANGE2};
        }
      }
    }
    .detailButtonWrapper {
      text-align: center;
      border-top: 1px solid ${LIGHT_GRAY6};
      button {
        display: inline-flex;
        padding: 15px 0;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: -0.26px;
        color: ${DARK_GRAY1};
        .triangleWrapper {
          padding-left: 3px;
          padding-top: 1px;
        }
      }
    }

    .beginDateWrapper {
      padding-bottom: 30px;
    }
    .endDateWrapper {
      padding-top: 30px;
    }
    .itemsWrapper {
      padding-top: 40px;
    }
    hr.solid {
      margin: 0;
      border-top: 1px solid ${LIGHT_GRAY5};
    }
  `,
  detailWrapper: styled.div<{ isShow: boolean }>`
    max-height: 0;
    opacity: 0;
    transition: all 0.8s;
    overflow: hidden;
    ${({ isShow }) => {
      if (isShow) {
        return css`
          opacity: 1;
          max-height: 1200px;
        `;
      }
    }}
    .innerWrapper {
      border-top: 2px dotted ${LIGHT_GRAY6};
      padding: 44px 25px 40px;
      background-color: ${LIGHT_GRAY1};
    }
  `,
  rowItem: styled.div<{ isSubtotal: boolean }>`
    display: flex;
    justify-content: space-between;
    color: ${DARK_GRAY1};
    .label {
      font-size: 13px;
      line-height: 1.85;
      letter-spacing: -0.26px;
      text-align: left;
      font-weight: ${ifProp('isSubtotal', 600, 500)};
    }
    .value {
      font-size: ${ifProp('isSubtotal', '18px', '16px')};
      font-weight: 600;
      letter-spacing: -0.32px;
      color: ${ifProp('isSubtotal', ORANGE2, DARK_GRAY1)};
    }
  `,
  subtotalItemsWrapper: styled.div<{ isShow: boolean }>`
    padding-top: ${ifProp('isShow', '30px', '0')};
  `,
};

export default PassengerReceipt;
