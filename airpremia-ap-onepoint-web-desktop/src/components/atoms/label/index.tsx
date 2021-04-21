import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';

import {
  DARK_GRAY1,
  ORANGE1,
} from '@airpremia/cdk/styles/colors';

export interface IStyleProps {
  /** 필수 기입 사항 여부 */
  isRequired?: boolean;
  /** 폰트 크기 */
  fontSize?: string;
  /** 폰트 색상 */
  color?: string;
  /** Line Height */
  lineHeight?: string;
  /** Letter spacing */
  letterSpacing?: string;
  /** 텍스트의 width */
  width?: string;
  /** 투명도 */
  opacity?: string;
}

export interface IProps extends IStyleProps {
  /** 랜더링 할 children node */
  children: React.ReactElement | string;
}

/**
 * Label이 필요로 할때 사용하세요.
 */

function Label({ children, isRequired, ...props }: IProps) {
  return (
    <S.container className="label" {...props}>
      {children} {isRequired && <em>*</em>}
    </S.container>
  );
}

Label.defaultProps = {
  children: '',
  fontSize: '13px',
  lineHeight: '28px',
  letterSpacing: '-0.26px',
  width: '100%',
  opacity: '1',
  color: DARK_GRAY1,
};

const S = {
  container: styled.label<IStyleProps>`
    font-size: ${prop('fontSize', '13px')};
    color: ${prop('color', DARK_GRAY1)};
    line-height: ${prop('lineHeight', '28px')};
    letter-spacing: ${prop('letterSpacing', '-0.26px')};
    width: ${prop('width', '100%')};
    opacity: ${prop('opacity', '1')};
    display: inline-block;

    em {
      display: inline-block;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: -0.28px;
      font-style: normal;
      color: ${ORANGE1};
    }
  `,
};

export default Label;
