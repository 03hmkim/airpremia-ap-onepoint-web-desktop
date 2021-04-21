import { FC } from 'react';
import styled from 'styled-components';
import { TaskButton } from 'src/components';
// import { useAuth } from '@airpremia/core/hooks';

interface IProps {
  name: string;
  numberOfCoupons?: number;
  onClickRegisterCoupon?: () => void;
}

const CouponHeader: FC<IProps> = ({
  name,
  numberOfCoupons = 0,
  onClickRegisterCoupon = () => {},
}) => {
  return (
    <S.container>
      <S.header>
        <p>{name}</p>
        님의 사용 가능 쿠폰
      </S.header>
      <S.content>
        <S.coupon className="font-bold">
          {numberOfCoupons} 개
        </S.coupon>
        <S.button>
          <TaskButton onClick={onClickRegisterCoupon}>
            쿠폰 등록
          </TaskButton>
        </S.button>
      </S.content>
    </S.container>
  );
};

const S = {
  container: styled.div``,
  header: styled.div`
    font-weight: 600;
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    p {
      font-size: 16px;
      line-height: 17px;
      letter-spacing: -0.32px;
    }
  `,
  content: styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      width: 240px;
    }
  `,

  coupon: styled.div`
    font-size: 32px;
    line-height: 17px;
    letter-spacing: -0.64px;
  `,

  button: styled.div``,
};

export default CouponHeader;
