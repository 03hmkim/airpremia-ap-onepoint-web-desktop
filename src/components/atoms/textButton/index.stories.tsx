import React from 'react';
import {
  withKnobs,
  text,
  select,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from './';
import * as Colors from '@airpremia/cdk/styles/colors';

export default {
  title: 'desktop / Atoms / Button',
  component: Button,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Default Button',
  },
};

const backgroundColorSelect = {
  label: 'backgroundColor',
  options: {
    ...Colors,
  },
  defaultValue: 'WHITE',
};

const BorderColorSelect = {
  label: 'BorderColor',
  options: {
    ...Colors,
  },
  defaultValue: 'BLACK',
};

export const 버튼: React.FC = () => {
  return (
    <Button
      backgroundColor={select(
        backgroundColorSelect.label,
        backgroundColorSelect.options,
        backgroundColorSelect.defaultValue,
      )}
      borderColor={select(
        BorderColorSelect.label,
        BorderColorSelect.options,
        BorderColorSelect.defaultValue,
      )}
      handleClick={action('click')}
    >
      {text('content', '로그인')}
    </Button>
  );
};
