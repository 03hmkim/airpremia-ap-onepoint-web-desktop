import React, { FC, Fragment } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import ContainerTitle from '.';

export default {
  title: 'desktop / Molecules / ContainerTitle',
  component: ContainerTitle,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'ContainerTitle',
  },
};

export const 화면컨테이너안에타이틀영역: FC = () => {
  return (
    <ContainerTitle
      title={
        <Fragment>
          온라인 체크인 신청이
          <br />
          완료되었습니다 :-)
        </Fragment>
      }
      description="탑승 24시간 전에 탑승권이 자동으로 발급됩니다."
    />
  );
};
