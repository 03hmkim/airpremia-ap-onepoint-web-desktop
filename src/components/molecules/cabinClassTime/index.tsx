import styled from 'styled-components';
import moment from 'moment';
import FlightIcon from 'public/images/ticket/ico-flight.svg';
import {
  LIGHT_GRAY8,
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';
import { IFlightTicketSearchJourney } from '@airpremia/core/api/ticket/types';
import { getHumanizeTime } from '@airpremia/core/lib/booking';
import { EDefaultModalTable } from '@airpremia/core/stores/models/ui';
import TripInfomation from 'src/components/organisms/tripInfomation';
import { NewModal } from 'src/components';
import PopupTitle from '../popupTitle';

interface IProps {
  journey: IFlightTicketSearchJourney;
  modalTarget: EDefaultModalTable | string;
  onShowModal: (target: string) => void;
}

function CabinClassTime({
  journey,
  modalTarget,
  onShowModal,
}: IProps) {
  const {
    departureTime,
    arrivalTime,
    flightTimeInMinute,
    identifier,
    equipmentType,
    legs,
    journeyKey,
    dateChange,
  } = journey;

  const onClickTrip = () => onShowModal(journeyKey);

  const checkModal = () => {
    switch (modalTarget) {
      case journeyKey:
        return (
          <NewModal
            title={
              <S.header>
                <PopupTitle>여정 정보</PopupTitle>
                <S.description>
                  모든 시간은 현지 시간 기준입니다.
                </S.description>
              </S.header>
            }
            body={<TripInfomation legs={legs} />}
          />
        );

      default:
        return null;
    }
  };

  return (
    <S.container>
      {checkModal()}
      <S.timeArea>
        <div className="station">
          <h2 className="font-premia-bold">
          {moment(departureTime).format('MM-DD')}
          <br/>
          {moment(departureTime).format('HH : mm')}
          </h2>
        </div>
        <div className="middle">
          <sub>
            {getHumanizeTime({
              duration: flightTimeInMinute,
            })}
          </sub>
          <FlightIcon />
        </div>
        <div className="station">
          <h2 className="font-premia-bold">
            {moment(arrivalTime).format('MM-DD')}
            <br/>
            {moment(arrivalTime).format('HH : mm')}
          </h2>
          {!!dateChange ? (
            <sub>(+{dateChange}일)</sub>
          ) : null}
        </div>
      </S.timeArea>

      <S.airplaneArea>
        <sub>B{equipmentType}-9</sub>
        <sub>{identifier}</sub>
        <sub
          className="trip-infomation"
          onClick={onClickTrip}
        >
          여정정보
        </sub>
      </S.airplaneArea>
    </S.container>
  );
}

const S = {
  container: styled.div`
    width: 370px;
    position:absolute;
    left:0;
    top:0;
    padding-top: 20px;

    h2 {
      color: ${DARK_GRAY1};
      line-height: 35px;
      letter-spacing: -0.72px;
      font-size: 36px;
    }

    @media only screen and (max-width: 1440px) {
      margin:0 auto;
      transform: translateX(30px);
    }
    @media only screen and (max-width: 1059px) {
      position:static;
    }

    @media only screen and (max-width: 767px) { 
      width: 100%;
      transform: translateX(0px);
    }
  `,

  timeArea: styled.div`
    display: flex;
    align-items: center;
    padding-top: 15px;

    & > div {
      margin-right: 20px;

      &:last-child {
        margin-right: 0px;
      }
    }

    .middle {
      position: relative;

      sub {
        width: 100%;
        position: absolute;
        top: -12px;
        left: 0;
        font-size: 18px;
        text-align: center;
      }
    }

    .station {
      display: flex;
      align-items: center;

      h5 {
        margin-bottom: 6px;
      }

      sub {
        font-size: 13px;
        letter-spacing: -0.26px;
        line-height: 28px;
        color: ${DARK_GRAY1};
        margin-left: 6px;
      }
    }
    
    @media only screen and (max-width: 767px) { 
      justify-content: space-between;

      & > div {
        margin-right: 0px;
      }

      .middle {
        sub {
          font-size: 13px;
          font-weight: 300;
        }
      }
    }
  `,

  airplaneArea: styled.div`
    display: flex;
    margin-top: 18px;

    sub {
      bottom: 0;
      vertical-align: unset;
      font-size: 18px;
      letter-spacing: -0.26px;
      line-height: 28px;
      color: ${LIGHT_GRAY8};
      margin-right: 16px;
      &:last-of-type {
        text-decoration: underline;
      }
    }

    .trip-infomation {
      cursor: pointer;
    }

    @media only screen and (max-width: 767px) {
      sub {
        font-size: 13px;
        font-weight: 300;
      }
    }
  `,

  header: styled.div``,

  description: styled.div`
    font-size: 14px;
    line-height: 26px;
    letter-spacing: -0.28px;
    color: ${LIGHT_GRAY8};
  `,
};

export default CabinClassTime;
