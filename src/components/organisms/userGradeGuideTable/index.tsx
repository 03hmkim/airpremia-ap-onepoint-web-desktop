import { FC, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import {
  DARK_GRAY1,
  LIGHT_GRAY1,
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
  width: 26%;
  padding: 20px;
  display: table-cell;
  vertical-align: middle;
  word-break: break-all;

  &:nth-child(1) {
    width: 22%;
    padding-left: 0;
  }

  &:nth-child(4) {
    padding-right: 0;
  }

  @media only screen and (max-width: 767px) { 
    padding: 15px 10px;

    &:nth-child(1) {
      padding-left: 0;
    }

    &:nth-child(4) {
      padding-right: 0;
    }
  }
`;

const S = {
  container: styled.div``,

  title: styled.div`
    margin-bottom: 30px;
    h3 {
      font-size: 24px;
      line-height: 1.8em;
    }

    @media only screen and (max-width: 767px) { 
      margin-bottom: 20px;
      h3 {
        font-size: 22px;
        letter-spacing: -0.4px;
      }
    }
  `,

  table: styled.div``,

  header: styled.div`
    border-bottom: solid 2px ${DARK_GRAY1};
  `,

  body: styled.div``,

  row: styled.div<{ selected: number | null }>`
    width: 100%;
    display: table;

    & > div {
      font-size: 18px;
      line-height: 1.36em;
      ${commonTableStyle};
      ${({ selected }) => {
        if (selected) {
          return css`
            &:nth-child(${selected + 1}) {
              background-color: ${LIGHT_GRAY1};
            }
          `;
        }
      }}
    }
    &.body-row {
      border-bottom: solid 1px ${LIGHT_GRAY5};
      & > div {
        &:nth-child(1) {
          text-align: left;
        }
      }
    }
    @media only screen and (max-width: 767px) { 
      & > div {
        font-size: 14px;
        letter-spacing: -0.28px;
      }
    }
  `,

  item: styled.div<{ blur?: boolean }>`
    text-align: center;
    color: ${ifProp('blur', LIGHT_GRAY8, DARK_GRAY1)};
  `,
};

export default UserGradeGuideTable;
