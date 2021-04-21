import React, { FC, useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import PhoneAuthForm from '.';

export default {
  title: 'desktop / Organisms / PhoneAuthForm',
  component: PhoneAuthForm,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Phone Auth Form',
  },
};

export const 휴대폰인증폼: FC = () => {
  const [label, setLabel] = useState('+ 82');
  const [, setSend] = useState(false);
  const [phoneNumber] = useState('');
  const [authCode] = useState('');
  const onSendAuthCode = (status: boolean) => {
    setSend(status);
  };

  return (
    <PhoneAuthForm
      label={label}
      phoneNumber={phoneNumber}
      authCode={authCode}
      onChangeLabel={setLabel}
      onChangeValue={() => {}}
      onSendAuthCode={onSendAuthCode}
    />
  );
};
