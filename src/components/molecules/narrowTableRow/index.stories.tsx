import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import NarrowTableRow from './';
import { BLUE1, RED2 } from '@airpremia/cdk/styles/colors';

export default {
  title: 'desktop / Molecules / NarrowTableRow',
  component: NarrowTableRow,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'NarrowTableRow',
  },
};

export const 테이블열좁은버전_환불가능: FC = () => {
  return (
    <NarrowTableRow
      option="환불 가능"
      optionColor={BLUE1}
    />
  );
};

export const 테이블열좁은버전_환불불가: FC = () => {
  return (
    <NarrowTableRow option="환불 불가" optionColor={RED2} />
  );
};
