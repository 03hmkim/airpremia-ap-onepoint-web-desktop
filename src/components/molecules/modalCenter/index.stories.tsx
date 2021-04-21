import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ModalCenter from '.';
import {
  EDefaultModalTable,
  EModalPosition,
  EModalAnimationType,
} from '@airpremia/core/stores/models/ui';

export default {
  title: 'desktop / Molecules / ModalCenter',
  component: ModalCenter,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '중앙 정렬용 모달',
  },
};

const modal = {
  isOpen: true,
  hasBackButton: false,
  hasCloseButton: true,
  target: EDefaultModalTable.NONE,
  position: EModalPosition.CENTER,
  animationType: EModalAnimationType.NONE,
};

export const 모달중앙형: FC = () => {
  return (
    <ModalCenter modal={modal} onHide={() => {}}>
      <div>Modal Center test</div>
    </ModalCenter>
  );
};
