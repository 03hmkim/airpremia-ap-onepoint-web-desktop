import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ChangeEmail from '.';

export default {
  title: 'desktop / Organisms / ChangeEmail',
  component: ChangeEmail,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Change Email',
  },
};

export const 이메일변경팝업: FC = () => {
  return <ChangeEmail originEmail={'test@airpremia.com'} />;
};
