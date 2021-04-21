import {
  FC,
  Fragment,
  useMemo,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/router';
import { getStationLabel } from '@airpremia/core/lib/booking';
import {
  CheckinSummaryTemplate,
  ContainerTitle,
  ReservationSummary,
} from 'src/components';
import {
  useBooking,
  useScroll,
} from '@airpremia/core/hooks';
import { TaskButton } from 'src/components';
import { useBookingLocal } from 'src/hooks';
import { BLUE1 } from '@airpremia/cdk/styles/colors';
import { Container } from 'src/styles/layout';

interface IProps {}

const CheckinComplete: FC<IProps> = ({}) => {
  const router = useRouter();
  const {
    passengersLabel,
    getCheckinComplete,
    firstJourneyOriginLabel,
    firstJourneyDestinationLabel,
  } = useBookingLocal();
  const { 
    bookingStore, 
    onFindTrip, 
    boardingPassSms 
  } = useBooking();
  const { upScroll } = useScroll();

  const {
    currentCheckinData,
  } = bookingStore;

  const ticketTitle = useMemo(() => {
    return `[편도] ${getStationLabel(currentCheckinData?.journey.designator.origin!!)} → ${getStationLabel(currentCheckinData?.journey.designator.destination!!)}`;
  }, [
    firstJourneyOriginLabel,
    firstJourneyDestinationLabel,
  ]);
  const [isSendSms, setSendSms] = useState(false);

  useEffect(() => {
    upScroll();
    onFindTrip({ reservation: currentCheckinData!!.recordLocator });
  }, []);

  function dateCheck(str: any) {
    let departureDate = new Date(str.substr(0, 4), str.substr(5, 2)-1, str.substr(8, 2), str.substr(11, 2), str.substr(14, 2), str.substr(17, 2));
    departureDate.setDate(departureDate.getDate() - 1);
    //let currentDate = new Date(); // 국제선 해외발인 경우 해당 나라의 시간으로 변경 필요
    let changeFlag;
    //if(currentDate.getTime() >= departureDate.getTime()) {
      changeFlag = false;
      if(!isSendSms) {
        boardingPassSms();
        setSendSms(true);
       }
 /*   } else {
      changeFlag = true;
    } */
    return changeFlag;
  }

  return (
    <Container>
      <CheckinSummaryTemplate
        header={
          <ContainerTitle
            title={
              <Fragment>
                온라인 체크인 신청이
                <br />
                완료되었습니다 :-)
              </Fragment>
            }
            description= {dateCheck(currentCheckinData?.journey.designator.departure) ? "탑승 24시간 전에 탑승권이 자동으로 발급됩니다." : "탑승권이 탑승자의 휴대폰 번호로 전송됐습니다."}
          />
        }
        body={
          <ReservationSummary
            ticketTitle={ticketTitle}
            passengers={passengersLabel}
            reservationNumber={currentCheckinData!!.recordLocator}
            tickets={getCheckinComplete}
          />
        }
        button={
          <Fragment>
            <TaskButton
              backgroundColor={BLUE1}
              onClick={() => router.push('/')}
            >
              홈
            </TaskButton>
            <TaskButton
              backgroundColor={BLUE1}
              onClick={() =>
                router.push(
                  `/checkin/trip-detail-information?recordLocator=${currentCheckinData!!.recordLocator}`,
                )
              }
            >
              예약상세
            </TaskButton>
          </Fragment>
        }
      />
    </Container>
  );
};

export default CheckinComplete;
