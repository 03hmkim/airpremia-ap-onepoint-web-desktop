import React, { FC } from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { BLUE1 } from '../../../styles/colors';

interface IStyleProp {
  color?: string;
}

export interface IProps extends IStyleProp {
  children: string;
  onClick: () => void;
}

const BtnType7: FC<IProps> = ({
  color,
  children,
  onClick,
}) => {
  return (
    <S.container color={color} onClick={onClick}>
      <S.span color={color}>{children}</S.span>
    </S.container>
  );
};

BtnType7.defaultProps = {};

const S = {
  container: styled.button<IStyleProp>``,
  span: styled.span<IStyleProp>`
    font-size: 13px;
    font-weight: 600;
    line-height: 1.77;
    color: ${prop('color', BLUE1)};
    border-bottom: 1px solid ${prop('color', BLUE1)};
  `,
};

export default BtnType7;
