import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import ChangeUserInfomation from './';
import { useChangeUserInfomationHook } from 'src/components/templates/auth/changeUserInfomation/dummy';

export default {
  title: 'desktop / Organisms / ChangeUserInfomation',
  component: ChangeUserInfomation,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'ChangeUserInfomation',
  },
};

export const 회원정보변경_예약전: FC = () => {
  return (
    <ChangeUserInfomation
      canChange
      {...useChangeUserInfomationHook()}
    />
  );
};

export const 회원정보변경_예약후: FC = () => {
  return (
    <ChangeUserInfomation
      {...useChangeUserInfomationHook()}
    />
  );
};
