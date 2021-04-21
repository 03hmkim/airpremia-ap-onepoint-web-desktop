// TODO 로그인 상태의 DOM 변경
import React, { useMemo, Fragment, useState, useEffect } from 'react';
import { flow, values, sum, gt, pick } from 'lodash/fp';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import SvgMinus from 'public/images/util/ico-minus.svg';
import SvgPlus from 'public/images/util/ico-plus.svg';
import SvgCaution from 'public/images/util/ico-caution-gray.svg';
import {
  IPassengers,
  IPassengerParams,
  EPassengerType,
} from '@airpremia/core/stores/models/bookingSession';
import { useBooking } from '@airpremia/core/hooks';
import { useModal } from 'src/hooks';
import {
  NewModal,
  PopupTitle,
  PopupDescription,
} from 'src/components';
import AgeCalculater from 'src/components/molecules/ageCalculater';
import {
  DARK_GRAY1,
  LIGHT_GRAY1,
  LIGHT_GRAY6,
  LIGHT_GRAY8,
  LIGHT_GRAY5,
  DARK_BLUE1,
  ORANGE2,
  WHITE1,
} from '@airpremia/cdk/styles/colors';

export interface IProps {
  /** 승객 store */
  passengers?: IPassengers;
  /** -, + 버튼 onClick */
  onChangePassengers?: ({
    passengerType,
    count,
  }: IPassengerParams) => void;
  /** 완료 버튼 */
  onComplete?: () => void;
  className?: string;
}

