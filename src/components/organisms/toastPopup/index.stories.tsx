import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ToastPopup from '.';

export default {
  title: 'desktop / Organisms / ToastPopup',
  component: ToastPopup,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Toast Popup',
  },
};

export const 토스트팝업: FC = () => {
  return <ToastPopup />;
};
