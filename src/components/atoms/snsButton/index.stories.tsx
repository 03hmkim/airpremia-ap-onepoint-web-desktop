import React, { FC } from 'react';
import { select, withKnobs } from '@storybook/addon-knobs';
import SnsButton from './';

export default {
  title: 'desktop / Atoms / SnsButton',
  component: SnsButton,
  parameters: {
    componentSubtitle: 'SnsButton 컴포넌트 Docs',
  },
  decorators: [withKnobs],
};

const typeSelect = {
  label: 'type',
  options: ['instagram', 'facebook', 'youtube'],
  defaultValue: 'instagram',
};

export const 소셜_버튼: FC = () => {
  return (
    <SnsButton
      type={select(
        typeSelect.label,
        typeSelect.options,
        typeSelect.defaultValue,
      )}
    />
  );
};
