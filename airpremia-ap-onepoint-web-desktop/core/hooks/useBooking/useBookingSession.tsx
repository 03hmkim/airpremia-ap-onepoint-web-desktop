import { useMemo, useCallback } from 'react';
import { get } from 'lodash';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../stores';
import {
  flatten,
  flow,
  values,
  map,
  compact,
  sum,
  flattenDeep,
} from 'lodash/fp';
import {
  addBookingSessionActions,
  EFlightType,
  EGenderType,
  EStationType,
  flightTicketSearchActions,
  handleBookingAgentInfoChange,
  handleChangeDate,
  handleChangeItineraryPlace,
  handleChangeItineraryType,
  handleChangePassenger,
  handleCountryCodeChange,
  handleGenderTypeChange,
  handleNokChange,
  handleSeatInfantNokChange,
  handleDiscountCodeChange,
  handleNationalityChange,
  handlePassengerInfoUpdate,
  handlePrimaryDataActions,
  handleStationListFilter,
  handleTicketKeyInit,
  handleTicketKeyChange,
  IBookingAgentInfoParams,
  IDateParams,
  IInputData,
  IItineraryPlaceParams,
  IItineraryTypeParams,
  IKeyChangeParams,
  IPassengerParams,
  handleCabinClassRibbonLoadActions,
  ILowFaresDataParams,
  handleFlightCalendarListLoadActions,
  IKeyData,
  handleBookingCancelablePassengerActions,
  handleBookingCancelPassengersActions,
  handleBookingCancelCommitPassengersActions,
  sendEmailActions,
  handleBookingChangeRemoveJourneyActions,
  handleBookingSearchChangeFlight,
  IDateParamsForDayjs,
  handleChangeMobileDate,
  ERouteType,
  handleChangeRouteType,
  checkPromotionCodeValidationActions,
  handleChangePromotionCode,
  handleChangeVoucherInfo,
  addVoucherPaymentActions,
  deleteVoucherPaymentActions,
  handleBookingChangeItinerary,
  //resetBookingSessionActions,
  handleResetBookingSession,
} from '../../stores/models/bookingSession';
import { checkValid } from '../../lib/auth';
import {
  getAddPassengerData,
  getPassengersLabel,
} from '../../lib/booking';
import { ICountryCodeDetailResp } from '../../api/auth/types';
import {
  postBookingSessionContactsAndPassengers,
  postBookingSessionReset,
} from '@airpremia/core/api/booking/session';
import { getTotalPrice } from '@airpremia/core/lib/datePicker';
import { 
  ICancelBookingPassengerBody,//smartport.jsh 일정변경 - 예약 분리 추가
  IChangeBookingRemoveJourneyBody,//smartport.jsh 일정변경 - 여정 취소 추가
  ISearchChangeFlight,
  IPostEmail,
 } from '@airpremia/core/api/booking/types';
import { addComma } from '@airpremia/core/lib/service';

