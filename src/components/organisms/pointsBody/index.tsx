import { FC } from 'react';
import styled from 'styled-components';
import {
  DARK_GRAY1,
  LIGHT_GRAY7,
  LIGHT_GRAY5,
  BLUE1,
  ORANGE1,
} from '@airpremia/cdk/styles/colors';
import moment from 'moment';
import { addComma } from '@airpremia/core/lib/service';
import { ifProp } from 'styled-tools';

interface IProps {
  list: any[];
}

/** 포인트를 사용하였는지 얻었는지 +/-를 뱉고 comma를 붙여주는 함수 */
const getPointsValue = ({
  type,
  amount,
}: {
  type: string;
  amount: number;
}) => {
  switch (type) {
    case 'Earn':
    case 'Buy':
    case 'Receive':
      return ['+', addComma(amount)];

    case 'Expired':
    case 'Transfer':
    case 'Refund':
      return ['-', addComma(amount)];

    default:
      return ['+', 0];
  }
};

const PointsBody: FC<IProps> = ({ list }) => {
  return (
    <S.container>
      <S.header>
        <S.left>
          <p className="font-bold">포인트 내역</p>
        </S.left>
        <S.right>
          <p>전체</p>
          <p>1년</p>
          <p>최신순</p>
        </S.right>
      </S.header>

      {list.length > 0 ? (
        <S.table>
          {list.map((item: any, i: number) => {
            const [sign, amount] = getPointsValue({
              type: item.type,
              amount: item.amount,
            });

            return (
              <S.row key={`pointsTableItem${i.toString()}`}>
                <li>
                  {moment(item.transactionDate).format(
                    'YYYY.MM.DD',
                  )}
                </li>
                <li>{item.typeText}</li>
                <li>
                  <div>
                    <p>{item.summaryText}</p>
                    <S.colorAmount
                      isPositive={sign === '+'}
                    >
                      {sign} {amount} M
                    </S.colorAmount>
                  </div>
                </li>
              </S.row>
            );
          })}
        </S.table>
      ) : (
        <S.table className="noList">
          조회된 내역이 없습니다.
        </S.table>
      )}
    </S.container>
  );
};

const S = {
  container: styled.div``,
  header: styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: solid 2px;
    ${DARK_GRAY1};
  `,
  left: styled.div`
    p {
      font-size: 15px;
      line-height: 22px;
      letter-spacing: -0.3px;
    }
  `,
  right: styled.div`
    display: flex;
    p {
      margin-left: 5px;
    }
  `,

  table: styled.div`
    &.noList {
      padding: 100px 0;
      font-size: 14px;
      line-height: 20px;
      color: ${LIGHT_GRAY7};
      border-bottom: solid 1px ${LIGHT_GRAY5};
      text-align: center;
    }
  `,

  row: styled.ul`
    display: flex;
    align-items: center;
    padding: 35px 0;
    border-bottom: solid 1px ${LIGHT_GRAY5};

    li {
      font-size: 15px;
      line-height: 22px;
      letter-spacing: -0.3px;
      font-weight: 600;

      &:nth-child(1) {
        width: 85px;
        margin-right: 120px;
      }
      &:nth-child(2) {
        width: 56px;
        text-align: center;
        margin-right: 140px;
      }
      &:nth-child(3) {
        width: calc(100% - 400px);
      }

      & > div {
        display: flex;
        justify-content: space-between;
      }
    }
  `,

  colorAmount: styled.div<{ isPositive: boolean }>`
    color: ${ifProp('isPositive', BLUE1, ORANGE1)};
  `,
};

export default PointsBody;
