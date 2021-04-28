import React, { FC } from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

export enum EBorderShape {
  SOLID = 'solid',
  DOTTED = 'dotted',
  DASHED = 'dashed',
}

interface IStyle {
  top?: number;
  bottom?: number;
  color?: string;
  width?: number;
  shape?: EBorderShape;
}
interface IProps extends IStyle {}

const Horizon: FC<IProps> = ({ ...props }: IProps) => {
  return <S.container {...props} />;
};

const S = {
  container: styled.hr<IStyle>`
    width: 100%;
    background: 0;
    border: 0;
    border-top: ${prop('shape', EBorderShape.SOLID)}
      ${prop('width', 2)}px ${prop('color', DARK_GRAY1)};
    margin: ${prop('top', 10)}px 0 ${prop('bottom', 10)}px;

    border-bottom: 0;
    @media only screen and (max-width: 1059px) { 
        margin:10px 0 40px;
    }
    @media only screen and (max-width: 767px) { 
        margin:10px 0 20px;
    }
  `,
};

export default Horizon;
