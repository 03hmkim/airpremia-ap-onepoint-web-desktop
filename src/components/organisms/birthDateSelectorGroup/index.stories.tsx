import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import BirthDateSelectorGroup from '.';

export default {
  title: 'desktop / Organisms / BirthDateSelectorGroup',
  component: BirthDateSelectorGroup,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Birth date selector group',
  },
};

export const 생년월일셀렉터드롭다운그룹: FC = () => {
  const callbackBirth = (birth: any) => {
    console.log(birth);
  };
  return (
    <BirthDateSelectorGroup callbackBirth={callbackBirth} />
  );
};
