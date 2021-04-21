import React, { FC } from 'react';
import FeedbackButton from './';

export default {
  title: 'desktop / Atoms / FeedbackButton',
  component: FeedbackButton,
  parameters: {
    componentSubtitle: 'FeedbackButton 컴포넌트 Docs',
  },
};

export const 피드백_버튼: FC = () => {
  return <FeedbackButton to="https://naver.com" />;
};
