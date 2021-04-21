import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import { RootStore } from '@airpremia/core/stores';
import {
  IPutUserInformation,
  IPostPointsEarnParams,
  IPutUserPassword,
} from '@airpremia/core/api/user/types';
import {
  handleCouponListActions,
  handleModifingInfoStatusChange,
  handlePointsBuyAction,
  handlePointsSaveAfterBoardingAction,
  handlePointsSaveAfterBoardingInitAction,
  passwordUpdateActions,
  handlePasswordUpdateStatusInitAction,
  userInfoUpdateActions,
  handleNewUserInfoChangeAction,
  byeUserLeaveActions,
} from '@airpremia/core/stores/models/me';
import {
  postUserCoupon,
  postUserPasswordCheck,
} from '@airpremia/core/api/user/me';

const useMyPage = () => {
  const dispatch = useDispatch();
  const { me: meStore } = useSelector(
    (state: RootStore) => state,
  );

  /** 회원 정보 업데이트 */
  const onUpdateUserInfomation = (payload: {
    email?: string;
    countryCode?: string;
    phoneNumber?: string;
    countryNumber?: number;
    phoneAuthToken?: string;
    passportNumber?: string;
    name?: {
      first: string;
      last: string;
    };
    birthDate?: string;
    notiOfEmail?: boolean;
    notiOfSms?: boolean;
    passportExpiringAt?: string;
  }) => {
    const {
      birthDate,
      countryCode,
      name,
      passportExpiringAt,
      passportNumber,
      phoneNumber,
      countryNumber,
    } = meStore.userInfo;

    const _payload: IPutUserInformation = {
      birthDate,
      countryCode,
      name,
      passportExpiringAt,
      passportNumber,
      phoneNumber,
      countryNumber,
      ...payload,
    };

    dispatch(userInfoUpdateActions.request(_payload));
  };

  const onChangePassword = (params: IPutUserPassword) => {
    dispatch(passwordUpdateActions.request(params));
  };

  const onPreCheckModalForUserInfoChangeModifingStatus = (
    status: boolean,
  ) => dispatch(handleModifingInfoStatusChange(status));

    /** 회원 탈퇴 */
    const onByeUserLeave = () => {
      console.log('ㅎㅎ')
      dispatch(byeUserLeaveActions.request());
    }
  /** 쿠폰 조회 */
  const onLoadCouponList = () =>
    dispatch(handleCouponListActions.request());

  /** 쿠폰 등록 */
  const onSubmitCouponCode = async (couponCode: string) => {
    try {
      const res = await postUserCoupon(couponCode);
      onLoadCouponList();
      return res;
    } catch (e) {
      alert(get(e, 'response.data.message'));
    }
  };

  /** 포인트 구매 */
  const onBuyPoints = () =>
    // dummy 데이터
    dispatch(
      handlePointsBuyAction.request({
        paymentAmount: 30000,
        paymentCurrency: 'KRW',
        paymentId: '123456',
        paymentMethod: 'BC',
        pointAmount: 10000,
      }),
    );

  /** 탑승 후 적립 */
  const onSavePointsAfterBoarding = (
    params: IPostPointsEarnParams,
  ) =>
    dispatch(
      handlePointsSaveAfterBoardingAction.request(params),
    );

  /** 탑승 후 적립 상태값 초기화 */
  const onSavePointsAfterBoardingInit = () =>
    dispatch(handlePointsSaveAfterBoardingInitAction());

  /** 사용자 패스워드 업데이트 이후 상태 초기화 */
  const onInitPasswordUpdateStatus = () =>
    dispatch(handlePasswordUpdateStatusInitAction());

  /** 사용자 정보변경시 패스워드 체크 */
  const onCheckForChangingUserInfomation = async (
    password: string,
  ) => await postUserPasswordCheck(password);

  /** 모바일에서 사용자 변경 데이터를 가지고 있기 위한 함수 */
  const onChangeUserData = (payload: any) => {
    console.log(payload);
    dispatch(handleNewUserInfoChangeAction(payload));
  };

  return {
    meStore,
    onSubmitCouponCode,
    onLoadCouponList,
    onUpdateUserInfomation,
    onChangePassword,
    onPreCheckModalForUserInfoChangeModifingStatus,
    onBuyPoints,
    onSavePointsAfterBoarding,
    onSavePointsAfterBoardingInit,
    onInitPasswordUpdateStatus,
    onCheckForChangingUserInfomation,
    onChangeUserData,
    onByeUserLeave,
  };
};

export default useMyPage;
