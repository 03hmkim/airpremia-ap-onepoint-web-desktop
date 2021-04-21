import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import CenterPopup, { EScrollType } from '.';
import { PopupTitle } from 'src/components';
import { TaskButton } from 'src/components';

export default {
  title: 'desktop / Templates / CenterPopup',
  component: CenterPopup,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '',
  },
};

export const 중앙정렬용팝업템플릿타입1: FC = () => {
  return (
    <CenterPopup
      className=''
      type={EScrollType.TYPE1}
      title={<PopupTitle>이메일 주소 변경</PopupTitle>}
      body={<div>body 내용을 기입해주세요.</div>}
      button={<TaskButton>변경</TaskButton>}
    />
  );
};
