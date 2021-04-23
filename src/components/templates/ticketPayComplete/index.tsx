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
        <h3>
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

    @media only screen and (max-width: 767px) {
      margin-bottom: 0;
    }
  `,
  TicketPreview: styled.div`
    margin-bottom: 120px;
    @media only screen and (max-width: 1059px) {
      margin-bottom: 60px;
    }
  `,
  NextTripWrapper: styled.div`
    h3 {
      font-size: 24px;
      line-height: 34px;
      letter-spacing: -0.44px;
      font-weight: 700;
      margin-bottom: 60px;
      @media only screen and (max-width: 767px) {
        font-size: 22px;
        line-height: 28px;
        letter-spacing: -0.04em;
        margin-bottom: 30px;
      }
    }
  `,
  reservationSummaryWrapper: styled.div`
    margin-top: 80px;
  `,
  linkWrapper: styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 1059px) {
      flex-direction: column;
    }

    & > div {
      flex: 1;
      margin-right: 10px;
      &:last-child {
        margin-right: 0px;
      }
      
      @media only screen and (max-width: 1059px) {
        margin-right: 0;
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0px;
        }
      }
    }
  `,
  cardWrapper: styled.div`
    width: 100%;
    padding: 60px 0;
    margin-bottom: 80px;
    border-bottom: solid 1px ${LIGHT_GRAY5};
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 1059px) {
      margin-bottom: 60px;
    }

    @media only screen and (max-width: 767px) {
      align-items: center;
      flex-direction: column;
    }
    &>div{
      width: calc(33.33% - 75px);

      @media only screen and (max-width: 1059px) {
        width: calc(33.33% - 40px);
      }

      @media only screen and (max-width: 767px) {
        width: 100%;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &:last-child {
          margin-bottom: 0px;
        }
      }
    }
  `,
  buttonWrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;

    @media only screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 26px;
      letter-spacing: -0.028em;
      flex-direction: column;
    }
    & > button {
      width: 240px;
      margin-right: 10px;

      @media only screen and (max-width: 767px) {
        width: 100%;
        margin-right: 0;
        margin-bottom: 15px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  `,
};

export default TicketPayComplete;
