import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { capitalize } from 'lodash';
import { flow, pick, get as getFp, map } from 'lodash/fp';
import { get } from 'lodash';

import {
  handleBookingSessionSearchActions,
  handlePassengerMeInfoUpdate,
} from '../../stores/models/bookingSession';
import {
  handleInputDataChange,
  handleInputBlur,
  handleTripFind,
  handleBoardingPassLoad,
  handleCheckinPassengerInfoLookup,
  handleCountryCodeLoad,
  handleDiscountCodeLoad,
  handleMyReservationLoad,
  handleMyAvailableCheckinLoad,
  handleCheckinStatusLoad,
  handleCheckinDataChange,
  handleTravelDocumentApply,
  ICheckinDataChangeParams,
  handlePostCheckinLoad,
  handleBookingSessionCommitWithApgPaymentActions,
  handleBookingChangeDivideActions,
  handlePostPassSms,
} from '../../stores/models/booking';
import { RootStore } from '../../stores';
import { checkValid } from '../../lib/auth';
import { IChangeBookingPassengerBody } from '@airpremia/core/api/booking/types';
import { handleLoadingShow } from '@airpremia/core/stores/models/ui';

export default () => {
  const dispatch = useDispatch();
  const {
    me: meStore,
    booking: bookingStore,
  } = useSelector((state: RootStore) => state);

  const {
    firstName,
    lastName,
    recordLocator,
    currentCheckinData,
  } = bookingStore;
  const { userInfo } = meStore;

  const onLoadBookingSessionSearch = useCallback(() => {
    // TODO 최적화. 있을때 다시 부르지 않는 정책이 필요
    dispatch(handleBookingSessionSearchActions.request());
  }, []);

  //smartport.mhh commitWithApgPayment async
  const onLoadCommitWithApgPayment = async (
    payload: any,
  ) => {
    try {
      dispatch(handleLoadingShow());
      dispatch(
        handleBookingSessionCommitWithApgPaymentActions.request(
          payload,
        ),
      );
    } catch (e) {
      throw e;
    }
  };

  /** 예매자 정보 초기화 or 유저 정보 가져오기 */
  const onResetBooker = (isReset: boolean) => {
    const phoneNumber = userInfo?.phoneNumber;
    const makeDataForm = (value: string) => ({
      value,
      error: false,
      msg: '',
    });

    if (!isReset) {
      dispatch(
        handlePassengerMeInfoUpdate({
          firstName: makeDataForm(
            userInfo?.name.first || '',
          ),
          lastName: makeDataForm(userInfo?.name.last || ''),
          gender: capitalize(userInfo?.gender || ''),
          birthDate: makeDataForm(userInfo?.birthDate || ''),
          phoneNumber: makeDataForm(phoneNumber),
          customerNumber: makeDataForm(userInfo?.customerNumber),
        }),
      );
    } else {
      dispatch(
        handlePassengerMeInfoUpdate({
          firstName: makeDataForm(''),
          lastName: makeDataForm(''),
          gender: '',
          birthDate: makeDataForm(''),
          phoneNumber: makeDataForm(''),
          customerNumber: makeDataForm(''),
        }),
      );
    }
  };

  /** 항공권 조회 화면 Input Change Event (비회원에게만 노출되는 화면) */
  const onChangeInput = (
    e: any,
    forceUpperCase?: boolean,
  ) => {
    const { value, dataset } = e.target;
    const { target } = dataset;

    dispatch(
      handleInputDataChange({
        target,
        value,
        forceUpperCase,
      }),
    );
  };

  /** 항공권 조회 화면 Input Blur Event (비회원에게만 노출되는 화면) */
  const onBlurInput = (e: any) => {
    const { dataset } = e.target;
    const { target } = dataset;

    dispatch(
      handleInputBlur({
        target,
        data: checkValid(target, bookingStore[target]),
      }),
    );
  };

  /** 예약 상세 조회 */
  const onFindTrip = ({
    first,
    last,
    reservation,
  }: {
    first?: string;
    last?: string;
    reservation: string;
  }) => {
    if (!reservation) return;

    const payload = {
      firstName: first || firstName.value,
      lastName: last || lastName.value,
      recordLocator:
        reservation || recordLocator.value || '',
    };

    dispatch(handleTripFind.request(payload));
  };

  /** 탑승권 조회 */
  const onBoardingPassLoad = (
    _recordLocator: string,
    _journeyKey: string,
  ) => {
    const payload = {
      recordLocator: _recordLocator,
      journeyKey: _journeyKey,
    };
    dispatch(handleBoardingPassLoad.request(payload));
  };

  /** 체크인 승객 조회 */
  const onLookupCheckinPassengerInfo = () => {
    const payload = {
      firstName: firstName.value,
      lastName: lastName.value,
      recordLocator: recordLocator.value,
    };
    dispatch(
      handleCheckinPassengerInfoLookup.request(payload),
    );
  };

  /** 국가 코드 조회 */
  const onLoadCountryCodeList = () => {
    dispatch(handleCountryCodeLoad.request());
  };

  /** 할인 코드 조회 */
  const onLoadDiscountCodeList = () => {
    dispatch(handleDiscountCodeLoad.request());
  }
  /** 내 예약 내역 조회 */
  const onFindMyReservation = () => {
    dispatch(handleMyReservationLoad.request());
  };

  /** 체크인 가능한 내역 리스트 */
  const onFindAvailableCheckin = () => {
    dispatch(handleMyAvailableCheckinLoad.request());
  };

  /** 체크인 상태 조회 */
  const onCheckinStatusLoad = (params: any) => {
    dispatch(handleCheckinStatusLoad.request(params));
  };

  /** 체크인 정보 변경 */
  const onChangeCheckinData = (
    params: ICheckinDataChangeParams,
  ) => {
    dispatch(handleCheckinDataChange(params));
  };

  /** 여권 등록 */
  const onApplyTravelDocument = () => {
    const unique = [
      'addressKey',
      'passengerKey',
      'phoneNumber',
      'travelDocument',
    ];
    const payload = currentCheckinData?.passengers.map(
      (passenger: any) => flow(pick(unique))(passenger),
    );

    if (payload) {
      dispatch(
        handleTravelDocumentApply.request({
          passengers: payload,
        }),
      );
    }
  };

  const onCheckin = ({
    recordLocator,
    journeyKey,
    seatAuto
  }: {
    recordLocator?: string;
    journeyKey?: string;
    seatAuto: string;
  }) => {
    let passengers = new Array();

    currentCheckinData?.passengers.map(
      (item: any) => {
        let passenger = {
          passengerKey: item.passengerKey,
          travelDocumentKeys: item.travelDocument.passengerTravelDocumentKey == null ? [] : [item.travelDocument.passengerTravelDocumentKey]
        }
        passengers.push(passenger)
      }
    );
    const payload = {
      recordLocator: recordLocator,
      journeyKey: journeyKey,
      passengers: passengers,
      seatAuto: seatAuto
    };
    
    dispatch(handlePostCheckinLoad.request(payload));
  };

  /** smartport.jsh 예약 분리 승객 전달 */
  const onSubmitChangeDivide = (
    passengerList: IChangeBookingPassengerBody,
  ) => {
    
    try {
      dispatch(
        handleBookingChangeDivideActions.request(
          passengerList,
        ),
      );
    } catch (e) {
      console.log("error > ", e)
      alert(get(e, 'response.data.message') + "\r\n예약을 분리할 수 없습니다.");
    }
  }


  const boardingPassSms = () => {
    const payload = {
      to: flow(
        getFp('passengers'),
        map((item: any) => {
          return item.phoneNumber.indexOf('|') > -1 ? {
            countryNumber: item.phoneNumber.split('|')[0],
            phoneNumber: item.phoneNumber.split('|')[1]
          } : {
            phoneNumber: item.phoneNumber
          }
        }),
      )(currentCheckinData),
      text: "[에어프레미아] 탑승권 확인 \n" + window.location.protocol + "//" + window.location.host + "/checkin/oneBoardingPassForm"
    };
    dispatch(handlePostPassSms.request(payload));
  };

  return {
    bookingStore,
    onLoadBookingSessionSearch,
    onResetBooker,
    onChangeInput,
    onBlurInput,
    onFindTrip,
    onBoardingPassLoad,
    onLookupCheckinPassengerInfo,
    onLoadCountryCodeList,
    onLoadDiscountCodeList,
    onFindMyReservation,
    onFindAvailableCheckin,
    onCheckinStatusLoad,
    onChangeCheckinData,
    onApplyTravelDocument,
    onCheckin,
    onLoadCommitWithApgPayment, //smartport.mhh CommitWithApgPayment async
    onSubmitChangeDivide, //smartport.jsh DivideBooking
    boardingPassSms,
  };
};
