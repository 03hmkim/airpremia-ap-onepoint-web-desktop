import React, { FC, Fragment, useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Checkbox from '.';

export default {
  title: 'desktop / Molecules / Checkbox',
  component: Checkbox,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Checkbox 컴포넌트 Docs',
  },
};

export const 체크박스: FC = () => {
  const [isActive, setActive] = useState(false);
  return (
    <Checkbox
      isActive={isActive}
      onChange={() => setActive(!isActive)}
    >
      라벨
    </Checkbox>
  );
};

export const 체크박스HTMLChild: FC = () => {
  const [isActive, setActive] = useState(false);
  return (
    <Checkbox
      isActive={isActive}
      onChange={() => setActive(!isActive)}
    >
      <Fragment>
        <h1>제목</h1>
        <p>본문</p>
      </Fragment>
    </Checkbox>
  );
};
