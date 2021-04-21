import React, { FC } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { LIGHT_GRAY8 } from '../../../styles/colors';

interface IStyleProps {
  /** normal, bold */
  fontWeight?: string;
}

export interface IProps extends IStyleProps {
  children: string;
  onClick: () => void;
}

const BtnType11: FC<IProps> = ({
  fontWeight = 'normal',
  children,
  onClick,
}) => {
  return (
    <S.container onClick={onClick}>
      <S.span fontWeight={fontWeight}>{children}</S.span>
    </S.container>
  );
};

BtnType11.defaultProps = {};

const S = {
  container: styled.button`
    &:hover {
      border-bottom: 1px solid ${LIGHT_GRAY8};
    }
  `,
  span: styled.span<IStyleProps>`
    font-size: 13px;
    letter-spacing: -0.26px;
    font-family: ${ifProp(
      { fontWeight: 'bold' },
      'NotoSans-Bold',
      'NotoSans',
    )};
    color: ${LIGHT_GRAY8};
  `,
};

export default BtnType11;
