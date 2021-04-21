import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ModalCenterWrapper from '.';

export default {
  title: 'desktop / Molecules / ModalCenterWrapper',
  component: ModalCenterWrapper,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '중앙 정렬용 모달',
  },
};

export const 모달중앙형: FC = () => {
  return (
    <ModalCenterWrapper
      onClose={() => {}}
      onClickBackground={() => {}}
      className=''
    >
      <div>Modal Center test</div>
    </ModalCenterWrapper>
  );
};
