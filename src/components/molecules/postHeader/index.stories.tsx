import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import PostHeader from '.';

export default {
  title: 'desktop / Molecules / PostHeader',
  component: PostHeader,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Post body',
  },
};

const data = {
  title: '개인정보 처리방침 개정안내',
  createdAt: '2020-02-21 06:01:10 +09:00',
  postType: 'NOTICE',
};

export const 포스트헤더: FC = () => {
  return (
    <PostHeader
      title={data.title}
      createdAt={data.createdAt}
      postType={data.postType}
    />
  );
};
