import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Modal from '.';

export default {
  title: 'desktop / Organisms / Modal',
  component: Modal,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Cabin Class 구간 하나',
  },
};

export const 모달_기본_새버전: FC = () => {
  return (
    <Modal
      title={<div>title</div>}
      body={<div>body</div>}
    />
  );
};
