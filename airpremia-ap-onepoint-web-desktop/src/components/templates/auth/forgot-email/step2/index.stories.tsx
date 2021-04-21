import React, { FC, useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ForgotEmailLogin from '.';
import {
  PopupTitle,
  TextInput,
  LoginSubmenu,
} from 'src/components';
import { Label, TaskButton } from 'src/components';
import { EInputType } from 'src/components/atoms/input';

export default {
  title: 'desktop / Templates / ForgotEmailLogin',
  component: ForgotEmailLogin,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Forgot Email 이후 Login',
  },
};

export const 이메일찾기후로그인: FC = () => {
  const [password, setPassword] = useState('');
  const [isLoginStay, setLoginStay] = useState(false);

  const onLoginStayChange = () =>
    setLoginStay(!isLoginStay);

  const checkboxData = {
    isActive: isLoginStay,
    onChange: onLoginStayChange,
  };

  const passwordData = {
    labelData: {
      children: '비밀번호',
      fontSize: '14px',
    },
    inputData: {
      value: password,
      target: 'password',
      type: EInputType.PASSWORD,
      placeholder: '패스워드 입력',
      onChange: (e: any) => {
        setPassword(e.target.value);
      },
    },
  };
  const list = [
    {
      text: '비밀번호 찾기',
      href: '/auth/forgot-password',
    },
  ];

  return (
    <ForgotEmailLogin
      title={<PopupTitle>로그인</PopupTitle>}
      label={
        <Label fontSize={'14px'}>가입 이메일 주소</Label>
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
      button={<TaskButton>로그인</TaskButton>}
    />
  );
};
