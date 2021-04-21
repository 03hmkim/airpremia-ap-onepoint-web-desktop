import React from 'react';
import styled from 'styled-components';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

export interface IProps {
  handleClick: (e: any) => void;
}

function xButton({ handleClick }: IProps) {
  return <S.container onClick={handleClick} />;
}

xButton.defaultProps = {};

const S = {
  container: styled.div`
    width: 30px;
    height: 30px;

    &::before,
    &::after {
      position: absolute;
      left: 14px;
      top: 3px;
      content: '';
      height: 25px;
      width: 2px;
      background-color: ${DARK_GRAY1};
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
    &:hover {
      cursor: pointer;
    }
  `,
};

export default xButton;
