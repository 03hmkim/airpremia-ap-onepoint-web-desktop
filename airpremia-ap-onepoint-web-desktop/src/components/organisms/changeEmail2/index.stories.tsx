import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import ChangeEmail2 from './';

export default {
  title: 'desktop / Organisms / ChangeEmail2',
  component: ChangeEmail2,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'ChangeEmail2',
  },
};

export const 이메일변경모달_마이페이지: FC = () => {
  return <ChangeEmail2 onChangeNewValue={() => {}} />;
};
