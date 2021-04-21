import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  CheckinSearchTemplate,
} from 'src/components';
import { CheckinInquiryForm } from 'src/components/organisms/inquiryForm/index';
import {
  useBooking,
  useScroll,
} from '@airpremia/core/hooks';
import { Container } from 'src/styles/layout';

interface IProps {}

const oneBoardingPassForm: FC<IProps> = () => {
  const router = useRouter();
  const {
    bookingStore,
    onLoadCountryCodeList,
  } = useBooking();
  const { 
    firstName,
    lastName,
    recordLocator,
  } = bookingStore;
  const { upScroll } = useScroll();

  useEffect(() => {
    upScroll();
    onLoadCountryCodeList();
  }, []);

  const onClickOnline = () => {
    router.push(
      `/checkin/oneBoardingPass?firstName=${firstName.value}&lastName=${lastName.value}&recordLocator=${recordLocator.value}`,
    );
  };

  return (
    <Container>
      <CheckinSearchTemplate
        title="탑승권 확인"
        inquiryForm={
          <CheckinInquiryForm
            needReservationNumber
            title="탑승권을 확인하실 여정의 탑승자 정보를 입력해주세요 :-)"
            onClick={onClickOnline}
          />
        }
      />
    </Container>
  );
};

export default oneBoardingPassForm;
