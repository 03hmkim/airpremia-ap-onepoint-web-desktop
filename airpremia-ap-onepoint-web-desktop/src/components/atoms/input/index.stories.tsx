import React, { FC } from 'react';
import {
  withKnobs,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Input, { EInputType } from './';

export default {
  title: 'desktop / Atoms / Input',
  component: Input,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Input 컴포넌트 Docs',
  },
};

const typeSelect = {
  label: 'type',
  options: {
    ...EInputType,
  },
  defaultValue: EInputType.TEXT,
};

export const 입력: FC = () => {
  return (
    <Input
      isHidden={boolean('hidden?', false)}
      isReadOnly={boolean('read only?', false)}
      value={text('value', '')}
      type={select(
        typeSelect.label,
        typeSelect.options,
        typeSelect.defaultValue,
      )}
      placeholder={text(
        'placeholder',
        'placeholder 입니다.',
      )}
      onBlur={action('blur')}
      onChange={action('change')}
    />
  );
};
