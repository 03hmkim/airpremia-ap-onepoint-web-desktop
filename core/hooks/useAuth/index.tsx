import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../../stores';
import {
  handleStoreInit,
  loginActions,
  countryCodeActions,
  handleDiscountCodeActions,
  signupActions,
  handleInputDataChange,
  handleInputBlur,
  handleValueChange,
  handleCountryCodeChange,
  handleSortedCountryCodeChange,
  handleGenderChange,
  handleTermsChange,
  handleEraseInputField,
  anonymousTokenActions,
  IInputData,
} from '../../stores/models/auth';
import {
  userInfoActions,
  // handleCouponListActions,
} from '../../stores/models/me';
import { checkValid } from '../../lib/auth';
import {
  getSortedCountryCode,
  createCustomEvent,
} from '../../lib/service';
import { ICountryCodeDetailResp } from '../../api/auth/types';
import { initToken, checkLogin } from '../../lib/storage';
import {
  postUserConfirmEmailPhone,
  postUserFindEmail,
  postUserResetPassword,
} from '@airpremia/core/api/user/user';
import {
  postUserPhoneAuthCode,
  postUserConfirmPhoneAuthCode,
} from '@airpremia/core/api/user/auths';
import { deleteUserToken } from '@airpremia/core/api/user/token';
import {
  IPostUserJoin,
  IPostUserFindEmail,
  IPostUserConfirmEmailPhone,
  IPostUserResetPassword,
} from '@airpremia/core/api/user/types';

interface IProps {
  /** 로그인 한 사용자가 특정 페이지를 접근하지 못하도록 할 때 사용 */
  isPreventAccess?: boolean;
  /** 로그인 한 사용자만 특정 페이지를 접근 하도록 할 때 사용 */
  canAccessOnlyLogin?: boolean;
}

