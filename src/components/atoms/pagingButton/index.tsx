import React, { useState } from 'react';
import styled from 'styled-components';
import {
  DARK_GRAY1,
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';

interface IProps {
  children: number | string;
  className?: string;
  onClick?: () => void;
}

function PagingButton({ children }: IProps) {
  
  let [classOn, setClassOn] = useState('');
  const onButton = () => {
    setClassOn('on');
  }

  return (
    <P.button className={classOn} onClick={onButton}>
      <span>{children}</span>
    </P.button>

  )
}

PagingButton.defaultProps = {}


const P = {
  button : styled.a`
    width: 22px;
    height: 32px;
    margin-right: 10px;
    color: ${LIGHT_GRAY7};
    font-family: 'Premia', 'NotoSans', serif;
    font-size: 16px;
    text-align: center;
    line-height: 30px;
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
    border-radius: 12px;
    box-sizing: border-box;
    cursor: pointer;
    &:first-of-type{
      margin-left: 10px;
    }
    span{
      position: relative;
    }
    &:hover{
      color: ${DARK_GRAY1};
      font-weight: bold;
    }
    &:hover span::after{
      content: '';
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: -2px;
      left: 50%;
      display: block;
      background-color: ${DARK_GRAY1};
      transform: translateX(-50%);
    }
    &.on{
      color: ${DARK_GRAY1};
      font-weight: bold;
      border-color: ${DARK_GRAY1};
    }
    &.on:hover span::after{
      display: none;
    }
  `,
}

export default PagingButton;