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
  NewModal,
} from 'src/components';
import { EScrollType } from 'src/components/templates/centerPopup';
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
  const { onShowModal, onShowNewModal, UIStore: { newModal } } = useModal();
  const [termsCheckList, setTermCheckList] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  // const [step, setStep] = useState(ESignupStep.EMAIL);
  const [step, setStep] = useState(2);

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
    '(필수) 프레미아 멤버스 이용 약관 동의',
    '(필수) 국제 운송 약관 동의',
    '(선택) 광고성 정보 수신 동의',
  ];

  const { onHideNewModal } = useModal();

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
    five: makeCheckboxData(5),
  };


  const showRulePopupModal = (
    idx: number
  ) => {
    console.log("idx : ", idx)
    const index = idx.toString()
    onShowNewModal(index)
    
  }

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
      placeholder: '영문 성을 입력해주세요',
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
      value: email.value.toLowerCase(),
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

  const onClickModal = () => {
    switch(newModal.target) {
      case '1':
        return(
          <NewModal
            className="max"
            type={EScrollType.TYPE1}
            title={
              <S.modalTitle>
                <PopupTitle>프레미아 멤버스 약관</PopupTitle>
              </S.modalTitle>
            }
            body={
              <>
                <S.textArea>
                  <ul>
                    <li>에어프레미아 공식 홈페이지에 가입하는 즉시, 프레미아 멤버스 회원 자격을 획득하게 됩니다. 회원 자격은 가입일부터 유효하며, 별도 탈퇴 시까지 지속됩니다.</li>
                    <li>프레미아 멤버스를 이용하는데 제한이 없는 국가에 거주하는 경우, 누구라도 가입이 가능합니다.</li>
                    <li>만 12세 미만의 소아 요금 혹은 유아 요금을 이용하는 경우, 별도의 포인트 적립은 불가능하며 추후 사용할 수 있는 할인 쿠폰을 지급합니다.</li>
                    <li>프레미아 멤버스 자격은 각 개인에게 주어지며, 양도가 불가능합니다.</li>
                    <li>프레미아 멤버스를 통해 적립되는 포인트는 각 회원 본인만 사용 가능합니다. 단, 에어프레미아에서 규정하는 양도 기능을 통해 정해진 범위 내에서 타인에게 양도가 가능합니다.</li>
                    <li>사망한 회원의 회원 자격, 계좌 및 적립 PP는 상속이 불가능합니다.</li>
                    <li>프레미아 멤버스는 1인 1계정을 원칙으로 하고 있으며, 복수 계정을 소지하는 경우 생길 수 있는 불이익은 책임지지 않습니다.</li>
                    <li>프레미아 멤버스의 모든 혜택은 지역에 따라 차등 적용될 수 있습니다.</li>
                    <li>항공권 탑승을 통해 적립한 PP는 탑승일로부터 36개월동안 유효하며, 유효기간 이후에는 자동으로 소멸됩니다.</li>
                    <li>프레미아 멤버스 회원 가입 및 혜택 적용 시, 각종 증빙서류를 위/변조하거나, 허위 사실을 기재하는 경우, 또는 규정을 위반 및 악용하는 경우에는 회원자격을 박탈하거나, 계좌를 폐쇄하고, 기적립된 포인트를 소멸할 수 있으며, 해당 회원에 대해 영구적으로 재가입을 불허할 수 있습니다. 또한, 에어프레미아는 손해배상 청구 및 필요한 법적 조치를 취할 수 있습니다.</li>
                    <li>프레미아 멤버스 규정은 관련 법령의 제정이나 개정 및 폐지, 타 항공사와의 업무 제휴 개시 또는 변경 등으로 해당 항공사의 규정과 균형을 맞추기 위해 불가피한 경우, 일반 항공권 가격의 상당한 변동으로 인하여 발생한 포인트 제도의 불균형을 바로잡히 위해 필요한 경우, 예상치 못한 항공 수요의 급격한 변화, 기타 항공산업의 중대한 위기를 초래할 우려가 있는 불가항력적인 사정이 상당 기간동안 지속되는 경우, 국가 경제의 심각한 악화, 국가 신용도의 급격한 하락, 기타 이에 준하는 경제 상황의 중대한 변동으로 인하여 불가피한 경우 등 상당한 이유가 있는 경우 3개월 사전고지 후 변경될 수 있습니다. 다만, 규정변경 발효일 이전까지 회원님께서 취득한 마일리지의 경우에는 마일리지 공제로 지급되는 보너스항공권(좌석승급 보너스포함)에 대하여 발효일로부터 12개월까지는 변경전의 공제기준이 적용됩니다.</li>
                    <li>노동문제, 사회혼란, 정부명령, 천재지변, 날씨, 전쟁 또는 본 프로그램을 유지함에 현저한 저해 요인이 발생할 경우 에어프레미아의 자체 판단에 의해 프로그램을 연기 또는 중단할 수 있습니다.</li>
                    <li>에어프레미아에서는 언제든지 프레미아 멤버스 회원 정보를 열람할 수 있으며, 실적의 오류가 확인되는 경우 정정할 수 있습니다.</li>
                    <li>프레미아 멤버스 회원 정보는 에어프레미아의 마케팅 및 프로모션 기획을 위해 활용될 수 있습니다.</li>
                    <li>프레미아 멤버스 회원이 본인의 개인정보를 잘못 입력하거나, 개인정보 변경을 에어프레미아 측에 고지하지 않아 발생하는 문제 및 에어프레미아 측 고지를 확인하지 않아 발생하는 모든 문제에 대해 에어프레미아에서는 책임을 지지 않습니다.</li>
                    <li>프레미아 멤버스 혜택을 통해 예약되는 보너스 항공권의 경우, 별도의 예약 클래스를 두고 있지 않으나, Economy 35의 경우 E클래스, Premia 42의 경우 C클래스 이상의 항공권에만 사용이 가능하며, 일반 예약을 위한 예약 클래스의 수량과 연동됩니다.</li>
                    <li>프레미아 멤버스 혜택을 통해 사용할 수 있는 좌석 승급은 Economy 35의 Flex Fare(Y, B, M 클래스)를 구매하는 경우에만 사용 가능하며, Premia 42의 Flex Fare(J, C)로 승급이 가능합니다. 사용 시 적용되는 예약 클래스는 일반 예약을 위한 예약 클래스의 남은 수량과 연동됩니다.</li>
                    <li>보너스 항공권 및 좌석 승급을 사용하는 경우, 세금, 검색비용, 공항세 및 유류할증료, 전쟁보험료 등의 제반 수수료 및 비용은 사용하시는 회원께서 직접 지불하셔야 합니다.</li>
                    <li>최근에 발행된 프레미아 멤버스 관련 규정이 이전에 고지된 규정에 우선하며, 에어프레미아에서는 이를 확인하지 못해 생기는 불이익을 책임지지 않습니다.</li>
                    <li>프레미아 멤버스의 포인트 적립 및 사용과 관련하여 이의사항이 있는 경우, 해당 항공편 탑승일 또는 포인트 사용일로부터 1년 이내에 제기하여야 합니다.</li>
                  </ul>
                </S.textArea>
              </>
            }
            button={
              <S.btnArea>
                <TaskButton onClick={onHideNewModal}>확인</TaskButton>
              </S.btnArea>
            }
          />
        );
      case '2':
        return(
          <NewModal
            className="max"
            type={EScrollType.TYPE1}
            title={
              <S.modalTitle>
                <PopupTitle>프레미아 멤버스 약관</PopupTitle>
              </S.modalTitle>
            }
            body={
              <>
                <S.textArea>
                  <ul>
                    <li>에어프레미아 공식 홈페이지에 가입하는 즉시, 프레미아 멤버스 회원 자격을 획득하게 됩니다. 회원 자격은 가입일부터 유효하며, 별도 탈퇴 시까지 지속됩니다.</li>
                    <li>프레미아 멤버스를 이용하는데 제한이 없는 국가에 거주하는 경우, 누구라도 가입이 가능합니다.</li>
                    <li>만 12세 미만의 소아 요금 혹은 유아 요금을 이용하는 경우, 별도의 포인트 적립은 불가능하며 추후 사용할 수 있는 할인 쿠폰을 지급합니다.</li>
                    <li>프레미아 멤버스 자격은 각 개인에게 주어지며, 양도가 불가능합니다.</li>
                    <li>프레미아 멤버스를 통해 적립되는 포인트는 각 회원 본인만 사용 가능합니다. 단, 에어프레미아에서 규정하는 양도 기능을 통해 정해진 범위 내에서 타인에게 양도가 가능합니다.</li>
                    <li>사망한 회원의 회원 자격, 계좌 및 적립 PP는 상속이 불가능합니다.</li>
                    <li>프레미아 멤버스는 1인 1계정을 원칙으로 하고 있으며, 복수 계정을 소지하는 경우 생길 수 있는 불이익은 책임지지 않습니다.</li>
                    <li>프레미아 멤버스의 모든 혜택은 지역에 따라 차등 적용될 수 있습니다.</li>
                    <li>항공권 탑승을 통해 적립한 PP는 탑승일로부터 36개월동안 유효하며, 유효기간 이후에는 자동으로 소멸됩니다.</li>
                    <li>프레미아 멤버스 회원 가입 및 혜택 적용 시, 각종 증빙서류를 위/변조하거나, 허위 사실을 기재하는 경우, 또는 규정을 위반 및 악용하는 경우에는 회원자격을 박탈하거나, 계좌를 폐쇄하고, 기적립된 포인트를 소멸할 수 있으며, 해당 회원에 대해 영구적으로 재가입을 불허할 수 있습니다. 또한, 에어프레미아는 손해배상 청구 및 필요한 법적 조치를 취할 수 있습니다.</li>
                    <li>프레미아 멤버스 규정은 관련 법령의 제정이나 개정 및 폐지, 타 항공사와의 업무 제휴 개시 또는 변경 등으로 해당 항공사의 규정과 균형을 맞추기 위해 불가피한 경우, 일반 항공권 가격의 상당한 변동으로 인하여 발생한 포인트 제도의 불균형을 바로잡히 위해 필요한 경우, 예상치 못한 항공 수요의 급격한 변화, 기타 항공산업의 중대한 위기를 초래할 우려가 있는 불가항력적인 사정이 상당 기간동안 지속되는 경우, 국가 경제의 심각한 악화, 국가 신용도의 급격한 하락, 기타 이에 준하는 경제 상황의 중대한 변동으로 인하여 불가피한 경우 등 상당한 이유가 있는 경우 3개월 사전고지 후 변경될 수 있습니다. 다만, 규정변경 발효일 이전까지 회원님께서 취득한 마일리지의 경우에는 마일리지 공제로 지급되는 보너스항공권(좌석승급 보너스포함)에 대하여 발효일로부터 12개월까지는 변경전의 공제기준이 적용됩니다.</li>
                    <li>노동문제, 사회혼란, 정부명령, 천재지변, 날씨, 전쟁 또는 본 프로그램을 유지함에 현저한 저해 요인이 발생할 경우 에어프레미아의 자체 판단에 의해 프로그램을 연기 또는 중단할 수 있습니다.</li>
                    <li>에어프레미아에서는 언제든지 프레미아 멤버스 회원 정보를 열람할 수 있으며, 실적의 오류가 확인되는 경우 정정할 수 있습니다.</li>
                    <li>프레미아 멤버스 회원 정보는 에어프레미아의 마케팅 및 프로모션 기획을 위해 활용될 수 있습니다.</li>
                    <li>프레미아 멤버스 회원이 본인의 개인정보를 잘못 입력하거나, 개인정보 변경을 에어프레미아 측에 고지하지 않아 발생하는 문제 및 에어프레미아 측 고지를 확인하지 않아 발생하는 모든 문제에 대해 에어프레미아에서는 책임을 지지 않습니다.</li>
                    <li>프레미아 멤버스 혜택을 통해 예약되는 보너스 항공권의 경우, 별도의 예약 클래스를 두고 있지 않으나, Economy 35의 경우 E클래스, Premia 42의 경우 C클래스 이상의 항공권에만 사용이 가능하며, 일반 예약을 위한 예약 클래스의 수량과 연동됩니다.</li>
                    <li>프레미아 멤버스 혜택을 통해 사용할 수 있는 좌석 승급은 Economy 35의 Flex Fare(Y, B, M 클래스)를 구매하는 경우에만 사용 가능하며, Premia 42의 Flex Fare(J, C)로 승급이 가능합니다. 사용 시 적용되는 예약 클래스는 일반 예약을 위한 예약 클래스의 남은 수량과 연동됩니다.</li>
                    <li>보너스 항공권 및 좌석 승급을 사용하는 경우, 세금, 검색비용, 공항세 및 유류할증료, 전쟁보험료 등의 제반 수수료 및 비용은 사용하시는 회원께서 직접 지불하셔야 합니다.</li>
                    <li>최근에 발행된 프레미아 멤버스 관련 규정이 이전에 고지된 규정에 우선하며, 에어프레미아에서는 이를 확인하지 못해 생기는 불이익을 책임지지 않습니다.</li>
                    <li>프레미아 멤버스의 포인트 적립 및 사용과 관련하여 이의사항이 있는 경우, 해당 항공편 탑승일 또는 포인트 사용일로부터 1년 이내에 제기하여야 합니다.</li>
                  </ul>
                </S.textArea>
              </>
            }
            button={
              <S.btnArea>
                <TaskButton onClick={onHideNewModal}>확인</TaskButton>
              </S.btnArea>
            }
          />
        )
      case '3':
        return(
          <NewModal
            className="max"
            type={EScrollType.TYPE1}
            title={
              <S.modalTitle>
                <PopupTitle>프레미아 멤버스 약관</PopupTitle>
              </S.modalTitle>
            }
            body={
              <>
                <S.textArea>
                  <ul>
                    <li>에어프레미아 공식 홈페이지에 가입하는 즉시, 프레미아 멤버스 회원 자격을 획득하게 됩니다. 회원 자격은 가입일부터 유효하며, 별도 탈퇴 시까지 지속됩니다.</li>
                    <li>프레미아 멤버스를 이용하는데 제한이 없는 국가에 거주하는 경우, 누구라도 가입이 가능합니다.</li>
                    <li>만 12세 미만의 소아 요금 혹은 유아 요금을 이용하는 경우, 별도의 포인트 적립은 불가능하며 추후 사용할 수 있는 할인 쿠폰을 지급합니다.</li>
                    <li>프레미아 멤버스 자격은 각 개인에게 주어지며, 양도가 불가능합니다.</li>
                    <li>프레미아 멤버스를 통해 적립되는 포인트는 각 회원 본인만 사용 가능합니다. 단, 에어프레미아에서 규정하는 양도 기능을 통해 정해진 범위 내에서 타인에게 양도가 가능합니다.</li>
                    <li>사망한 회원의 회원 자격, 계좌 및 적립 PP는 상속이 불가능합니다.</li>
                    <li>프레미아 멤버스는 1인 1계정을 원칙으로 하고 있으며, 복수 계정을 소지하는 경우 생길 수 있는 불이익은 책임지지 않습니다.</li>
                    <li>프레미아 멤버스의 모든 혜택은 지역에 따라 차등 적용될 수 있습니다.</li>
                    <li>항공권 탑승을 통해 적립한 PP는 탑승일로부터 36개월동안 유효하며, 유효기간 이후에는 자동으로 소멸됩니다.</li>
                    <li>프레미아 멤버스 회원 가입 및 혜택 적용 시, 각종 증빙서류를 위/변조하거나, 허위 사실을 기재하는 경우, 또는 규정을 위반 및 악용하는 경우에는 회원자격을 박탈하거나, 계좌를 폐쇄하고, 기적립된 포인트를 소멸할 수 있으며, 해당 회원에 대해 영구적으로 재가입을 불허할 수 있습니다. 또한, 에어프레미아는 손해배상 청구 및 필요한 법적 조치를 취할 수 있습니다.</li>
                    <li>프레미아 멤버스 규정은 관련 법령의 제정이나 개정 및 폐지, 타 항공사와의 업무 제휴 개시 또는 변경 등으로 해당 항공사의 규정과 균형을 맞추기 위해 불가피한 경우, 일반 항공권 가격의 상당한 변동으로 인하여 발생한 포인트 제도의 불균형을 바로잡히 위해 필요한 경우, 예상치 못한 항공 수요의 급격한 변화, 기타 항공산업의 중대한 위기를 초래할 우려가 있는 불가항력적인 사정이 상당 기간동안 지속되는 경우, 국가 경제의 심각한 악화, 국가 신용도의 급격한 하락, 기타 이에 준하는 경제 상황의 중대한 변동으로 인하여 불가피한 경우 등 상당한 이유가 있는 경우 3개월 사전고지 후 변경될 수 있습니다. 다만, 규정변경 발효일 이전까지 회원님께서 취득한 마일리지의 경우에는 마일리지 공제로 지급되는 보너스항공권(좌석승급 보너스포함)에 대하여 발효일로부터 12개월까지는 변경전의 공제기준이 적용됩니다.</li>
                    <li>노동문제, 사회혼란, 정부명령, 천재지변, 날씨, 전쟁 또는 본 프로그램을 유지함에 현저한 저해 요인이 발생할 경우 에어프레미아의 자체 판단에 의해 프로그램을 연기 또는 중단할 수 있습니다.</li>
                    <li>에어프레미아에서는 언제든지 프레미아 멤버스 회원 정보를 열람할 수 있으며, 실적의 오류가 확인되는 경우 정정할 수 있습니다.</li>
                    <li>프레미아 멤버스 회원 정보는 에어프레미아의 마케팅 및 프로모션 기획을 위해 활용될 수 있습니다.</li>
                    <li>프레미아 멤버스 회원이 본인의 개인정보를 잘못 입력하거나, 개인정보 변경을 에어프레미아 측에 고지하지 않아 발생하는 문제 및 에어프레미아 측 고지를 확인하지 않아 발생하는 모든 문제에 대해 에어프레미아에서는 책임을 지지 않습니다.</li>
                    <li>프레미아 멤버스 혜택을 통해 예약되는 보너스 항공권의 경우, 별도의 예약 클래스를 두고 있지 않으나, Economy 35의 경우 E클래스, Premia 42의 경우 C클래스 이상의 항공권에만 사용이 가능하며, 일반 예약을 위한 예약 클래스의 수량과 연동됩니다.</li>
                    <li>프레미아 멤버스 혜택을 통해 사용할 수 있는 좌석 승급은 Economy 35의 Flex Fare(Y, B, M 클래스)를 구매하는 경우에만 사용 가능하며, Premia 42의 Flex Fare(J, C)로 승급이 가능합니다. 사용 시 적용되는 예약 클래스는 일반 예약을 위한 예약 클래스의 남은 수량과 연동됩니다.</li>
                    <li>보너스 항공권 및 좌석 승급을 사용하는 경우, 세금, 검색비용, 공항세 및 유류할증료, 전쟁보험료 등의 제반 수수료 및 비용은 사용하시는 회원께서 직접 지불하셔야 합니다.</li>
                    <li>최근에 발행된 프레미아 멤버스 관련 규정이 이전에 고지된 규정에 우선하며, 에어프레미아에서는 이를 확인하지 못해 생기는 불이익을 책임지지 않습니다.</li>
                    <li>프레미아 멤버스의 포인트 적립 및 사용과 관련하여 이의사항이 있는 경우, 해당 항공편 탑승일 또는 포인트 사용일로부터 1년 이내에 제기하여야 합니다.</li>
                  </ul>
                </S.textArea>
              </>
            }
            button={
              <S.btnArea>
                <TaskButton onClick={onHideNewModal}>확인</TaskButton> 
              </S.btnArea>
            }
          />
        )
      case '4':
        return(
          <NewModal
            className="max"
            type={EScrollType.TYPE1}
            title={
              <S.modalTitle>
                <PopupTitle>프레미아 멤버스 약관</PopupTitle>
              </S.modalTitle>
            }
            body={
              <>
                <S.textArea>
                  <ul>
                    <li>에어프레미아 공식 홈페이지에 가입하는 즉시, 프레미아 멤버스 회원 자격을 획득하게 됩니다. 회원 자격은 가입일부터 유효하며, 별도 탈퇴 시까지 지속됩니다.</li>
                    <li>프레미아 멤버스를 이용하는데 제한이 없는 국가에 거주하는 경우, 누구라도 가입이 가능합니다.</li>
                    <li>만 12세 미만의 소아 요금 혹은 유아 요금을 이용하는 경우, 별도의 포인트 적립은 불가능하며 추후 사용할 수 있는 할인 쿠폰을 지급합니다.</li>
                    <li>프레미아 멤버스 자격은 각 개인에게 주어지며, 양도가 불가능합니다.</li>
                    <li>프레미아 멤버스를 통해 적립되는 포인트는 각 회원 본인만 사용 가능합니다. 단, 에어프레미아에서 규정하는 양도 기능을 통해 정해진 범위 내에서 타인에게 양도가 가능합니다.</li>
                    <li>사망한 회원의 회원 자격, 계좌 및 적립 PP는 상속이 불가능합니다.</li>
                    <li>프레미아 멤버스는 1인 1계정을 원칙으로 하고 있으며, 복수 계정을 소지하는 경우 생길 수 있는 불이익은 책임지지 않습니다.</li>
                    <li>프레미아 멤버스의 모든 혜택은 지역에 따라 차등 적용될 수 있습니다.</li>
                    <li>항공권 탑승을 통해 적립한 PP는 탑승일로부터 36개월동안 유효하며, 유효기간 이후에는 자동으로 소멸됩니다.</li>
                    <li>프레미아 멤버스 회원 가입 및 혜택 적용 시, 각종 증빙서류를 위/변조하거나, 허위 사실을 기재하는 경우, 또는 규정을 위반 및 악용하는 경우에는 회원자격을 박탈하거나, 계좌를 폐쇄하고, 기적립된 포인트를 소멸할 수 있으며, 해당 회원에 대해 영구적으로 재가입을 불허할 수 있습니다. 또한, 에어프레미아는 손해배상 청구 및 필요한 법적 조치를 취할 수 있습니다.</li>
                    <li>프레미아 멤버스 규정은 관련 법령의 제정이나 개정 및 폐지, 타 항공사와의 업무 제휴 개시 또는 변경 등으로 해당 항공사의 규정과 균형을 맞추기 위해 불가피한 경우, 일반 항공권 가격의 상당한 변동으로 인하여 발생한 포인트 제도의 불균형을 바로잡히 위해 필요한 경우, 예상치 못한 항공 수요의 급격한 변화, 기타 항공산업의 중대한 위기를 초래할 우려가 있는 불가항력적인 사정이 상당 기간동안 지속되는 경우, 국가 경제의 심각한 악화, 국가 신용도의 급격한 하락, 기타 이에 준하는 경제 상황의 중대한 변동으로 인하여 불가피한 경우 등 상당한 이유가 있는 경우 3개월 사전고지 후 변경될 수 있습니다. 다만, 규정변경 발효일 이전까지 회원님께서 취득한 마일리지의 경우에는 마일리지 공제로 지급되는 보너스항공권(좌석승급 보너스포함)에 대하여 발효일로부터 12개월까지는 변경전의 공제기준이 적용됩니다.</li>
                    <li>노동문제, 사회혼란, 정부명령, 천재지변, 날씨, 전쟁 또는 본 프로그램을 유지함에 현저한 저해 요인이 발생할 경우 에어프레미아의 자체 판단에 의해 프로그램을 연기 또는 중단할 수 있습니다.</li>
                    <li>에어프레미아에서는 언제든지 프레미아 멤버스 회원 정보를 열람할 수 있으며, 실적의 오류가 확인되는 경우 정정할 수 있습니다.</li>
                    <li>프레미아 멤버스 회원 정보는 에어프레미아의 마케팅 및 프로모션 기획을 위해 활용될 수 있습니다.</li>
                    <li>프레미아 멤버스 회원이 본인의 개인정보를 잘못 입력하거나, 개인정보 변경을 에어프레미아 측에 고지하지 않아 발생하는 문제 및 에어프레미아 측 고지를 확인하지 않아 발생하는 모든 문제에 대해 에어프레미아에서는 책임을 지지 않습니다.</li>
                    <li>프레미아 멤버스 혜택을 통해 예약되는 보너스 항공권의 경우, 별도의 예약 클래스를 두고 있지 않으나, Economy 35의 경우 E클래스, Premia 42의 경우 C클래스 이상의 항공권에만 사용이 가능하며, 일반 예약을 위한 예약 클래스의 수량과 연동됩니다.</li>
                    <li>프레미아 멤버스 혜택을 통해 사용할 수 있는 좌석 승급은 Economy 35의 Flex Fare(Y, B, M 클래스)를 구매하는 경우에만 사용 가능하며, Premia 42의 Flex Fare(J, C)로 승급이 가능합니다. 사용 시 적용되는 예약 클래스는 일반 예약을 위한 예약 클래스의 남은 수량과 연동됩니다.</li>
                    <li>보너스 항공권 및 좌석 승급을 사용하는 경우, 세금, 검색비용, 공항세 및 유류할증료, 전쟁보험료 등의 제반 수수료 및 비용은 사용하시는 회원께서 직접 지불하셔야 합니다.</li>
                    <li>최근에 발행된 프레미아 멤버스 관련 규정이 이전에 고지된 규정에 우선하며, 에어프레미아에서는 이를 확인하지 못해 생기는 불이익을 책임지지 않습니다.</li>
                    <li>프레미아 멤버스의 포인트 적립 및 사용과 관련하여 이의사항이 있는 경우, 해당 항공편 탑승일 또는 포인트 사용일로부터 1년 이내에 제기하여야 합니다.</li>
                  </ul>
                </S.textArea>
              </>
            }
            button={
              <S.btnArea>
                <TaskButton onClick={onHideNewModal}>확인</TaskButton>
              </S.btnArea>
            }
          />
        )
      case '5':
        return(
          <NewModal
            className="max"
            type={EScrollType.TYPE1}
            title={
              <S.modalTitle>
                <PopupTitle>프레미아 멤버스 약관</PopupTitle>
              </S.modalTitle>
            }
            body={
              <>
                <S.textArea>
                  <ul>
                    <li>에어프레미아 공식 홈페이지에 가입하는 즉시, 프레미아 멤버스 회원 자격을 획득하게 됩니다. 회원 자격은 가입일부터 유효하며, 별도 탈퇴 시까지 지속됩니다.</li>
                    <li>프레미아 멤버스를 이용하는데 제한이 없는 국가에 거주하는 경우, 누구라도 가입이 가능합니다.</li>
                    <li>만 12세 미만의 소아 요금 혹은 유아 요금을 이용하는 경우, 별도의 포인트 적립은 불가능하며 추후 사용할 수 있는 할인 쿠폰을 지급합니다.</li>
                    <li>프레미아 멤버스 자격은 각 개인에게 주어지며, 양도가 불가능합니다.</li>
                    <li>프레미아 멤버스를 통해 적립되는 포인트는 각 회원 본인만 사용 가능합니다. 단, 에어프레미아에서 규정하는 양도 기능을 통해 정해진 범위 내에서 타인에게 양도가 가능합니다.</li>
                    <li>사망한 회원의 회원 자격, 계좌 및 적립 PP는 상속이 불가능합니다.</li>
                    <li>프레미아 멤버스는 1인 1계정을 원칙으로 하고 있으며, 복수 계정을 소지하는 경우 생길 수 있는 불이익은 책임지지 않습니다.</li>
                    <li>프레미아 멤버스의 모든 혜택은 지역에 따라 차등 적용될 수 있습니다.</li>
                    <li>항공권 탑승을 통해 적립한 PP는 탑승일로부터 36개월동안 유효하며, 유효기간 이후에는 자동으로 소멸됩니다.</li>
                    <li>프레미아 멤버스 회원 가입 및 혜택 적용 시, 각종 증빙서류를 위/변조하거나, 허위 사실을 기재하는 경우, 또는 규정을 위반 및 악용하는 경우에는 회원자격을 박탈하거나, 계좌를 폐쇄하고, 기적립된 포인트를 소멸할 수 있으며, 해당 회원에 대해 영구적으로 재가입을 불허할 수 있습니다. 또한, 에어프레미아는 손해배상 청구 및 필요한 법적 조치를 취할 수 있습니다.</li>
                    <li>프레미아 멤버스 규정은 관련 법령의 제정이나 개정 및 폐지, 타 항공사와의 업무 제휴 개시 또는 변경 등으로 해당 항공사의 규정과 균형을 맞추기 위해 불가피한 경우, 일반 항공권 가격의 상당한 변동으로 인하여 발생한 포인트 제도의 불균형을 바로잡히 위해 필요한 경우, 예상치 못한 항공 수요의 급격한 변화, 기타 항공산업의 중대한 위기를 초래할 우려가 있는 불가항력적인 사정이 상당 기간동안 지속되는 경우, 국가 경제의 심각한 악화, 국가 신용도의 급격한 하락, 기타 이에 준하는 경제 상황의 중대한 변동으로 인하여 불가피한 경우 등 상당한 이유가 있는 경우 3개월 사전고지 후 변경될 수 있습니다. 다만, 규정변경 발효일 이전까지 회원님께서 취득한 마일리지의 경우에는 마일리지 공제로 지급되는 보너스항공권(좌석승급 보너스포함)에 대하여 발효일로부터 12개월까지는 변경전의 공제기준이 적용됩니다.</li>
                    <li>노동문제, 사회혼란, 정부명령, 천재지변, 날씨, 전쟁 또는 본 프로그램을 유지함에 현저한 저해 요인이 발생할 경우 에어프레미아의 자체 판단에 의해 프로그램을 연기 또는 중단할 수 있습니다.</li>
                    <li>에어프레미아에서는 언제든지 프레미아 멤버스 회원 정보를 열람할 수 있으며, 실적의 오류가 확인되는 경우 정정할 수 있습니다.</li>
                    <li>프레미아 멤버스 회원 정보는 에어프레미아의 마케팅 및 프로모션 기획을 위해 활용될 수 있습니다.</li>
                    <li>프레미아 멤버스 회원이 본인의 개인정보를 잘못 입력하거나, 개인정보 변경을 에어프레미아 측에 고지하지 않아 발생하는 문제 및 에어프레미아 측 고지를 확인하지 않아 발생하는 모든 문제에 대해 에어프레미아에서는 책임을 지지 않습니다.</li>
                    <li>프레미아 멤버스 혜택을 통해 예약되는 보너스 항공권의 경우, 별도의 예약 클래스를 두고 있지 않으나, Economy 35의 경우 E클래스, Premia 42의 경우 C클래스 이상의 항공권에만 사용이 가능하며, 일반 예약을 위한 예약 클래스의 수량과 연동됩니다.</li>
                    <li>프레미아 멤버스 혜택을 통해 사용할 수 있는 좌석 승급은 Economy 35의 Flex Fare(Y, B, M 클래스)를 구매하는 경우에만 사용 가능하며, Premia 42의 Flex Fare(J, C)로 승급이 가능합니다. 사용 시 적용되는 예약 클래스는 일반 예약을 위한 예약 클래스의 남은 수량과 연동됩니다.</li>
                    <li>보너스 항공권 및 좌석 승급을 사용하는 경우, 세금, 검색비용, 공항세 및 유류할증료, 전쟁보험료 등의 제반 수수료 및 비용은 사용하시는 회원께서 직접 지불하셔야 합니다.</li>
                    <li>최근에 발행된 프레미아 멤버스 관련 규정이 이전에 고지된 규정에 우선하며, 에어프레미아에서는 이를 확인하지 못해 생기는 불이익을 책임지지 않습니다.</li>
                    <li>프레미아 멤버스의 포인트 적립 및 사용과 관련하여 이의사항이 있는 경우, 해당 항공편 탑승일 또는 포인트 사용일로부터 1년 이내에 제기하여야 합니다.</li>
                  </ul>
                </S.textArea>
              </>
            }
            button={
              <S.btnArea>
                <TaskButton onClick={onHideNewModal}>확인</TaskButton>
              </S.btnArea>
            }
          />
        );
      default:
        return null;
    };     
  };

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
                    번호를 한번 더 확인하거나 예약센터로
                    연락주세요. 예약센터 전화 번호 1800-2626
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
                {console.log("checkboxData : ", checkboxData)}
                {Object.keys(checkboxData).map(
                  (item, i) => {
                    console.log("item : ", item, ", i : ", i)
                    return(
                      <a onClick={()=>{}}>
                        <PrivacyCheck
                        arrow={i === 0 ? "arrowN" : "arrow"}
                        key={`privacyCheckboxData${i.toString()}`}
                        checkboxProps={checkboxData[item]}
                        onClickDescription={() => {showRulePopupModal(i)}}
                        isBold={i === 0}
                        />
                      </a>
                    )
                  }
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

  return (
    <S.container>
      {render()}
      {onClickModal()}
    </S.container>
  )
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
  modalTitle : styled.div`
  
  `,
  
  textArea: styled.div`
    ul {
      padding-left: 30px;

      > li{
        margin-top: 10px;
        line-height: 1.8;
        list-style: decimal;
        word-break: keep-all;
      }
    }

    @media only screen and (max-width: 767px) {
      ul {
        padding-left: 20px;
      }
    }
  `,

  btnArea: styled.div`
  `,
};

export default Signup;
