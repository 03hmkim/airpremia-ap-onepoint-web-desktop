import styled from 'styled-components';
import {
  DARK_GRAY1,
  ORANGE1,
  LIGHT_GRAY6,
} from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {
  /** 여정*/
  title: string;
  /** 환불가능 */
  canRefund?: boolean;
  /** 시간 */
  time: string;
  /** 클래스 */
  classType: string;
  /** 편명 */
  flightNumber: string;
}

function FlightSummary({
  title,
  canRefund,
  time,
  classType,
  flightNumber,
}: IProps) {
  return (
    <S.container>
      <div className="tagsWrapper">
        <div className="title">{title}</div>
        {!canRefund && (
          <div className="nonRefundable">환불불가</div>
        )}
      </div>
      <div className="valueWrapper">
        <div className="time">{time}</div>
        <div className="classType">{classType}</div>
        <div className="flightName">
          편명: {flightNumber}
        </div>
      </div>
    </S.container>
  );
}

FlightSummary.defaultProps = {
  canRefund: false,
};

const S = {
  container: styled.div<IStyleProps>`
    .tagsWrapper {
      display: flex;
      font-size: 13px;
      line-height: 1.15;
      letter-spacing: -0.26px;
      .nonRefundable {
        position: relative;
        padding-left: 11px;
        color: ${ORANGE1};
        &:before {
          position: absolute;
          content: '';
          top: 3px;
          left: 4.2px;
          width: 1px;
          height: 10px;
          background-color: ${LIGHT_GRAY6};
        }
      }
    }
    .valueWrapper {
      padding-top: 14px;
      display: flex;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.5;
      letter-spacing: -0.36px;
      color: ${DARK_GRAY1};
      div + div {
        position: relative;
        padding-left: 21px;
        &:before {
          position: absolute;
          content: '';
          top: 8px;
          left: 10px;
          width: 1px;
          height: 14px;
          background-color: ${LIGHT_GRAY6};
        }
      }
    }
  `,
};

export default FlightSummary;
