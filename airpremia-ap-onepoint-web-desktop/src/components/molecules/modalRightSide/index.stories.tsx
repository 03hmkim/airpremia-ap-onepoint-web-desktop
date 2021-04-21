import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ModalRightSide from '.';
import {
  EDefaultModalTable,
  EModalPosition,
  EModalAnimationType,
} from '@airpremia/core/stores/models/ui';

export default {
  title: 'desktop / Molecules / ModalRightSide',
  component: ModalRightSide,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '오른쪽 정렬용 모달',
  },
};

const modal = {
  isOpen: true,
  hasBackButton: false,
  hasCloseButton: true,
  target: EDefaultModalTable.NONE,
  position: EModalPosition.SIDE_RIGHT,
  animationType: EModalAnimationType.NONE,
};

export const 모달중앙형: FC = () => {
  return (
    <ModalRightSide modal={modal} onHide={() => {}}>
      <div>Modal Right Side test</div>
    </ModalRightSide>
  );
};
