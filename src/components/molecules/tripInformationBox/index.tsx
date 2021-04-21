import { FC } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import {
  LIGHT_GRAY7,
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';
import SvgDottedLine from 'public/images/shape_dotted_line.svg';
import { IFlightTicketSearchLeg } from '@airpremia/core/api/ticket/types';
import {
  getHumanizeTime,
  getStationLabel,
} from '@airpremia/core/lib/booking';
import { ILanguageData } from '@airpremia/core/stores/models/common';

interface IProps {
  leg: IFlightTicketSearchLeg;
  language: ILanguageData;
}

const TripInformationBox: FC<IProps> = ({
  leg,
  language,
}) => {
  const {
    departureStation,
    arrivalStation,
    departureTime,
    arrivalTime,
    flightTimeInMinute,
    equipmentType,
    identifier,
    carrierCodeText,
  } = leg;

  const timeFormat = 'YYYY. M. D dddd HH:mm';
  return (
    <S.container>
      <S.title className="font-bold">
        {carrierCodeText} {identifier}
      </S.title>
      <S.description>
        {equipmentType} | &nbsp;
        {getHumanizeTime({
          duration: flightTimeInMinute,
        })}
      </S.description>

      <S.body>
        <S.figure>
          <div className="circle up" />
          <div className="svg-wrapper">
            <SvgDottedLine />
          </div>
          <div className="circle down" />
        </S.figure>
        <S.content>
          <div>
            <p>
              {getStationLabel(departureStation)} (
              {departureStation})
            </p>
            <p>
              {moment(departureTime)
                .locale(language.code)
                .format(timeFormat)}
            </p>
          </div>
          <div>
            <p>
              {getStationLabel(arrivalStation)} (
              {arrivalStation})
            </p>
            <p>
              {moment(arrivalTime)
                .locale(language.code)
                .format(timeFormat)}
            </p>
          </div>
        </S.content>
      </S.body>
    </S.container>
  );
};

const flex = `
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const S = {
  container: styled.div``,

  title: styled.div`
    margin-bottom: 5px;
    font-size: 18px;
    line-height: 40px;
    letter-spacing: -0.36px;
  `,

  description: styled.div`
    color: ${LIGHT_GRAY7};
    margin-bottom: 26px;
    ${flex};
  `,

  body: styled.div`
    ${flex};
  `,

  figure: styled.div`
    flex-basis: 30px;
    .svg-wrapper {
    }

    .circle {
      width: 8px;
      height: 8px;
      background-color: ${DARK_GRAY1};
      border-radius: 50%;
      margin-left: 1px;
      &.up {
        margin-bottom: 3px;
      }
      &.down {
        margin-top: 3px;
      }
    }
  `,

  content: styled.div`
    flex: 1;
    & > div {
      ${flex};
      p {
        font-weight: 600;
        &:first-of-type {
          font-size: 15px;
          line-height: 26px;
          letter-spacing: -0.3px;
        }
        &:last-of-type {
          font-size: 16px;
          line-height: 26px;
          letter-spacing: -0.32px;
        }
      }
      &:first-of-type {
        margin-bottom: 17px;
      }
    }
  `,
};

export default TripInformationBox;
