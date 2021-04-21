import styled from 'styled-components';
import {
  DARK_GRAY1,
  WHITE1,
  LIGHT_GRAY7,
  LIGHT_GRAY6,
  LIGHT_GRAY8,
  LIGHT_GRAY5,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';
import { FlightSummary } from 'src/components';
// import { LinkText1 } from 'src/components';
import { useMemo } from 'react';
import { addComma } from '@airpremia/core/lib/service';

interface IStyleProps {}
interface IProps extends IStyleProps {
  /** 항공권 제목 */
  ticketTitle: string;
  /** 승객 */
  passengers: string;
  /** 예약번호 */
  reservationNumber: string;
  /** 항공권 */
  tickets?: any[]; // TODO any delete
  /** 금액 */
  prices?: {
    label: string;
    value: number;
    currency: string;
  }[];
}

function ReservationSummary({
  ticketTitle,
  passengers,
  reservationNumber,
  tickets,
  prices,
}: IProps) {
  const getTicketsElement = useMemo(() => {
    return tickets?.map((ticket: any) => {
      return (
        <div key={ticket.id} className="ticketWrapper">
          <FlightSummary
            title={`${ticket.origin} → ${ticket.destination}`}
            canRefund={ticket.canRefund}
            time={`${ticket.startDate} ${ticket.originTime} - ${ticket.destinationTime}`}
            classType={ticket.classType}
            flightNumber={ticket.identifier}
          />
        </div>
      );
    });
  }, [tickets]);

  const getPrices = useMemo(() => {
    return prices?.map((price: any, index: number) => {
      return (
        <div key={`${index}`} className="row">
          <div className="label">{price.label}</div>
          <div className="value orange">
            {addComma(price.value)}
            <span>{price.currency}</span>
          </div>
        </div>
      );
    });
  }, [prices]);

  return (
    <S.container>
      <div className="titleWrapper">
        <S.title className="font-bold">
          {ticketTitle}
        </S.title>
        {/* <div className="linkTextWrapper">
          <LinkText1 color={LIGHT_GRAY7} onClick={() => {}}>
            결제 내역 상세보기
          </LinkText1>
        </div> */}
      </div>
      <div className="descriptionWrapper">
        <div className="passengersType">{passengers}</div>
        <div className="recordLocator">
          예약번호: {reservationNumber}
        </div>
      </div>
      <div className="ticketsWrapper">
        {getTicketsElement}
      </div>
      <div className="pricesWrapper">{getPrices}</div>
    </S.container>
  );
}

ReservationSummary.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    padding: 30px 30px 36px;
    border-radius: 8px;
    border: solid 1px ${DARK_GRAY1};
    background-color: ${WHITE1};
    .titleWrapper {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .linkTextWrapper {
        padding-bottom: 1px;
        font-size: 12px;
        color: ${LIGHT_GRAY7};
      }
    }
    .descriptionWrapper {
      display: flex;
      padding-top: 10px;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.43;
      letter-spacing: -0.28px;
      color: ${LIGHT_GRAY8};
      .recordLocator {
        position: relative;
        padding-left: 17px;
        &:before {
          position: absolute;
          content: '';
          top: 6px;
          left: 9px;
          width: 1px;
          height: 10px;
          background-color: ${LIGHT_GRAY6};
        }
      }
    }
    .ticketsWrapper {
      padding-top: 30px;
      .ticketWrapper {
        padding: 30px 0;
      }
      .ticketWrapper + .ticketWrapper {
        border-top: 1px dotted ${LIGHT_GRAY6};
      }
    }
    .pricesWrapper {
      border-top: 1px solid ${LIGHT_GRAY5};
      padding-top: 36px;
      .row + .row {
        padding-top: 20px;
      }
      .row {
        display: flex;
        justify-content: space-between;
        color: ${DARK_GRAY1};
        .label {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.56;
          letter-spacing: -0.36px;
        }
        .value {
          font-size: 26px;
          font-weight: 600;
          line-height: 1.04;
          letter-spacing: -0.52px;
          &.orange {
            color: ${ORANGE2};
          }
          span {
            padding-left: 6px;
            font-size: 18px;
            letter-spacing: -0.36px;
          }
        }
      }
    }
  `,
  title: styled.div`
    font-size: 22px;
    line-height: 1.55;
    letter-spacing: -0.44px;
    color: ${DARK_GRAY1};
  `,
};

export default ReservationSummary;
