import React, { FC } from 'react';
import {
  withKnobs,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs';
import Text from './';
import * as Colors from '@airpremia/cdk/styles/colors';

export default {
  title: 'desktop / Atoms / Text',
  component: Text,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Text 컴포넌트 Docs',
  },
};

const colorSelect = {
  label: 'color',
  options: {
    ...Colors,
  },
  defaultValue: Colors.DARK_GRAY1,
};

export const 텍스트: FC = () => {
  return (
    <Text
      color={select(
        colorSelect.label,
        colorSelect.options,
        colorSelect.defaultValue,
      )}
      fontSize={text('font size (px단위)', '34px')}
      lineHeight={text('line height (px단위)', '54px')}
      letterSpacing={text(
        'letter spacing (px단위)',
        '-0.68px',
      )}
      width={text('width', '100%')}
      fontWeight={text(
        'font weight (bold | medium | normal | weight',
        '500',
      )}
      opacity={text('opacity', '1')}
      isPremiaFont={boolean('프레미아 폰트 사용', true)}
    >
      {text('content', 'Text를 입력하세요')}
    </Text>
  );
};
