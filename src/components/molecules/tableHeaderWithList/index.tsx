import styled from 'styled-components';
import { prop } from 'styled-tools';
import { FC } from 'react';
import {
  LIGHT_GRAY7,
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';

interface IStyle {
  color?: string;
}

interface IProps extends IStyle {
  headerList: string[];
  widthList: number[];
}

const TableHeaderWithList: FC<IProps> = ({
  headerList,
  widthList,
  ...props
}) => {
  return (
    <S.container {...props}>
      {headerList.map((header, i) => (
        <S.header
          key={`header${i.toString()}`}
          width={widthList[i]}
        >
          <h6>{header}</h6>
        </S.header>
      ))}
    </S.container>
  );
};

const S = {
  container: styled.div<IStyle>`
    height: 42px;
    width: 1200px;
    display: flex;
    color: ${prop('color', LIGHT_GRAY7)};
  `,

  header: styled.div<{ width: number }>`
    flex-basis: ${prop('width')}px;
    border-bottom: solid 2px ${DARK_GRAY1};
    h6 {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.28px;
    }
  `,
};

export default TableHeaderWithList;