function PassengersDropdown({
  passengers,
  className,
  onChangePassengers,
  onComplete,
}: IProps) {
  const {
    onShowNewModal,
    UIStore: { newModal },
  } = useModal();
  const { bookingSessionStore } = useBooking();
  const { date } = bookingSessionStore;

  const [totalInfantNum, setTotalInfantNum] = useState(0);
  const [infantNum, setInfantNum] = useState(0);

  // TODO refactor
  // (우변을 변수화 하여 공통 로직을 뺄수 있으나 그렇게 되면 다시 HOF 형태로 됨. data를 늘릴 것인지 논의)
  const passengersLocal = passengers
    ? passengers
    : {
        [EPassengerType.ADULT]: 1,
        [EPassengerType.CHILD]: 0,
        [EPassengerType.INFANT]: 0,
        [EPassengerType.SEAT_INFANT]: 0,
      };
  const isValid = useMemo(() => {
    return flow(
      pick(['adult', 'child', 'infant']),
      values,
      sum,
      gt(9),
    )(passengers);
  }, [passengers]);

  const onMinus = (e: any) => {
    if (typeof onChangePassengers != 'function') return;
    const { ADULT, INFANT, SEAT_INFANT } = EPassengerType;

    const passengerType: EPassengerType =
      e.target.dataset.type;

    if (passengerType === ADULT) {
      if (
        totalInfantNum >
        passengersLocal[passengerType] - 1
      ) {
        return alert(
          '성인 인원이 유아 인원보다 작을 수 없습니다.',
        );
      }
      if (passengersLocal['adult'] === 1) {
        return alert (
          '성인 인원 미선택 시 소아/유아 여정 선택이 불가능합니다.'
        );
      }
    }

    if (passengerType === INFANT) {
      setInfantNum(infantNum - 1);
      setTotalInfantNum(totalInfantNum-1);
    } else if(passengerType === SEAT_INFANT) {
      setInfantNum(infantNum + 1);
    }

    onChangePassengers({
      passengerType,
      count: passengersLocal[passengerType] - 1,
    });
  };

  const onPlus = (e: any) => {
    const { ADULT, CHILD, INFANT, SEAT_INFANT } = EPassengerType;
    if (typeof onChangePassengers != 'function') return;
    // if (!isValid) return;

    const passengerType: EPassengerType =
      e.target.dataset.type;

    if (passengerType === ADULT || passengerType === CHILD) {
      if (!isValid) return;
    }

    if (passengerType === INFANT) {
      if(passengersLocal[INFANT] + passengersLocal[ADULT] + passengersLocal[CHILD] === 9) {
        if (!isValid) return;
      }
      if (
        passengersLocal['adult'] <=
        totalInfantNum
      ) {
        return alert(
          '유아 인원이 성인 인원을 초과할 수 없습니다.',
        );
      }
      setInfantNum(infantNum + 1)
      setTotalInfantNum(totalInfantNum + 1);

    } else if (passengerType === SEAT_INFANT) {
      if(passengersLocal[SEAT_INFANT] + passengersLocal[ADULT] + passengersLocal[CHILD] === 9) {
        if (!isValid) return;
      }
      // if (
      //   passengersLocal[INFANT] <=
      //   passengersLocal[passengerType]
      // ) {
      //   return alert('유아 인원을 초과할 수 없습니다.');
      // }
      if (
        totalInfantNum <=
        passengersLocal[passengerType]
      ) {
        return alert('자리가 필요한 유아 인원은 선택한 유아 인원을 초과할 수 없습니다.');
      }
      setInfantNum(infantNum - 1)
    }
    onChangePassengers({
      passengerType,
      count: passengersLocal[passengerType] + 1,
    });
  };

  const onClickModal = () => {
    switch (newModal.target) {
      case 'ageCalculator':
        return (
          <NewModal
            title={
              <S.modalTitle>
                <PopupTitle>나이계산기</PopupTitle>
                <PopupDescription>
                  <Fragment>
                    성인, 소아, 유아의 기준이 궁금하시다면
                    생년월일을
                    <span className="spacing"></span>
                    입력하고 나이를 계산해보세요.
                  </Fragment>
                </PopupDescription>
              </S.modalTitle>
            }
            body={
              <AgeCalculater baseDate={date.length === 2 ? date[1] : date[0] || ''} />
            }
          />
        );

      default:
        return null;
    }
  };

  const onOpenAgeCalculator = () => {
    if (date.length) {
      onShowNewModal('ageCalculator');
    } else {
      alert('여정일을 선택해주세요.');
    }
  };

  useEffect(() => {
    setTotalInfantNum(passengersLocal['infant']);
    setInfantNum(passengersLocal['infant'] - passengersLocal['seatInfant']);
  }, []);

  return (
    <S.container      
      className={className}
    >
      {onClickModal()}
      <div className="countWrapper">
        <S.countItemWrapper className="countItemWrapper">
          <div className="left">
            <div className="passenger__type">성인</div>
            <sub>만 12세 이상</sub>
          </div>
          <div className="right">
            {/** TODO NumberStepper 로 리팩토링*/}
            <S.svgWrapper
              data-type={EPassengerType.ADULT}
              isDisabled={passengersLocal.adult < 1}
              onClick={onMinus}
            >
              <SvgMinus />
            </S.svgWrapper>
            <div className="counter font-premia-bold">
              {passengersLocal.adult}
            </div>
            <S.svgWrapper
              data-type={EPassengerType.ADULT}
              onClick={onPlus}
            >
              <SvgPlus />
            </S.svgWrapper>
          </div>
        </S.countItemWrapper>
        <S.countItemWrapper className="countItemWrapper"
          isZero={passengersLocal.child === 0}
        >
          <div className="left">
            <div className="passenger__type">소아</div>
            <sub>만 2세~11세</sub>
          </div>
          <div className="right">
            <S.svgWrapper
              data-type={EPassengerType.CHILD}
              isDisabled={passengersLocal.child < 1}
              onClick={onMinus}
            >
              <SvgMinus />
            </S.svgWrapper>
            <div className="counter font-premia-bold">
              {passengersLocal.child}
            </div>
            <S.svgWrapper
              data-type={EPassengerType.CHILD}
              onClick={onPlus}
            >
              <SvgPlus />
            </S.svgWrapper>
          </div>
        </S.countItemWrapper>
        <S.countItemWrapper className="countItemWrapper"
          isZero={infantNum === 0}
        >
          <div className="left">
            <div className="passenger__type">유아</div>
            <sub>만 2세 미만</sub>
          </div>
          <div className="right">
            <S.svgWrapper
              data-type={EPassengerType.INFANT}
              isDisabled={infantNum < 1}
              onClick={onMinus}
            >
              <SvgMinus />
            </S.svgWrapper>
            <div className="counter font-premia-bold">
              {infantNum}
            </div>
            <S.svgWrapper
              data-type={EPassengerType.INFANT}
              onClick={onPlus}
            >
              <SvgPlus />
            </S.svgWrapper>
          </div>
        </S.countItemWrapper>

        {totalInfantNum > 0 && (
          <S.countItemWrapper className="countItemWrapper"
            isZero={passengersLocal.seatInfant === 0}
            hasBackground
          >
            <div className="left">
              <div className="passenger__type infant-with-seat">
                자리가 필요한 유아
              </div>
            </div>
            <div className="right">
              <S.svgWrapper
                data-type={EPassengerType.SEAT_INFANT}
                isDisabled={passengersLocal.seatInfant < 1}
                onClick={onMinus}
              >
                <SvgMinus />
              </S.svgWrapper>
              <div className="counter font-premia-bold">
                {passengersLocal.seatInfant}
              </div>
              <S.svgWrapper
                data-type={EPassengerType.SEAT_INFANT}
                onClick={onPlus}
              >
                <SvgPlus />
              </S.svgWrapper>
            </div>
          </S.countItemWrapper>
        )}
      </div>
      <S.bottomMenuWrapper className="bottomMenuWrapper"
        hasInfant={totalInfantNum > 0}
      >
        <button>
          <u style={{ color: LIGHT_GRAY6 }}>단체예매</u>
        </button>
        <button onClick={onOpenAgeCalculator}>
          <u>나이 계산기</u>
        </button>
      </S.bottomMenuWrapper>
      <S.submitWrapper className="submitWrapper">
        <div className="description">
          <SvgCaution />
          예약 인원은 성인, 소아, 유아를 포함하여,
          <span className="spacing"></span>
          최대 9명까지 가능합니다.
        </div>
        <button onClick={onComplete}>완료</button>
      </S.submitWrapper>
    </S.container>
  );
}

