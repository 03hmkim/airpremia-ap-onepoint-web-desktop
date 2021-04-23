import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  BookingPersonInfo,
  BoardingPersonInfo,
  TicketPassenger,
  EuCitizenRadio,
  Caution,
} from 'src/components';
import { TaskButton } from 'src/components';
import {
  useAuth,
  useBooking,
  useScroll,
  useLoading,
} from '@airpremia/core/hooks';
import { checkLogin } from '@airpremia/core/lib/storage';
import {
  getAddPassengerData,
  checkAddPassengerFieldFilled,
  hasValidKeys,
} from '@airpremia/core/lib/booking';
import { useRouter } from 'next/router';
// import { handleDiscountCodeLoad } from '@airpremia/core/stores/models/booking';

export interface IProps {}

function Passengers({}: IProps) {
  const { upScroll } = useScroll();
  const { isLoading, showLoading, hideLoading } = useLoading();
  const router = useRouter();
  const {
    bookingSessionStore,
    onAddPassengerInformation,
    resetBookingSession,
  } = useBooking();
  const {
    authStore,
    handleCountryCodeLoad,
    handleDiscountCodeLoad,
    handleLoadUserInfoData,
  } = useAuth();
  const {
    keys,
    passengersInfomation,
  } = bookingSessionStore;
  const { countryCodeList, discountCodeList } = authStore;
  const [hasEUCitizen, setHasEUCitizen] = useState(false);

  const [isActive, setActive] = useState(false);

  const title = '유의사항';
  const body = [
    '탑승자의 이름과 휴대폰 번호를 기준으로 포인트가 적립됩니다.',
    '예약 후 탑승자 이름 변경 시 n만원의 수수료가 부과됩니다.',
  ];

  const onClickNext = async () => {
    await showLoading();
    const res = await onAddPassengerInformation(
      hasEUCitizen,
    );
    if (res) {
      await router.push('/ticket/flight/ssr');
    }
  };

  useEffect(() => {
    if (!countryCodeList.length) {
      handleCountryCodeLoad();
    }
  }, [countryCodeList]);

  useEffect(() => {
    if(!discountCodeList?.length) {
      handleDiscountCodeLoad();
    }
  }, [discountCodeList]);

  useEffect(() => {
    const passengers = getAddPassengerData(
      passengersInfomation,
    );
    const res = checkAddPassengerFieldFilled(passengers);
    setActive(res);
  }, [passengersInfomation]);

  const onLoadUserInfo = async () => {
    if (await checkLogin()) {
      handleLoadUserInfoData();
    }
  };

  useEffect(() => {
    upScroll();
    if (!hasValidKeys(keys)) {
      window.location.replace('/');
    }
    onLoadUserInfo();

    if (isLoading) hideLoading();

    // smartport.mhh 뒤로가기 시 bookingSession reset
    history.pushState(null, 'passengers', location.href);
    window.onpopstate = () => {
      showLoading();
      resetBookingSession();
      router.push('/ticket/flight')
    };
  }, []);

  return (
    <S.container>
      <TicketPassenger
        bookingPersonInfo={<BookingPersonInfo />}
        boardingPersonInfo={<BoardingPersonInfo />}
        euCitizenRadio={
          <EuCitizenRadio
            hasEUCitizen={hasEUCitizen}
            onChange={setHasEUCitizen}
          />
        }
        taskButton={
          <TaskButton
            onClick={onClickNext}
            disabled={!isActive}
          >
            다음
          </TaskButton>
        }
        caution={<Caution title={title} body={body} />}
      />
    </S.container>
  );
}

Passengers.defaultProps = {};

const S = {
  container: styled.div`
    width: 100%;
    box-sizing: border-box;

    @media only screen and (max-width: 1059px) { 
      margin-top: 80px;
    }
    @media only screen and (max-width: 767px) { 
      margin-top: 40px;
    }
  `,
};

export default Passengers;
