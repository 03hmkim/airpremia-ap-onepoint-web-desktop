import styled from 'styled-components';
import { commaNumber } from '@airpremia/core/lib/util';
import {
  DARK_GRAY1,
  LIGHT_GRAY6,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';
import { TicketReceiptHeader } from 'src/components';
import { IProps as ITicketReceiptHeaderProps } from 'src/components/molecules/ticketReceiptHeader';

export enum ETicketReceiptItemType {
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
}

export const ticketReceiptLabel = {
  [ETicketReceiptItemType.AIR_FARE]: '항공 운임',
  [ETicketReceiptItemType.AIR_FARE_DISCOUNT]: '운임 할인 금액',
  [ETicketReceiptItemType.PROMOTION_DISCOUNT]: '프로모션 할인 금액',
  [ETicketReceiptItemType.FUEL_SURCHARGE]: '유류할증료',
  [ETicketReceiptItemType.AIRPORT_FACILITY_FEE]: '공항시설 사용료',
  // [ETicketReceiptItemType.BAGGAGE]: '위탁수하물',
  [ETicketReceiptItemType.SEAT]: '좌석',
  // [ETicketReceiptItemType.WIFI]: '와이파이',
  // [ETicketReceiptItemType.MEAL]: '기내식',
  // [ETicketReceiptItemType.AMENITY]: '기내 편의 용품',
};

export interface ITicketReceiptItem {
  type: ETicketReceiptItemType;
  value: number;
}

interface IStyleProps {}
export interface IProps extends IStyleProps {
  /** Header Props */
  headerProps: ITicketReceiptHeaderProps;
  /** 영수증 세부항목 */
  items: ITicketReceiptItem[];
  totalFare: number;
}

function TicketReceipt({
  headerProps, 
  items,
  totalFare,
}: IProps) {

  console.log("items : ", items);
  return (
    <S.container>
      <TicketReceiptHeader {...headerProps} />

      <hr className="solid" />
      <div className="expressionWrapper">
        <div className="itemsWrapper">
          {items.map((value: ITicketReceiptItem) => (
            <div key={value.type} className="row">
              <div className="label">
                {ticketReceiptLabel[value.type]}
              </div>
              <div className="value">
                {commaNumber(value.value)} 원
              </div>
            </div>
          ))}
        </div>
        <hr className="dotted" />
        <div className="totalWrapper row">
          <div className="label">결제 금액</div>
          <div className="value font-bold">{commaNumber(totalFare)} 원</div>
        </div>
      </div>
    </S.container>
  );
}

TicketReceipt.defaultProps = {
  titleLabel: '서울/인천(ICN) → 하노이(HAN)',
  classLabel: '이코노미',
  passengersLabel: '성인 1, 소아 1, 유아 1',
};

const S = {
  container: styled.div<IStyleProps>`
    hr {
      margin: 0;
      &.solid {
        border-top: 2px solid ${DARK_GRAY1};
      }
      &.dotted {
        border-top: 2px dotted ${LIGHT_GRAY6};
      }
    }

    .expressionWrapper {
      padding-top: 32px;
      .row + .row {
        padding-top: 15px;
      }
      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: ${DARK_GRAY1};
        .label {
          font-size: 13px;
          line-height: 1.85;
          letter-spacing: -0.26px;
        }
        .value {
          font-size: 16px;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: -0.32px;
        }
      }
      .itemsWrapper {
        padding-bottom: 33px;
      }
      .totalWrapper {
        padding-top: 20px;
        .label {
          font-weight: 600;
        }
        .value {
          font-size: 20px;
          letter-spacing: -0.4px;
          color: ${ORANGE2};
        }
      }
    }
  `,
};

export default TicketReceipt;
