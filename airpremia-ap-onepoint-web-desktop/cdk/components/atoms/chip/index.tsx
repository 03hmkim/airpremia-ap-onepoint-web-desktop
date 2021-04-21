import React, { FC } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import {
  DARK_GRAY1,
  ORANGE2,
  WHITE1,
} from '../../../styles/colors';
import { Typography } from '../../index';

export interface IProps {
  active?: boolean;
  children: string;
  onClick?: () => void;
}

const Chip: FC<IProps> = ({
  active = false,
  children,
  onClick,
}) => {
  return (
    <S.container active={active} onClick={onClick}>
      <Typography
        fontType="type14"
        color={active ? WHITE1 : DARK_GRAY1}
        fontWeight="medium"
        lineHeight={20}
      >
        {children}
      </Typography>
    </S.container>
  );
};

Chip.defaultProps = {};

const S = {
  container: styled.button<{ active: boolean }>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 27px;
    padding: 10px;
    border-radius: 14px;
    background-color: ${ifProp('active', ORANGE2, WHITE1)};
  `,
};

export default Chip;
