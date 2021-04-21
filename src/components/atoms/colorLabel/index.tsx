import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

interface IStyleProps {
  color?: string;
}
interface IProps extends IStyleProps {
  children?: string;
}

function ColorLabel({ color, children }: IProps) {
  return (
    <S.container color={color}>
      <span className="dot" />
      {children}
    </S.container>
  );
}

ColorLabel.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    display: flex;
    align-items: center;
    .dot {
      width: 4px;
      height: 4px;
      border-radius: 4px;
      background-color: ${prop('color', DARK_GRAY1)};
      margin-right: 5px;
    }
    font-size: 12px;
    font-weight: 600;
    line-height: 1.6;
    color: ${prop('color', DARK_GRAY1)};
  `,
};

export default ColorLabel;
