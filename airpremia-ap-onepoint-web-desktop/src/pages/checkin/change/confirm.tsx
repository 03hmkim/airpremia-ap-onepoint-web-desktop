import { FC, useEffect, useState } from 'react';
import {
  useBooking,
  useScroll,
} from '@airpremia/core/hooks';
import { useRouter } from 'next/router';
import {
  BookingSelectChangeFlight,
  BookingChangeSummaryCard,
  Loading,
} from 'src/components';
import { Title, TaskButton } from 'src/components';
import { Container } from 'src/styles/layout';
import moment from 'moment';
import {
  EFlightType,
} from '@airpremia/core/stores/models/bookingSession';

interface IStyleProps {}
interface IProps extends IStyleProps {}

const bookingChangeConfirm: FC<IProps> = () => {
  
  const [
    toBeRemovedJourneyKey,
    setJourneyKey,
  ] = useState<null | string[]>(null);

  const [isButtonActive, setButtonActive] = useState<
    boolean
  >(false);

  const router = useRouter();
  const { 
      bookingSessionStore,
      onSubmitChangeRemoveJourney,
      onChangeDate,
      onBookingChangeItinerary,
  } = useBooking();
  
  const { upScroll } = useScroll();
  
  const {
    isBookingChangeRemoveJourneySuccess,
    isBookingChangeRemoveJourneyFailed,
  } = bookingSessionStore;
  
  const {
    bookingStore
  } = useBooking();

  const { bookingDetailInfo } = bookingStore;

  //취소
  const bookingChangeRemoveJourney = () => {
    if (
      toBeRemovedJourneyKey &&
      toBeRemovedJourneyKey.length > 0
    ) {
      var journeyAvailabilities = [];

      let journeys = bookingDetailInfo?.boardingPassInfo.journeys;
      var startDate = null;
      var endDate = null;
      if(journeys && journeys.length>0){
        startDate = moment(journeys[0].departure, "YYYY-MM-DDThh:mm:ss");
        endDate = journeys.length > 1 ? moment(journeys[1].departure, "YYYY-MM-DDThh:mm:ss") : null;
        for(let i in journeys){
          var jouney = journeys[i];
          var jk = jouney.journeyKey;
          for(let j in toBeRemovedJourneyKey){
            if(jk == toBeRemovedJourneyKey[j]){
              var journeyAvailability = {
                journeyKey: jk,
                  designator: {
                    destination: jouney.destination,
                    origin: jouney.origin,
                    departure: jouney.departure,
                    arrival: jouney.departure,
                  }
              }
              journeyAvailabilities.push(journeyAvailability);
              if(i == "0") startDate = null;
              else endDate = null;
            }
          }
        }
        onChangeDate({
          date: journeyAvailabilities.length > 1 ? [
            moment(journeyAvailabilities[0].designator.departure, "YYYY-MM-DDThh:mm:ss"),
            moment(journeyAvailabilities[1].designator.departure, "YYYY-MM-DDThh:mm:ss")
          ] : moment(journeyAvailabilities[0].designator.departure, "YYYY-MM-DDThh:mm:ss"),
        });
        onBookingChangeItinerary({
          destination: journeyAvailabilities[0].designator.destination,
          origin: journeyAvailabilities[0].designator.origin,
          itineraryType: journeyAvailabilities.length > 1 ? EFlightType.RT : EFlightType.OW,
          startDate: startDate,
          endDate: endDate
        });
      }
      if(journeyAvailabilities && journeyAvailabilities.length>0){
        onSubmitChangeRemoveJourney({journeyAvailabilities: journeyAvailabilities})
      }
    }
  };

  //여정 취소 완료 이벤트
  useEffect(() => {
    console.log("취소완료")
    console.log(toBeRemovedJourneyKey &&
      toBeRemovedJourneyKey.length > 0 )
    if (toBeRemovedJourneyKey &&
        toBeRemovedJourneyKey.length > 0 ) {
          router.push(`/checkin/change/cabin-class2`);
    } else if (isBookingChangeRemoveJourneyFailed) {
      alert('예약을 취소할 수 없습니다. 다시 시도해 주세요.')
      location.replace('/');
    }
    
  }, [isBookingChangeRemoveJourneySuccess, isBookingChangeRemoveJourneyFailed]);

  useEffect(() => {
    upScroll();
  }, []);

  //박스 체크
  const onClickCheckbox = (key: string, isRefundable: boolean) => () => {
    if(isRefundable) {
      let _list;
      if (toBeRemovedJourneyKey) {
        if (toBeRemovedJourneyKey.includes(key)) {
          _list = [...toBeRemovedJourneyKey];
          _list.splice(_list.indexOf(key), 1);
        } else {
          _list = [...toBeRemovedJourneyKey, key];
        }
      } else {
        _list = [key];
      }
      setJourneyKey(_list);
    }
  };

  //박스 체크 트리거
  useEffect(() => {
    
    if (toBeRemovedJourneyKey &&
        toBeRemovedJourneyKey.length > 0 ) {

      setActive(!isActive)
      setButtonActive(true);
    } else {

      setActive(!isActive)
      setButtonActive(false);
    }
  }, [toBeRemovedJourneyKey]);

  const [isActive, setActive] = useState<boolean>(
    false,
  );

  if (!bookingDetailInfo) {
    return <Loading />;
  }

  return (
    <Container>
      <BookingSelectChangeFlight
        title={<Title>변경할 항공편을 선택해주세요.</Title>}
        subTitle={<span>출발 1시간 전까지 변경이 가능합니다.</span>}
        bookingChangeSummaryCard={
          <BookingChangeSummaryCard
            bookingDetailInfo={bookingDetailInfo}
            toBeRemovedJourneyKey={toBeRemovedJourneyKey}
            onClickCheckbox={onClickCheckbox}
          />
        }
        button={
          <TaskButton
            disabled={!isButtonActive}
            onClick={bookingChangeRemoveJourney}
          >
            다음
          </TaskButton>
        }
      />
    </Container>
  );
};

export default bookingChangeConfirm;
