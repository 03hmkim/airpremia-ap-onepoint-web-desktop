import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import SignupSuccess from '.';

export default {
  title: 'desktop / Organisms / SignupSuccess',
  component: SignupSuccess,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Signup Success',
  },
};

export const 회원가입성공시팝업: FC = () => {
  return <SignupSuccess />;
};
