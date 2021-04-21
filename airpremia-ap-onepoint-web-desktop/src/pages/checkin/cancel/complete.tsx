import { FC, useEffect, useCallback } from 'react';
// import { useRouter } from 'next/router';
import { Container } from 'src/styles/layout';
import BookingCancelComplete from 'src/components/templates/checkin/bookingCancelComplete';
import { Title, TaskButton } from 'src/components';
import {
  useBooking,
  useScroll,
} from '@airpremia/core/hooks';
import { TicketCancelCompleted } from 'src/components';
// import { dummyResp } from 'src/components/templates/checkin/bookingRefundSummary/dummy';

interface IProps {}

const TicketCancelComplete: FC<IProps> = ({}) => {
  const { bookingSessionStore } = useBooking();
  const { refundCompletedResp } = bookingSessionStore;
  // const router = useRouter();
  const { upScroll } = useScroll();

  const goHome = useCallback( () => {
      location.href="/"
      //initLoad()
    },
    [],
  );

  useEffect(() => {
    upScroll();
  }, []);
  return (
    <Container>
      <BookingCancelComplete
        title={<Title>예약이 취소 되었습니다.</Title>}
        ticketCancelCompleted={
          <TicketCancelCompleted
            refundBreakdown={refundCompletedResp}
          />
        }
        taskButton={
          <TaskButton onClick={goHome}>
            홈
          </TaskButton>
        }
      />
    </Container>
  );
};

export default TicketCancelComplete;
