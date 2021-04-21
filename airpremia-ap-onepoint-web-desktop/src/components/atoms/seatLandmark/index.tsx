import React, { useMemo } from 'react';
import styled from 'styled-components';
import { LIGHT_GRAY6 } from '@airpremia/cdk/styles/colors';
import SvgToilet from 'public/images/ico_seatmap_toilet.svg';
import SvgGalley from 'public/images/ico_seatmap_galley.svg';

export enum ESeatLandmarkType {
  TOILET_SINGLE,
  TOILET_DOUBLE,
  GALLEY,
}

interface IProps {
  type: ESeatLandmarkType;
}

function SeatLandmark({ type }: IProps) {
  const svg = useMemo(() => {
    switch (type) {
      case ESeatLandmarkType.TOILET_SINGLE:
        return <SvgToilet />;
      case ESeatLandmarkType.TOILET_DOUBLE:
        return (
          <div className="double">
            <div className="svgWrapper">
              <SvgToilet />
            </div>
            <div className="svgWrapper">
              <SvgToilet />
            </div>
          </div>
        );
      case ESeatLandmarkType.GALLEY:
        return <SvgGalley />;
    }
  }, [type]);
  return <S.container>{svg}</S.container>;
}

SeatLandmark.defaultProps = {};

const S = {
  container: styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: solid 1px ${LIGHT_GRAY6};
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    .double {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 1px;
        height: 100%;
        background-color: ${LIGHT_GRAY6};
      }
      .svgWrapper {
        width: 50%;
        text-align: center;
      }
    }
  `,
};

export default SeatLandmark;
