import React, { FC } from 'react';
import {
  withKnobs,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs';
import TextInput from '.';
import { action } from '@storybook/addon-actions';
import { EInputType } from 'src/components/atoms/input';
import * as Colors from '@airpremia/cdk/styles/colors';

export default {
  title: 'desktop / Molecules / TextInput',
  component: TextInput,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Text Input 컴포넌트 Docs',
  },
};

const colorSelect = {
  label: 'color',
  options: {
    ...Colors,
  },
  defaultValue: Colors.DARK_GRAY1,
};

const typeSelect = {
  label: 'type',
  options: {
    ...EInputType,
  },
  defaultValue: EInputType.TEXT,
};

export const textInput: FC = () => {
  const labelProps = {
    isRequired: boolean('필수 여부', false),
    color: select(
      colorSelect.label,
      colorSelect.options,
      colorSelect.defaultValue,
    ),
    fontSize: text('font-size', '13px'),
    lineHeight: text('line-height', '28px'),
    letterSpacing: text('letter-spacing', '-0.26px'),
    width: text('width', '100%'),
    opacity: text('opacity', '1'),
    children: text('content', 'label'),
  };

  const inputProps = {
    isHidden: boolean('hidden?', false),
    isReadOnly: boolean('read only?', false),
    value: text('value', ''),
    type: select(
      typeSelect.label,
      typeSelect.options,
      typeSelect.defaultValue,
    ),
    placeholder: text('placeholder', 'placeholder 입니다.'),
    handleBlur: action('blur'),
    handleChange: action('change'),
  };

  return (
    <TextInput
      hasClearBtn={boolean('clear btn', true)}
      labelProps={labelProps}
      inputProps={inputProps}
    >
      <sub>
        {text(
          'warning message: ',
          'warning message 입니다.',
        )}
      </sub>
    </TextInput>
  );
};
