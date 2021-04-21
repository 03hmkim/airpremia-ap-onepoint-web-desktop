import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import TableBodyWithList from '.';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import {
  DARK_GRAY1,
  BLUE1,
} from '@airpremia/cdk/styles/colors';

export default {
  title: 'desktop / Molecules / TableBodyWithList',
  component: TableBodyWithList,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Table Body With List',
  },
};

export const 리스트를포함한테이블바디: FC = () => {
  const headerList = [
    '예약번호',
    '여정',
    '노선',
    '일정',
    '상태',
  ];
  const widthList = [163, 180, 380, 411, 66, 1134];
  const list = [
    {
      recordLocator: '123456',
      type: '왕복',
      trip: '서울/인천(ICN) － 하노이(HAN)',
      date: '2020. 3. 1. (수) - 2020. 3. 4. (토)',
      status: '확약',
    },
    {
      recordLocator: '227777',
      type: '편도',
      trip: '서울/인천(ICN) － 하노이(HAN)',
      date: '2020. 4. 1. (수) - 2020. 7. 4. (토)',
      status: '확약',
    },
  ];

  return (
    <TableBodyWithList headerList={headerList}>
      {list.map((item, i) => {
        return (
          <S.wrapper key={`item${i.toString()}`}>
            <S.bodyItem width={widthList[0]}>
              {item.recordLocator}
            </S.bodyItem>
            <S.bodyItem width={widthList[1]}>
              {item.type}
            </S.bodyItem>
            <S.bodyItem width={widthList[2]}>
              {item.trip}
            </S.bodyItem>
            <S.bodyItem width={widthList[3]}>
              {item.date}
            </S.bodyItem>
            <S.bodyItem width={widthList[4]} color={BLUE1}>
              {item.status}
            </S.bodyItem>
          </S.wrapper>
        );
      })}
    </TableBodyWithList>
  );
};

const S = {
  wrapper: styled.div`
    border-bottom: solid 2px ${DARK_GRAY1};
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
  `,

  bodyItem: styled.p<{ width: number; color?: string }>`
    flex-basis: ${prop('width')}px;
    font-size: 15px;
    line-height: 22px;
    font-weight: 600;
    color: ${prop('color')};
  `,
};
