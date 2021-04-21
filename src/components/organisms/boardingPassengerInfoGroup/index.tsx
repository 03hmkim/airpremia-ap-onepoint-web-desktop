import { FC, useState } from 'react';
import styled from 'styled-components';
import { IBookingDetailPassenger } from '@airpremia/core/api/checkin/types';
import { BoardingPassengerInfo } from 'src/components';
import SvgCaution from 'public/images/ico_caution.svg';
import ButtonSubType5 from 'src/components/molecules/buttonSubType5';
// import { BLACK, WHITE, GRAY } from '@airpremia/cdk/styles/colors';

interface IProps {
  passengers: IBookingDetailPassenger[];
  isCanceled: boolean;
}

const BoardingPassengerInfoGroup: FC<IProps> = ({
  passengers,
  isCanceled,
}) => {
  const [
    limitPassengerCount,
    setLimitPassengerCount,
  ] = useState<number>(4);
  const onClick = () =>
    setLimitPassengerCount(limitPassengerCount + 10);

  return (
    <S.container>
      <S.header>
        <S.title>
          <h2 className="font-bold">탑승객</h2>
        </S.title>
        <S.description>
          <SvgCaution />
          <p>
            에어프레미아 회원 ID를 입력하셔야 포인트 적립을
            받으실 수 있습니다. 포인트는 탑승 완료 후
            적립됩니다.
          </p>
        </S.description>
      </S.header>

      <S.body>
        <S.boardingPassengerWrapper>
          {passengers.map((passenger, i) => {
            if (limitPassengerCount > i) {
              return (
                <S.boardingPassengerInfo
                  key={`boardingPassenger${i.toString()}`}
                >
                  <BoardingPassengerInfo
                    passenger={passenger}
                    isCanceled={isCanceled}
                  />
                </S.boardingPassengerInfo>
              );
            }
            return null;
          })}
        </S.boardingPassengerWrapper>
      </S.body>

      {passengers.length >= limitPassengerCount && (
        <S.more>
          <ButtonSubType5
            text="탑승객 더보기"
            onClick={onClick}
          />
        </S.more>
      )}
    </S.container>
  );
};

const S = {
  container: styled.div``,

  header: styled.div`
    margin-bottom: 60px;
  `,

  title: styled.div`
    h2 {
      font-size: 30px;
      line-height: 45px;
      letter-spacing: -0.6px;
    }
  `,

  description: styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
    p {
      margin-left: 5px;
      font-size: 15px;
      line-height: 25px;
      letter-spacing: -0.3px;
      font-weight: 600;
    }
  `,

  body: styled.div``,

  boardingPassengerWrapper: styled.div`
    & > div:not(:last-of-type) {
      margin-bottom: 135px;
    }
  `,

  boardingPassengerInfo: styled.div``,

  more: styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
  `,
};

export default BoardingPassengerInfoGroup;
