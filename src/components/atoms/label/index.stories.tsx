import React, { FC } from 'react';
import {
  withKnobs,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs';
import Label from './';
import * as Colors from '@airpremia/cdk/styles/colors';

export default {
  title: 'desktop / Atoms / Label',
  component: Label,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Label 컴포넌트 Docs',
  },
};

const colorSelect = {
  label: 'color',
  options: {
    ...Colors,
  },
  defaultValue: Colors.DARK_GRAY1,
};

export const 라벨: FC = () => {
  return (
    <Label
      isRequired={boolean('필수 여부', false)}
      color={select(
        colorSelect.label,
        colorSelect.options,
        colorSelect.defaultValue,
      )}
      fontSize={text('font-size', '13px')}
      lineHeight={text('line-height', '28px')}
      letterSpacing={text('letter-spacing', '-0.26px')}
      width={text('width', '100%')}
      opacity={text('opacity', '1')}
    >
      {text('content', 'Text를 입력하세요')}
    </Label>
  );
};
