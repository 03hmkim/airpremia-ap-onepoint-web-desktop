import React, { FC } from 'react';
import {
  withKnobs,
  text,
  boolean,
} from '@storybook/addon-knobs';
import ToggleSwitchButton from '.';

export default {
  title: 'desktop / Molecules / ToggleSwitchButton',
  component: ToggleSwitchButton,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'ToggleSwitchButton 컴포넌트 Docs',
  },
};

export const 토글스위치버튼: FC = () => {
  return (
    <ToggleSwitchButton
      isActive={boolean('On/Off', true)}
      onClickToggle={() => {}}
    >
      {text('content', 'ToggleSwitchButton')}
    </ToggleSwitchButton>
  );
};
