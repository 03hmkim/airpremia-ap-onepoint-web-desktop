import React, { FC } from 'react';
import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';
import {
  BLUE1,
  LIGHT_GRAY1,
  LIGHT_GRAY6,
  WHITE1,
} from '../../../styles/colors';

interface IButtonStyleProps {
  backgroundColor?: string;
  borderColor?: string;
  disabled?: boolean;
}

interface ISpanStyleProps {
  color?: string;
  disabled?: boolean;
}

export interface IProps
  extends IButtonStyleProps,
    ISpanStyleProps {
  children: string;
  onClick?: () => void;
}

const BtnType6: FC<IProps> = ({
  backgroundColor = WHITE1,
  color = BLUE1,
  borderColor = BLUE1,
  disabled = false,
  children,
  onClick,
}: IProps) => {
  return (
    <S.container
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      disabled={disabled}
      onClick={onClick}
    >
      <S.span color={color} disabled={disabled}>
        {children}
      </S.span>
    </S.container>
  );
};

BtnType6.defaultProps = {};

const S = {
  container: styled.button<IButtonStyleProps>`
    display: flex;
    align-items: center;
    height: 24px;
    padding: 0 10px;
    border-radius: 14px;
    border: solid 1px
      ${ifProp(
        'disabled',
        LIGHT_GRAY6,
        prop('borderColor'),
      )};
    background-color: ${ifProp(
      'disabled',
      LIGHT_GRAY1,
      prop('backgroundColor'),
    )};
  `,
  span: styled.span<ISpanStyleProps>`
    font-size: 11px;
    font-weight: 600;
    letter-spacing: -1px;
    color: ${ifProp(
      'disabled',
      LIGHT_GRAY6,
      prop('color'),
    )};
    vertical-align: middle;
  `,
};

export default BtnType6;
