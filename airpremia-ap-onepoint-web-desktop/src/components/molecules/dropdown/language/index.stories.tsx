import React, { FC } from 'react';
import DropdownLanguage from '.';

export default {
  title: 'desktop / Molecules / dropdown',
  component: DropdownLanguage,
  parameters: {
    componentSubtitle: 'DropdownLanguage 컴포넌트 Docs',
  },
};

export const language: FC = () => {
  return <DropdownLanguage></DropdownLanguage>;
};
