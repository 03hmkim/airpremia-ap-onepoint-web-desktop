import { FC, useState, Fragment, useEffect } from 'react';
import cx from 'classnames';
import styled, { css } from 'styled-components';
import {
  PopupTitle,
  PopupDescription,
  Stepper,
  PhoneAuthForm,
  TextInput,
  SignupStep1Template,
  SignupStep2Template,
  SignupStep3Template,
  PrivacyCheck,
} from 'src/components';
import { Label, TaskButton } from 'src/components';
import { useAuth, useScroll } from '@airpremia/core/hooks';
import { useModal } from 'src/hooks';
import Link from 'next/link';
import { EInputType } from 'src/components/atoms/input';
import {
  checkPasswordPartially,
  checkInputForm,
  checkSignupForm,
} from '@airpremia/core/lib/auth';
import {
  ORANGE1,
  DARK_GRAY1,
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';
import { EDefaultModalTable } from '@airpremia/core/stores/models/ui';
import {
  isAllCheck,
  createCustomEvent,
} from '@airpremia/core/lib/service';
import { postUserCheckEmail } from '@airpremia/core/api/user/user';
import { ifProp } from 'styled-tools';
import { BLUE1 } from '@airpremia/cdk/styles/colors';

enum ESignupStep {
  EMAIL,
  PHONE,
  DETAIL_INFO,
}

interface IProps {}

const Signup: FC<IProps> = ({}: IProps) => {
  const {
    authStore,
    handleInputDataChange,
    handleInputBlur,
    handlePhoneAuthSubmit,
    handleValueChange,
    handleGenderChange,
    onSignup,
    onEraseField,
  } = useAuth({ isPreventAccess: true });
  const { upScroll } = useScroll();
  const {
    email,
    password,
    authCode,
    phoneNumber,
    gender,
    lastName,
    firstName,
    birthDate,
    isSignupSuccess,
  } = authStore;
  const { onShowModal } = useModal();
  const [termsCheckList, setTermCheckList] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [step, setStep] = useState(ESignupStep.EMAIL);
  const [passwordConfirm, setPasswordConfirm] = useState({
    value: '',
    error: false,
    msg: '',
  });
  const [label, setLabel] = useState('+ 82');
  const [isSend, setSendStatus] = useState(false);
  const [isLeavePwInput, setLeavePwInputStatus] = useState(
    false,
  );
  const [pwErrorStatus, setPwErrorStatus] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [isActiveBtn, setActiveBtn] = useState(false);

  const checkValid = () =>
    setActiveBtn(
      checkInputForm(email, password, passwordConfirm),
    );

  const onChangeEmailInterceptor = (e: any) => {
    handleInputDataChange(e);
    checkValid();
  };

  const onBlurEmailInterceptor = (e: any) => {
    handleInputBlur(e);
    checkValid();
  };

  const onChangePasswordInterceptor = (e: any) => {
    const { value } = e.target;
    setLeavePwInputStatus(false);
    setPwErrorStatus(checkPasswordPartially(value));
    handleInputDataChange(e);
    checkValid();
  };

  const onBlurPasswordInterceptor = (e: any) => {
    setLeavePwInputStatus(true);
    handleInputBlur(e);
    const value = e.target.value;
    const confirmValue = passwordConfirm.value;
    if (confirmValue !== '') {
      setPasswordConfirm((prev) => {
        let obj = { ...prev, confirmValue };
        if (value !== confirmValue) {
          obj = {
            ...obj,
            error: true,
            msg: '비밀번호가 일치하지 않습니다.',
          };
        } else {
          obj = { ...obj, error: false, msg: '' };
        }
        return obj;
      });
    }
    checkValid();
  };

  const onChangePwConfirmInterceptor = (e: any) => {
    const value = e.target.value;
    setPasswordConfirm((prev) => ({
      ...prev,
      value,
    }));
    checkValid();
  };

  const onBlurPwConfirmInterceptor = (e: any) => {
    const value = e.target.value;
    setPasswordConfirm((prev) => {
      let obj = { ...prev, value };
      if (password.value !== value) {
        obj = {
          ...obj,
          error: true,
          msg: '비밀번호가 일치하지 않습니다.',
        };
      } else {
        obj = { ...obj, error: false, msg: '' };
      }
      return obj;
    });
    checkValid();
  };

  const onCheckEmail = async () => {
    try {
      const { data } = await postUserCheckEmail({
        email: email.value,
      });
      if (!data?.exist) {
        setStep(ESignupStep.PHONE);
      } else {
        onEraseField({ key: 'email' });
        handleInputDataChange(
          createCustomEvent({
            target: 'email',
            value: data.email,
          }),
        );
        onShowModal({
          options: {
            target: EDefaultModalTable.REGISTERED_USER,
          },
        });
      }
    } catch (e) {
      alert(e?.response?.data?.message);
    }
  };

  const onSend = (status: boolean) => {
    setSendStatus(status);
    //alert('인증번호는 4321 입니다.');
  };

  const fieldValidationCheckStep1 = () =>
    Boolean(
      checkInputForm(email, password, passwordConfirm) &&
        password.value === passwordConfirm.value,
    );

  const fieldValidationCheckStep2 = () =>
    Boolean(isSend && authCode && phoneNumber);

  const fieldValidationCheckStep3 = () =>
    checkSignupForm(
      gender,
      lastName,
      firstName,
      birthDate,
      termsCheckList,
    );

  const submitFindEmail = async () => {
    if (isActiveBtn) {
      const { exist } = await handlePhoneAuthSubmit();

      if (exist) {
        onShowModal({
          options: {
            target: EDefaultModalTable.REGISTERED_USER,
          },
        });
      } else {
        setStep(2);
      }
    }
  };

  const privacyList = [
    '전체동의',
    '(필수) 개인 정보 수급 및 국외 이전 동의',
    '(필수) 에어프레미아 이용 약관 동의',
    '(필수) 국제 운송 약관 동의',
    '(선택) 광고성 정보 수신 동의',
  ];

  const makeCheckboxData = (
    idx: number,
    target?: string,
  ) => ({
    isActive: termsCheckList[idx],
    target: target || idx.toString(),
    children: privacyList[idx],
    onChange: (status: boolean, target?: string) => {
      setTermCheckList(() => {
        let newData = [...termsCheckList];
        if (target === 'all') {
          newData.fill(status);
        } else {
          newData.splice(Number(target), 1, status);
          newData = [...isAllCheck(newData)];
        }
        newData.splice(Number(target), 1, status);
        return newData;
      });
    },
  });

  const checkboxData: any = {
    all: makeCheckboxData(0, 'all'),
    first: makeCheckboxData(1),
    second: makeCheckboxData(2),
    third: makeCheckboxData(3),
    fourth: makeCheckboxData(4),
  };

  const onSubmit = () => {
    const check = fieldValidationCheckStep3();
    if (check) {
      onSignup(termsCheckList);
    }
  };

  const firstNameData = {
    inputData: {
      value: firstName.value,
      target: 'firstName',
      type: EInputType.TEXT,
      placeholder: '영문 이름',
      onChange: (e: any) => handleInputDataChange(e, true),
      onBlur: (e: any) => handleInputBlur(e),
    },
  };

  const lastNameData = {
    labelData: {
      children: '이름',
      fontSize: '14px',
    },
    inputData: {
      value: lastName.value,
      target: 'lastName',
      type: EInputType.TEXT,
      placeholder: '영문 성',
      onChange: (e: any) => handleInputDataChange(e, true),
      onBlur: (e: any) => handleInputBlur(e),
    },
  };

  const birthData = {
    labelData: {
      children: '생년월일',
      fontSize: '14px',
    },
    inputData: {
      value: birthDate.value,
      target: 'birthDate',
      type: EInputType.TEXT,
      placeholder: '생년월일 8자리 입력',
      onChange: (e: any) => handleInputDataChange(e),
      onBlur: (e: any) => handleInputBlur(e),
    },
  };

  const emailData = {
    labelData: {
      children: '이메일',
    },
    inputData: {
      value: email.value,
      target: 'email',
      type: EInputType.TEXT,
      placeholder: '이메일 입력',
      onChange: (e: any) => onChangeEmailInterceptor(e),
      onBlur: (e: any) => onBlurEmailInterceptor(e),
    },
    onErase: () => {
      const event = createCustomEvent({
        target: 'email',
        value: '',
      });
      onChangeEmailInterceptor(event);
    },
  };

  const passwordData = {
    labelData: {
      fontSize: '14px',
      children: '비밀번호',
    },
    inputData: {
      value: password.value,
      target: 'password',
      type: EInputType.PASSWORD,
      placeholder: '비밀번호 입력',
      onChange: (e: any) => onChangePasswordInterceptor(e),
      onBlur: (e: any) => onBlurPasswordInterceptor(e),
    },
    onErase: () => {
      const event = createCustomEvent({
        target: 'password',
        value: '',
      });
      onChangePasswordInterceptor(event);
    },
  };

  const passwordConfirmData = {
    labelData: {
      fontSize: '14px',
      children: '비밀번호 확인',
    },
    inputData: {
      value: passwordConfirm.value,
      target: 'passwordConfirm',
      type: EInputType.PASSWORD,
      placeholder: '비밀번호 재입력',
      onChange: (e: any) => onChangePwConfirmInterceptor(e),
      onBlur: (e: any) => onBlurPwConfirmInterceptor(e),
    },
    onErase: () => {
      const event = createCustomEvent({
        target: 'passwordConfirm',
        value: '',
      });
      onChangePwConfirmInterceptor(event);
    },
  };

  useEffect(() => {
    if (step === ESignupStep.EMAIL) {
      setActiveBtn(fieldValidationCheckStep1());
    } else if (step === ESignupStep.PHONE) {
      setActiveBtn(fieldValidationCheckStep2());
    } else if (step === ESignupStep.DETAIL_INFO) {
      setActiveBtn(fieldValidationCheckStep3());
    }
  });

  useEffect(() => {
    upScroll();
    setActiveBtn(false);
  }, [step]);

  useEffect(() => {
    if (isSignupSuccess) {
      onShowModal({
        options: {
          target: EDefaultModalTable.SIGNUP_SUCCESS,
        },
      });
    }
  }, [isSignupSuccess]);

  const render = () => {
    switch (step) {
      case ESignupStep.EMAIL:
        return (
          <SignupStep1Template
            title={<PopupTitle>회원가입</PopupTitle>}
            description={
              <PopupDescription>
                아이디로 사용할 이메일과 비밀번호를
                입력해주세요.
              </PopupDescription>
            }
            stepper={<Stepper curr={ESignupStep.EMAIL} />}
            email={
              <TextInput
                hasClearBtn
                onErase={emailData.onErase}
                labelProps={emailData.labelData}
                inputProps={emailData.inputData}
              >
                <sub className="warning">
                  {email.error && email.msg}
                </sub>
              </TextInput>
            }
            password={
              <TextInput
                hasClearBtn
                onErase={passwordData.onErase}
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
                    영문
                  </S.pwWarning>
                  <S.pwWarning
                    status={pwErrorStatus[1]}
                    fillError={isLeavePwInput}
                  >
                    숫자
                  </S.pwWarning>
                  <S.pwWarning
                    status={pwErrorStatus[2]}
                    fillError={isLeavePwInput}
                  >
                    특수문자
                  </S.pwWarning>
                  <S.pwWarning
                    status={pwErrorStatus[3]}
                    fillError={isLeavePwInput}
                  >
                    8~20자
                  </S.pwWarning>
                </S.pwWrapper>
              </TextInput>
            }
            passwordConfirm={
              <TextInput
                hasClearBtn
                onErase={passwordConfirmData.onErase}
                labelProps={passwordConfirmData.labelData}
                inputProps={passwordConfirmData.inputData}
              >
                <sub className="warning">
                  {passwordConfirm.error &&
                    passwordConfirm.msg}
                </sub>
              </TextInput>
            }
            nextButton={
              <TaskButton
                disabled={
                  !isActiveBtn ||
                  password.value !== passwordConfirm.value
                }
                onClick={onCheckEmail}
              >
                다음
              </TaskButton>
            }
            goBack={
              <S.goBack>
                <p>이미 계정이 있으신가요?</p>
                &nbsp;
                <Link href="/auth/login">
                  <a>
                    <u>로그인으로 돌아가기</u>
                  </a>
                </Link>
              </S.goBack>
            }
          />
        );

      case ESignupStep.PHONE:
        return (
          <SignupStep2Template
            title={<PopupTitle>회원가입</PopupTitle>}
            description={
              <PopupDescription>
                <Fragment>
                  휴대폰 번호를 입력해주세요.
                  <br />
                  항공권 예약 정보나 스케줄 변동이 생겼을 때
                  알려드려요.
                </Fragment>
              </PopupDescription>
            }
            stepper={<Stepper curr={ESignupStep.PHONE} />}
            phoneAuthForm={
              <PhoneAuthForm
                label={label}
                phoneNumber={phoneNumber}
                authCode={authCode}
                onChangeLabel={setLabel}
                onChangeValue={handleValueChange}
                onSendAuthCode={onSend}
              />
            }
            nextButton={
              <TaskButton
                onClick={submitFindEmail}
                disabled={!isActiveBtn}
              >
                인증 완료
              </TaskButton>
            }
            guide={
              isSend ? (
                <Fragment>
                  <h5>인증 번호를 받지 못하셨나요?</h5>
                  <p>
                    인증 번호를 받지 못하셨다면, 휴대 전화
                    번호를 한번 더 확인하거나 고객센터로
                    연락주세요. 고객 센터 전화 번호 02-6953-6115
                  </p>
                </Fragment>
              ) : null
            }
          />
        );

      case ESignupStep.DETAIL_INFO:
        return (
          <SignupStep3Template
            title={<PopupTitle>회원가입</PopupTitle>}
            description={
              <PopupDescription>
                <Fragment>
                  항공권 예매에 필요한 필수 정보입니다.
                  <br />
                  여권에 표시된 정보와 동일하게
                  입력해주세요.
                </Fragment>
              </PopupDescription>
            }
            stepper={<Stepper curr={2} />}
            gender={
              <Fragment>
                <S.label>
                  <Label fontSize={'14px'}>성별</Label>
                </S.label>
                <div>
                  <div
                    className={cx({
                      selected: gender === 'M',
                    })}
                    data-gender="M"
                    onClick={handleGenderChange}
                  >
                    <p>남성</p>
                  </div>
                  <div
                    className={cx({
                      selected: gender === 'F',
                    })}
                    data-gender="F"
                    onClick={handleGenderChange}
                  >
                    <p>여성</p>
                  </div>
                </div>
              </Fragment>
            }
            name={
              <S.textInputWrapper>
                <div>
                  <TextInput
                    labelProps={lastNameData.labelData}
                    inputProps={lastNameData.inputData}
                  >
                    <sub className="warning">
                      {lastName.error && lastName.msg}
                    </sub>
                  </TextInput>
                </div>
                <div>
                  <TextInput
                    inputProps={firstNameData.inputData}
                  >
                    <sub className="warning">
                      {firstName.error && firstName.msg}
                    </sub>
                  </TextInput>
                </div>
              </S.textInputWrapper>
            }
            birth={
              <TextInput
                labelProps={birthData.labelData}
                inputProps={birthData.inputData}
              >
                <sub className="warning">
                  {birthDate.error && birthDate.msg}
                </sub>
              </TextInput>
            }
            privacyCheck={
              <S.privacyCheckWrapper>
                {Object.keys(checkboxData).map(
                  (item, i) => (
                    <PrivacyCheck
                      arrow="arrowN"
                      key={`privacyCheckboxData${i.toString()}`}
                      checkboxProps={checkboxData[item]}
                      onClickDescription={() => {}}
                      isBold={i === 0}
                    />
                  ),
                )}
              </S.privacyCheckWrapper>
            }
            confirmButton={
              <TaskButton
                disabled={!isActiveBtn}
                onClick={onSubmit}
              >
                회원가입 완료
              </TaskButton>
            }
            goBack={
              <S.underline
                onClick={() => setStep(ESignupStep.PHONE)}
              >
                이전으로 돌아가기
              </S.underline>
            }
          />
        );

      default:
        return null;
    }
  };

  return render();
};

const S = {
  container: styled.div``,

  goBack: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    p,
    a {
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.26px;
    }

    @media only screen and (max-width: 767px) {
      p,
      a {
        font-size: 13px;
      }
    }
  `,

  pwWrapper: styled.div<{ isValid: boolean }>`
    & > sub {
      color: ${ifProp('isValid', BLUE1)};
    }
  `,

  pwWarning: styled.sub<{
    status: boolean;
    fillError: boolean;
  }>`
    font-size: 16px;
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

    @media only screen and (max-width: 767px) {
      font-size: 12px;
    }
  `,
  label: styled.div`
    margin-bottom: 10px;


  `,

  textInputWrapper: styled.div`
    & > div:first-of-type {
      margin-bottom: 25px;
    }
  `,

  privacyCheckWrapper: styled.div`
    & > div:not(:last-of-type) {
      margin-bottom: 10px;
    }
  `,

  underline: styled.u`
    cursor: pointer;
  `,
};

export default Signup;
