import React from 'react';

import Arrow, { EPosition } from './';
import { action } from '@storybook/addon-actions';
import { withKnobs, select } from '@storybook/addon-knobs';
import * as Colors from '../../../styles/colors';

export default {
  title: 'cdk / Atoms / Arrow',
  component: Arrow,
  decorators: [withKnobs],
};

const colorSelect = {
  label: 'Color',
  options: {
    ...Colors,
  },
  defaultValue: Colors.DARK_GRAY1,
};

const arrowPosition = {
  label: 'Position',
  options: {
    ...EPosition,
  },
  defaultValue: EPosition.UP,
};

export const 화살표: React.FC = () => {
  return (
    <Arrow
      color={select(
        colorSelect.label,
        colorSelect.options,
        colorSelect.defaultValue,
      )}
      position={select(
        arrowPosition.label,
        arrowPosition.options,
        arrowPosition.defaultValue,
      )}
      onClick={action('onClick')}
    />
  );
};
