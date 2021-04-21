import React, { FC, useState } from 'react';
import Select from '.';
import styled from 'styled-components';
import { dummySelect } from './dummy';
import MenuItemStation from '../menuItemStation';
import { dummyMenuItemStation } from '../menuItemStation/dummy';

export default {
  title: 'desktop / Molecules / Select',
  component: Select,
  parameters: {
    componentSubtitle:
      '항공권 검색에 사용 하는 Select 컴포넌트',
  },
};

export const 셀렉트: FC = () => {
  const [isShow, setIsShow] = useState(false);

  const toggle = () => {
    setIsShow(!isShow);
  };

  return (
    <S.container>
      <Select
        {...dummySelect}
        isShowMenu={isShow}
        onClick={toggle}
      >
        <div className="menuWrapper" onClick={() => {}}>
          <MenuItemStation {...dummyMenuItemStation} />
          <MenuItemStation {...dummyMenuItemStation} />
        </div>
      </Select>
    </S.container>
  );
};
const S = {
  container: styled.div`
    padding: 14px 0;
    width: 380px;
    .menuWrapper {
      width: 400px;
      top: 0px;
      left: 380px;
      padding: 15px 25px;
      box-sizing: border-box;
    }
  `,
};
