import { useCallback, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import {
  ReservationCompleteTitle,
  ReservationSummary,
  LinkButton,
  AppDownloadButton2,
  TimeLimitPromotionCard,
  TicketPayComplete,
  Loading,
} from 'src/components';
import { TaskButton } from 'src/components';
import { BLUE1 } from '@airpremia/cdk/styles/colors';
import { useBookingLocal } from 'src/hooks';
import {
  useBooking,
  useScroll,
  useLoading,
} from '@airpremia/core/hooks';

import eventImgTravel from 'public/images/event_img_travel.jpg';
import eventImgHotel from 'public/images/event_img_hotel.jpg';
import eventImgTada from 'public/images/event_img_tada.jpg';
import LinkButton2 from 'src/components/molecules/linkButton2';

export interface IStyleProps {}

export interface IProps extends IStyleProps {
  children: React.ReactElement | string;
}

function PayComplete({}: IProps) {
  const { upScroll } = useScroll();
  const { onFindTrip, bookingStore } = useBooking();
  const { bookingDetailInfo } = bookingStore;
  const {
    tripTypeLabel,
    firstJourneyOriginLabel,
    firstJourneyDestinationLabel,
    totalPrice,
    passengersLabel,
    currency,
    getTickets,
  } = useBookingLocal();
  const router = useRouter();
  const { showLoading } = useLoading();

  const ticketTitle = useMemo(() => {
    return `[${tripTypeLabel}] ${firstJourneyOriginLabel} － ${firstJourneyDestinationLabel}`;
  }, [
    tripTypeLabel,
    firstJourneyOriginLabel,
    firstJourneyDestinationLabel,
  ]);

  const priceDataset = useMemo(() => {
    const price = bookingDetailInfo?.bookingInfo.totalAmount!!
                + bookingDetailInfo?.bookingInfo.refundedAmount!!
                + bookingDetailInfo?.breakdown.balanceDue!!

    return [
      {
        label: '결제 금액',
        //value: totalPrice,
        value: price,
        currency,
      },
    ];
  }, [totalPrice]);

  // const getReservation = useCallback(() => {
  //   const parsed = queryString.parse(location.search);
  //   return flow(get('recordLocator'))(parsed);
  // }, []);

  useEffect(() => {
    upScroll();

    history.pushState(null, 'complete', location.href);
  }, []);

  // smartport.mhh 뒤로가기 시 홈으로
  window.onpopstate = () => {
    showLoading();
    window.location.replace('/');
  };

  const {
    firstName,
    lastName,
    recordLocator,
  } = router.query;

  const getParams = useMemo(() => {

    const first = Array.isArray(firstName)
      ? firstName[0]
      : firstName;

    const last = Array.isArray(lastName)
      ? lastName[0]
      : lastName;

    const reservation = Array.isArray(recordLocator)
      ? recordLocator[0]
      : recordLocator;

    return {
      first: first,
      last: last,
      reservation: reservation,
    }
  }, [firstName, lastName, recordLocator]);

  useEffect(() => {
    onFindTrip(getParams);
  }, [getParams]);

  const onClickEticketDownload = useCallback(() => {
    window.open(
      `/checkin/e-ticket?recordLocator=${getParams.reservation}&firstName=${getParams.first}&lastName=${getParams.last}`,
      '_blank',
    );
  }, []);

  if (!bookingDetailInfo) {
    return <Loading />;
  }

  return (
    <S.wrapper>
      <S.container>
        <TicketPayComplete
          title={<ReservationCompleteTitle />}
          summary={
            <ReservationSummary
              ticketTitle={ticketTitle}
              passengers={passengersLabel}
              reservationNumber={getParams.reservation}
              tickets={getTickets}
              prices={priceDataset}
            />
          }
          autoCheckinLinkButton={
            <LinkButton to="/checkin/online">
              온라인 체크인 신청하기
            </LinkButton>
          }
          eTicketDownloadLinkButton={
            // <LinkButton
            //   to={`/checkin/e-ticket?recordLocator=${recordLocator.value}`}
            // >
            //   여정 안내서(E-ticket)
            // </LinkButton>
            /** 여정안내서 다른 창으로 열리도록 수정 */
            <LinkButton2 onClick={onClickEticketDownload}>
              여정 안내서(E-Ticket)
            </LinkButton2>
          }
          appDownloadButton={<AppDownloadButton2 />}
          // 서버에서 주는 형태를 보고 props를 변경해야 될수 있음
          card1={
            <TimeLimitPromotionCard
              imgUrl={eventImgTravel}
              title="엑티비티 예약은 마이리얼트립"
              from="2019. 7. 1."
              to="2019. 8. 1."
            />
          }
          card2={
            <TimeLimitPromotionCard
              imgUrl={eventImgHotel}
              title="하노이 인기 호텔을 추천해드립니다"
              from="2019. 6. 1."
              to="2019. 7. 30."
            />
          }
          card3={
            <TimeLimitPromotionCard
              imgUrl={eventImgTada}
              title="공항 가는 길, 타다 AIR 10% 쿠폰 이벤트 :-)"
              from="2019. 6. 1."
              to="2019. 6. 30."
            />
          }
          homeButton={
            <TaskButton
              backgroundColor={BLUE1}
              onClick={() => router.push('/')}
            >
              홈
            </TaskButton>
          }
          bookingDetailButton={
            <TaskButton
              backgroundColor={BLUE1}
              onClick={() =>
                router.push('/checkin/find-trip')
              }
            >
              예매 내역 확인
            </TaskButton>
          }
        />
      </S.container>
    </S.wrapper>
  );
}

PayComplete.defaultProps = {};

const S = {
  wrapper: styled.div`
    min-height: 800px;
  `,
  container: styled.div<IStyleProps>`
    margin: 0 auto;
  `,
};

export default PayComplete;
