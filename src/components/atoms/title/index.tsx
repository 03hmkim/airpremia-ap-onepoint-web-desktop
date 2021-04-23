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
    font-size: 30px;
    line-height: 1.4;
    color: ${DARK_GRAY1};

    media only screen and (max-width: 1059px) {
      font-size:26px;
    }
    
    @media only screen and (max-width: 767px) { 
      font-size:20px;
    }
  `,
};

export default Title;
