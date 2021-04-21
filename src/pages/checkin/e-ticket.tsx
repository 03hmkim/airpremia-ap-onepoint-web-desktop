import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import {
  EticketBooking,
  EticketJourney,
  EticketPayment,
  EticketTemplate,
  Loading,
} from 'src/components';
import { useBooking } from '@airpremia/core/hooks';
import { flow, map } from 'lodash/fp';

interface IProps {}

const Eticket: FC<IProps> = () => {
  const { bookingStore, onFindTrip } = useBooking();
  const router = useRouter();
  const { bookingDetailInfo } = bookingStore;
  
  const removeUnnessaryDom = () => {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    const gnbNew = document.getElementById('gnbNew');

    if (header && footer && gnbNew) {
      header.style.display = 'none';
      footer.style.display = 'none';
      gnbNew.style.display = 'none';
    }
  };

  useEffect(() => {
    removeUnnessaryDom();
  }, []);

  useEffect(() => {
    if (!bookingDetailInfo) {
      const {
        recordLocator,
        firstName,
        lastName,
      } = router.query;

      const first = Array.isArray(firstName)
        ? firstName[0]
        : firstName;
  
      const last = Array.isArray(lastName)
        ? lastName[0]
        : lastName;
  
      const reservation = Array.isArray(recordLocator)
        ? recordLocator[0]
        : recordLocator;

      onFindTrip({
        first: first,
        last: last,
        reservation,
      });

    } else {
      /** 여정안내서 출력시 payment 승인 확인 후 조회될 수 있도록 수정 */
      let state = true;
      flow(
        map((payment: any) => {
          if (payment.status != 'Approved') {
            state = false;
            return;
        }}),
      )(bookingDetailInfo.payments);

      if (!state) {
        alert(`예약이 진행중 입니다. \n잠시후 다시 시도하여주세요.`);
        window.close();
      }
    }

  }, [bookingDetailInfo]);

  if (!bookingDetailInfo) {
    return <Loading />;
  }
  
  const textList =
    bookingDetailInfo.boardingPassInfo.tripType === 'OneWay'
      ? ['가는날']
      : ['가는날', '오는날'];

  return (
    <S.container>
      <S.wrapper>
        <EticketTemplate
          bookings={
            <EticketBooking 
              bookingInfo={bookingDetailInfo.bookingInfo}
              passengers={bookingDetailInfo.passengers}
            ></EticketBooking>
          }
          journeys={
            <S.journeysWrapper>
              {bookingDetailInfo.boardingPassInfo.journeys.map(
                (journey, i) => (
                  <S.wrapper key={`journey${i.toString()}`}>
                    <EticketJourney
                      tripText={textList[i]}
                      journey={journey}
                    ></EticketJourney>
                  </S.wrapper>
                ),
              )}
            </S.journeysWrapper>
          }
          payments={
            <EticketPayment
              payments={bookingDetailInfo.payments}
              breakdown={bookingDetailInfo.breakdown}
            ></EticketPayment>
          }
        ></EticketTemplate>
      </S.wrapper>
    </S.container>
  );
};

const S = {
  container: styled.div``,
  wrapper: styled.div``,
  journeysWrapper: styled.div`
    margin-top: 40px;
  `,
};

export default Eticket;
