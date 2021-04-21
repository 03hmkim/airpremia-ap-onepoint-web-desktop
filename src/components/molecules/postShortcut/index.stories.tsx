import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import PostShortcut from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'desktop / Molecules / PostShortcut',
  component: PostShortcut,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Post body',
  },
};

const data = {
  label: '이전글',
  title: '이전글로 가기 위해서는 클릭해주세요',
  postId: '1',
  postType: 'NOTICE',
  onClick: action('click'),
};

export const 이전글다음글가기: FC = () => {
  return (
    <PostShortcut
      label={data.label}
      title={data.title}
      postId={data.postId}
      postType={data.postType}
    />
  );
};
