import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import SavedLoginInfoPopup from '.';

export default {
  title: 'desktop / Organisms / SavedLoginInfoPopup',
  component: SavedLoginInfoPopup,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'SavedLoginInfoPopup',
  },
};

export const 로그인정보있는경우의팝업: FC = () => {
  return <SavedLoginInfoPopup />;
};
