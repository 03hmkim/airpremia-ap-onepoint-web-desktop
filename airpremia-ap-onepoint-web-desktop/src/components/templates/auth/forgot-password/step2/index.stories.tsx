import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ForgotPasswordStep2Template from '.';

import { EInputType } from 'src/components/atoms/input';
import {
  PopupTitle,
  TextInput,
  PopupDescription,
} from 'src/components';
import { TaskButton } from 'src/components';

export default {
  title: 'desktop / Templates / ForgotPasswordStep2',
  component: ForgotPasswordStep2Template,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Forgot password step 2',
  },
};

export const 비밀번호찾기스텝2: FC = () => {
  const password = '';
  const passwordConfirm = '';
  const passwordData = {
    labelData: {
      fontSize: '14px',
      children: '새 비밀번호',
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

  const confirmPasswordData = {
    labelData: {
      fontSize: '14px',
      children: '새 비밀번호 확인',
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
    <ForgotPasswordStep2Template
      title={<PopupTitle>비밀번호 재설정</PopupTitle>}
      description={
        <PopupDescription>
          새롭게 사용할 비밀번호를 입력해주세요.
        </PopupDescription>
      }
      password={
        <TextInput
          labelProps={passwordData.labelData}
          inputProps={passwordData.inputData}
        />
      }
      confirmPassword={
        <TextInput
          labelProps={confirmPasswordData.labelData}
          inputProps={confirmPasswordData.inputData}
        />
      }
      button={<TaskButton>완료</TaskButton>}
    />
  );
};