function useBookingSession() {
  const {
    bookingSession: bookingSessionStore,
    me: meStore,
  } = useSelector((state: RootStore) => state);
  const dispatch = useDispatch();
  const {
    passengersInfomation,
    itinerary,
    itineraryType,
    currencyCode,
    date,
    passengers,
    bookingAgentInfomation,
    keys,
    flightCalendarList,
    availability,
    promotionCode, //smartport.mhh 프로모션 추가
    originCountryCode,
    destinationCountryCode,
  } = bookingSessionStore;
  const { userInfo } = meStore;

  /** primary data 요청 */
  const onLoadPrimaryData = () =>
    dispatch(handlePrimaryDataActions.request());

  /** 출발지 도착지 클릭시 Fliter 액션 */
  const onFilterStationList = (target: EStationType) =>
    dispatch(
      handleStationListFilter({
        target,
      }),
    );

  //smartport.mhh 국내/국제 구분 추가
  const onChangeRouteType = () => {

    const routeType =
      originCountryCode === 'KR' &&
      destinationCountryCode === 'KR'
        ? ERouteType.DOM
        : ERouteType.INT;

    dispatch(handleChangeRouteType({ routeType }));
  };

  /** 출발지 도착지 입력 */
  const onChangeItineraryPlace = ({
    itineraryPlaceType,
    airportCode,
  }: IItineraryPlaceParams) => {
    dispatch(
      handleChangeItineraryPlace({
        itineraryPlaceType,
        airportCode,
      }),
    );

    onChangeRouteType(); //smartport.mhh 국내/국제 구분 추가
  };

  //☆
  /** 출발지, 도착지 (날짜 선택) - 편도 / 왕복 구분: isOneDayTrip*/
  const onChangeDate = ({
    date,
    keyIdx,
  }: IDateParams & { keyIdx?: number }) => {
    const isOneDayTrip = itineraryType === EFlightType.OW;

    dispatch(
      handleChangeDate({
        isOneDayTrip,
        date,
      }),
    );

    if (keyIdx !== undefined) {
      dispatch(handleTicketKeyInit({ keyIdx }));
    }
  };

  /** 출발지, 도착지 (날짜 선택) - 편도 / 왕복 구분: isOneDayTrip for Mobile */
  const onChangeDateForMobile = ({
    date,
    keyIdx,
  }: IDateParamsForDayjs & { keyIdx?: number }) => {
    const isOneDayTrip = itineraryType === EFlightType.OW;

    dispatch(
      handleChangeMobileDate({
        isOneDayTrip,
        date,
      }),
    );

    if (keyIdx !== undefined) {
      dispatch(handleTicketKeyInit({ keyIdx }));
    }
  };

  /** itinerary Type 설정 (편도? 왕복?) */
  const onChangeItineraryType = ({
    itineraryType,
  }: IItineraryTypeParams) => {
    dispatch(
      handleChangeItineraryType({
        itineraryType,
      }),
    );

    if (itineraryType === EFlightType.OW) {
      onChangeDate({ date: date[0] || [] });
    }
  };

  /** 승객 인원 수 업데이트 */
  const onChangePassengers = ({
    passengerType,
    count,
  }: IPassengerParams) => {
    dispatch(
      handleChangePassenger({
        passengerType,
        count,
      }),
    );
  };

  /** 승객 정보 업데이트 input change */
  const onChangePassengerInput = (params: {
    type: string;
    index: number;
    target: string;
    value: string;
  }) => {
    const { type, index, target, value } = params;
    const initData = {
      value: '',
      error: false,
      msg: '',
    };
    const data = passengersInfomation[type][index];
    const prevData = data ? data[target] : initData;

    const inputData: IInputData = {
      ...prevData,
      value,
    };

    dispatch(
      handlePassengerInfoUpdate({
        type,
        index,
        target,
        inputData,
      }),
    );
  };

  /** 승객 Input 정보 업데이트 */
  const onBlurPassengerInput = (params: {
    type: string;
    index: number;
    target: string;
  }) => {
    const { type, index, target } = params;
    const data = passengersInfomation[type][index];

    if (data && data[target]) {//●
      const newData = checkValid(target, data[target], type);
      dispatch(
        handlePassengerInfoUpdate({
          type,
          index,
          target,
          inputData: newData,
        }),
      );
    }
  };

  /** 승객 국가 코드 업데이트 */
  const onChangeCountryCode = (
    data: ICountryCodeDetailResp,
    type: string,
    index: number,
  ) => {
    dispatch(
      handleCountryCodeChange({
        countryCodeData: data,
        type,
        index,
      }),
    );
  };
  

  /** 승객 성별 업데이트 */
  const onChangeGender = (
    type: string,
    index: number,
    gender: EGenderType,
  ) => {
    dispatch(
      handleGenderTypeChange({
        type,
        index,
        gender,
      }),
    );
  };

  /** 보호자 업데이트 */
  const onChangeNok = (
    e: any,
    type: string,
    index: number,
  ) => {
    const { passengerKey: nok } = e.target.dataset;
    dispatch(
      handleNokChange({
        nok,
        type,
        index,
      }),
    );
  };

  const onChangeSeatInfantNok = (
    e: any,
    type: string,
    index: number,
  ) => {
    const { passengerKey: seatInfantNok } = e.target.dataset;
    dispatch(
      handleSeatInfantNokChange({
        seatInfantNok,
        type,
        index,
      }),
    );
  };

  /** 할인대상 업데이트 */
  const onChangeDiscountCode = (
    discountCode: string,
    type: string,
    index: number,
  ) => {
    dispatch(
      handleDiscountCodeChange({
        discountCode,
        type,
        index,
      }),
    );
  };

  //☆ 
  /** 국적 업데이트 */
  const onChangeNationality = (
    nationality: string,
    type: string,
    index: number,
  ) => {
    dispatch(
      handleNationalityChange({
        nationality,
        type,
        index,
      }),
    );
  };
  
  // const onChangeNationality_old = (
  //   e: any,
  //   type: string,
  //   index: number,
  // ) => {
  //   const { passengerKey: nationality  } = e.target.dataset;
  //   dispatch(
  //     handleNationalityChange({
  //       nationality,
  //       type,
  //       index,
  //     }),
  //   );
  // };

  /** 예매자 정보 업데이트(Input Change) */
  const onChangeBookingAgentInfo = ({
    target,
    value,
  }: IBookingAgentInfoParams) => {
    if (
      typeof value === 'string' &&
      (target === 'email' ||
        target === 'phoneNumber' ||
        target === 'firstName' ||
        target === 'lastName')
    ) {
      const initData = {
        error: false,
        msg: '',
        value,
      };
      dispatch(
        handleBookingAgentInfoChange({
          target,
          value: initData,
        }),
      );
    } else if (
      target === 'countryCodeData' ||
      target === 'isEUCitizen'
    ) {
      dispatch(
        handleBookingAgentInfoChange({
          target,
          value,
        }),
      );
    }
  };

  /** 예매자 정보 blur 처리 */
  const onBlurBookingAgentInfo = (e: any) => {
    const { target } = e.target.dataset;
    const newData = checkValid(
      target,
      bookingAgentInfomation[target],
    );

    dispatch(
      handleBookingAgentInfoChange({
        target,
        value: newData,
      }),
    );
  };

  /** Lowfare Data Load (달력에서 호출) */
  const onLoadLowFaresData = async (params: {
    date: moment.Moment[];
    cabinClass: string;
    isReverse?: boolean;
  }) => {
    const { date, cabinClass, isReverse } = params;
    const [beginDate] = date;
    let _origin = itinerary.origin;
    let _destination = itinerary.destination;

    if (isReverse) {
      _origin = itinerary.destination;
      _destination = itinerary.origin;
    }
    const payload = {
      origin: _origin,
      destination: _destination,
      date: beginDate.format('YYYY-MM-DD'),
      currencyCode,
      cabinClass,
      tripType: itineraryType,
    };

    dispatch(
      handleFlightCalendarListLoadActions.request(payload),
    );
  };

  //smartport.mhh 프로모션 코드 추가
  /** 프로모션 코드 변경 */
  const onChangePromotionCode = (promotionCode: string) => {
    handleChangePromotionCode(promotionCode);
  };
  
  /** 프로모션 코드 유효성 검사 */
  const checkPromotionCode = (params: string) => {
    dispatch(
      checkPromotionCodeValidationActions.request({
        promotionCode: params,
      }),
    );
  }; 

  /** 항공권 검색 */
  const onSearchFlightTicket = (params?: {
    date: moment.Moment[];
  }) => {
    const { origin, destination } = itinerary;
    const [beginDate, endDate] =
      (params && params.date) || date;

    const payload = {
      origin: origin,
      destination: destination,
      beginDate: beginDate.format('YYYY-MM-DD'),
      endDate: endDate?.format('YYYY-MM-DD'),
      currencyCode,
      passengers,
      promotionCode, //smartport.mhh 프로모션 코드 추가
    };

    dispatch(flightTicketSearchActions.request(payload));
  };

  //일정변경 항공권 검색
  const onSearchChangeFlight = (
    designator: ISearchChangeFlight,
  ) => {
    dispatch(
      handleBookingSearchChangeFlight.request(
        designator,
      ),
    );
  }

  const onInitKeys = () =>
    dispatch(handleTicketKeyInit({}));

  /** Ticket Key (journey, fare) update */
  const onChangeKeys = ({
    type,
    idx,
    key,
  }: IKeyChangeParams) => {
    dispatch(
      handleTicketKeyChange({
        type,
        idx,
        key,
      }),
    );
  };

  const calendarTotalPrice = useMemo(
    () => getTotalPrice(date, flightCalendarList),
    [date],
  );

  /** Booking Session 생성 (항공권 선택 후 탑승객 정보입력 넘어가기 전) */
  const onAddBookingSession = async () => {
    try {
      await postBookingSessionReset();
      dispatch(
        addBookingSessionActions.request({
          currencyCode,
          keys,
          passengers,
          promotionCode, //smartport.mhh 프로모션 코드 추가
        }),
      );
    } catch (error) {
      alert('Session reset error');
      window.location.replace('/');
    }
  };

  /** Booking 여정추가(일정변경 새 여정 선택 추가) */
  const onAddRebookingSession = async () => {
    dispatch(
      addBookingSessionActions.request({
        currencyCode,
        keys,
        passengers,
        promotionCode, //smartport.mhh 프로모션 코드 추가
      }),
    );
  };

  /** 탑승객 정보 입력 폼 제출 */
  const onAddPassengerInformation = async (
    hasEUCitizen: boolean,
  ) => {
    const {
      email,
      phoneNumber,
      countryCodeData,
      firstName,
      lastName,
    } = bookingAgentInfomation;

    const contact = {
      countryNumber:
        countryCodeData.countryNumber ||
        userInfo?.countryNumber,
      emailAddress: email.value || userInfo?.email,
      phoneNumber:
        phoneNumber.value || userInfo?.phoneNumber,
      firstName: firstName.value || userInfo?.name.first,
      lastName: lastName.value || userInfo?.name.last,
    };
    const passengersRaw = getAddPassengerData(
      passengersInfomation,
    );

    const passengers = flow(values, flatten)(passengersRaw);

    try {
      return await postBookingSessionContactsAndPassengers({
        contact,
        passengers,
        hasEUCitizen,
      });
    } catch (e) {
      alert(get(e, 'response.data.message') + "\r\n중복된 진행이 확인되었습니다. 항공권을 재탐색해 주시기 바랍니다.");
    }
  };

  /** 리본 데이터 요청 */
  const onLoadRibbonData = (
    params?: ILowFaresDataParams,
  ) => {
    dispatch(
      handleCabinClassRibbonLoadActions.request(
        params || {},
      ),
    );
  };

  const priceData = useMemo(() => {
    let idx = 0;
    if (itineraryType === EFlightType.OW) {
      if (date.length < 1) {
        idx = date.length;
      }
    } else {
      if (date.length < 2) {
        idx = date.length;
      }
    }

    return flightCalendarList
      ? flightCalendarList[idx]
      : null;
  }, [date, itineraryType, flightCalendarList]);

  const canceledPaxCountLabel = useMemo(() => {
    const data =
      bookingSessionStore?.refundBreakdown?.bookingInfo;

    if (data) {
      return getPassengersLabel({
        adult: data?.passengerCount.adult,
        child: data?.passengerCount.child,
        infant:
          data?.passengerCount.infant +
          data?.passengerCount.seatInfant,
      });
    }
    return '';
  }, [bookingSessionStore.refundBreakdown]);

  /** 현재 예약 취소 가능한 승객 조회 */
  const onLoadCancelablePassengerData = () =>
    dispatch(
      handleBookingCancelablePassengerActions.request(),
    );

  /** 예약 취소할 리스트 전달 (prepare) */
  const onSubmitCancelPassenger = (
    passengerList: ICancelBookingPassengerBody,
  ) =>
    dispatch(
      handleBookingCancelPassengersActions.request(
        passengerList,
      ),
    );

  /** 예약 취소 커밋 (commit) */
  const onSubmitCancelCommitPassenger = () =>
    dispatch(
      handleBookingCancelCommitPassengersActions.request(),
    );

  /** 이메일 전송 */
  const onSendEmail = (
    email: IPostEmail
  ) => {
    dispatch(
      sendEmailActions.request(
        email
      ),
    );
  }
  /** smartport.jsh 여정 취소 리스트 전달 (commit) */
  const onSubmitChangeRemoveJourney = (
    journeyList: IChangeBookingRemoveJourneyBody,
  ) =>
    dispatch(
      handleBookingChangeRemoveJourneyActions.request(
        journeyList,
      ),
    );

  /** 항공권 예매에서 사용되는 total price 계산 */
  const floatingTotalPrice = useMemo(() => {
    const fareAvailabilityKeys = flow(
      map((item: IKeyData) => item.fareAvailabilityKey),
      compact,
    )(keys);

    const res = flow(
      map((k: any) => k.journeys),
      flattenDeep,
      map((v: any) => v.cabinClasses),
      flattenDeep,
      map((u: any) => u.productClasses),
      flattenDeep,
      map((list: any) => {
        if (
          fareAvailabilityKeys.find(
            (key) => key === list.fareAvailabilityKey,
          )
        )
          return list.price;
      }),
      compact,
      sum,
    )(availability);

    return res;
  }, [availability, keys]);

  const getPriceLabel = useCallback(
    (_point: number, _amount: number) => {
      const point = _point > 0 && addComma(_point);
      const amount = _amount > 0 && addComma(_amount);

      if (point && amount) {
        return `${point} pp + ${amount} 원`;
      } else if (!point && amount) {
        return `${amount} 원`;
      } else if (point && !amount) {
        return `${point} pp`;
      }
      return '0 원';
    },
    [dispatch],
  );

  /** 환불 12,000 pp + 300,000 원 */
  const refundTotalPriceLabel = useMemo(() => {
    const breakdown =
      bookingSessionStore?.refundBreakdown
        ?.passengerBreakdown;

    const point =
      (breakdown?.totalCollectedPoints &&
        breakdown?.totalCollectedPoints > 0 &&
        addComma(breakdown?.totalCollectedPoints)) ||
      0;
    const amount =
      (breakdown?.totalCollectedAmount &&
        breakdown?.totalCollectedAmount > 0 &&
        addComma(breakdown?.totalCollectedAmount)) ||
      0;

    return getPriceLabel(Number(point), Number(amount));
  }, [bookingSessionStore.refundBreakdown]);

  const itineraryDateRange = useMemo(
    () => bookingSessionStore.dateMobile,
    [bookingSessionStore.dateMobile],
  );

  //smartport.mhh 바우처 추가
  const onChangeVoucherInfo = async (paylaod: any) => {
    await dispatch(handleChangeVoucherInfo(paylaod))
  };

  const onAddVoucherPayment = async (payload: any) => {
    
    const { reference, currencyCode, redeemableAmount } = payload;

    const requestData = {
      referenceCode: reference,
      paymentMethodCode: 'VO',
      currencyCode: currencyCode,
      amount: redeemableAmount
    };

    try {
      dispatch(addVoucherPaymentActions.request(requestData));
      dispatch(handleChangeVoucherInfo(payload))
      //await dispatch(handleBookingSessionSearchActions.request());
    } catch (e) {
      //window.alert(e.response.data.message);
      console.log(e);
      throw e;
    }
  };
  

  const onDeleteVoucherPayment = async (payload: any) => {
    
    const { reference } = payload;

    const requestData = {
      referenceCode: reference
    };

    try {
      dispatch(deleteVoucherPaymentActions.request(requestData));
      //await dispatch(handleBookingSessionSearchActions.request());
    } catch (e) {
      //window.alert(e.response.data.message);
      console.log(e);
      throw e;
    }
  };

  // 예약 변경 여정 타입
  const onBookingChangeItinerary = ({
    itineraryType,
    origin,
    destination,
    startDate,
    endDate
  } : {
    itineraryType: EFlightType;
    origin: string;
    destination: string;
    startDate: moment.Moment | null;
    endDate: moment.Moment | null;
  }) => {
    dispatch(
      handleBookingChangeItinerary({
        itineraryType,
        origin,
        destination,
        startDate,
        endDate
      }),
    );
  };

  //smartport.mhh bookingSession reset
  const resetBookingSession = () => {
    try {
      //dispatch(resetBookingSessionActions.request());
      if(bookingSessionStore.keys[0].journeyKey != "")
        dispatch(handleResetBookingSession());
    } catch (error) {
      console.log(error);
    }
  }


  
  return {
    bookingSessionStore,
    currencyCode,
    onChangeItineraryType,
    onFilterStationList,
    onChangeItineraryPlace,
    onChangeDate,
    onChangePassengers,
    onLoadPrimaryData,
    onChangePassengerInput,
    onBlurPassengerInput,
    onChangeCountryCode,
    onChangeGender,
    onChangeNok,
    onChangeSeatInfantNok,
    onChangeDiscountCode,
    onChangeNationality,
    onChangeBookingAgentInfo,
    onBlurBookingAgentInfo,
    onLoadLowFaresData,
    onSearchFlightTicket,
    onInitKeys,
    onChangeKeys,
    onAddBookingSession,
    onAddRebookingSession,
    onAddPassengerInformation,
    onLoadRibbonData,
    priceData,
    calendarTotalPrice,
    onLoadCancelablePassengerData,
    onSubmitCancelPassenger,
    onSubmitCancelCommitPassenger,
    onSubmitChangeRemoveJourney, //smartport.jsh 일정변경-여정삭제 추가
    onSendEmail, //이메일전송 훅 추가
    onSearchChangeFlight,
    floatingTotalPrice,
    refundTotalPriceLabel,
    getPriceLabel,
    canceledPaxCountLabel,
    onChangeDateForMobile,
    itineraryDateRange,
    onChangePromotionCode, //smartport.mhh 프로모션 추가
    checkPromotionCode,
    onChangeVoucherInfo,
    onAddVoucherPayment, //smartport.mhh 바우처 추가
    onDeleteVoucherPayment,
    onBookingChangeItinerary,
    resetBookingSession,
  };
}

export default useBookingSession;
