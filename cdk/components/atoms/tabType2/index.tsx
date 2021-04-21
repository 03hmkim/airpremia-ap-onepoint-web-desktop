import React, { FC } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import {
  DARK_GRAY1,
  ORANGE1,
} from '../../../styles/colors';

interface IStyleProps {
  isActive: boolean;
}

export interface IProps extends IStyleProps {
  children: string;
  onClick: () => void;
}

const TabType2: FC<IProps> = ({
  isActive,
  children,
  onClick,
}) => {
  return (
    <S.container onClick={onClick} isActive={isActive}>
      <S.span isActive={isActive} className="font-bold">
        {children}
      </S.span>
    </S.container>
  );
};

TabType2.defaultProps = {};

const S = {
  container: styled.button<IStyleProps>`
    padding: 5px 10px;
  `,
  span: styled.span<IStyleProps>`
    display: flex;
    align-items: center;
    font-size: 14px;
    height: 20px;
    letter-spacing: -0.28px;
    color: ${ifProp('isActive', ORANGE1, DARK_GRAY1)};
    border-bottom: ${ifProp(
      'isActive',
      `2px solid ${ORANGE1}`,
      'none',
    )};
  `,
};

export default TabType2;
