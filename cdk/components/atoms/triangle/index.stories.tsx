import React, { FC } from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Triangle from './';
import * as Colors from '../../../styles/colors';

export default {
  title: 'cdk / Atoms / Triangle',
  component: Triangle,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Triangle 컴포넌트 Docs',
  },
};

const colorSelect = {
  label: 'color',
  options: {
    ...Colors,
  },
  defaultValue: Colors.DARK_GRAY1,
};

export const 삼각형화살표: FC = () => {
  return (
    <Triangle
      color={select(
        colorSelect.label,
        colorSelect.options,
        colorSelect.defaultValue,
      )}
    />
  );
};
