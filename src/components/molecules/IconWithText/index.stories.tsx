import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import IconWithText, { EIconWithTextType } from '.';
import IconCharge from 'public/images/ico_charge.svg';
import IconCheckIn from 'public/images/ico-check-in.svg';

export default {
  title: 'desktop / Molecules / IconWithText',
  component: IconWithText,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'IconWithText 가로형 세로형',
  },
};

export const 텍스트와함께있는아이콘세로형: FC = () => {
  return (
    <IconWithText
      icon={<IconCharge />}
      text="충전"
      type={EIconWithTextType.HORIZON}
    />
  );
};
export const 텍스트와함께있는아이콘가로형: FC = () => {
  return (
    <IconWithText
      icon={<IconCheckIn />}
      text="자동 체크인"
      type={EIconWithTextType.VERTICAL}
    />
  );
};
