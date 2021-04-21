import { FC, Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import {
  ForgotEmailStep1Template,
  ForgotEmailStep2Template,
  PopupTitle,
  PopupDescription,
  TextInput,
  PhoneAuthForm,
  LoginSubmenu,
} from 'src/components';
import { Label, TaskButton } from 'src/components';
import { useAuth } from '@airpremia/core/hooks';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';
import { EInputType } from 'src/components/atoms/input';
import { checkInputForm } from '@airpremia/core/lib/auth';

enum EForgotEmailStepType {
  PHONE_AUTH,
  LOGIN,
}

interface IProps {}

const ForgotEmail: FC<IProps> = ({}: IProps) => {
  const router = useRouter();
  const {
    authStore,
    handleInputDataChange,
    handleValueChange,
    handleInputBlur,
    handleFindEmail,
    onLogin,
  } = useAuth();
  const {
    email,
    firstName,
    lastName,
    password,
    phoneNumber,
    authCode,
  } = authStore;
  const [label, setLabel] = useState('+ 82');
  const [isActive, setActive] = useState(false);
  const [step, setStep] = useState(
    EForgotEmailStepType.PHONE_AUTH,
  );
  const [isLoginStay, setLoginStay] = useState(false);
  const [isSend, setSend] = useState(false);

  const onLoginStayChange = () =>
    setLoginStay(!isLoginStay);

  const checkboxData = {
    isActive: isLoginStay,
    onChange: onLoginStayChange,
  };

  const submitFindEmail = async () => {
    const res = await handleFindEmail();

    if (res) {
      setStep(EForgotEmailStepType.LOGIN);
    }
  };

  const onLoginSubmit = () => {
    if (
      email.value.length > 0 &&
      password.value.length > 0
    ) {
      onLogin(isLoginStay, router);
    } else {
      alert('password를 입력하세요');
    }
  };

  const checkValidation = () =>
    Boolean(
      checkInputForm(firstName, lastName) &&
        isSend &&
        authCode,
    );

  const onSendAuthCode = (status: boolean) =>
    setSend(status);

  const list = [
    {
      text: '비밀번호 찾기',
      href: '/auth/forgot-password',
    },
  ];

  const firstNameData = {
    value: firstName.value,
    target: 'firstName',
    type: EInputType.TEXT,
    placeholder: '영문 이름',
    onChange: (e: any) => handleInputDataChange(e, true),
    onBlur: (e: any) => handleInputBlur(e),
  };

  const lastNameData = {
    value: lastName.value,
    target: 'lastName',
    type: EInputType.TEXT,
    placeholder: '영문 성',
    onChange: (e: any) => handleInputDataChange(e, true),
    onBlur: (e: any) => handleInputBlur(e),
  };

  const passwordData = {
    labelData: {
      children: '비밀번호',
    },
    inputData: {
      value: password.value,
      target: 'password',
      type: EInputType.PASSWORD,
      placeholder: '비밀번호 입력',
      onChange: (e: any) => handleInputDataChange(e),
      onBlur: (e: any) => handleInputBlur(e),
    },
  };

  useEffect(() => {
    setActive(checkValidation());
  });

  const render = (step: EForgotEmailStepType) => {
    switch (step) {
      case EForgotEmailStepType.PHONE_AUTH:
        return (
          <ForgotEmailStep1Template
            title={<PopupTitle>이메일 찾기</PopupTitle>}
            description={
              <PopupDescription>
                <Fragment>
                  이름과 휴대폰 번호 인증을 통해
                  <br />
                  회원가입 시 사용한 이메일 주소를 찾을 수
                  있어요.
                </Fragment>
              </PopupDescription>
            }
            labelName={
              <Label fontSize={'14px'}>이름</Label>
            }
            labelDescription="여권에 표시된 영문 이름과 동일하게 입력해주세요"
            firstName={
              <TextInput
                borderColor={DARK_GRAY1}
                inputProps={firstNameData}
              />
            }
            lastName={
              <TextInput
                borderColor={DARK_GRAY1}
                inputProps={lastNameData}
              />
            }
            phoneAuthForm={
              <PhoneAuthForm
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
                onClick={submitFindEmail}
                disabled={!isActive}
              >
                인증 완료
              </TaskButton>
            }
            goBack={
              <u onClick={() => router.back()}>
                이전으로 돌아가기
              </u>
            }
          />
        );

      case EForgotEmailStepType.LOGIN:
        return (
          <ForgotEmailStep2Template
            title={<PopupTitle>로그인</PopupTitle>}
            label={
              <Label fontSize={'14px'}>
                가입 이메일 주소
              </Label>
            }
            email={'yh.lee@airpremia.com'}
            password={
              <TextInput
                labelProps={passwordData.labelData}
                inputProps={passwordData.inputData}
              />
            }
            subMenu={
              <LoginSubmenu
                menuList={list}
                checkboxData={checkboxData}
              />
            }
            button={
              <TaskButton
                onClick={onLoginSubmit}
                disabled={!password.value.length}
              >
                로그인
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
};

export default ForgotEmail;
