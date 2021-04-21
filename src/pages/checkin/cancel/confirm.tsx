import { FC, useEffect } from 'react';
import {
  useBooking,
  useScroll,
  useMe,
} from '@airpremia/core/hooks';
import { useRouter } from 'next/router';
import {
  BookingRefundSummary,
  BookingCancelSummaryCard,
  PaymentByPassenger,
  RefundAmount,
  Caution,
  Loading,
} from 'src/components';
import { Title, TaskButton } from 'src/components';
import { caution } from 'src/components/templates/checkin/bookingRefundSummary/dummy';
import { Container } from 'src/styles/layout';
import moment from 'moment';
import { IPostEmail, Email } from '@airpremia/core/api/booking/types';
import { addComma } from '@airpremia/core/lib/service';

interface IProps {}

const bookingCancelConfirm: FC<IProps> = ({}) => {
  const router = useRouter();
  const {
    bookingSessionStore,
    bookingStore,
    //refundTotalPriceLabel,
    onSubmitCancelCommitPassenger,
    canceledPaxCountLabel,
    getPriceLabel,
    onSendEmail,
  } = useBooking();
  const {
    meStore
  } = useMe();
  const { bookingDetailInfo } = bookingStore;
  const { upScroll } = useScroll();
  const {
    refundBreakdown,
    isBookingCancelCommitRequest,
    isBookingCancelCommitSuccess,
    isBookingCancelCommitFailed,
  } = bookingSessionStore;

  const { userInfo } = meStore;
  // useEffect(() => {
  //   console.log('예약취소 결과 >> ', isBookingCancelCommitSuccess)
  //   if (isBookingCancelCommitSuccess) {
  //     router.push(`/checkin/cancel/complete`);
  //   }
  // }, [isBookingCancelCommitSuccess]);
  
  useEffect(() => {
      if (isBookingCancelCommitSuccess) {
          
        const name = userInfo.name.first != null ? userInfo.name.first+" "+userInfo.name.last : userInfo.name.toString()
        const email: Email = {
          name: name,
          address: userInfo.email,
        }
        const tripType = bookingDetailInfo?.bookingInfo?.tripType
        let tripHtml = '<p><sapn style="font-weight:bold;">가는길</span>'
                     + '   '+moment(bookingDetailInfo?.bookingInfo?.beginDate).format('YYYY년 MM월 DD일 HH:mm')
                     + '   '+bookingDetailInfo?.bookingInfo?.originText+'</p>'

        if(tripType == 'Round') {
          tripHtml += '<p><sapn style="font-weight:bold;">오는길</span>'
                    + '   '+moment(bookingDetailInfo?.bookingInfo?.endDate).format('YYYY년 MM월 DD일 HH:mm')
                    + '   '+bookingDetailInfo?.bookingInfo?.destinationText+'</p>'
        }

        const sendData: IPostEmail = {
          to: [email],
          cc: [],
          bcc: [],
          attachmentIds: [],
          title: '[에어프레미아] 예약 취소 안내',
          content: '<p>'+email.name+'님, '+ bookingDetailInfo?.bookingInfo?.recordLocator+' 예약이 취소되었습니다.</p>'
                  +'<p> -----------------------------------</p>'
                  +tripHtml
                  +'<p> -----------------------------------</p>'
                  +'<p>앞으로 많은 관심 부탁드립니다.</p>'
                  +'<p>감사합니다.</p>',
        }

        console.log("취소 이메일", sendData)

        onSendEmail(sendData);  

        router.push(`/checkin/cancel/complete`);

      } else if(isBookingCancelCommitFailed) {
        alert('예약을 취소할 수 없습니다. 고객센터로 문의해주세요')

      }
  }, [
    isBookingCancelCommitRequest,
    isBookingCancelCommitFailed,
    isBookingCancelCommitSuccess,]);

  useEffect(() => {
    upScroll();
  }, []);

  if (!refundBreakdown) {
    return <Loading />;
  }

  //const totalBalanceDue = bookingDetailInfo?.breakdown.balanceDue||0;//미결제금액
  const totalAmount = bookingDetailInfo?.bookingInfo.totalAmount||0;//결제금액
  const totalRefundAmount = bookingDetailInfo?.bookingInfo.refundedAmount||0;//환불금액
  const totalPrice = totalAmount + totalRefundAmount

  return (
    <Container>
      <BookingRefundSummary
        title={<Title>환불 내역을 확인해주세요.</Title>}
        bookingCancelSummaryCard={
          <BookingCancelSummaryCard
            canceledPaxCountLabel={canceledPaxCountLabel}
            bookingInfo={refundBreakdown?.bookingInfo}
          />
        }
        paymentByPassenger={
          <PaymentByPassenger
            getPriceLabel={getPriceLabel}
            passengerBreakdown={
              refundBreakdown?.passengerBreakdown
            }
          />
        }
        refundAmount={
          <RefundAmount
            refundDetail={refundBreakdown?.refundDetail}
            //refundTotalPriceLabel={refundTotalPriceLabel}
            refundTotalPriceLabel={addComma(totalPrice)}
          />
        }
        caution={
          <Caution
            title={caution.title}
            body={caution.body}
          />
        }
        button={
          <TaskButton
            onClick={onSubmitCancelCommitPassenger}
          >
            예약 취소
          </TaskButton>
        }
      />
    </Container>
  );
};

export default bookingCancelConfirm;
