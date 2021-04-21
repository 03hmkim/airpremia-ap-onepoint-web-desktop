import React, { FC, useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import EuCitizenRadio from '.';

export default {
  title: 'desktop / Organisms / EuCitizenRadio',
  component: EuCitizenRadio,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'EuCitizenRadio',
  },
};

export const EU시민라디오박스: FC = () => {
  const [hasEUCitizen, setHasEUCitizen] = useState(false);
  return (
    <EuCitizenRadio
      hasEUCitizen={hasEUCitizen}
      onChange={setHasEUCitizen}
    />
  );
};
