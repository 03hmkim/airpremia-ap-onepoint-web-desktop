import styled from 'styled-components';
import { prop } from 'styled-tools';
import { FC } from 'react';
import {
  DARK_GRAY1,
  LIGHT_GRAY5,
} from '@airpremia/cdk/styles/colors';

interface IStyle {
  color?: string;
}

interface IProps extends IStyle {
  headerList: string[];
  // widthList: number[];
}

const TableBodyWithList: FC<IProps> = ({ children }) => {
  return <S.container>{children}</S.container>;
};

const S = {
  container: styled.div<IStyle>`
    display: flex;
    flex-wrap: wrap;
    color: ${prop('color', DARK_GRAY1)};
    @media only screen and (max-width: 1059px) {
      display:block;
    }
  `,

  header: styled.div<{ width: number }>`
    flex-basis: ${prop('width')}px;
    border-bottom: solid 2px ${LIGHT_GRAY5};
    h6 {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.28px;
    }
  `,
};

export default TableBodyWithList;
