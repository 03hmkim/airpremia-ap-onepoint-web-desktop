import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import ChangePassword2 from './';

export default {
  title: 'desktop / Organisms / ChangePassword2',
  component: ChangePassword2,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'ChangePassword2',
  },
};

export const 패스워드변경모달_마이페이지: FC = () => {
  return <ChangePassword2 />;
};
