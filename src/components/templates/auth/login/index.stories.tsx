import React, { FC, Fragment, useState } from 'react';
import styled from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';

import LoginTemplate from '.';
import {
  PopupTitle,
  TextInput,
  LoginSubmenu,
} from 'src/components';
import { EInputType } from 'src/components/atoms/input';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';
import { TaskButton } from 'src/components';
import { action } from '@storybook/addon-actions';

export default {
  title: 'desktop / Templates / LoginTemplate',
  component: LoginTemplate,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'LoginTemplate',
  },
};

export const 로그인템플릿: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginStay, setLoginStay] = useState(false);

  const list = [
    { text: '이메일 찾기', href: '/auth/forgot-email' },
    {
      text: '비밀번호 찾기',
      href: '/auth/forgot-password',
    },
    { text: '회원가입', href: '/auth/signup' },
  ];

  const onLoginStayChange = () =>
    setLoginStay(!isLoginStay);

  const checkboxData = {
    isActive: isLoginStay,
    onChange: onLoginStayChange,
  };

  const emailData = {
    value: email,
    target: 'email',
    type: EInputType.TEXT,
    placeholder: '이메일 주소 입력',
    onChange: (e: any) => {
      setEmail(e.target.value);
    },
  };

  const passwordData = {
    value: password,
    target: 'password',
    type: EInputType.PASSWORD,
    placeholder: '패스워드 입력',
    onChange: (e: any) => {
      setPassword(e.target.value);
    },
  };
  return (
    <LoginTemplate
      title={
        <PopupTitle>
          <Fragment>
            에어프레미아에
            <br />
            로그인 해주세요 :-)
          </Fragment>
        </PopupTitle>
      }
      form={
        <S.form
          autoComplete="on"
          onSubmit={action('login button click')}
        >
          <S.email>
            <TextInput
              borderColor={DARK_GRAY1}
              inputProps={emailData}
            />
          </S.email>
          <S.password>
            <TextInput
              hasClearBtn
              borderColor={DARK_GRAY1}
              inputProps={passwordData}
            />
          </S.password>
          <S.subMenu>
            <LoginSubmenu
              menuList={list}
              checkboxData={checkboxData}
            />
          </S.subMenu>
          <S.button>
            <TaskButton
              type="submit"
              onClick={action('login button click')}
            >
              로그인
            </TaskButton>
          </S.button>
        </S.form>
      }
    />
  );
};

const S = {
  form: styled.form``,

  email: styled.div`
    margin-bottom: 25px;
  `,

  password: styled.div`
    margin-bottom: 30px;
  `,

  button: styled.div`
    text-align: center;
    margin-top: 60px;
    button {
      width: 300px;
      height: 50px;
    }
  `,
  subMenu: styled.div``,
};
