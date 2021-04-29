import React from 'react';
import styled, { css } from 'styled-components';
import { prop, ifProp } from 'styled-tools';
import SvgArrow from 'public/images/btn_dropdown_arrow_able_black.svg';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

export enum EPosition {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}

export interface IStyleProps {
  /** 화살표 색상 */
  color?: string;
  /** 화살표가 가리키는 방향 (up, down, left, right 중 택1) */
  position?: EPosition;
  /** 화살표 크기(transform scale) */
  scale?: number;
  /** 화살표 굵기 */
  borderWidth?: string;
  /** 화살표 disable */
  disabled?: boolean;
}

export interface IProps extends IStyleProps {
  onClick?: (e: any) => void;
}

function Arrow({ onClick, ...props }: IProps) {
  return (
    <S.container
      className="arrow"
      onClick={onClick}
      {...props}
    >
      <SvgArrow />
    </S.container>
  );
}

const rotateDegMap = {
  [EPosition.UP]: '180deg',
  [EPosition.RIGHT]: '-90deg',
  [EPosition.DOWN]: '0',
  [EPosition.LEFT]: '90deg',
};

Arrow.defaultProps = {
  color: DARK_GRAY1,
  position: EPosition.RIGHT,
  scale: 1,
  borderWidth: '2px',
};

const S = {
  container: styled.div<IStyleProps>`
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: ${ifProp('disabled', 'unset', 'pointer')};
    transform: scale(${prop('scale')});
    svg {
      transition: all 0.3s ease-in;
      ${({ position = EPosition.DOWN }) => {
        return css`
          transform: rotate(${rotateDegMap[position]});
        `;
      }}
      .border {
        stroke-width: ${prop('borderWidth', '2px')};
        stroke: ${prop('color', DARK_GRAY1)};
        stroke-linejoin: round;
      }
      @media only screen and (max-width: 767px) { 
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -10px;

        &:first-child {
          left: 0;
        }
      }
    }
  `,
};

export default Arrow;
