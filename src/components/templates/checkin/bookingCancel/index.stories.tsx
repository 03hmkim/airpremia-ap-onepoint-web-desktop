import React, {
  FC,
  useState,
  useEffect,
  useMemo,
} from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import BookingCancelTemplate from './';
import {
  BookingCancelInfomation,
  BookingCancelPassenger,
} from 'src/components';
import data from './dummy';
import { Container } from 'src/styles/layout';
import { TaskButton } from 'src/components';

export default {
  title: 'desktop / Templates / BookingCancelTemplate',
  component: BookingCancelTemplate,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'BookingCancelTemplate',
  },
};

export const 예약취소템플릿: FC = () => {
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
  const [isButtonActive, setButtonActive] = useState<
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

  useEffect(() => {
    if (
      toBeRemovedPassengerKey &&
      toBeRemovedPassengerKey.length > 0 &&
      isAgreeCheckbox
    ) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [toBeRemovedPassengerKey, isAgreeCheckbox]);

  return (
    <Container>
      <BookingCancelTemplate
        infomations={<BookingCancelInfomation />}
        passengers={
          <BookingCancelPassenger
            isAllActive={isAllActive}
            alertShow={alertShow}
            passengers={data.passengers}
            toBeRemovedPassengerKey={
              toBeRemovedPassengerKey
            }
            isAgreeCheckbox={isAgreeCheckbox}
            onAgreeCheckbox={onAgreeCheckbox}
            onClickCheckbox={onClickCheckbox}
            onClickCheckboxAll={onClickCheckboxAll}
          />
        }
        button={
          <TaskButton
            disabled={!isButtonActive}
            onClick={() => console.log('다음화면')}
          >
            다음
          </TaskButton>
        }
      />
    </Container>
  );
};
