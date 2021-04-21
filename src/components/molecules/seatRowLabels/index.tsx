import React from 'react';
import styled from 'styled-components';
import { LIGHT_GRAY6 } from '@airpremia/cdk/styles/colors';

interface IProps {
  /** 열 숫자 목록 */
  rows: number[];
}

function SeatRowLabels({ rows }: IProps) {
  return (
    <S.container className="font-premia-bold">
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
  `,
};

export default SeatRowLabels;
