import React from 'react';
import styled from 'styled-components';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {
  children: React.ReactElement | string;
}

function UnOrderedListLine({ children }: IProps) {
  return (
    <S.container>
      <span className="dot" />
      <div className="children">{children}</div>
    </S.container>
  );
}

UnOrderedListLine.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    display: flex;
    .dot {
      position: relative;
      top: 10px;
      width: 3px;
      height: 3px;
      border-radius: 3px;
      background-color: ${DARK_GRAY1};
    }
    .children {
      padding-left: 10px;
      color: ${DARK_GRAY1};
      font-size: 15px;
      line-height: 1.5;
      letter-spacing: -0.3px;
      color: ${DARK_GRAY1};
    }
  `,
};

export default UnOrderedListLine;
