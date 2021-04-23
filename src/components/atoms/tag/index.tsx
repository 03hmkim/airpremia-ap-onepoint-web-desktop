import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { RED2, WHITE1 } from '@airpremia/cdk/styles/colors';

interface IStyleProps {
  color?: string;
  weight?: number;
  backgroundColor?: string;
}

export interface IProps extends IStyleProps {
  children?: React.ReactElement | string;
}

function Tag({ backgroundColor, color, weight, children }: IProps) {
  return (
    <S.container color={color} weight={weight} backgroundColor={backgroundColor}>
      {children}
    </S.container>
  );
}

Tag.defaultProps = {
  backgroundColor: RED2,
  children: '환불불가',
};

const S = {
  container: styled.div<IStyleProps>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    padding: 0 6px;
    background-color: ${prop('backgroundColor', WHITE1)};
    border-radius: 4px;
    font-size: 18px;
    font-weight: ${prop('weight', 600)};
    color: ${prop('color', WHITE1)};

    @media only screen and (max-width: 767px) {
      height: 20px;
      padding: 0 4px;
      font-size: 12px;
    }
  `,
};

export default Tag;
