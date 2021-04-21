import React from 'react';
import styled from 'styled-components';
import { ExitLabel, SeatLandmark } from 'src/components';
import { EPosition } from 'src/components/atoms/arrow';
import { ESeatLandmarkType } from 'src/components/atoms/seatLandmark';
import { SeatRowLabels } from '../../index';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';
import {
  economyColumns,
  economySection1Rows,
  economySection2ExcludeSeats,
  economySection2Rows,
} from './dataset';
import { ISeatItem } from '@airpremia/core/hooks/useSsr/seat';
import { getSsrSeatMap } from '@airpremia/core/lib/ssr';
import { useSsr } from '@airpremia/core/hooks';

interface IProps {
  seatMap?: ISeatItem[][][];
  onClick: (item: ISeatItem) => void;
}

function SeatMapEconomy({ seatMap, onClick }: IProps) {
  const { getSeatMapElement } = useSsr();

  const seatMapSection1 = getSsrSeatMap({
    columns: economyColumns,
    rows: economySection1Rows,
    dataset: seatMap,
  });

  const seatMapSection2 = getSsrSeatMap({
    columns: economyColumns,
    rows: economySection2Rows,
    dataset: seatMap,
    excludeSeats: economySection2ExcludeSeats,
  });

  return (
    <S.container>
      <div className="landmarkWrapperTop">
        <div className="row exitLabelsWrapper">
          <ExitLabel direction={EPosition.LEFT} />
          <ExitLabel direction={EPosition.RIGHT} />
        </div>
        <div className="toiletWrapper">
          <SeatLandmark
            type={ESeatLandmarkType.TOILET_SINGLE}
          />
        </div>
        <div className="labelsWrapper font-premia-bold">
          <div className="columnLabelsWrapper">
            {/*TODO*/}
            {economyColumns.map(
              (group: string[], groupIndex: number) => {
                return (
                  <div
                    key={`${groupIndex}`}
                    className="group"
                  >
                    {group.map(
                      (
                        column: string,
                        columnIndex: number,
                      ) => (
                        <span key={`${columnIndex}`}>
                          {column}
                        </span>
                      ),
                    )}
                  </div>
                );
              },
            )}
          </div>
          <div className="rowLabelsWrapper">
            <div className="labelWrapper">
              <SeatRowLabels rows={economySection1Rows} />
            </div>
            <div className="labelWrapper">
              <SeatRowLabels rows={economySection1Rows} />
            </div>
          </div>
        </div>
      </div>
      <div className="seatMapWrapper">
        {getSeatMapElement(seatMapSection1, onClick)}
      </div>
      <div className="landmarkWrapperMiddle">
        <div className="row">
          <div className="toiletWrapper">
            <SeatLandmark
              type={ESeatLandmarkType.TOILET_SINGLE}
            />
          </div>
          <div className="toiletWrapper">
            <SeatLandmark
              type={ESeatLandmarkType.TOILET_DOUBLE}
            />
          </div>
          <div className="toiletWrapper">
            <SeatLandmark
              type={ESeatLandmarkType.TOILET_SINGLE}
            />
          </div>
        </div>
        <div className="row">
          <ExitLabel direction={EPosition.LEFT} />
          <ExitLabel direction={EPosition.RIGHT} />
        </div>
        <div className="labelsWrapper font-premia-bold">
          <div className="columnLabelsWrapper">
            {/*TODO*/}
            {economyColumns.map(
              (group: string[], groupIndex: number) => {
                return (
                  <div
                    key={`${groupIndex}`}
                    className="group"
                  >
                    {group.map(
                      (
                        column: string,
                        columnIndex: number,
                      ) => (
                        <span key={`${columnIndex}`}>
                          {column}
                        </span>
                      ),
                    )}
                  </div>
                );
              },
            )}
          </div>
          <div className="rowLabelsWrapper">
            <div className="labelWrapper">
              <SeatRowLabels rows={economySection2Rows} />
            </div>
            <div className="labelWrapper">
              <SeatRowLabels rows={economySection2Rows} />
            </div>
          </div>
        </div>
      </div>
      <div className="seatMapWrapper section2">
        {getSeatMapElement(seatMapSection2, onClick)}
      </div>
      <div className="landmarkWrapperBottom">
        <div className="row">
          <div className="toiletWrapper small">
            <SeatLandmark
              type={ESeatLandmarkType.TOILET_SINGLE}
            />
          </div>
          <div className="galleyWrapper small">
            <SeatLandmark type={ESeatLandmarkType.GALLEY} />
          </div>
          <div className="toiletWrapper small">
            <SeatLandmark
              type={ESeatLandmarkType.TOILET_SINGLE}
            />
          </div>
        </div>
        <div className="row exitLabelsWrapper">
          <ExitLabel direction={EPosition.LEFT} />
          <ExitLabel direction={EPosition.RIGHT} />
        </div>
        <div className="row">
          <div className="galleyWrapper big">
            <SeatLandmark type={ESeatLandmarkType.GALLEY} />
          </div>
        </div>
      </div>
    </S.container>
  );
}

SeatMapEconomy.defaultProps = {};

const S = {
  container: styled.div`
    position: relative;
    .row {
      display: flex;
      justify-content: space-between;
    }
    .labelsWrapper {
      position: relative;
      .columnLabelsWrapper {
        display: flex;
        justify-content: space-between;
        span + span {
          padding-left: 5px;
        }
        span {
          display: inline-block;
          width: 32px;
          text-align: center;
          font-size: 22px;
          line-height: 1.86;
          color: ${DARK_GRAY1};
        }
      }
      .rowLabelsWrapper {
        position: absolute;
        top: 78px;
        left: 131px;
        display: flex;
        .labelWrapper + .labelWrapper {
          padding-left: 153px;
        }
      }
    }
    .landmarkWrapperTop {
      .toiletWrapper {
        width: 106px;
        height: 56px;
        margin: 0 auto;
        padding-top: 20px;
      }
      .columnLabelsWrapper {
        padding-top: 20px;
      }
    }
    .seatMapWrapper {
      .row {
        display: flex;
        justify-content: space-between;
        padding-top: 15px;
        .group {
          display: flex;
          .seatButtonWrapper + .seatButtonWrapper {
            padding-left: 5px;
          }
          .seatButtonWrapper {
            height: 44px;
          }
        }
      }

      &.section2 {
        .row {
          .group:nth-child(2) {
            margin-top: -20px;
          }
        }
      }
    }
    .landmarkWrapperMiddle {
      padding-top: 30px;
      .row {
        justify-content: space-between;
      }
      .rowLabelsWrapper {
        top: 98px;
      }
      .toiletWrapper:nth-child(odd) {
        width: 106px;
        height: 56px;
      }
      .toiletWrapper:nth-child(2) {
        width: 108px;
        height: 106px;
      }
      .columnLabelsWrapper {
        padding-top: 50px;
        .group:nth-child(2) {
          margin-top: -20px;
        }
      }
    }
    .landmarkWrapperBottom {
      position: relative;
      z-index: 1;
      margin-top: -31px;
      .row {
        justify-content: space-between;
        .small {
          width: 106px;
          height: 56px;
          &.galleyWrapper {
            margin-top: 39px;
          }
        }
        .big {
          width: 100%;
          height: 56px;
          padding-top: 30px;
        }
        &.exitLabelsWrapper {
          margin-top: -10px;
        }
      }
    }
  `,
};

export default SeatMapEconomy;
