import styled from 'styled-components';
import { FC } from 'react';
import QRCode from 'qrcode.react';
import {
  LIGHT_GRAY6,
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';
import FlightIcon from 'public/images/ticket/ico-flight.svg';
import moment from 'moment';
import { Horizon } from 'src/components';
import { EBorderShape } from 'src/components/atoms/horizon';
import { IBoardingPassesData } from '@airpremia/core/stores/models/booking';

interface IProps {
  boardingPass: IBoardingPassesData;
}

const BoardingPassPaper: FC<IProps> = ({
  boardingPass,
}) => {
  const {
    origin,
    destination,
    arrival,
    departure,
    dateChange,
    name,
    flightDateTime,
    //boardingTerminal,
    boardingGate,
    identifier,
    seat,
    barCode,
    originText,
    destinationText,
  } = boardingPass;

  return (
    <S.container>
      <S.wrapper>
        <S.time>
          <div>
            <p>
              {originText} ({origin})
            </p>
            <h3>{moment(departure).format('HH : mm')}</h3>
          </div>
          <div>
            <FlightIcon />
          </div>
          <div>
            <p>
              {destinationText} ({destination})
            </p>
            <h3>{moment(arrival).format('HH : mm')}</h3>
            {dateChange ? (
              <span>+ {dateChange}</span>
            ) : null}
          </div>
        </S.time>

        <Horizon
          shape={EBorderShape.DASHED}
          top={40}
          bottom={40}
          width={1}
          color={LIGHT_GRAY7}
        />

        <S.detail>
          <S.row>
            <h5>탑승자명</h5>
            <p>
              {name.first} {name.last}
            </p>
          </S.row>
          <S.row>
            <h5>탑승일자</h5>
            <p>
              {moment(flightDateTime)
                .locale('ko')
                .format('YYYY. M. D (dd)')}
            </p>
          </S.row>
          <S.row>
            <h5>탑승시각</h5>
            <p>
              {moment(flightDateTime)
                .locale('ko')
                .format('HH : mm')}
            </p>
          </S.row>
          <S.row>
            <h5>탑승게이트</h5>
            <p>
              {/* {boardingTerminal},  */}{boardingGate}
            </p>
          </S.row>
          <S.row>
            <h5>편명/좌석</h5>
            <p>
              {identifier} / {seat}
            </p>
          </S.row>
        </S.detail>

        <S.barcode>
          <QRCode value={barCode} size={100} />
        </S.barcode>
      </S.wrapper>
    </S.container>
  );
};

const S = {
  container: styled.div``,

  wrapper: styled.div`
    width: 380px;
    height: 553px;
    padding: 40px 40px 48px;
    box-sizing: border-box;
    border-radius: 12px;
    border: solid 1px ${LIGHT_GRAY6};
  `,

  time: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    & > div {
      display: flex;
      flex-direction: column;
      &:nth-child(1) {
        p {
          text-align: left;
        }
      }
      &:nth-child(2) {
        padding-bottom: 9px;
      }
      &:nth-child(3) {
        p {
          text-align: right;
        }
      }
    }
    p {
      font-size: 13px;
      line-height: 1;
      letter-spacing: -0.26px;
      margin-bottom: 6px;
    }

    h3 {
      font-size: 36px;
      line-height: 35px;
      letter-spacing: -0.72px;
      font-family: 'Premia', sans-serif;
      font-weight: 700;
    }

    span {
    }
  `,

  detail: styled.div`
    margin: 0 10px;
    div:not(:last-of-type) {
      margin-bottom: 15px;
    }
  `,

  row: styled.div`
    display: flex;
    align-items: center;
    h5 {
      flex-basis: 100px;
      font-size: 13px;
      line-height: 19px;
      letter-spacing: -0.26px;
    }
    p {
      font-size: 15px;
      line-height: 22px;
      font-weight: 600;
    }
  `,

  barcode: styled.div`
    margin-top: 50px;
    text-align: center;
  `,
};

export default BoardingPassPaper;
