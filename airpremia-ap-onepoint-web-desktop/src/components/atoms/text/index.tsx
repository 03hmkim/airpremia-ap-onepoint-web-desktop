import React from 'react';
import styled, { css } from 'styled-components';
import { prop, switchProp } from 'styled-tools';

import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

export interface IStyleProps {
  /** premia custom font 사용 유무 */
  isPremiaFont?: boolean;
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
  /** 두께 */
  fontWeight?: string;
  /** 정렬 */
  textAlign?: string;
}

export interface IProps extends IStyleProps {
  /** 랜더링 할 children node */
  children: React.ReactElement | string;
}

function Text({ children, ...props }: IProps) {
  return (
    <S.container className="text" {...props}>
      {children}
    </S.container>
  );
}

Text.defaultProps = {
  isPremiaFont: false,
  fontSize: '34px',
  lineHeight: '54px',
  letterSpacing: '-0.68px',
  width: '100%',
  opacity: '1',
  color: DARK_GRAY1,
  fontWeight: 'normal',
  textAlign: 'left',
};

const S = {
  container: styled.h1<IStyleProps>`
    margin: 0;
    font-size: ${prop(
      'fontSize',
      Text.defaultProps.fontSize,
    )};
    color: ${prop('color', Text.defaultProps.color)};
    line-height: ${prop(
      'lineHeight',
      Text.defaultProps.lineHeight,
    )};
    letter-spacing: ${prop(
      'letterSpacing',
      Text.defaultProps.letterSpacing,
    )};
    text-align: ${prop(
      'textAlign',
      Text.defaultProps.textAlign,
    )};
    width: ${prop('width', Text.defaultProps.width)};
    opacity: ${prop('opacity', Text.defaultProps.opacity)};
    ${({ fontWeight, isPremiaFont }) => {
      const font = isPremiaFont ? 'Premia' : 'NotoSans';

      if (fontWeight) {
        if (
          typeof fontWeight === 'string' &&
          isNaN(Number(fontWeight))
        ) {
          return css`
            ${switchProp('fontWeight', {
              normal: css`
                font-family: ${font};
                font-weight: normal;
              `,
              medium: css`
                font-family: ${font};
                font-weight: 500;
              `,
              bold: css`
                font-family: ${font}-Bold;
              `,
            })}
          `;
        } else {
          return css`
            font-weight: ${prop(
              'fontWeight',
              Text.defaultProps.fontWeight,
            )};
          `;
        }
      }
    }};
  `,
};

export default Text;
