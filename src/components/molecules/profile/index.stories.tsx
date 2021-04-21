import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ProfileMan from 'public/images/profile-img.png';
import Profile from './';

export default {
  title: 'desktop / Molecules / Profile',
  component: Profile,
  decorators: [withKnobs],
};

export const 프로필요약: FC = () => {
  return (
    <Profile
      profileImage={ProfileMan}
      name="YOUNGJOO NAMMMMMMMMMMMM"
      email="master_very_long_email@airpremia.com"
      onChangeMyInfomation={() => {}}
    />
  );
};
