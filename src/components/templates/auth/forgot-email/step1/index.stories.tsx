import React, { FC, Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import { withKnobs } from '@storybook/addon-knobs';
import ForgotEmail from '.';
import {
  PopupTitle,
  PopupDescription,
  PhoneAuthForm,
} from 'src/components';
import { TaskButton, Label } from 'src/components';
import TextInput from 'src/components/molecules/textInput';
import { EInputType } from 'src/components/atoms/input';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

export default {
  title: 'desktop / Templates / ForgotEmail',
  component: ForgotEmail,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Forgot Email',
  },
};

export const 이메일찾기: FC = () => {
  const initData = { value: '', error: false, msg: '' };
  const router = useRouter();
  const [lastName, setLastName] = useState(initData);
  const [firstName, setFirstName] = useState(initData);
  const [label, setLabel] = useState('+ 82');
  const [, setSend] = useState(false);
  const [phoneNumber] = useState('');
  const [authCode] = useState('');
  const onSendAuthCode = (status: boolean) => {
    setSend(status);
  };

  const firstNameData = {
    value: firstName.value,
    target: 'firstName',
    type: EInputType.TEXT,
    placeholder: '영문 이름',
    onChange: (e: any) => {
      const { value } = e.target;
      setFirstName((prev) => ({
        ...prev,
        value,
      }));
    },
    onBlur: () => () => {},
  };

  const lastNameData = {
    value: lastName.value,
    target: 'lastName',
    type: EInputType.TEXT,
    placeholder: '영문 성',
    onChange: (e: any) => {
      const { value } = e.target;
      setLastName((prev) => ({
        ...prev,
        value,
      }));
    },
    onBlur: () => () => {},
  };
  return (
    <ForgotEmail
      title={<PopupTitle>이메일 찾기</PopupTitle>}
      description={
        <PopupDescription>
          <Fragment>
            이름과 휴대폰 번호 인증을 통해
            <br />
            회원가입 시 사용한 이메일 주소를 찾을 수 있어요.
          </Fragment>
        </PopupDescription>
      }
      labelName={<Label fontSize={'14px'}>이름</Label>}
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
          onChangeValue={() => {}}
          onSendAuthCode={onSendAuthCode}
        />
      }
      button={<TaskButton>인증 완료</TaskButton>}
      goBack={
        <u onClick={() => router.back()}>
          이전으로 돌아가기
        </u>
      }
    />
  );
};
