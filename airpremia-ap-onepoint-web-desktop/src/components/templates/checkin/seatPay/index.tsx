import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';
// import { BLACK, WHITE, GRAY } from '@airpremia/cdk/styles/colors';

interface IProps {
  title: ReactElement;
  payMethod: ReactElement;
  mileage?: ReactElement;
  receipt: ReactElement;
}

const SeatPayTemplate: FC<IProps> = ({
  title,
  payMethod,
  mileage,
  receipt,
}) => {
  return (
    <S.container>
      <S.titleWrapper>{title}</S.titleWrapper>
      <S.contentWrapper>
        <S.reviewWrapper>
          <S.payMethodWrapper>
            {payMethod}
          </S.payMethodWrapper>
          {mileage && (
            <S.mileageWrapper>{mileage}</S.mileageWrapper>
          )}
        </S.reviewWrapper>
        <S.PayReceiptWrapper>{receipt}</S.PayReceiptWrapper>
      </S.contentWrapper>
    </S.container>
  );
};

const S = {
  container: styled.div``,

  titleWrapper: styled.div``,

  contentWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
  `,
  mileageWrapper: styled.div`
    margin-top: 80px;
    padding-bottom: 80px;
    border-bottom: solid 2px ${DARK_GRAY1};
  `,
  reviewWrapper: styled.div`
    width: 765px;
    margin-right: 60px;
  `,
  payMethodWrapper: styled.div``,

  PayReceiptWrapper: styled.div`
    position: sticky;
    top: 130px;
    height: 100%;
  `,

  reservationAgreeWrapper: styled.div`
    margin-top: 80px;
  `,

  installGuideWrapper: styled.div`
    margin-top: 90px;
  `,
};

export default SeatPayTemplate;
