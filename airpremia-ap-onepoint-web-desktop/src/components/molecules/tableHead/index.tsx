import styled from 'styled-components';
import { FC } from 'react';

import {
  DARK_GRAY1,
  DARK_BLUE1,
} from '@airpremia/cdk/styles/colors';

interface IProps {}

const TableHead: FC<IProps> = ({ children }) => {
  return (
    <S.container>
      <h1 className="font-bold">{children}</h1>
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 1200px;
    height: 68px;
    padding-bottom: 32px;
    box-sizing: border-box;
    border-bottom: solid 2px ${DARK_GRAY1};

    h1 {
      font-size: 24px;
      line-height: 36px;
      letter-spacing: -0.48px;
      color: ${DARK_BLUE1};
    }
  `,
};

export default TableHead;
