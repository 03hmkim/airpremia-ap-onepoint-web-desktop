import { FC, Fragment, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { useRouter } from 'next/router';
import {
  PopupTitle,
  PopupDescription,
  TextInput,
  PhoneAuthForm,
  ForgotPasswordStep1Template,
  ForgotPasswordStep2Template,
} from 'src/components';
import { useAuth } from '@airpremia/core/hooks';
import { TaskButton } from 'src/components';
import {
  DARK_GRAY1,
  ORANGE1,
  LIGHT_GRAY7,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
import { EInputType } from 'src/components/atoms/input';
import {
  checkInputForm,
  checkPasswordPartially,
} from '@airpremia/core/lib/auth';

enum EForgotPasswordStepType {
  PHONE_AUTH,
  CHANGE_PASSWORD,
}

interface IProps {}

const ForgotPassword: FC<IProps> = ({}: IProps) => {
  const router = useRouter();
  const {
    authStore,
    handleAuthStoreInit,
    handleValueChange,
    handleInputDataChange,
    handleInputBlur,
    handleFindPassword,
    handleResetPassword,
    handleCountryCodeLoad,
  } = useAuth();
  const {
    email,
    password,
    phoneNumber,
    authCode,
  } = authStore;
  const [authErrorStatus, setAuthErrorStatus] = useState(
    false,
  );
  const [label, setLabel] = useState('+ 82');
  const [isActive, setActive] = useState(false);
  const [step, setStep] = useState(
    EForgotPasswordStepType.PHONE_AUTH,
  );
  const [isSend, setSend] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState({
    value: '',
    error: false,
    msg: '',
  });
  const [isLeavePwInput, setLeavePwInputStatus] = useState(
    false,
  );
  const [pwErrorStatus, setPwErrorStatus] = useState([
    false,
    false,
    false,
    false,
  ]);

  const submitFindPassword = async () => {
    setAuthErrorStatus(false);
    try {
      await handleFindPassword();
      setStep(EForgotPasswordStepType.CHANGE_PASSWORD);
    } catch (e) {
      setAuthErrorStatus(true);
      throw e;
    }
  };

  const checkValidationStep1 = () =>
    Boolean(checkInputForm(email) && isSend && authCode);

  const checkValidationStep2 = () =>
    checkInputForm(password, passwordConfirm);

  const onSendAuthCode = (status: boolean) =>
    setSend(status);

  const onChangePasswordInterceptor = (e: any) => {
    const { value } = e.target;
    setLeavePwInputStatus(false);
    setPwErrorStatus(checkPasswordPartially(value));
    handleInputDataChange(e);
    checkValidationStep2();
  };

  const onBlurPasswordInterceptor = (e: any) => {
    setLeavePwInputStatus(true);
    handleInputBlur(e);
    checkValidationStep2();
  };

  const onChangePwConfirmInterceptor = (e: any) => {
    const value = e.target.value;
    setPasswordConfirm((prev) => ({
      ...prev,
      value,
    }));
    checkValidationStep2();
  };

  const onBlurPwConfirmInterceptor = (e: any) => {
    const value = e.target.value;
    setPasswordConfirm((prev) => {
      let obj = { ...prev, value };
      if (password.value !== value) {
        obj = {
          ...obj,
          error: true,
          msg: '??????????????? ???????????? ????????????.',
        };
      } else {
        obj = { ...obj, error: false, msg: '' };
      }
      return obj;
    });
    checkValidationStep2();
  };

  const onSubmit = async () => {
    const res = await handleResetPassword();

    if (res) {
      router.push('/auth/login');
    }
  };

  const emailData = {
    labelData: {
      fontSize: '14px',
      children: '?????????',
    },
    inputData: {
      value: email.value,
      target: 'email',
      type: EInputType.TEXT,
      placeholder: '????????? ??????',
      onChange: (e: any) => handleInputDataChange(e),
      onBlur: (e: any) => handleInputBlur(e),
    },
  };

  const passwordData = {
    labelData: {
      fontSize: '14px',
      children: '????????????',
    },
    inputData: {
      value: password.value,
      target: 'password',
      type: EInputType.PASSWORD,
      placeholder: '???????????? ??????',
      onChange: (e: any) => onChangePasswordInterceptor(e),
      onBlur: (e: any) => onBlurPasswordInterceptor(e),
    },
  };

  const confirmPasswordData = {
    labelData: {
      fontSize: '14px',
      children: '???????????? ??????',
    },
    inputData: {
      value: passwordConfirm.value,
      target: 'passwordConfirm',
      type: EInputType.PASSWORD,
      placeholder: '???????????? ?????????',
      onChange: (e: any) => onChangePwConfirmInterceptor(e),
      onBlur: (e: any) => onBlurPwConfirmInterceptor(e),
    },
  };

  useEffect(() => {
    if (step === EForgotPasswordStepType.PHONE_AUTH) {
      setActive(checkValidationStep1());
    } else {
      setActive(checkValidationStep2());
    }
  });

  useEffect(() => {
    setActive(false);
  }, [step]);

  useEffect(() => {
    handleAuthStoreInit();
    handleCountryCodeLoad();
  }, []);

  const render = (step: EForgotPasswordStepType) => {
    switch (step) {
      case EForgotPasswordStepType.PHONE_AUTH:
        return (
          <ForgotPasswordStep1Template
            title={<PopupTitle>???????????? ??????</PopupTitle>}
            description={
              <PopupDescription>
                <Fragment>
                  ????????? ???????????? ????????? ?????????
                  ??????????????????.
                  <br />
                  ????????? ???????????? ??????????????? ????????? ??? ???
                  ?????????.
                </Fragment>
              </PopupDescription>
            }
            email={
              <TextInput
                borderColor={DARK_GRAY1}
                labelProps={emailData.labelData}
                inputProps={emailData.inputData}
              />
            }
            phoneAuthForm={
              <PhoneAuthForm
                forceStopTimer={authErrorStatus}
                label={label}
                phoneNumber={phoneNumber}
                authCode={authCode}
                onChangeLabel={setLabel}
                onChangeValue={handleValueChange}
                onSendAuthCode={onSendAuthCode}
              />
            }
            button={
              <TaskButton
                onClick={submitFindPassword}
                disabled={!isActive}
              >
                ?????? ??????
              </TaskButton>
            }
            goBack={
              <u onClick={() => router.back()}>
                ???????????? ????????????
              </u>
            }
          />
        );

      case EForgotPasswordStepType.CHANGE_PASSWORD:
        return (
          <ForgotPasswordStep2Template
            title={<PopupTitle>???????????? ?????????</PopupTitle>}
            description={
              <PopupDescription>
                ????????? ????????? ??????????????? ??????????????????.
              </PopupDescription>
            }
            password={
              <TextInput
                labelProps={passwordData.labelData}
                inputProps={passwordData.inputData}
              >
                <S.pwWrapper
                  isValid={pwErrorStatus.indexOf(false) < 0}
                >
                  <S.pwWarning
                    status={pwErrorStatus[0]}
                    fillError={isLeavePwInput}
                  >
                    ??????
                  </S.pwWarning>
                  <S.pwWarning
                    status={pwErrorStatus[1]}
                    fillError={isLeavePwInput}
                  >
                    ??????
                  </S.pwWarning>
                  <S.pwWarning
                    status={pwErrorStatus[2]}
                    fillError={isLeavePwInput}
                  >
                    ????????????
                  </S.pwWarning>
                  <S.pwWarning
                    status={pwErrorStatus[3]}
                    fillError={isLeavePwInput}
                  >
                    8~20???
                  </S.pwWarning>
                </S.pwWrapper>
              </TextInput>
            }
            confirmPassword={
              <TextInput
                labelProps={confirmPasswordData.labelData}
                inputProps={confirmPasswordData.inputData}
              />
            }
            button={
              <TaskButton
                onClick={onSubmit}
                disabled={!isActive}
              >
                ??????
              </TaskButton>
            }
          />
        );

      default:
        return null;
    }
  };

  return <S.container>{render(step)}</S.container>;
};

const S = {
  container: styled.div``,

  pwWrapper: styled.div<{ isValid: boolean }>`
    & > sub {
      color: ${ifProp('isValid', BLUE1)};
    }
  `,

  pwWarning: styled.sub<{
    status: boolean;
    fillError: boolean;
  }>`
    ${({ status, fillError }) => {
      if (fillError) {
        if (!status) {
          return css`
            color: ${ORANGE1};
          `;
        }
      } else {
        if (status) {
          return css`
            color: ${DARK_GRAY1};
          `;
        }
      }
      return css`
        color: ${LIGHT_GRAY7};
      `;
    }}
  `,
};

export default ForgotPassword;
