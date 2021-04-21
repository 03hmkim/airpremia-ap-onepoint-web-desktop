import { FC, Fragment } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import {
  LIGHT_GRAY6,
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';

interface IInnerProps {
  grade: string;
  remainingFreeBag?: number;
  remainingPreSeat?: number;
}

interface IProps extends IInnerProps {
  name?: string;
  startDate?: string;
  endDate?: string;
}

const BlueType: FC<IInnerProps> = () => {
  const list = [
    {
      label: '항공권 결제 금액 적립',
      value: '1,000원당 40 M 적립',
    },
    {
      label: '무료 추가 수하물',
      value: 'Silver 승급 시 제공',
    },
    {
      label: '사전 좌석 구매',
      value: 'Silver 승급 시 제공',
    },
  ];
  return (
    <S.right>
      {list?.map((item, i) => {
        const gray = i !== 0 ? 'gray' : '';
        return (
          <S.box key={`gradeList${i.toString()}`}>
            <p>{item.label}</p>
            <h3 className={gray}>{item.value}</h3>
          </S.box>
        );
      })}
    </S.right>
  );
};

const SilverType: FC<IInnerProps> = ({
  remainingFreeBag = 2,
  remainingPreSeat = 2,
}) => {
  const list = [
    {
      label: '항공권 결제 금액 적립',
      value: '1,000원당 80 M 적립',
    },
    {
      label: '무료 추가 수하물',
      value: '4개 제공',
    },
    {
      label: '사전 좌석 구매',
      value: '4회 제공',
    },
  ];

  return (
    <S.right>
      {list?.map((item, i) => {
        return (
          <S.box key={`gradeList${i.toString()}`}>
            <p>{item.label}</p>
            {i === 0 && <h3>{item.value}</h3>}
            {i === 1 && (
              <h3>
                {remainingFreeBag}개 남음{' '}
                <span>/ {item.value}</span>
              </h3>
            )}
            {i === 2 && (
              <h3>
                {remainingPreSeat}회 남음{' '}
                <span>/ {item.value}</span>
              </h3>
            )}
          </S.box>
        );
      })}
    </S.right>
  );
};

const GoldType: FC<IInnerProps> = ({
  remainingFreeBag = 2,
  remainingPreSeat = 2,
}) => {
  const list = [
    {
      label: '항공권 결제 금액 적립',
      value: '1,000원당 80 M 적립',
    },
    {
      label: '무료 추가 수하물',
      value: '4개 제공',
    },
    {
      label: '사전 좌석 구매',
      value: '4회 제공',
    },
    {
      label: '수하물 우선 하기 서비스',
      value: '기본 제공',
    },
    {
      label: '우선 탑승 서비스',
      value: '기본 제공',
    },
  ];
  return (
    <S.right className="gold">
      {list?.map((item, i) => {
        return (
          <S.box key={`gradeList${i.toString()}`}>
            <p>{item.label}</p>
            {i !== 1 && i !== 2 && <h3>{item.value}</h3>}
            {i === 1 && (
              <h3>
                {remainingFreeBag}개 남음{' '}
                <span>/ {item.value}</span>
              </h3>
            )}
            {i === 2 && (
              <h3>
                {remainingPreSeat}회 남음{' '}
                <span>/ {item.value}</span>
              </h3>
            )}
          </S.box>
        );
      })}
    </S.right>
  );
};

const GradeDashboard: FC<IProps> = ({
  name = 'LEE YONGHYUN',
  startDate = '2020-10-27T08:07:21.023',
  endDate = '2022-10-27T08:07:21.023',
  ...props
}) => {
  return (
    <S.container>
      <S.left>
        <div>
          <h4>{name}님의 등급</h4>
          <h2 className="font-bold">
            {props?.grade?.toUpperCase()}
          </h2>
        </div>
        <div>
          <p>
            {moment(startDate)
              .locale('ko')
              .format('YYYY년 M월')}
            &nbsp;~&nbsp;
            {moment(endDate)
              .locale('ko')
              .format('YYYY년 M월')}
          </p>
        </div>
      </S.left>

      <Fragment>
        {props.grade === 'BLUE' && <BlueType {...props} />}
        {props.grade === 'SILVER' && (
          <SilverType {...props} />
        )}
        {props.grade === 'GOLD' && <GoldType {...props} />}
      </Fragment>
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 1200px;
    min-height: 200px;
    border-radius: 12px;
    border: solid 1px ${LIGHT_GRAY6};
    padding: 30px 40px 30px 30px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
  `,

  left: styled.div`
    flex: 2;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    h2 {
      font-size: 32px;
      line-height: 47px;
      margin-top: 8px;
    }
    h4 {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.32px;
      font-weight: 600;
    }
    p {
      font-size: 15px;
      line-height: 17px;
      letter-spacing: -0.3px;
      color: ${LIGHT_GRAY7};
      font-weight: 600;
    }
  `,

  right: styled.div`
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    align-items: flex-end;
    min-height: 140px;
    /* justify-content: flex-end; */

    div:not(:nth-child(3n)) {
      margin-right: 75px;
    }

    &.gold {
      flex: 2.3;
      & > div {
        margin: 0;
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          margin-bottom: 38px;
        }

        &:nth-child(1),
        &:nth-child(4) {
          width: 232px;
        }
        &:nth-child(2),
        &:nth-child(5) {
          width: 219px;
        }
        &:nth-child(3) {
          width: 120px;
        }
      }
    }
  `,

  box: styled.div`
    p {
      font-size: 13px;
      line-height: 19px;
      letter-spacing: -0.26px;
    }
    h3 {
      font-size: 18px;
      line-height: 27px;
      letter-spacing: -0.36px;
      font-weight: 600;
      margin-top: 12px;
    }
    span {
      font-size: 13px;
      line-height: 19px;
      letter-spacing: -0.26px;
      vertical-align: unset;
    }
    .gray {
      color: ${LIGHT_GRAY7};
    }
  `,
};

export default GradeDashboard;
