import { FC } from 'react';
import { floor } from 'lodash';
import moment from 'moment';
import styled from 'styled-components';
import { Tag } from 'src/components';
import {
  ORANGE2,
  DARK_GRAY1,
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';
import { LIGHT_GRAY5 } from '@airpremia/cdk/styles/colors';

interface IProps {
  expiringAt?: string;
  couponName?: string;
  discount?: number;
  availableStart?: string;
  availableEnd?: string;
  boardingStart?: string;
  boardingEnd?: string;
  availablePosition?: string;
  availableFlight?: string;
  availableJounery?: string;
  availableCondition?: string;
  availableCount?: string;
}

const CouponDetail: FC<IProps> = ({
  couponName = '산호세 신규 취항 기념 15% 할인 쿠폰',
  expiringAt = '2020-10-27T08:03:17.893Z',
  discount = 15,
  availableStart = '2020-08-27T08:03:17.893Z',
  availableEnd = '2020-12-27T08:03:17.893Z',
  boardingStart = '2020-08-27T08:03:17.893Z',
  boardingEnd = '2020-12-27T08:03:17.893Z',
  availablePosition = '모바일 앱/웹',
  availableFlight = '모든 운임',
  availableJounery = '서울/인천(ICN) － 산호세(SJC)',
  availableCondition = '왕복 운임',
  availableCount = '1회',
}) => {
  const dateFormat = 'YYYY. M. D';
  const getDDayText = () => {
    const day = floor(
      moment
        .duration(moment(expiringAt).diff(moment()))
        .asDays(),
    );
    if (day > 0) {
      return `D-${day}`;
    }
    return `D+${day}`; // 정책에 따라 사라질수도 있음 (쿠폰 기간이 지난것에 대해서 모달을 키게할건지에 대한 정책 확인 필요)
  };

  const availableList = [
    { label: '사용가능 위치', value: availablePosition },
    { label: '사용 가능 운임', value: availableFlight },
    { label: '사용 구간', value: availableJounery },
    { label: '사용 조건', value: availableCondition },
    { label: '사용 가능 횟수', value: availableCount },
  ];

  return (
    <S.container>
      <Tag backgroundColor={ORANGE2}>{getDDayText()}</Tag>
      <S.couponName>
        <h3>{couponName}</h3>
      </S.couponName>
      <S.detail className="text">
        <S.row>
          <p>할인율 / 할인 금액</p>
          <p>운임의 {discount}%</p>
        </S.row>
        <S.row>
          <p>쿠폰 사용 기간</p>
          <p>
            {moment(availableStart).format(dateFormat)} ~{' '}
            {moment(availableEnd).format(dateFormat)}
          </p>
        </S.row>
        <S.row>
          <p>항공권 탑승 기간</p>
          <p>
            {moment(boardingStart).format(dateFormat)} ~{' '}
            {moment(boardingEnd).format(dateFormat)}
          </p>
        </S.row>
      </S.detail>
      <S.condition className="text">
        {availableList.map((item, i) => (
          <S.row key={`availableList${i.toString()}`}>
            <p>{item.label}</p>
            <p>{item.value}</p>
          </S.row>
        ))}
      </S.condition>
    </S.container>
  );
};

const S = {
  container: styled.div`
    padding: 40px 0 87px;
    width: 540px;
    .text {
      font-size: 15px;
      line-height: 26px;
      letter-spacing: -0.3px;
      & > div:not(:last-of-type) {
        margin-bottom: 15px;
      }
    }
  `,

  couponName: styled.div`
    margin-top: 2px;
    padding-bottom: 20px;
    border-bottom: solid 2px ${DARK_GRAY1};
    h3 {
      font-size: 18px;
      line-height: 34px;
      letter-spacing: -0.36px;
    }
  `,

  detail: styled.div`
    padding: 30px 0 40px;
    border-bottom: solid 1px ${LIGHT_GRAY5};
  `,

  condition: styled.div`
    padding-top: 30px;
  `,

  row: styled.div`
    display: flex;
    color: ${LIGHT_GRAY7};
    & > p:first-of-type {
      color: ${DARK_GRAY1};
      width: 190px;
    }
  `,
};

export default CouponDetail;
