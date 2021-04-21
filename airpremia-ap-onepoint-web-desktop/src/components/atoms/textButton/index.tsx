import React from 'react';
import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';

export interface StyleProps {
  /** 너비 */
  width?: string;
  /** 높이 */
  height?: string;
  /** 배경 색상 */
  backgroundColor?: string;
  /** 폰트 색상 */
  color?: string;
  /** 폰트 크기 */
  fontSize?: string;
  /** border 색상 */
  borderColor?: string;
  /** 버튼 클릭 이벤트 */
  handleClick?: () => void;
  /** active color set */
  activeColor?: [color, backgroundColor];
  /** inactive color set */
  inActiveColor?: [color, backgroundColor];
  /** active 상태 유무 체크 */
  isActive?: boolean;
  /** @TODO: disable이 추가되어야되지 않을까? */
}

type color = string;
type backgroundColor = string;

export interface IProps extends StyleProps {
  children: React.ReactElement | string;
}

const S = {
  container: styled.button<StyleProps>`
    display: flex;
    width: ${prop('width', 'auto')};
    height: ${prop('height', 'auto')};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 11px 35px 12px;
    background-color: ${prop('backgroundColor', 'white')};
    border-radius: 8px;
    border: 1px solid ${prop('borderColor', 'black')};
    color: ${prop('color', 'black')};
    font-size: ${prop('fontSize', '14px')};

    ${({ activeColor, inActiveColor, isActive }) => {
      if (isActive) {
        if (activeColor && activeColor.length > 0) {
          return css`
            color: ${activeColor[0]};
            background-color: ${activeColor[1]};
          `;
        }
      } else {
        if (inActiveColor && inActiveColor.length > 0) {
          return css`
            color: ${inActiveColor[0]};
            background-color: ${inActiveColor[1]};
          `;
        }
      }
    }}
  `,
};

/**
 * `Click event` 가 있는 텍스트 박스 형태의 컴포넌트는  `TextButton` 컴포넌트를 사용하세요.
 */
function TextButton({ children, ...props }: IProps) {
  return (
    <S.container {...props} onClick={props.handleClick}>
      {children}
    </S.container>
  );
}

export default TextButton;
