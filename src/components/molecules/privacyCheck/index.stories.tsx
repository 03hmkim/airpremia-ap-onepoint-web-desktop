import React, { FC } from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import PrivacyCheck from '.';

export default {
  title: 'desktop / Molecules / PrivacyCheck',
  component: PrivacyCheck,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '',
  },
};

export const 약관동의: FC = () => {
  const checkboxProps = {
    isActive: boolean('active', false),
    children: '(필수) 개인 정보 수급 및 국외 이전 동의',
    onChange: () => {},
  };

  return <PrivacyCheck checkboxProps={checkboxProps} />;
};
