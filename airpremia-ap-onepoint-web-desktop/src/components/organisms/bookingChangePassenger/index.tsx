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

const BookingChangePassenger: FC<IProps> = ({
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
        일정을 변경할 탑승객을 선택해주세요.
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
              title="일부 탑승객만 예약을 변경할 경우, 기존 예약과 분리됩니다."
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
    line-height: 54px;
    letter-spacing: -0.44px;
  `,

  passengersCheckbox: styled.div`
    padding-bottom: 55px;
    border-bottom: solid 2px ${DARK_GRAY1};
    .children {
      font-size: 22px;
      line-height: 24px;
      letter-spacing: -0.44px;
      font-family: 'Premia-Bold', sans-serif;
      font-weight: 500;
    }
    & > button {
      height: 72px;
      &:not(:last-of-type) {
        margin-bottom: 10px;
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
      font-size: 16px;
      line-height: 36px;
      letter-spacing: -0.32px;
      font-weight: 600;
    }
  `,
};

export default BookingChangePassenger;
