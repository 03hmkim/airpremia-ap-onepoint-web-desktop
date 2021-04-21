import styled from 'styled-components';
import { FC, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import {
  CheckinListTemplate,
  OnlineCheckinCard,
  NothingOnlineCheckinCard,
  Loading,
} from 'src/components';
import {
  useBooking,
  useScroll,
} from '@airpremia/core/hooks';
import { Container } from 'src/styles/layout';

interface IProps {}

const findCheckin: FC<IProps> = ({}) => {
  const router = useRouter();
  const { bookingStore, onLookupCheckinPassengerInfo } = useBooking();
  const { upScroll } = useScroll();
  const {
    checkinList,
    isMyAvailableCheckinRequest,
    isMyAvailableCheckinSuccess
  } = bookingStore;
  const hasItem = useMemo(() => {
    return checkinList.length > 0;
  }, [checkinList]);
  const [isLoad, setLoad] = useState(false);

  useEffect(() => {
    upScroll();
    
    onLookupCheckinPassengerInfo();
    setLoad(true);
  }, []);

  if(isLoad) {
    if (isMyAvailableCheckinRequest) {
      return <Loading />;
    } else {
      let alertMsg = "";
      if(isMyAvailableCheckinSuccess) {
        if(checkinList.length <= 0) {
          alertMsg = "체크인이 불가능한 예약입니다.";
          alert(alertMsg);
          router.push('/checkin/online');
        }
      } else {
        alertMsg = "잘못된 예약입니다.";
        alert(alertMsg);
        router.push('/checkin/online');
      }
    }
    setLoad(false);
  }

  return (
    <Container>
      <CheckinListTemplate
        title="온라인 체크인 신청"
        description={
          hasItem
            ? '온라인 체크인을 신청할 여정을 선택해주세요'
            : ''
        }
        onlineCheckinCard={
          hasItem ? (
            checkinList.map((item, i) => (
              <S.wrapper key={i.toString()}>
                <OnlineCheckinCard {...item} />
              </S.wrapper>
            ))
          ) : (
            <NothingOnlineCheckinCard />
          )
        }
      />
    </Container>
  );
};

const S = {
  container: styled.div``,

  wrapper: styled.div`
    margin-bottom: 10px;
  `,
};

export default findCheckin;
