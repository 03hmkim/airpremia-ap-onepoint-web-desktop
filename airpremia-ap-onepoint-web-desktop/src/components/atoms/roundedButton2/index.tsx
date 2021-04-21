import React from 'react';
import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';
import {
  DARK_GRAY1,
  WHITE1,
  BLUE1,
} from '@airpremia/cdk/styles/colors';

// TODO badge와 겹침. 추후 논의하여 둘중 하나 정리
export enum ERoundedButtonType {
  WHITE,
  BLACK,
  BLUE,
}

interface IStyleProps {
  colorType?: ERoundedButtonType;
}

interface IProps extends IStyleProps {
  children?: React.ReactElement | string;
  onClick?: () => void;
}

function RoundedButton2({
  colorType,
  children,
  onClick,
}: IProps) {
  return (
    <S.container
      colorType={
        colorType ? colorType : ERoundedButtonType.WHITE
      }
      onClick={onClick}
    >
      {children}
    </S.container>
  );
}

RoundedButton2.defaultProps = {
  children: '적용',
  type: ERoundedButtonType.WHITE,
};

const S = {
  container: styled.button<IStyleProps>`
    display: flex;
    align-items: center;
    height: 30px;
    padding: 0 19px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    border-radius: 15px;
    border: 1px solid;
    ${switchProp('colorType', {
      [ERoundedButtonType.WHITE]: css`
        background-color: ${WHITE1};
        color: ${DARK_GRAY1};
        border-color: ${DARK_GRAY1};
      `,
      [ERoundedButtonType.BLACK]: css`
        background-color: ${DARK_GRAY1};
        color: ${WHITE1};
        border-color: ${DARK_GRAY1};
      `,
      [ERoundedButtonType.BLUE]: css`
        background-color: ${BLUE1};
        color: ${WHITE1};
        border-color: ${BLUE1};
      `,
    })}
  `,
};

export default RoundedButton2;
