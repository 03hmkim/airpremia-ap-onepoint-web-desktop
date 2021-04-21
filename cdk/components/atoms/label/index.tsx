// Desktop(Tag 로 선언되어있음) => Mobile(Label)로 이전

import React, { FC } from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { RED2, WHITE1 } from '../../../styles/colors';

interface IStyleProps {
  color?: string;
  backgroundColor?: string;
}

export interface IProps extends IStyleProps {
  children?: React.ReactElement | string;
}

const Label: FC<IProps> = ({ children, ...props }) => {
  return <S.container {...props}>{children}</S.container>;
};

Label.defaultProps = {
  backgroundColor: RED2,
  children: '환불불가',
};

const S = {
  container: styled.div<IStyleProps>`
    min-width: 36px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    padding: 0 5px;
    background-color: ${prop('backgroundColor', WHITE1)};
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    color: ${prop('color', WHITE1)};
    box-sizing: border-box;
  `,
};

export default Label;
