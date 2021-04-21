import { FC } from 'react';
import styled from 'styled-components';

import { useBooking } from '@airpremia/core/hooks';
import {
  PassengerForm,
  // PassengerDomForm,
} from 'src/components';
import {
  DARK_GRAY2,
  LIGHT_GRAY7,
  DARK_GRAY1,
  LIGHT_GRAY5,
} from '@airpremia/cdk/styles/colors';
import { EPassengerType } from '@airpremia/core/stores/models/bookingSession';

interface IProps {}

const BoardingPersonInfo: FC<IProps> = ({}: IProps) => {
  const { bookingSessionStore } = useBooking();
  const {
    passengersInfomation,
    // routeType,
  } = bookingSessionStore;

  return (
    <S.container>
      <S.header>
        <h2 className="font-bold">탑승자 정보입력</h2>
        <p>
          여권 상 표기된 이름과 동일하게 입력해주세요.
          <br />
          예약 완료 후 이름 변경 시 항공권 재발행 수수료가
          부과될 수 있습니다.
        </p>
      </S.header>
      <S.formWrapper>
        {Object.keys(passengersInfomation).map((item, i) =>
          Array(passengersInfomation[item].length)
            .fill(i)
            .map((a, personCount) => (
              // routeType === 'domestic' ?
              //   <PassengerDomForm
              //     key={`${item}${a}${personCount.toString()}`}
              //     type={item}
              //     count={personCount}
              //     isBooker={
              //       item === EPassengerType.ADULT &&
              //       personCount === 0
              //     }
              //   />
              // :
                <PassengerForm
                  key={`${item}${a}${personCount.toString()}`}
                  type={item}
                  count={personCount}
                  isBooker={
                    item === EPassengerType.ADULT &&
                    personCount === 0
                  }
                />
              ),
            ),
        )}
      </S.formWrapper>
    </S.container>
  );
};

const S = {
  container: styled.div``,

  header: styled.div`
    h2 {
      font-size: 30px;
      line-height: 42px;
      letter-spacing: -0.6px;
      color: ${DARK_GRAY2};
    }

    p {
      font-size: 14px;
      line-height: 22px;
      letter-spacing: -0.28px;
      color: ${LIGHT_GRAY7};
      margin-top: 10px;
    }
  `,

  formWrapper: styled.div`
    border-top: solid 2px ${DARK_GRAY1};
    border-bottom: solid 2px ${DARK_GRAY1};
    margin-top: 48px;

    & > div:not(:last-of-type) {
      border-bottom: solid 1px ${LIGHT_GRAY5};
    }
  `,
};

export default BoardingPersonInfo;
