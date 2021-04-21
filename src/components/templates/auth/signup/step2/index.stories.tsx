import React, { FC, Fragment, useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import SignupStep2 from '.';
import {
  PopupTitle,
  PopupDescription,
  Stepper,
  PhoneAuthForm,
} from 'src/components';
import { TaskButton } from 'src/components';

export default {
  title: 'desktop / Templates / SignupStep2',
  component: SignupStep2,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Singup step 1',
  },
};

export const 회원가입스텝2: FC = () => {
  const [label, setLabel] = useState('+ 82');
  const [phoneNumber] = useState('');
  const [authCode] = useState('');

  return (
    <SignupStep2
      title={<PopupTitle>회원가입</PopupTitle>}
      description={
        <PopupDescription>
          <Fragment>
            휴대폰 번호를 입력해주세요.
            <br />
            항공권 예약 정보나 스케줄 변동이 생겼을 때
            알려드려요.
          </Fragment>
        </PopupDescription>
      }
      stepper={<Stepper />}
      phoneAuthForm={
        <PhoneAuthForm
          label={label}
          phoneNumber={phoneNumber}
          authCode={authCode}
          onChangeLabel={setLabel}
          onChangeValue={() => {}}
        />
      }
      nextButton={<TaskButton>인증 완료</TaskButton>}
    />
  );
};