function useAuth(props?: IProps): any {
  const dispatch = useDispatch();
  const [isLoad, setLoad] = useState<boolean>(true);
  const {
    common: commonStore,
    auth: authStore,
  } = useSelector((state: RootStore) => state);

  const onAuthStoreInit = () => dispatch(handleStoreInit());

  const onLoginCommon = ({
    email,
    password,
    type = 'MEMBER',
    isLoginStay,
    router = { push: () => {} },
  }: any) => {
    dispatch(
      loginActions.request({
        data: {
          email,
          password,
          type,
        },
        isLoginStay,
        router,
      }),
    );
  };

  const onLogin = (
    isLoginStay?: boolean,
    router = { push: () => {} },
  ) => {
    onLoginCommon({
      email: authStore.email.value,
      password: authStore.password.value,
      type: 'MEMBER',
      isLoginStay: isLoginStay || false,
      router,
    });
  };

  const onGuestLogin = () => {
    dispatch(anonymousTokenActions.request());
  };

  const onLoginSuccess = () => {
    dispatch(loginActions.success());
  };

  const onSignup = (termsCheckList: boolean[]) => {
    const {
      email,
      password,
      birthDate,
      gender,
      lastName,
      firstName,
      countryCode,
      phoneNumber,
      phoneAuthToken,
    } = authStore;

    const signupParams = {
      agreePersonalCollection: termsCheckList[1],
      agreeHomepageUse: termsCheckList[2],
      agreePersonalTransferToAbroad: termsCheckList[3],
      agreePersonalCollectionOption: termsCheckList[4],
      birthDate: birthDate.value,
      email: email.value,
      gender: gender,
      name: {
        first: firstName.value,
        last: lastName.value,
      },
      password: password.value,
      phoneNumber,
      countryNumber: countryCode.countryNumber,
      phoneAuthToken,
    };

    dispatch(signupActions.request(signupParams));
  };

  const onSignupMobile = (params: IPostUserJoin) =>
    dispatch(signupActions.request(params));

  const onLoadUserInfoData = () =>
    dispatch(userInfoActions.request());

  const onInputDataChange = (
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

  const onBlurChecker = (
    target: string,
    value: IInputData,
  ) => checkValid(target, value);

  const onInputBlur = (e: any) => {
    const { dataset } = e.target;
    const { target } = dataset;

    dispatch(
      handleInputBlur({
        target,
        data: onBlurChecker(target, authStore[target]),
      }),
    );
  };

  const onValueChange = (e: any) => {
    const { dataset, value } = e.target;
    const { target } = dataset;

    dispatch(handleValueChange({ target, value }));
  };

  const onCountryCodeLoad = () => {
    dispatch(countryCodeActions.request());
  };

  const onCountryCodeChange = (
    data: ICountryCodeDetailResp,
  ) => {
    dispatch(handleCountryCodeChange(data));
  };

  const onSortedCountryCodeChange = (e: any) => {
    const { value } = e.target;
    const pattern = new RegExp(value);
    let list = authStore.countryCodeList;
    if (value) {
      list = list.filter((item) =>
        pattern.test(item.description),
      );
    }

    const codeList = getSortedCountryCode<
      ICountryCodeDetailResp,
      'description'
    >(list, commonStore.language.code, 'description');

    dispatch(handleSortedCountryCodeChange(codeList));
  };

  const onDiscountCodeLoad = () => {
    dispatch(handleDiscountCodeActions.request());
  }
  const onFindEmailCommon = async (
    params: IPostUserFindEmail,
  ) => await postUserFindEmail(params);

  const onFindEmail = async () => {
    const {
      authCode,
      firstName,
      lastName,
      phoneNumber,
      countryCode,
    } = authStore;

    try {
      const { data } = await onFindEmailCommon({
        authCode,
        name: {
          first: firstName.value,
          last: lastName.value,
        },
        phoneNumber,
        countryNumber: countryCode.countryNumber,
      });

      if (data) {
        dispatch(
          handleInputDataChange({
            target: 'email',
            value: data.email,
          }),
        );
      }
      return data.email;
    } catch (err) {
      throw err;
    }
  };

  const onFindPasswordCommon = async (
    params: IPostUserConfirmEmailPhone,
  ) => await postUserConfirmEmailPhone(params);

  const onFindPassword = async () => {
    const {
      email,
      authCode,
      countryCode,
      phoneNumber,
    } = authStore;

    try {
      const { data } = await onFindPasswordCommon({
        email: email.value,
        authCode,
        phoneNumber,
        countryNumber: countryCode.countryNumber,
      });

      if (data) {
        onValueChange(
          createCustomEvent({
            target: 'phoneAuthToken',
            value: data.phoneAuthToken,
          }),
        );
      }
      return data;
    } catch (err) {
      throw err;
    }
  };

  const onResetPasswordCommon = async (
    data: IPostUserResetPassword,
  ) => await postUserResetPassword(data);

  const onResetPassword = async () => {
    try {
      const { phoneAuthToken, password } = authStore;
      await onResetPasswordCommon({
        phoneAuthToken,
        password: password.value,
      });
      window.alert(
        '비밀번호가 정상적으로 변경되었습니다. 로그인을 해주세요.',
      );
      return true;
    } catch (e) {
      window.alert(e.response.data.message);
      throw e;
    }
  };

  const onPhoneAuthCodeRequest = async () => {
    const { phoneNumber, countryCode } = authStore;
    try {
      await postUserPhoneAuthCode({
        countryNumber: countryCode.countryNumber,
        phoneNumber,
      });
    } catch (e) {
      window.alert(e.response.data.message);
      throw e;
    }
  };

  const onGenderChange = (e: any) => {
    dispatch(handleGenderChange(e.target.dataset.gender));
  };

  const onPhoneAuthSubmit = async (params?: {
    phoneNumber: string;
    countryNumber: number;
    authCode: string;
  }) => {
    const {
      phoneNumber,
      countryCode,
      authCode,
    } = authStore;
    const parameter = params || {
      phoneNumber,
      countryNumber: countryCode.countryNumber,
      authCode,
    };

    try {
      const { data } = await postUserConfirmPhoneAuthCode(
        parameter,
      );
      const { exist, email, phoneAuthToken } = data;
      if (exist && email) {
        onAuthStoreInit();
        onInputDataChange(
          createCustomEvent({
            target: 'email',
            value: email,
          }),
        );
      } else if (!exist && phoneAuthToken) {
        onValueChange(
          createCustomEvent({
            target: 'phoneAuthToken',
            value: phoneAuthToken,
          }),
        );
      }
      return data;
    } catch (err) {
      throw err;
    }
  };

  const onTermsChange = (
    status: boolean,
    target?: string,
  ) => {
    dispatch(
      handleTermsChange({ status, target: target || '' }),
    );
  };

  const onEraseField = ({ key }: { key: string }) => {
    dispatch(handleEraseInputField({ key }));
  };

  const onLogout = async () => {
    try {
      await deleteUserToken();
    } catch (e) {
      console.error(e);
    } finally {
      await initToken();
      location.replace('/');
    }
  };

  const onInitLoad = async () => {
    const isLogin =
      authStore.isLogIn || (await checkLogin());
    if (props?.canAccessOnlyLogin) {
      if (!isLogin) {
        location.replace('/auth/login');
      }
    }
    if (props?.isPreventAccess) {
      if (isLogin) {
        location.replace('/');
      }
    }
    if (!isLoad) {
      setLoad(true);
    }
  };

  useEffect(() => {
    onInitLoad();
  }, [isLoad, authStore.isLogIn]);

  return {
    authStore,
    onLogin,
    onLoginCommon,
    onBlurChecker,
    handleInputDataChange: onInputDataChange,
    handleLoadUserInfoData: onLoadUserInfoData,
    handleInputBlur: onInputBlur,
    handleValueChange: onValueChange,
    handleCountryCodeLoad: onCountryCodeLoad,
    handleDiscountCodeLoad: onDiscountCodeLoad,
    handleSortedCountryCodeChange: onSortedCountryCodeChange,
    handleFindEmail: onFindEmail,
    onFindEmailCommon,
    handleFindPassword: onFindPassword,
    onFindPasswordCommon,
    handleResetPassword: onResetPassword,
    onResetPasswordCommon,
    handlePhoneAuthCodeRequest: onPhoneAuthCodeRequest,
    handleAuthStoreInit: onAuthStoreInit,
    handlePhoneAuthSubmit: onPhoneAuthSubmit,
    handleTermsChange: onTermsChange,
    handleGenderChange: onGenderChange,
    onSignup,
    onSignupMobile,
    onEraseField,
    onCountryCodeChange,
    onGuestLogin,
    onLoginSuccess,
    onLogout,
  };
}

export default useAuth;
