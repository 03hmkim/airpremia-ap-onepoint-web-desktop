import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import RegisteredUser from '.';

export default {
  title: 'desktop / Organisms / RegisteredUser',
  component: RegisteredUser,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Registered User',
  },
};

export const 등록된유저팝업: FC = () => {
  return <RegisteredUser />;
};
