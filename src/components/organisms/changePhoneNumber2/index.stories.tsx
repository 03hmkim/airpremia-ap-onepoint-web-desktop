import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ChangePhoneNumber2 from './';

export default {
  title: 'desktop / Organisms / ChangePhoneNumber2',
  component: ChangePhoneNumber2,
  decorators: [withKnobs],
};

export const 패스워드변경모달_마이페이지: FC = () => {
  return <ChangePhoneNumber2 onChangeNewValue={() => {}} />;
};
