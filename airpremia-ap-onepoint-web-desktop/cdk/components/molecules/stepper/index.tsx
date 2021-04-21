import React, { FC } from 'react';
import styled from 'styled-components';
import SvgMinus from '../../../public/images/ico_minus.svg';
import SvgPlus from '../../../public/images/ico_plus.svg';
import {
  LIGHT_GRAY6,
  DARK_GRAY1,
  WHITE1,
  ORANGE2,
  LIGHT_GRAY5,
} from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {
  value: number;
  min?: number;
  max?: number;
  onMinus: () => void;
  onPlus: () => void;
}

const Stepper: FC<IProps> = ({
  value,
  min,
  max,
  onMinus,
  onPlus,
}) => {
  return (
    <S.container>
      <S.svgWrapper
        isDisabled={value == min}
        onClick={onMinus}
      >
        <SvgMinus />
      </S.svgWrapper>
      <S.counter
        isZero={value == 0}
        className="font-premia-bold"
      >
        {value}
      </S.counter>
      <S.svgWrapper
        isDisabled={value == max}
        onClick={onPlus}
      >
        <SvgPlus />
      </S.svgWrapper>
    </S.container>
  );
};

Stepper.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 174px;
    height: 54px;
  `,
  counter: styled.div<{ isZero?: boolean }>`
    width: 52px;
    height: 52px;
    font-size: 22px;
    border-radius: 50%;
    color: ${({ isZero }) =>
      isZero ? DARK_GRAY1 : WHITE1};
    background-color: ${({ isZero }) =>
      isZero ? WHITE1 : ORANGE2};
    border: ${({ isZero }) =>
      isZero ? `solid 1px ${LIGHT_GRAY5}` : 0};
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  svgWrapper: styled.div<{ isDisabled?: boolean }>`
    width: 40px;
    height: 40px;
    cursor: ${({ isDisabled }) =>
      isDisabled ? 'default' : 'pointer'};
    pointer-events: ${({ isDisabled }) =>
      isDisabled ? 'none' : 'unset'};
    svg {
      pointer-events: none;
      path:nth-child(2) {
        fill: ${({ isDisabled }) =>
          isDisabled ? LIGHT_GRAY6 : DARK_GRAY1};
      }
    }
  `,
};

export default Stepper;
