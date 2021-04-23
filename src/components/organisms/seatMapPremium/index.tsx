import React from 'react';
import styled from 'styled-components';
import { ExitLabel, SeatLandmark } from 'src/components';
import { ESeatLandmarkType } from 'src/components/atoms/seatLandmark';
import { SeatRowLabels } from '../../index';
import { EPosition } from 'src/components/atoms/arrow';
import { premiumColumns, premiumRows } from './dataset';
import { ISeatItem } from '@airpremia/core/hooks/useSsr/seat';
import { useSsr } from '@airpremia/core/hooks';
import { getSsrSeatMap } from '@airpremia/core/lib/ssr';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

interface IProps {
  seatMap?: ISeatItem[][][];
  onClick: (item: ISeatItem) => void;
}

function SeatMapPremium({ seatMap, onClick }: IProps) {
  const { getSeatMapElement } = useSsr();

  const seatMapLocal = getSsrSeatMap({
    columns: premiumColumns,
    rows: premiumRows,
    dataset: seatMap,
  });

  return (
    <S.container>
      <div className="landmarkWrapperTop">
        <div className="row">
          <div className="toiletWrapper first">
            <SeatLandmark
              type={ESeatLandmarkType.TOILET_SINGLE}
            />
          </div>
          <div className="galleyWrapper">
            <SeatLandmark type={ESeatLandmarkType.GALLEY} />
          </div>
        </div>
        <div className="row">
          <div className="galleyWrapper">
            <SeatLandmark type={ESeatLandmarkType.GALLEY} />
          </div>
          <div className="toiletWrapper first">
            <SeatLandmark
              type={ESeatLandmarkType.TOILET_SINGLE}
            />
          </div>
        </div>
      </div>
      <div className="labelsWrapper">
        <div className="columnLabelsWrapper">
          {/*TODO dataset 에 있는 객체 활용 */}
          <div className="group">
            <span>A</span>
            <span>B</span>
          </div>
          <div className="group">
            <span>D</span>
            <span>E</span>
            <span>F</span>
          </div>
          <div className="group">
            <span>H</span>
            <span>J</span>
          </div>
        </div>
        <div className="rowLabelsWrapper">
          <div className="labelWrapper">
            <SeatRowLabels rows={premiumRows} />
          </div>
          <div className="labelWrapper">
            <SeatRowLabels rows={premiumRows} />
          </div>
        </div>
      </div>
      <div className="seatMapWrapper">
        {getSeatMapElement(seatMapLocal, onClick)}
      </div>
      <div className="landmarkWrapperBottom">
        <div className="toiletWrapper">
          <SeatLandmark
            type={ESeatLandmarkType.TOILET_SINGLE}
          />
        </div>
        <div className="exitLabelsWrapper">
          <ExitLabel direction={EPosition.LEFT} />
          <ExitLabel direction={EPosition.RIGHT} />
        </div>
      </div>
    </S.container>
  );
}

SeatMapPremium.defaultProps = {};

const S = {
  container: styled.div`
    width: 100%;
    .landmarkWrapperTop {
      padding: 0 38px;
      .row:nth-child(1) {
        display: flex;
        justify-content: space-between;
        .toiletWrapper {
          width: 69px;
          height: 56px;
        }
        .galleyWrapper {
          width: 242px;
          height: 56px;
        }
      }
      .row:nth-child(2) {
        display: flex;
        justify-content: space-between;
        padding-top: 30px;
        .galleyWrapper {
          width: 106px;
          height: 56px;
          padding-left: 132px;
        }
        .toiletWrapper {
          width: 69px;
          height: 56px;
        }
      }
    }
    .labelsWrapper {
      font-family: 'Premia';
      font-weight: 700;
      padding: 0 38px;
      position: relative;
      .columnLabelsWrapper {
        padding-top: 20px;
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
        top: 77px;
        left: 135px;
        display: flex;
        .labelWrapper + .labelWrapper {
          padding-left: 163px;
        }
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
    }
    .landmarkWrapperBottom {
      padding-top: 30px;
      .toiletWrapper {
        margin: 0 auto;
        width: 106px;
        height: 56px;
      }
      .exitLabelsWrapper {
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
      }
    }

    @media only screen and (max-width: 479px) {
      .landmarkWrapperTop {
        padding: 0 28px;
        .row:nth-child(1) {
          .toiletWrapper {
            width: 52px;
          }
          .galleyWrapper {
            width: 166px;
          }
        }
        .row:nth-child(2) {
          .galleyWrapper {
            width: 80px;
            padding-left: 92px;
          }
          .toiletWrapper {
            width: 52px;
          }
        }
      }
      .labelsWrapper {
        padding: 0 28px;
        .columnLabelsWrapper {
          span {
            width: 24px;
            font-size: 16px;
          }
        }
        .rowLabelsWrapper {
          top: 65px;
          left: 97px;
          .labelWrapper + .labelWrapper {
            padding-left: 106px;
          }
        }
      }
    }
  `,
};

export default SeatMapPremium;
