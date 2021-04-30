import { FC, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import {
  DARK_GRAY1,
  LIGHT_GRAY8,
  LIGHT_GRAY5,
} from '@airpremia/cdk/styles/colors';
import { ifProp } from 'styled-tools';

enum EGrade {
  BLUE = 1,
  SILVER,
  GOLD,
}

interface IBodyItem {
  label: string;
  blur?: boolean;
}

interface IProps {
  grade: string;
}

const header = ['', 'BLUE', 'SILVER', 'GOLD'];
const body: IBodyItem[][] = [
  [
    { label: '승급 기준' },
    { label: '기본' },
    { label: '최근 24개월간 80,000 M 적립' },
    { label: '최근 24개월간 300,000 M 적립' },
  ],
  [
    { label: '적립 금액' },
    { label: '1,000원 당 40 M' },
    { label: '1,000원 당 60 M' },
    { label: '1,000원 당 80 M' },
  ],
  [
    { label: '추가 수하물' },
    { label: '미제공', blur: true },
    { label: '2개 무료' },
    { label: '4개 무료' },
  ],
  [
    { label: '사전 좌석 구매' },
    { label: '미제공', blur: true },
    { label: '2회 무료' },
    { label: '4회 무료' },
  ],
  [
    { label: '수하물 우선 하기' },
    { label: '미제공', blur: true },
    { label: '미제공', blur: true },
    { label: '제공' },
  ],
  [
    { label: '우선 탑승' },
    { label: '미제공', blur: true },
    { label: '미제공', blur: true },
    { label: '제공' },
  ],
];

const UserGradeGuideTable: FC<IProps> = ({ grade }) => {
  const [currentGradeIdx, setCurrentGradeIdx] = useState<
    number | null
  >(null);

  useEffect(() => {
    setCurrentGradeIdx(
      EGrade[grade as keyof typeof EGrade],
    );
  }, []);

  return (
    <S.container>
      <S.title>
        <h3 className="font-bold">회원 등급 안내</h3>
      </S.title>

      <S.table>
        <S.header>
          <S.row selected={currentGradeIdx}>
            {header.map((item: string, i: number) => (
              <S.item
                className="header-item font-bold"
                key={`UserGradeGuideHeaderItem${i.toString()}`}
              >
                {item}
              </S.item>
            ))}
          </S.row>
        </S.header>
        <S.body>
          {body.map((list: IBodyItem[], i: number) => (
            <S.row
              key={`UserGradeGuideBodyRow${i.toString()}`}
              className="body-row"
              selected={currentGradeIdx}
            >
              {list.map((item: IBodyItem, j: number) => (
                <S.item
                  className="body-item"
                  key={`UserGradeGuideBodyItem${j.toString()}`}
                  blur={item.blur}
                >
                  {item.label}
                </S.item>
              ))}
            </S.row>
          ))}
        </S.body>
      </S.table>
    </S.container>
  );
};

const commonTableStyle = css`
  &:nth-child(1) {
    width: 200px;
    margin-right: 60px;
  }
  &:nth-child(2) {
    width: 280px;
    margin-right: 40px;
  }
  &:nth-child(3) {
    width: 280px;
    margin-right: 40px;
  }
  &:nth-child(4) {
    width: 280px;
  }
  @media only screen and (max-width: 767px) { 
    &:nth-child(1) {
      width: 60px;
      margin-right: 20px;
      word-break:keep-all;
    }
    &:nth-child(2) {
      width: 60px;
      margin-right: 20px;
      word-break:keep-all;
    }
    &:nth-child(3) {
      width: 100%;
      flex:1;
      margin-right: 20px;
      word-break:keep-all;
    }
    &:nth-child(4) {
      width: 100%;
      flex:1;
      word-break:keep-all;
    }
  }
`;

const S = {
  container: styled.div``,

  title: styled.div`
    margin-bottom: 13px;
    h3 {
      font-size: 22px;
      line-height: 33px;
      letter-spacing: -0.44px;
    }

    @media only screen and (max-width: 767px) { 
      h3 {
        font-size: 18px;
      }
    }
  `,

  table: styled.div``,

  header: styled.div`
    border-bottom: solid 2px ${DARK_GRAY1};
  `,

  body: styled.div``,

  row: styled.div<{ selected: number | null }>`
    display: flex;
    align-items: center;
    & > div {
      font-size:18px;
      ${commonTableStyle};
      ${({ selected }) => {
        if (selected) {
          return css`
            &:nth-child(${selected + 1}) {
              background-color: #fafafa;
            }
          `;
        }
      }}
    }
    &.body-row {
      border-bottom: solid 1px ${LIGHT_GRAY5};
      & > div {
        &:nth-child(1) {
          font-size: 18px;
          line-height: 20px;
          letter-spacing: -0.28px;
          text-align: left;
        }
        &:not(:first-of-type) {
          font-size: 18px;
          line-height: 22px;
          letter-spacing: -0.3px;
        }
      }
    }
    @media only screen and (max-width: 767px) { 
      & > div {
        font-size:14px;  
      }
      &.body-row {
        & > div {
          &:nth-child(1) {
            font-size: 14px;
          }
          &:not(:first-of-type) {
            font-size: 14px;
          }
        }
      }
    }
  `,

  item: styled.div<{ blur?: boolean }>`
    text-align: center;
    padding: 20px 0;
    color: ${ifProp('blur', LIGHT_GRAY8, DARK_GRAY1)};
    font-weight: 600;
    .header-item {
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.32px;
    }
    .body-item {
      padding: 25px 0;
    }
    @media only screen and (max-width: 767px) { 
      .header-item {
        font-size: 14px;
      }
      .body-item {
        padding: 15px 0;
      }
    }
  `,
};

export default UserGradeGuideTable;
