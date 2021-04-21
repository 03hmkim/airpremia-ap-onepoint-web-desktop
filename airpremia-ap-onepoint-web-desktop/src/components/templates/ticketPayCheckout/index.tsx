import { ReactElement } from 'react';
import styled from 'styled-components';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

export interface IStyleProps {}

export interface IProps extends IStyleProps {
  title: ReactElement;
  payMethod: ReactElement;
  mileage?: ReactElement;
  receipt: ReactElement;
}

function TicketPay({
  title,
  payMethod,
  mileage,
  receipt,
}: IProps) {
  return (
    <S.container>
      <S.TitleWrapper>{title}</S.TitleWrapper>
      <S.ContentWrapper>
        <S.reviewWrapper>
          <S.payMethodWrapper>
            {payMethod}
          </S.payMethodWrapper>
          {mileage && (
            <S.mileageWrapper>{mileage}</S.mileageWrapper>
          )}
        </S.reviewWrapper>
        <S.PayReceiptWrapper>{receipt}</S.PayReceiptWrapper>
      </S.ContentWrapper>
    </S.container>
  );
}

TicketPay.defaultProps = {};

const S = {
  container: styled.div`
    padding: 60px 0 160px;
  `,
  TitleWrapper: styled.div``,
  ContentWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 65px;
  `,
  mileageWrapper: styled.div`
    margin-top: 80px;
  `,
  reviewWrapper: styled.div`
    width: 765px;
    margin-right: 60px;
    padding-bottom: 90px;
    border-bottom: 2px solid ${DARK_GRAY1};
  `,
  payMethodWrapper: styled.div``,

  PayReceiptWrapper: styled.div`
    position: sticky;
    top: 130px;
    height: 100%;
  `,
};

export default TicketPay;
