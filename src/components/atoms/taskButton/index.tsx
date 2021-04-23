import React from 'react';
import { get } from 'lodash';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { prop } from 'styled-tools';
import {
  LIGHT_GRAY6,
  LIGHT_GRAY7,
  WHITE1,
  DARK_BLUE1,
} from '@airpremia/cdk/styles/colors';

interface IStyleProps {
  /** 테두리 */
  border?: string;
  /** 배경 색상 */
  backgroundColor?: string;
  /** 글자 색상 */
  color?: string;
  /** 비활성화 유무(회색배경, 흰 글씨) */
  disabled?: boolean;
  /** type */
  type?: 'reset' | 'button' | 'submit';
  /** class */
  className?: string;
  /** 글자 두께 */
  fontWeight?: 'normal' | 'bold';
}
interface IProps extends IStyleProps {
  onClick?: (e?: any) => void;
  children?: string | React.ReactElement;
}

function TaskButton({
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
}
TaskButton.defaultProps = {};

const S = {
  container: styled.button.attrs<IStyleProps>(
    ({ type = 'button' }) => ({
      type,
    }),
  )`
    width: 100%;
    height: 50px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.47;
    letter-spacing: -0.3px;
    border-radius: 8px;
    box-sizing: border-box;
    border: ${prop('border')};
    text-align: center;
    background-color: ${prop(
      'backgroundColor',
      DARK_BLUE1,
    )};
    color: ${prop('color', WHITE1)};

    &.line {
      color: ${LIGHT_GRAY7};
      border: solid 1px ${LIGHT_GRAY7};
      background-color: ${WHITE1};
    }

    &:hover {
      ${(param) => {
        const bgColor = get(param, 'backgroundColor');
        return css`
          background-color: ${darken(
            0.02,
            bgColor ? bgColor : DARK_BLUE1,
          )};
        `;
      }}
    }

    ${({ disabled }) =>
      disabled &&
      css`
        border: none;
        background-color: ${LIGHT_GRAY6};
        color: ${WHITE1};
        cursor: unset;
        &:hover {
          background-color: ${LIGHT_GRAY6};
        }
      `};

    &.short{
      width: 140px;
    }

    @media only screen and (max-width: 767px) {
      font-size: 16px;
      font-weight: 400;
    }

  `,
};


export default TaskButton;
