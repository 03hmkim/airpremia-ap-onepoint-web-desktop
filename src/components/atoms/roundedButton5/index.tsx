import React, { FC } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import {
  DARK_BLUE1,
  WHITE1,
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';

interface IStyleProps {
  /** 활성화 유무 */
  isActive?: boolean;
}
interface IProps extends IStyleProps {
  onClick?: () => void;
}

const RoundedButton5: FC<IProps> = ({
  isActive,
  children,
  onClick,
}) => {
  return (
    <S.container
      isActive={isActive}
      className="font-bold"
      onClick={onClick}
    >
      <span>{children}</span>
    </S.container>
  );
};

RoundedButton5.defaultProps = {
  isActive: false,
};

const S = {
  container: styled.button<IStyleProps>`
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 0 15px;
    border-radius: 60px;
    background-color: ${ifProp(
      'isActive',
      DARK_BLUE1,
      WHITE1,
    )};
    font-size: 0;
    span {
      color: ${ifProp('isActive', WHITE1, DARK_GRAY1)};
      font-size: 18px;
      letter-spacing: -0.26px;
      font-weight: 700;
    }
    @media only screen and (max-width: 767px) {
      height: auto;
      padding-top:5px;
      padding-bottom:5px;
      span {
        font-size: 14px;
      }
    }
  `,
};

export default RoundedButton5;
