import { ReactElement } from 'react';
import styled from 'styled-components';
import { LIGHT_GRAY5 } from '@airpremia/cdk/styles/colors';

export interface IStyleProps {}

export interface IProps extends IStyleProps {
  title?: ReactElement;
  summary?: ReactElement;
  autoCheckinLinkButton?: ReactElement;
  eTicketDownloadLinkButton?: ReactElement;
  appDownloadButton?: ReactElement;
  card1?: ReactElement;
  card2?: ReactElement;
  card3?: ReactElement;
  homeButton?: ReactElement;
  bookingDetailButton?: ReactElement;
}

function TicketPayComplete({
  title,
  summary,
  autoCheckinLinkButton,
  eTicketDownloadLinkButton,
  appDownloadButton,
  card1,
  card2,
  card3,
  homeButton,
  bookingDetailButton,
}: IProps) {
  return (
    <S.container>
      <S.TicketPreview>
        {title}
        <S.reservationSummaryWrapper>
          {summary}
        </S.reservationSummaryWrapper>

        <S.linkWrapper>
          {autoCheckinLinkButton}
          {eTicketDownloadLinkButton}
        </S.linkWrapper>
      </S.TicketPreview>

      <S.NextTripWrapper>
        <h3 className="font-bold">
          에어프레미아와
          <br />
          여행을 준비하세요 :-)
        </h3>
        {appDownloadButton}

        <S.cardWrapper>
          <div>{card1}</div>
          <div>{card2}</div>
          <div>{card3}</div>
        </S.cardWrapper>

        <S.buttonWrapper>
          {homeButton}
          {bookingDetailButton}
        </S.buttonWrapper>
      </S.NextTripWrapper>
    </S.container>
  );
}

TicketPayComplete.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    margin-bottom: 160px;
  `,
  TicketPreview: styled.div`
    margin-bottom: 120px;
  `,
  NextTripWrapper: styled.div`
    h3 {
      font-size: 22px;
      line-height: 34px;
      letter-spacing: -0.44px;
      margin-bottom: 70px;
    }
  `,
  reservationSummaryWrapper: styled.div`
    margin-top: 32px;
  `,
  linkWrapper: styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    & > div {
      flex: 1;
      margin-right: 10px;
    }
  `,
  cardWrapper: styled.div`
    padding: 70px 0 60px;
    margin-bottom: 80px;
    border-bottom: solid 1px ${LIGHT_GRAY5};
    display: flex;
    justify-content: space-between;
  `,
  buttonWrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    & > button {
      width: 240px;
      margin-right: 10px;
    }
  `,
};

export default TicketPayComplete;
