import React, { FC, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';
import {
  BLUE1,
  WHITE1,
} from '@airpremia/cdk/styles/colors';

interface IStyle {
  color?: string;
  backgroundColor?: string;
  arrowPosition?: string;
}

interface IProps extends IStyle {
  children?: ReactElement | string;
}

const SpeechBubble: FC<IProps> = ({
  children,
  ...props
}) => {
  return (
    <S.container {...props}>
      {children}
      <span />
    </S.container>
  );
};

const S = {
  container: styled.div<IStyle>`
    position: relative;
    min-width: 33px;
    width: fit-content;
    height: 29px;
    padding: 0 8px;

    color: ${prop('color', WHITE1)};
    background: ${prop('backgroundColor', BLUE1)};

    border-radius: 10px 10px 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-family: 'Premia', sans-serif;
    font-weight: 700;

    span {
      width: 0;
      height: 0;
      left: 0;
      border-top: 5px solid
        ${prop('backgroundColor', BLUE1)};
      border-bottom: 5px solid transparent;
      border-right: 5px solid transparent;
      border-left: 5px solid
        ${prop('backgroundColor', BLUE1)};
      position: absolute;
      bottom: -9px;
    }
    ${({ arrowPosition }) => {
      if (arrowPosition === 'right') {
        return css`
          border-radius: 10px 10px 0 10px;
          span {
            right: 0;
            left: unset;
            border-top: 5px solid
              ${prop('backgroundColor', BLUE1)};
            border-bottom: 5px solid transparent;
            border-left: 5px solid transparent;
            border-right: 5px solid
              ${prop('backgroundColor', BLUE1)};
          }
        `;
      }
    }}
  `,
};

export default SpeechBubble;
