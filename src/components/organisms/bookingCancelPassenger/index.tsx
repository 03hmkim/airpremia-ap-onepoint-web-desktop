import { FC } from 'react';
import styled from 'styled-components';
import CautionRedSvg from 'public/images/ico_caution_red.svg';
import { SsrCheckbox, Caution } from 'src/components';
import {
  RED2,
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';
import Checkbox from 'src/components/molecules/checkbox';
import { ICancelablePassenger } from '@airpremia/core/api/booking/types';

interface IProps {
  passengers: ICancelablePassenger[];
  isAllActive: boolean;
  alertShow: boolean;
  isAgreeCheckbox: boolean;
  toBeRemovedPassengerKey: null | string[];
  onAgreeCheckbox: () => void;
  onClickCheckbox: (key: string) => () => void;
  onClickCheckboxAll: () => void;
}

const BookingCancelPassenger: FC<IProps> = ({
  passengers,
  isAllActive,
  alertShow,
  toBeRemovedPassengerKey,
  isAgreeCheckbox,
  onAgreeCheckbox,
  onClickCheckbox,
  onClickCheckboxAll,
}) => {
  return (
    <S.container>
      <S.title className="font-bold">
        예약을 취소할 탑승객을 선택해주세요.
      </S.title>

      <S.passengersCheckbox>
        <S.ssrCheckboxAll>
          <SsrCheckbox
            isActive={isAllActive}
            onClick={onClickCheckboxAll}
          >
            전체
          </SsrCheckbox>
        </S.ssrCheckboxAll>

        {passengers.map((passenger, i) => {
          const isActive =
            toBeRemovedPassengerKey?.includes(
              passenger.passengerKey,
            ) || false;

          return (
            <SsrCheckbox
              key={`passengersCheckbox${i.toString()}`}
              isActive={isActive}
              onClick={onClickCheckbox(
                passenger.passengerKey,
              )}
            >
              <p>
                {passenger.lastName} {passenger.firstName}
              </p>
            </SsrCheckbox>
          );
        })}
        {alertShow && (
          <S.caution>
            <Caution
              SvgIcon={CautionRedSvg}
              title="예약 취소로 탑승 인원이 5인 이하가 될 경우, 최초 예약 시에 적용된 6인 이상 할인 내역이 취소됩니다."
            />
          </S.caution>
        )}
      </S.passengersCheckbox>
      <S.agree>
        <Checkbox
          isActive={isAgreeCheckbox}
          onChange={onAgreeCheckbox}
        >
          <p>
            (필수) 위 내용을 확인했으며, 이에 동의합니다.
          </p>
        </Checkbox>
      </S.agree>
    </S.container>
  );
};

const S = {
  container: styled.div``,

  title: styled.div`
    margin-bottom: 60px;
    font-size: 22px;
    line-height: 1.8em;
    letter-spacing: -0.44px;

    @media only screen and (max-width: 767px) { 
      margin-bottom: 20px;
      font-size: 18px;
    }
  `,

  passengersCheckbox: styled.div`
    padding-bottom: 55px;
    border-bottom: solid 2px ${DARK_GRAY1};
    .children {
      font-size: 22px;
      line-height: 24px;
      letter-spacing: -0.44px;
      font-family: 'Premia', sans-serif;
      font-weight: 700;
    }
    & > button {
      height: 72px;
      &:not(:last-of-type) {
        margin-bottom: 10px;
      }
    }
    @media only screen and (max-width: 1059px) { 
      padding-bottom: 35px;

      & > button {
        height: 52px;
        &:not(:last-of-type) {
          margin-bottom: 5px;
        }
      }
    }
    @media only screen and (max-width: 767px) { 
      padding-bottom: 25px;
      .children {
        font-size: 14px;
        width:100%;

        p{
          width:100%;
        }
      }
      & > button {
        height: 42px;
      }
    }
  `,

  ssrCheckboxAll: styled.div`
    .children {
      font-size: 18px;
    }
    & > button {
      height: 72px;
      margin-bottom: 10px;
    }
    @media only screen and (max-width: 1059px) {

      & > button {
        height: 52px;
        margin-bottom: 5px;
      }
    }
    @media only screen and (max-width: 767px) { 
      .children {
        font-size: 14px;
        width:100%;
      }
      & > button {
        height: 42px;
      }
    }
  `,

  caution: styled.div`
    margin-top: 20px;
    h3 {
      font-size: 15px;
      line-height: 26px;
      letter-spacing: -0.3px;
      font-weight: 600;
      color: ${RED2};
    }
  `,

  agree: styled.div`
    padding: 30px 0 60px;

    p {
      font-size: 18px;
      line-height: 36px;
      letter-spacing: -0.32px;
      font-weight: 600;
    }

    @media only screen and (max-width: 767px) { 
      padding: 10px 0 20px;
      p {
        font-size: 13px;
      }
    }
  `,
};

export default BookingCancelPassenger;