PassengersDropdown.defaultProps = {};

const S = {
  container: styled.div`
    width: 440px;
    padding-top: 10px;
    box-sizing: border-box;
    border-radius: 16px;
    z-index: 1;

    @media only screen and (max-width: 1059px) {
      width: 100%;

      &.main {

        .countItemWrapper{
          padding-left: 15px;
          padding-right: 15px;
  
          .right {
            flex-basis: 130px;
          }
        }
  
        .submitWrapper{
          padding-left: 15px;
          padding-right: 15px;
          display: block;
  
          .description {
            padding-right: 0;
          }
  
          button{
            width: 100%;
            margin-top: 20px;
            display: block;
          }
        }
  
        .bottomMenuWrapper {
          padding-left: 15px;
          padding-right: 15px;
        }
      }
    }

    @media only screen and (max-height: 740px) {
      height: auto;
    }
  `,
  countItemWrapper: styled.div<{
    isZero?: boolean;
    hasBackground?: boolean;
  }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 94px;
    margin: 0;
    padding: 0 25px;

    .passenger__type {
      font-size: 18px;
      line-height: 1.3em;
      font-weight: 600;

      &.infant-with-seat {
        font-size: 16px;
        line-height: 28px;
        letter-spacing: -0.3px;
        margin-left: 20px;
      }
    }

    sub {
      margin-top: 12px;
      display: block;
      font-size: 16px;
      line-height: 1.3em;
      letter-spacing: -0.26px;
      color: ${LIGHT_GRAY8};
    }

    .right {
      flex-basis: 240px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .svgWrapper {
      cursor: pointer;
    }
    .counter {
      width: 54px;
      height: 54px;
      font-size: 22px;
      border-radius: 50%;
      color: ${({ isZero }) =>
        isZero ? DARK_GRAY1 : WHITE1};
      background-color: ${({ isZero }) =>
        isZero ? WHITE1 : ORANGE2};
      border: ${({ isZero }) =>
        isZero ? `solid 1px ${LIGHT_GRAY5}` : 0};
      display: flex;
      justify-content: center;
      align-items: center;
    }

    background-color: ${ifProp(
      'hasBackground',
      LIGHT_GRAY1,
    )};

    @media only screen and (max-width: 767px) {      
      height: 70px;

      .right {
        flex-basis: 130px;
      }

      .passenger__type {
        font-size: 16px;
        font-weight: 300;
      }

      sub {
        margin-top: 6px;
        font-size: 13px;
        font-weight: 300;
      }

      .counter {
        width: 40px;
        height: 40px;
        font-size: 18px;
      }
    }


  `,
  bottomMenuWrapper: styled.div<{ hasInfant: boolean }>`
    display: flex;
    align-items: center;
    margin-top: ${ifProp('hasInfant', 80, 174)}px;
    padding: 0 17px 0 25px;
    margin-bottom: 20px;

    button {
      border: 0;
      background: transparent;
      padding: 0;
    }

    u {
      font-size: 16px;
      line-height: 1.3em;
      color: ${DARK_GRAY1};
      margin-right: 20px;
    }

    @media only screen and (max-width: 1059px) {
      margin-top: 80px;
    }

    @media only screen and (max-width: 767px) {
      margin-top: 50px;
      u {
        font-size: 14px;
      }
    }

  `,
  submitWrapper: styled.div`
    border-top: solid 1px ${LIGHT_GRAY5};
    padding: 24px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .description {
      padding-left: 20px;
      padding-right: 10px;
      position: relative;
      font-size: 16px;
      line-height: 1.4em;
      letter-spacing: -0.24px;
      color: ${LIGHT_GRAY8};

      svg {
        position: absolute;
        top: 4px;
        left: 0px;
      }
    }
    button {
      width: 86px;
      height: 40px;
      border-radius: 8px;
      background-color: ${DARK_BLUE1};
      color: ${WHITE1};
    }
    .spacing {
      display: block;
    }

    @media only screen and (max-width: 1059px) { 
      .spacing {
        margin-left: 4px;
        display: inline-block;
      }
    }

    @media only screen and (max-width: 767px) { 
      display: block;

      .description {
        font-size: 14px;

        svg {
          top: 2px;
        }
      }

      button {
        width: 100%;
        height: 50px;
        margin-top: 20px;
        display: block;
      }
    }
  `,
  svgWrapper: styled.div<{ isDisabled?: boolean }>`
    cursor: ${({ isDisabled }) =>
      isDisabled ? 'default' : 'pointer'};
    pointer-events: ${({ isDisabled }) =>
      isDisabled ? 'none' : 'unset'};
    svg {
      pointer-events: none;
      path:nth-child(2) {
        fill: ${({ isDisabled }) =>
          isDisabled ? LIGHT_GRAY6 : DARK_GRAY1};
      }
    }
  `,
  modalTitle: styled.div`
    & > div:first-of-type {
      margin-bottom: 10px;
    }
  `,
};

export default PassengersDropdown;
