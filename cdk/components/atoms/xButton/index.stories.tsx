import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import XButton from '.';

export default {
  title: 'cdk / Atoms / XButton',
  component: XButton,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'XButton 컴포넌트 Docs',
  },
};

export const X_버튼: FC = () => {
  return <XButton onClick={() => {}} />;
};
