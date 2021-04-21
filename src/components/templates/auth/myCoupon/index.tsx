import { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface IProps {
  title: string;
  couponHeader: ReactElement;
  couponBody: ReactElement;
}

const MyCoupon: FC<IProps> = ({
  title,
  couponHeader,
  couponBody,
}) => {
  return (
    <S.container>
      <S.title>
        <h1 className="font-bold">{title}</h1>
      </S.title>
      <S.couponHeader>{couponHeader}</S.couponHeader>
      <S.couponBody>{couponBody}</S.couponBody>
    </S.container>
  );
};

const S = {
  container: styled.div``,

  title: styled.div`
    h1 {
      font-size: 36px;
      line-height: 50px;
      letter-spacing: -0.72px;
    }
  `,

  couponHeader: styled.div`
    margin-top: 80px;
  `,

  couponBody: styled.div`
    margin-top: 100px;
  `,
};

export default MyCoupon;
