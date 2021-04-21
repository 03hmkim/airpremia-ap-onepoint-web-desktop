import React, {
  FC,
  useState,
  useMemo,
  useEffect,
} from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import BookingCancelPassenger from './';
import data from 'src/components/templates/checkin/bookingCancel/dummy';

export default {
  title: 'desktop / Organisms / BookingCancelPassenger',
  component: BookingCancelPassenger,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '',
  },
};

export const 예매취소승객선택: FC = () => {
  const [
    toBeRemovedPassengerKey,
    setPassengerKey,
  ] = useState<null | string[]>(null);
  const [isAllActive, setAllActive] = useState<boolean>(
    false,
  );
  const [alertShow, setAlertShow] = useState<boolean>(
    false,
  );
  const [isAgreeCheckbox, setAgreeCheckbox] = useState<
    boolean
  >(false);

  const allPassengerList = useMemo(
    () => data.passengers.map((item) => item.passengerKey),
    [data.passengers],
  );

  const onClickCheckbox = (key: string) => () => {
    let _list;
    if (toBeRemovedPassengerKey) {
      if (toBeRemovedPassengerKey.includes(key)) {
        _list = [...toBeRemovedPassengerKey];
        _list.splice(_list.indexOf(key), 1);
      } else {
        _list = [...toBeRemovedPassengerKey, key];
      }
    } else {
      _list = [key];
    }
    setPassengerKey(_list);
  };

  const onClickCheckboxAll = () => {
    if (isAllActive) {
      setPassengerKey([]);
    } else {
      setPassengerKey(allPassengerList);
    }
    setAllActive(!isAllActive);
  };

  const onAgreeCheckbox = () =>
    setAgreeCheckbox(!isAgreeCheckbox);

  useEffect(() => {
    if (allPassengerList.length > 5) {
      if (
        toBeRemovedPassengerKey &&
        toBeRemovedPassengerKey.length > 0 &&
        toBeRemovedPassengerKey.length < 6
      ) {
        setAlertShow(true);
      } else {
        setAlertShow(false);
      }
    }
  }, [toBeRemovedPassengerKey]);

  return (
    <BookingCancelPassenger
      isAllActive={isAllActive}
      alertShow={alertShow}
      passengers={data.passengers}
      toBeRemovedPassengerKey={toBeRemovedPassengerKey}
      isAgreeCheckbox={isAgreeCheckbox}
      onAgreeCheckbox={onAgreeCheckbox}
      onClickCheckbox={onClickCheckbox}
      onClickCheckboxAll={onClickCheckboxAll}
    />
  );
};
