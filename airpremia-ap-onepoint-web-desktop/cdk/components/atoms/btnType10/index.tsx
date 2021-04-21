import React, { FC } from 'react';
import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';
import { DARK_GRAY1 } from '../../../styles/colors';

interface IStyleProps {
  color?: string;
  fontSize?: string;
}

export interface IProps extends IStyleProps {
  children: string;
  onClick?: () => void;
}

const BtnType10: FC<IProps> = ({
  color,
  fontSize,
  children,
  onClick,
}) => {
  return (
    <S.container onClick={onClick}>
      <S.span fontSize={fontSize} color={color}>
        {children}
      </S.span>
    </S.container>
  );
};

BtnType10.defaultProps = {};

const S = {
  container: styled.button`
    padding: 5px 10px 6px;
  `,
  span: styled.span<IStyleProps>`
    font-weight: 600;
    letter-spacing: ${ifProp(
      { fontSize: '12px' },
      '-0.24px',
      '-0.26px',
    )};
    font-size: ${prop('fontSize', '12px')};
    color: ${prop('color', DARK_GRAY1)};
    border-bottom: 1px solid ${prop('color', DARK_GRAY1)};
  `,
};

export default BtnType10;
