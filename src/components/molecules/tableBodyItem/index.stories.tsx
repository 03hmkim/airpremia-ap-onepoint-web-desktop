import React, { FC, Fragment } from 'react';
import moment from 'moment';
import { withKnobs } from '@storybook/addon-knobs';
import TableBodyItem from '.';

export default {
  title: 'desktop / Molecules / TableBodyItem',
  component: TableBodyItem,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Table Body Item',
  },
};

export const 테이블바디아이템유형1: FC = () => {
  return (
    <TableBodyItem
      title="고정된 사과문 예시입니다."
      subTitle={moment('2020-05-23').format('YYYY. M. D')}
      postId="test1"
      postType="test11"
    />
  );
};

export const 테이블바디아이템유형2: FC = () => {
  return (
    <TableBodyItem postId="test2" postType="test3">
      <Fragment>
        <h2 className="font-bold">
          children을 랜더링한 Title
        </h2>
        <p>children을 랜더링한 SubTitle</p>
      </Fragment>
    </TableBodyItem>
  );
};
