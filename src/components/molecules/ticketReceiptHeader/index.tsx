import styled from 'styled-components';
import { FC } from 'react';
import {
  DARK_GRAY1,
  LIGHT_GRAY7,
  LIGHT_GRAY5,
} from '@airpremia/cdk/styles/colors';

export interface IProps {
  titleLabel?: string;
  classLabel?: string;
  passengersLabel?: string;
}

const TicketReceiptHeader: FC<IProps> = ({
  titleLabel,
  classLabel,
  passengersLabel,
}) => {
  return (
    <S.container>
      <S.title className="font-bold">{titleLabel}</S.title>
      <S.row>
        <div>{classLabel}</div>
        <div className="passengersLabel">
          {passengersLabel}
        </div>
      </S.row>
    </S.container>
  );
};

const S = {
  container: styled.div`
    padding-bottom: 20px;
  `,

  title: styled.div`
    font-size: 22px;
    line-height: 1.5;
    letter-spacing: -0.36px;
    color: ${DARK_GRAY1};

    @media only screen and (max-width: 767px) {
      font-size: 18px;
    }
  `,

  row: styled.div`
    display: flex;
    padding-top: 5px;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -0.28px;
    color: ${LIGHT_GRAY7};

    .passengersLabel {
      padding-left: 13px;
      position: relative;
      &:before {
        position: absolute;
        content: '';
        top: 6px;
        left: 6px;
        width: 1px;
        height: 10px;
        background-color: ${LIGHT_GRAY5};
      }
    }

    @media only screen and (max-width: 767px) {
      font-size: 14px;
    }
  `,
};

export default TicketReceiptHeader;
