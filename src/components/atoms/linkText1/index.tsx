import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

interface IStyleProps {
  color?: string;
}

interface IProps extends IStyleProps {
  children: string;
  onClick?: () => void;
}

function LinkText1({ color, children, onClick }: IProps) {
  return (
    <S.container color={color} onClick={onClick}>
      {children}
    </S.container>
  );
}

LinkText1.defaultProps = {
  children: '앱카드로 결제하기',
};

const S = {
  container: styled.button<IStyleProps>`
    display: inline-block;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.26px;
    color: ${prop('color', DARK_GRAY1)};
    border-bottom: 1px solid ${prop('color', DARK_GRAY1)};
  `,
};

export default LinkText1;
