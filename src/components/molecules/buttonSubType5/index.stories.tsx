import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import ButtonSubType5 from '.';

export default {
  title: 'desktop / Molecules / ButtonSubType5',
  component: ButtonSubType5,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'ButtonSubType5',
  },
};

export const 버튼서브타입5: FC = () => {
  return (
    <ButtonSubType5 text="더보기" onClick={() => {}} />
  );
};
