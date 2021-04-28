import React from 'react';
import styled from 'styled-components';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {
  children:
    | string
    | React.ReactElement
    | React.ReactElement[];
}

function Title({ children }: IProps) {
  return (
    <S.container className="font-bold">
      {children}
    </S.container>
  );
}

Title.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    color: ${DARK_GRAY1};
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 0.03em;
    font-weight: 600;
    @media only screen and (max-width: 1059px) {
        margin-bottom: 30px;
    }
    @media only screen and (max-width: 767px) {
      font-size: 26px;
      line-height: 36px;
    }
  `,
};

export default Title;
