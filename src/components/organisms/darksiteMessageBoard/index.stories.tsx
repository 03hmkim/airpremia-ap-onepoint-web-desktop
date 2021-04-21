import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import DarksiteMessageBoard from '.';

export default {
  title: 'desktop / Organisms / DarksiteMessageBoard',
  component: DarksiteMessageBoard,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Label 컴포넌트 Docs',
  },
};

export const darkSiteMessageBoard: FC = () => {
  const description =
    'Our Air Premia\n' +
    'We will do our best to solve accidents of AP001 flight.\n' +
    'Sorry for the trouble.';
  const firstItem = {
    labelContent: {
      isPremiaFont: true,
      children: '탑승객 문의센터',
    },
    textContent: {
      isPremiaFont: true,
      children: '02-1445-8879',
    },
  };

  const secondItem = {
    labelContent: {
      children: '홍보센터',
    },
    textContent: {
      isPremiaFont: true,
      children: '02-1445-8879',
    },
  };

  return (
    <DarksiteMessageBoard
      description={description}
      firstItem={firstItem}
      secondItem={secondItem}
    />
  );
};
