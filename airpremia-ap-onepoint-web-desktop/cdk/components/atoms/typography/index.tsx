import React, { FC } from 'react';
import { ifProp, prop } from 'styled-tools';
import styled from 'styled-components';
import { DARK_GRAY1 } from '../../../styles/colors';
import { getData } from '@airpremia/core/lib/font';

interface ICommon {
  /** 변경이 필요한 경우에만 사용 */
  letterSpacing?: number;
  /** 변경이 필요한 경우에만 사용 */
  fontFamily?: string;
  /** font weight */
  fontWeight?: 'regular' | 'medium' | 'bold';
  /** font color */
  color?: string;
  /** px */
  lineHeight?: number;
}

interface IStyle extends ICommon {
  fontSize?: number;
  /** 단어각각으로 구분해서 (단어별 아님) new line을 만들려면 true (기본값 word별 break)  */
  breakAll?: boolean;
  /** margin-left */
  ml?: number;
  /** margin-bottom */
  mb?: number;
}

interface IParams extends ICommon {
  fontType: string;
  className?: string;
}

export interface IProps extends IParams, IStyle {
  tag?: keyof JSX.IntrinsicElements;
}

const Typography: FC<IProps> = ({
  tag = 'p',
  children,
  ...props
}) => {
  const calculatedStyle = getData<IParams>(props);

  return (
    <S.container as={tag} {...calculatedStyle}>
      {children}
    </S.container>
  );
};

const S = {
  container: styled.div<IStyle>`
    font-size: ${prop('fontSize')}px;
    line-height: ${prop('lineHeight')}px;
    font-family: ${prop('fontFamily')};
    color: ${prop('color', DARK_GRAY1)};
    font-weight: ${prop('fontWeight')};
    letter-spacing: ${prop('letterSpacing')}px;
    word-break: ${ifProp(
      'breakAll',
      'break-all',
      'keep-all',
    )};
    margin-left: ${prop('ml')}px;
    margin-bottom: ${prop('mb')}px;
  `,
};

export default Typography;
