import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import {
  ORANGE2,
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';

interface IStyleProps {
  /** 활성화/비활성화 */
  isActive?: boolean;
}
interface IProps extends IStyleProps {
  /** 내용 */
  children: string;
  /** 내용 */
  value: string;
  /** 버튼 클릭 */
  onClick?: (e: any) => void;
}

function TabText({
  isActive,
  value,
  children,
  onClick,
}: IProps) {
  return (
    <S.container
      className="font-bold"
      data-value={value}
      isActive={isActive}
      onClick={onClick}
    >
      {children}
    </S.container>
  );
}

TabText.defaultProps = {
  children: '항공권별',
};

const S = {
  container: styled.button<IStyleProps>`
    font-size: 15px;
    line-height: 1.5;
    letter-spacing: -0.3px;
    text-align: left;
    color: ${ifProp('isActive', ORANGE2, DARK_GRAY1)};
    border-bottom: 2px solid
      ${ifProp('isActive', ORANGE2, 'transparent')};
  `,
};

export default TabText;
