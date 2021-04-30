import { FC, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';
import {
  ORANGE1,
  DARK_BLUE1,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
import { SpeechBubble } from 'src/components';
import { addComma } from '@airpremia/core/lib/service';

interface IStyle {
  /** 채워진 양(%) */
  originFilled?: number;
  /** 기본 Progress bar color */
  originColor?: string;
  /** 추가로 채워진 양(%) */
  addedFilled?: number;
  /** 추가 Progress bar color */
  addedColor?: string;
  /** 말풍선에 들어갈 값 */
  value?: string;
}
interface IProps extends IStyle {
  children: ReactElement | string;
}

const ProgressBar: FC<IProps> = ({
  originFilled = 0,
  originColor = BLUE1,
  addedFilled = 0,
  addedColor = DARK_BLUE1,
  value = '0',
  children,
}) => {
  const percentage = originFilled + addedFilled;

  return (
    <S.container>
      <S.wrapper>
        <S.origin
          originFilled={originFilled}
          originColor={originColor}
          addedFilled={addedFilled}
        />
        <S.added
          addedFilled={addedFilled}
          addedColor={addedColor}
        />
      </S.wrapper>
      <S.badge percentage={percentage}>
        <SpeechBubble
          backgroundColor={ORANGE1}
          arrowPosition={percentage > 80 ? 'right' : 'left'}
        >
          {addComma(value)}
        </SpeechBubble>
      </S.badge>
      {children}
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 100%;
    height: 4px;
    margin: 40px 0;
    border-radius: 555px;
    background-color: #ededed;
    position: relative;
  `,

  wrapper: styled.div`
    height: 100%;
    display: flex;
  `,

  origin: styled.span<IStyle>`
    width: ${prop('originFilled', 0)}%;
    height: 100%;
    display: block;
    background-color: ${prop('originColor', BLUE1)};

    transition: width 1s linear;

    ${({ addedFilled = 0 }) => {
      if (addedFilled > 0) {
        return css`
          border-radius: 2px 0 0 2px;
          background-color: ${ORANGE1};
        `;
      }
      return css`
        border-radius: 2px;
      `;
    }}
  `,

  added: styled.span<IStyle>`
    width: ${prop('addedFilled', 0)}%;
    height: 100%;
    border-radius: 0 2px 2px 0;
    display: block;
    background-color: ${prop('addedColor', DARK_BLUE1)};

    transition: width 1s linear;
  `,

  badge: styled.span<{ percentage: number }>`
    position: absolute;
    top: -40px;
    ${({ percentage }) => {
      if (percentage > 85) {
        const right =
          100 - percentage > 0 ? 100 - percentage : 0;
        return css`
          left: unset;
          right: ${right}%;
        `;
      } else {
        return css`
          left: ${prop('percentage', 0)}%;
        `;
      }
    }}
    & > div {
      height: 24px;
      line-height: 30px;
      letter-spacing: -0.3px;
      padding: 0 10px;
    }
  `,
};

export default ProgressBar;
