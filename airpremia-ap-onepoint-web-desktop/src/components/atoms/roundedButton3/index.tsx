import React from 'react';
import styled from 'styled-components';
import {
  LIGHT_GRAY6,
  WHITE1,
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {
  children: string;
  onClick?: () => void;
}

function RoundedButton3({ children, onClick }: IProps) {
  return (
    <S.container onClick={onClick}>{children}</S.container>
  );
}

RoundedButton3.defaultProps = {
  children: '인증받기',
};

const S = {
  container: styled.button<IStyleProps>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 12px;
    border: solid 1px ${LIGHT_GRAY6};
    background-color: ${WHITE1};
    font-size: 11px;
    font-weight: 600;
    color: ${DARK_GRAY1};
  `,
};

export default RoundedButton3;
