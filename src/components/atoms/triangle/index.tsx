import React from 'react';
import styled, { css } from 'styled-components';
import { prop, switchProp } from 'styled-tools';

import ImgTriangle from 'public/images/btn_dropdown_able_up.svg';
import * as Colors from '@airpremia/cdk/styles/colors';
import { EPosition } from '../arrow';

export interface IStyleProps {
  /** 화살표 색상 */
  color?: string;
  /** 화살표가 가리키는 방향 (up, down, left, right 중 택1) */
  position?: EPosition;
  scale?: number;
}

export interface IProps extends IStyleProps {}

function Triangle(props: IProps) {
  return (
    <S.container className="triangle" {...props}>
      <ImgTriangle />
    </S.container>
  );
}

Triangle.defaultProps = {
  color: Colors.DARK_GRAY1,
  position: EPosition.DOWN,
};

const S = {
  container: styled.div<IStyleProps>`
    transform: scale(${prop('scale')});
    display: flex;
    align-items: center;
    svg {
      transition: transform 0.1s;
      ${switchProp('position', {
        [EPosition.UP]: css`
          transform: rotate(180deg);
        `,
        [EPosition.DOWN]: css`
          transform: rotate(0);
        `,
        [EPosition.LEFT]: css`
          transform: rotate(90deg);
        `,
        [EPosition.RIGHT]: css`
          transform: rotate(-90deg);
        `,
      })}

      path:nth-child(2) {
        fill: ${prop('color')};
      }
    }
  `,
};

export default Triangle;
