import { FC } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { floor } from 'lodash';
import {
  DARK_GRAY1,
  LIGHT_GRAY7,
  LIGHT_GRAY5,
} from '@airpremia/cdk/styles/colors';
import moment from 'moment';
import {
  BLUE1,
  ORANGE1,
} from '@airpremia/cdk/styles/colors';

interface IProps {
  couponList?: any[];
  onClickCouponDetail?: (code: string) => () => void;
}

const CouponBodyTable: FC<IProps> = ({
  couponList,
  onClickCouponDetail = () => () => {},
}) => {
  return (
    <S.container>
      <S.header className="font-bold">쿠폰목록</S.header>
      {couponList && couponList.length > 0 ? (
        <S.table>
          {couponList?.map((item) => {
            const isDone =
              moment(item.expiringAt) < moment();
            const diff = floor(
              moment
                .duration(
                  moment(item.expiringAt).diff(moment()),
                )
                .asDays(),
            );

            return (
              <S.row
                key={item.couponCode}
                isDone={isDone}
                onClick={onClickCouponDetail(
                  item.couponCode,
                )}
              >
                <S.item>{item.couponName}</S.item>
                <S.item>{item.couponType}</S.item>
                <S.item>
                  <p>
                    ~{' '}
                    {moment(item.expiringAt).format(
                      'YYYY. M. D',
                    )}
                  </p>
                  <S.colorText diff={diff}>
                    {diff > 0
                      ? `${diff} 일 남음`
                      : '기간 만료'}
                  </S.colorText>
                </S.item>
              </S.row>
            );
          })}
        </S.table>
      ) : (
        <S.noCoupon>
          사용 가능한 쿠폰이 없습니다.
        </S.noCoupon>
      )}
    </S.container>
  );
};

const S = {
  container: styled.div``,
  header: styled.div`
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.3px;
    padding-bottom: 20px;
    border-bottom: solid 2px ${DARK_GRAY1};
  `,
  table: styled.div``,

  row: styled.div<{ isDone: boolean }>`
    height: 93px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-bottom: solid 1px ${LIGHT_GRAY5};
    font-weight: 600;
    color: ${ifProp('isDone', LIGHT_GRAY7, DARK_GRAY1)};
    cursor: pointer;
    & > div {
      &:nth-child(1) {
        width: 280px;
        margin-right: 155px;
      }
      &:nth-child(2) {
        width: 300px;
        text-align: center;
      }
      &:nth-child(3) {
        flex: 1;
        text-align: right;
        line-height: 24px;
      }
    }
  `,
  item: styled.div`
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.3px;
  `,

  colorText: styled.div<{ diff: number }>`
    color: ${({ diff }) => {
      if (diff > 30) {
        return BLUE1;
      } else if (diff <= 30 && diff > 0) {
        return ORANGE1;
      }
      return LIGHT_GRAY7;
    }};
  `,

  noCoupon: styled.div`
    padding: 100px 0;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.28px;
    color: ${LIGHT_GRAY7};
    text-align: center;
    border-bottom: solid 1px ${LIGHT_GRAY5};
  `,
};

export default CouponBodyTable;
