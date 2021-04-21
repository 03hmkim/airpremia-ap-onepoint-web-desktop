import React, { FC } from 'react';
import moment from 'moment';
import { withKnobs } from '@storybook/addon-knobs';
import PriceByDateField, {
  EPriceByDateFieldStatus,
} from '.';

export default {
  title: 'desktop / Molecules / PriceByDateField',
  component: PriceByDateField,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '날짜 별 가격 필드',
  },
};

export const 클릭시날짜별가격정보단일필드: FC = () => {
  return (
    <PriceByDateField
      date={moment()}
      eyPrice={196000}
      pePrice={226000}
      status={EPriceByDateFieldStatus.ACTIVE}
    />
  );
};

export const 논클릭시날짜별가격정보단일필드: FC = () => {
  return (
    <PriceByDateField
      eyPrice={196000}
      pePrice={226000}
      status={EPriceByDateFieldStatus.INACTIVE}
    />
  );
};

export const 비활성화날짜별가격정보단일필드: FC = () => {
  return (
    <PriceByDateField
      eyPrice={196000}
      pePrice={226000}
      status={EPriceByDateFieldStatus.DISABLE}
    />
  );
};
