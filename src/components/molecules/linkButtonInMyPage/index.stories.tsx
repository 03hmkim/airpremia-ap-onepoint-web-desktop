import React, { FC } from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import LinkButtonInMyPage from './';

export default {
  title: 'desktop / Molecules / LinkButtonInMyPage',
  component: LinkButtonInMyPage,
  decorators: [withKnobs],
};

export const 마이페이지_링크버튼: FC = () => {
  return (
    <LinkButtonInMyPage
      title="나의 등급"
      description="SILVER"
      link="https://www.naver.com"
      isEmphasis={boolean('isEmphasis', false)}
      needArrow={boolean('needArrow', false)}
    />
  );
};
