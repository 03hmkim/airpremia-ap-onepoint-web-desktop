import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useBooking } from '@airpremia/core/hooks';
import {
  SeatPayTemplate,
  PayTitle,
  PayMethod,
  PayReceipt,
} from 'src/components';
import { useBookingLocal } from 'src/hooks';
import { useScroll } from '@airpremia/core/hooks';
import { Container } from 'src/styles/layout';

interface IProps {}

const CheckinCheckout: FC<IProps> = ({}) => {
  const { onLoadBookingSessionSearch } = useBooking();

  const {
    priceDataset,
    getJourney,
    getReservation,
  } = useBookingLocal();
  const { upScroll } = useScroll();
  const router = useRouter();

  const onChange = () => {};

  const onClickPay = () =>
    router.push(
      `/checkin/online/pay/complete?journeyKey=${getJourney()}&recordLocator=${getReservation()}`,
    );

  useEffect(() => {
    upScroll();
    onLoadBookingSessionSearch();
  }, []);

  return (
    <Container>
      <SeatPayTemplate
        title={
          <PayTitle
            title="좌석 구매"
            description="유료 좌석 구매 (4A, 4B)"
          />
        }
        payMethod={
          <PayMethod
            isSave={false}
            method="credit"
            card="C006"
            installment="0"
            onChangeSave={() => {}}
            onChangeMethod={onChange}
            onChangeCard={onChange}
            onChangeInstallment={onChange}
          />
        }
        receipt={
          <PayReceipt
            dataset={priceDataset}
            buttonLabel="결제"
            disabled={false}
            onClick={onClickPay}
          />
        }
      />
    </Container>
  );
};

// const S = {
//   container: styled.div``,
// };

export default CheckinCheckout;
