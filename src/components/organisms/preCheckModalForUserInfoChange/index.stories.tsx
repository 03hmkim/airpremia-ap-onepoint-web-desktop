import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import PreCheckModalForUserInfoChange from '.';

export default {
  title:
    'desktop / Organisms / PreCheckModalForUserInfoChange',
  component: PreCheckModalForUserInfoChange,
  decorators: [withKnobs],
};

export const 회원정보변경: FC = () => {
  return <PreCheckModalForUserInfoChange />;
};
