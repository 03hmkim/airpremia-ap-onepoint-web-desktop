import React, { FC, Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import { withKnobs } from '@storybook/addon-knobs';
import ForgotPasswordStep1Template from '.';
import {
  PopupTitle,
  TextInput,
  PhoneAuthForm,
  PopupDescription,
} from 'src/components';
import { TaskButton } from 'src/components';
import { EInputType } from 'src/components/atoms/input';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

export default {
  title: 'desktop / Templates / ForgotPasswordStep1',
  component: ForgotPasswordStep1Template,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Forgot password step 1',
  },
};

export const 비밀번호찾기스텝1: FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [label, setLabel] = useState('+ 82');
  const [, setSend] = useState(false);
  const [phoneNumber] = useState('');
  const [authCode] = useState('');
  const onSendAuthCode = (status: boolean) => {
    setSend(status);
  };
  const emailData = {
    labelData: {
      children: '이메일',
      fontSize: '14px',
    },
    inputData: {
      value: email,
      target: 'email',
      type: EInputType.TEXT,
      placeholder: '이메일 주소 입력',
      onChange: (e: any) => {
        setEmail(e.target.value);
      },
    },
  };
  return (
    <ForgotPasswordStep1Template
      title={<PopupTitle>비밀번호 찾기</PopupTitle>}
      description={
        <PopupDescription>
          <Fragment>
            가입한 이메일과 휴대폰 번호를 입력해주세요.
            <br />
            인증에 성공하면 비밀번호를 재설정 할 수 있어요.
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
