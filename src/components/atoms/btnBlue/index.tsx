import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import BtnDownBlue from 'public/images/btn_download_blue.png'
import {
  WHITE1,
  BLUE1,
  PALE_BLUE7,
} from '@airpremia/cdk/styles/colors';
import Linkblue from 'public/images/btn_txt_link_blue.png';

interface IstyleProps {
    color?: string;
    fontSize?: string;
    backgroundColor?: string;
    type?: 'reset' | 'button' | 'submit';
    className?: string;
}

interface IProps extends IstyleProps {
    children: string | React.ReactElement;
    onClick?: () => void;
}

function BtnBlue({
    onClick,
    children,
    ...styleProps
}: IProps) {
    return (
        <S.container
            {...styleProps}
            onClick={onClick}
            tabIndex={0}
        >
        {children}
        </S.container>
    );
};
BtnBlue.defaultProps = {};

const S = {
  container: styled.button`
    padding: 9px 15px 7px;
    position: relative;
    color: ${BLUE1};
    white-space: nowrap;
    font-size: ${prop('fontSize','18px')};
    background-color: ${prop('backgroundColor',WHITE1)};
    border: 1px solid ${BLUE1};
    border-radius: 6px;
    display:flex;
    justify-content:center;
    align-items:center;

    &:hover{
      background-color: ${PALE_BLUE7};
    }

    &.down{
      padding-left: 32px;
      display: inline-flex;

      &:hover{
        text-decoration: underline;
        background-color: ${prop('backgroundColor',WHITE1)};
      }

      &::before{
        content: "";
        width: 12px;
        height: 12px;
        position: absolute;
        left: 15px;
        top: calc(50% - 6px);
        display: block;
        background: url(${BtnDownBlue}) no-repeat;
      }

      @media only screen and (max-width: 767px) {
        &.down {
          display: inline-block;
        }
      }
    }

    &.arrow{
      padding: 0;
      border: 0;

      &::after{
        content: "";
        width: 8px;
        height: 11px;
        margin-left: 10px;
        display: inline-block;
        background: url(${Linkblue}) no-repeat;
      }
    }


    @media only screen and (max-width: 767px) { 
      font-size: ${prop('fontSize','14px')};
      a{
        font-size:14px;
      }
    }
  `,
}

export default BtnBlue;
