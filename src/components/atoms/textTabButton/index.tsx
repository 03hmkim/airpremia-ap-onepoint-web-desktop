import React, { FC } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import {
  DARK_GRAY1,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';

interface IStyleProps {
  /** 활성화 유무 */
  isActive?: boolean;
}
interface IProps extends IStyleProps {
  onClick?: () => void;
}

const TextTabButton: FC<IProps> = ({
  isActive,
  children,
  onClick,
}) => {
  return (
    <S.container
      isActive={isActive}
      onClick={onClick}
    >
      <span>{children}</span>
    </S.container>
  );
};

TextTabButton.defaultProps = {
  isActive: false,
};

const S = {
  container: styled.button<IStyleProps>`
    width: fit-content;
    display: flex;
    align-items: center;

    span {
      position: relative;
      color: ${ifProp('isActive', ORANGE2, DARK_GRAY1)};
      font-size: 18px;
      line-height: 1.36em;
      letter-spacing: 0;
      font-weight: 700;

      &::after{
        content: "";
        width: 100%;
        height: 2px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -2px;
        display: block;
        background-color: ${ifProp('isActive', ORANGE2, 'transparent')};
      }
    }

    @media only screen and (max-width: 767px){
      span{
        font-size: 14px;
        letter-spacing: -0.28px;
      }
    }
  `,
};

export default TextTabButton;
