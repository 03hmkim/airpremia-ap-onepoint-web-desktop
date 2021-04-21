import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ProfileGroup from './';

export default {
  title: 'desktop / Organisms / ProfileGroup',
  component: ProfileGroup,
  decorators: [withKnobs],
};

export const 프로필그룹: FC = () => {
  const linkButtonList = [
    {
      title: '나의 등급',
      description: 'SILVER',
      link: '/',
    },
    {
      title: '포인트',
      description: '34,200',
      link: '/',
      needArrow: true,
    },
    {
      title: '나의 쿠폰',
      description: 9,
      link: '/',
      needArrow: true,
      isEmphasis: true,
    },
  ];

  return <ProfileGroup linkButtonList={linkButtonList} />;
};
