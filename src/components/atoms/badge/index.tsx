import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import {
  DARK_GRAY1,
  WHITE1,
} from '@airpremia/cdk/styles/colors';

interface IProps {
  backgroundColor: string;
  children: string | React.ReactElement;
}

function Badge({ backgroundColor, children }: IProps) {
  return (
    <S.container backgroundColor={backgroundColor}>
      <p className="font-premia-bold">{children}</p>
    </S.container>
  );
}

Badge.defaultProps = {};

const S = {
  container: styled.div<{ backgroundColor: string }>`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background-color: ${prop(
      'backgroundColor',
      DARK_GRAY1,
    )};
    padding-top: 2px;
    box-sizing: border-box;
    p {
      font-size: 16px;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: -0.32px;
      text-align: left;
      color: ${WHITE1};
    }
  `,
};

export default Badge;
