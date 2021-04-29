import moment from 'moment';
import styled from 'styled-components';
import {
  LIGHT_GRAY6,
  WHITE1,
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';
import { LinkText2, TaskButton } from 'src/components';
import { useRouter } from 'next/router';
import { useCommon } from '@airpremia/core/hooks';

interface IStyleProps {}
interface IProps extends IStyleProps {
  /** journeyKey */
  journeyKey: string;
  /** 예약 번호 or id */
  recordLocator: string;
  /** 출발지 */
  originText: string;
  /** 도착지 */
  destinationText: string;
  /** 대표 승객 이름 */
  firstPassengerName: string;
  /** 승객수 */
  passengerCount: number;
  /** 편명 */
  identifier: string;
  /** 출발 */
  departure: string;
  /** 도착 */
  arrival: string;
}
function OnlineCheckinCard({
  journeyKey,
  recordLocator,
  originText,
  destinationText,
  firstPassengerName,
  passengerCount,
  identifier,
  departure,
  arrival,
}: IProps) {
  const {
    commonStore: {
      language: { code },
    },
  } = useCommon();
  const router = useRouter();

  const onClickBookingDetailInfo = () => {
    router.push(
      `/checkin/trip-detail-information?recordLocator=${recordLocator}`,
    );
  };

  const onClickOnlineCheckin = () => {
    router.push(
      `/checkin/online/apply?recordLocator=${recordLocator}&journeyKey=${journeyKey}`,
    );
  };

  return (
    <S.container>
      <S.top>
        <div className="left">
          <div className="titleWrapper">
            <div className="title">
              {originText}
              <span className="connectionMark">→</span>
              {destinationText}
            </div>
          </div>
          <div className="passengerInfo">
            {passengerCount > 1
              ? `${firstPassengerName}님 외 ${
                  passengerCount - 1
                }명`
              : `${firstPassengerName}님`}
          </div>
        </div>
        <div className="right">
          <LinkText2 onClick={onClickBookingDetailInfo}>
            예약 상세
          </LinkText2>
        </div>
      </S.top>
      <S.bottom>
        <div className="infosWrapper">
          <div className="info">
            <div className="label">탑승 날짜</div>
            <div className="value">
              {moment(departure)
                .locale(code)
                .format('YYYY. M. D (dd)')}
            </div>
          </div>
          <div className="info">
            <div className="label">비행 시간</div>
            <div className="value">
              {moment(departure).format('HH:mm')}
              &nbsp;-&nbsp;
              {moment(arrival).format('HH:mm')}
            </div>
          </div>
          <div className="info">
            <div className="label">편명</div>
            <div className="value">{identifier}</div>
          </div>
        </div>
        <div className="buttonWrapper">
          <TaskButton onClick={onClickOnlineCheckin}>
            온라인 체크인
          </TaskButton>
        </div>
      </S.bottom>
    </S.container>
  );
}

OnlineCheckinCard.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    padding: 30px;
    border-radius: 12px;
    border: solid 1px ${LIGHT_GRAY6};
    background-color: ${WHITE1};
  `,
  top: styled.div<IStyleProps>`
    display: flex;
    justify-content: space-between;
    .titleWrapper {
      .title {
        font-size: 24px;
        font-weight: 700;
        line-height: 1.45;
        letter-spacing: -0.4px;
      }
    }
    .passengerInfo {
      padding-top: 5px;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.43;
      letter-spacing: -0.28px;
      color: ${LIGHT_GRAY7};
    }
    .right {
      font-size: 18px;
      position: relative;
      right: -10px;
      top: 2px;
    }
    .connectionMark {
      padding: 0 4px;
    }

    @media only screen and (max-width: 767px) { 
      .titleWrapper {
        .title {
          font-size: 18px;
        }
      }
      .passengerInfo {
        font-size: 14px;
      }
    }
  `,
  bottom: styled.div<IStyleProps>`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: 53px;
    .infosWrapper {
      display: flex;
      .info + .info {
        padding-left: 60px;
      }
      .info {
        .label {
          font-size: 18px;
          line-height: 1.46;
          letter-spacing: -0.26px;
        }
        .value {
          padding-top: 10px;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.5;
          letter-spacing: -0.36px;
        }
      }
    }
    .buttonWrapper {
      width: 174px;
      height: 50px;
      font-size: 18px;
    }

    @media only screen and (max-width: 767px) { 
      .infosWrapper {
        display: block;
        .info + .info {
          margin-top: 20px;
          padding-left: 0px;
        }
        .info {
          .label {
            font-size: 14px;
          }
          .value {
            font-size: 14px;
          }
        }
        }
      .buttonWrapper {
        width: 110px;
        font-size: 14px;
      }
    }
  `,
};

export default OnlineCheckinCard;
