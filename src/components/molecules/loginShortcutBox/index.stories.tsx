import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import EmailIcon from 'public/images/ico_saved_email.svg';

import LoginShortcutBox from '.';

export default {
  title: 'desktop / Molecules / LoginShortcutBox',
  component: LoginShortcutBox,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'LoginShortcutBox',
  },
};

export const 로그인데이터있는경우내부박스: FC = () => {
  const email = 'test@airpremia.com';
  return (
    <LoginShortcutBox
      icon={<EmailIcon />}
      email={email}
      onClick={() => {}}
      onClickXButton={() => {}}
    />
  );
};
