import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ChangePhoneNumber from '.';

export default {
  title: 'desktop / Organisms / ChangePhoneNumber',
  component: ChangePhoneNumber,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Change PhoneNumber',
  },
};

export const 핸드폰번호변경팝업: FC = () => {
  return (
    <ChangePhoneNumber
      originPhoneNumber={'+82 01012345678'}
    />
  );
};
