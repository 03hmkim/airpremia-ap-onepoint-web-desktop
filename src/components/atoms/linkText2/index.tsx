import React from 'react';
import styled from 'styled-components';
import { Arrow } from '../../';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {
  onClick?: () => void;
  children?: React.ReactElement | string;
}

function LinkText2({ children, onClick }: IProps) {
  return (
    <S.container onClick={onClick}>
      <span>{children}</span>
      <div className="arrowWrapper">
        <Arrow
          color={DARK_GRAY1}
          scale={0.5}
          borderWidth="4px"
        />
      </div>
    </S.container>
  );
}
LinkText2.defaultProps = {};

const S = {
  container: styled.button<IStyleProps>`
    display: flex;
    align-items: center;
    span {
      font-weight: 600;
      letter-spacing: -0.26px;
      text-align: right;
    }
    .arrowWrapper {
      position: relative;
      margin-left: -2px;
      margin-top: 1px;
    }
  `,
};

export default LinkText2;
