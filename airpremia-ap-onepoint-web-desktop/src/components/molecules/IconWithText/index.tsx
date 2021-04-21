import styled, { css } from 'styled-components';
import { FC, ReactElement } from 'react';
import { LIGHT_GRAY5 } from '@airpremia/cdk/styles/colors';

export enum EIconWithTextType {
  HORIZON,
  VERTICAL,
}

interface IStyle {
  type?: EIconWithTextType;
}

interface IProps extends IStyle {
  icon?: any;
  text?: ReactElement | string;
}

const IconWithText: FC<IProps> = ({
  icon,
  text,
  ...props
}) => {
  return (
    <S.container {...props}>
      <S.icon>{icon}</S.icon>
      <S.text>{text}</S.text>
    </S.container>
  );
};

const S = {
  container: styled.div<IStyle>`
    display: flex;
    align-items: center;
    width: fit-content;

    ${({ type }) => {
      const defaultCss = css`
        flex-direction: column;
        & > div:first-of-type {
          margin-bottom: 14px;
        }
      `;
      if (type === EIconWithTextType.HORIZON) {
        return defaultCss;
      } else if (type === EIconWithTextType.VERTICAL) {
        return css`
          flex-direction: row;
          & > div:first-of-type {
            margin-right: 14px;
          }
        `;
      }
      return defaultCss;
    }}
  `,

  icon: styled.div`
    padding: 27px 17px;
    border: solid 1px ${LIGHT_GRAY5};
    border-radius: 300px;
  `,

  text: styled.div`
    font-size: 13px;
    line-height: 17px;
    letter-spacing: -0.26px;
    font-weight: 600;
  `,
};

export default IconWithText;
