import React, { FC } from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Stepper from '.';

export default {
  title: 'desktop / Molecules / Stepper',
  component: Stepper,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Stepper',
  },
};

export const 스텝표시_0: FC = () => {
  const stepSelect = {
    label: 'step',
    options: {
      step0: 0,
      step1: 1,
      step2: 2,
      step3: 3,
    },
    defaultValue: 0,
  };
  return (
    <Stepper
      curr={select(
        stepSelect.label,
        stepSelect.options,
        stepSelect.defaultValue,
      )}
    />
  );
};
