import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import SpeechBubble from './';
import {
  BLUE1,
  ORANGE1,
} from '@airpremia/cdk/styles/colors';

export default {
  title: 'desktop / Atoms / SpeechBubble',
  component: SpeechBubble,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'SpeechBubble',
  },
};

export const 말풍선모양뱃지블루: FC = () => {
  return (
    <SpeechBubble backgroundColor={BLUE1}>
      BLUE
    </SpeechBubble>
  );
};

export const 말풍선모양뱃지레드: FC = () => {
  return (
    <SpeechBubble backgroundColor={ORANGE1}>
      RED
    </SpeechBubble>
  );
};

export const 말풍선모양뱃지레드_오른쪽화살표: FC = () => {
  return (
    <SpeechBubble
      backgroundColor={ORANGE1}
      arrowPosition="right"
    >
      RED
    </SpeechBubble>
  );
};
