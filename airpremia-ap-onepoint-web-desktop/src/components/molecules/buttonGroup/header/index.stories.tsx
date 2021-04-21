import React, { FC } from 'react';
import ButtonGroupHeader from '.';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'desktop / Molecules / buttonGroup',
  component: ButtonGroupHeader,
  decorator: [withKnobs],
  parameters: {
    componentSubtitle: 'ButtonGroupHeader 컴포넌트 Docs',
  },
};

export const Header: FC = () => {
  return <ButtonGroupHeader></ButtonGroupHeader>;
};
