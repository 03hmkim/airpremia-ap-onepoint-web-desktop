import React, { ReactElement, useState } from 'react';
import styled, { css } from 'styled-components';
import {
  LIGHT_GRAY7,
  LIGHT_GRAY5,
  ORANGE2,
  WHITE1,
} from '@airpremia/cdk/styles/colors';

interface IStyleProps {
  /** active? */
  isActive: boolean;
  /** className */
  className?: string;
}

interface IProps extends IStyleProps {
  /** click시 이벤트 */
  onClickToggle: (status: boolean) => void;
  /** children */
  children?: ReactElement | string;
}

function ToggleSwitchButton({
  isActive,
  className = ToggleSwitchButton.defaultProps.className,
  children = ToggleSwitchButton.defaultProps.children,
  onClickToggle,
}: IProps) {
  const [toggleStatus, setToggleStatus] = useState(false);
  const onClick = () => {
    const toggle = !toggleStatus;
    setToggleStatus(toggle);
    onClickToggle(toggle);
  };

  return (
    <S.container className={className} onClick={onClick}>
      <S.baseLine isActive={isActive} />
      <S.toggleButton isActive={isActive} />
      <S.content>{children}</S.content>
    </S.container>
  );
}

ToggleSwitchButton.defaultProps = {
  className: '',
  children: '',
};

const S = {
  container: styled.div`
    position: relative;
    width: 100%;
    height: 20px;
    cursor: pointer;
    display: inline-block;
    & > div {
      transition: all 0.2s;
    }
  `,
  baseLine: styled.div<IStyleProps>`
    width: 42px;
    display: block;
    position: absolute;
    border-radius: 50px;
    height: 4px;
    top: 9px;
    ${({ isActive }) => {
      if (isActive) {
        return css`
          background: ${ORANGE2};
        `;
      } else if (!isActive) {
        return css`
          background: ${LIGHT_GRAY7};
        `;
      }
    }}
  `,
  toggleButton: styled.div<IStyleProps>`
    ${({ isActive }) => {
      if (isActive) {
        return css`
          left: 22px;
        `;
      } else if (!isActive) {
        return css`
          left: 0;
        `;
      }
    }};
    border: solid 3px ${LIGHT_GRAY5};
    border-radius: 25px;
    height: 19px;
    width: 19px;
    position: absolute;
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.06);
    border: solid 1px ${LIGHT_GRAY5};
    background-color: ${WHITE1};
  `,

  content: styled.p`
    font-weight: 600;
    font-size: 13px;
    margin-left: 52px;
    line-height: 21px;
    letter-spacing: -0.26px;
  `,
};

export default ToggleSwitchButton;
