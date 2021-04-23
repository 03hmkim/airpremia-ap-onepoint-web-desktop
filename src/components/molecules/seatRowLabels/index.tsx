import React from 'react';
import styled from 'styled-components';
import { LIGHT_GRAY6 } from '@airpremia/cdk/styles/colors';

interface IProps {
  /** 열 숫자 목록 */
  rows: number[];
}

function SeatRowLabels({ rows }: IProps) {
  return (
    <S.container>
      {rows.map((rowNumber: number) => {
        return (
          <div key={`${rowNumber}`} className="row">
            <span>{rowNumber}</span>
          </div>
        );
      })}
    </S.container>
  );
}

SeatRowLabels.defaultProps = {};

const S = {
  container: styled.div`
    font-weight: 700;
    display: flex;
    flex-direction: column;
    .row + .row {
      padding-top: 15px;
    }
    .row {
      height: 44px;
      display: flex;
      align-items: center;
      span {
        font-size: 22px;
        color: ${LIGHT_GRAY6};
      }
    }

    @media only screen and (max-width: 479px) {
      .row {
        span {
          font-size: 18px;
          z-index: 1;
        }
      }
    }
  `,
};

export default SeatRowLabels;
