import React, { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { withKnobs } from '@storybook/addon-knobs';
import SignupStep1 from '.';
import {
  PopupTitle,
  PopupDescription,
  Stepper,
  TextInput,
} from 'src/components';

import { TaskButton } from 'src/components';
import { EInputType } from 'src/components/atoms/input';

export default {
  title: 'desktop / Templates / SignupStep1',
  component: SignupStep1,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Signup Step 1',
  },
};

export const 회원가입스텝1: FC = () => {
  const email = '';
  const password = '';
  const passwordConfirm = '';

  const emailData = {
    labelData: {
      children: '이메일',
    },
    inputData: {
      value: email,
      target: 'email',
      type: EInputType.TEXT,
      placeholder: '이메일 입력',
      handleChange: () => {},
      handleBlur: () => {},
    },
  };

  const passwordData = {
    labelData: {
      children: '비밀번호',
    },
    inputData: {
      value: password,
      target: 'password',
      type: EInputType.PASSWORD,
      placeholder: '비밀번호 입력',
      handleChange: () => {},
      handleBlur: () => {},
    },
  };

  const passwordConfirmData = {
    labelData: {
      children: '비밀번호 확인',
    },
    inputData: {
      value: passwordConfirm,
      target: 'passwordConfirm',
      type: EInputType.PASSWORD,
      placeholder: '비밀번호 재입력',
      handleChange: () => {},
      handleBlur: () => {},
    },
  };

  return (
    <SignupStep1
      title={<PopupTitle>회원가입</PopupTitle>}
      description={
        <PopupDescription>
          아이디로 사용할 이메일과 비밀번호를 입력해주세요.
        </PopupDescription>
      }
      stepper={<Stepper curr={1} />}
      email={
        <TextInput
          labelProps={emailData.labelData}
          inputProps={emailData.inputData}
        >
          <sub className="email-warning">
            {/* {email.error && email.msg} */}
          </sub>
        </TextInput>
      }
      password={
        <TextInput
          labelProps={passwordData.labelData}
          inputProps={passwordData.inputData}
        >
          <sub className="email-warning">
            {/* {email.error && email.msg} */}
          </sub>
        </TextInput>
      }
      passwordConfirm={
        <TextInput
          labelProps={passwordConfirmData.labelData}
          inputProps={passwordConfirmData.inputData}
        >
          <sub className="email-warning">
            {/* {email.error && email.msg} */}
          </sub>
        </TextInput>
      }
      nextButton={<TaskButton>다음</TaskButton>}
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
};

const S = {
  goBack: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    p,
    a {
      font-weight: 600;
      font-size: 13px;
      line-height: 24px;
      letter-spacing: -0.26px;
    }
  `,
};
