import React, { FC } from 'react';
import DropdownLogin from '.';

export default {
  title: 'desktop / Molecules / dropdown',
  component: DropdownLogin,
  parameters: {
    componentSubtitle: 'DropdownLogin 컴포넌트 Docs',
  },
};

export const login: FC = () => {
  return (
    <DropdownLogin onLogout={() => {}}></DropdownLogin>
  );
};
