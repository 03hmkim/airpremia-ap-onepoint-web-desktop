import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import XButton from '.';

export default {
  title: 'desktop / Atoms / XButton',
  component: XButton,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'XButton 컴포넌트 Docs',
  },
};

export const 일반X버튼: FC = () => {
  return <XButton handleClick={() => {}} />;
};
