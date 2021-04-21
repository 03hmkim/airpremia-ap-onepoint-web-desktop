import React, { FC } from 'react';
import MenuItemStation from '.';
import styled from 'styled-components';
import { dummyMenuItemStation } from './dummy';

export default {
  title: 'desktop / Molecules / MenuItemStation',
  component: MenuItemStation,
  parameters: {
    componentSubtitle: 'MenuItemStation 컴포넌트 Docs',
  },
};

export const 메뉴아이템_취항지: FC = () => {
  return (
    <S.container>
      <MenuItemStation {...dummyMenuItemStation} />
    </S.container>
  );
};
const S = {
  container: styled.div`
    width: 350px;
  `,
};
