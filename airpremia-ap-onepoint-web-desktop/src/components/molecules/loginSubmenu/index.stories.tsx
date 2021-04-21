import React, { FC, useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import LoginSubmenu from '.';

export default {
  title: 'desktop / Molecules / LoginSubmenu',
  component: LoginSubmenu,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'LoginSubmenu',
  },
};

export const 로그인서브메뉴: FC = () => {
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
  return (
    <LoginSubmenu
      menuList={list}
      checkboxData={checkboxData}
    />
  );
};
