import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import GuideList from '.';

export default {
  title: 'desktop / Molecules / GuideList',
  component: GuideList,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'GuideList',
  },
};

export const 가이드그룹withDescription: FC = () => {
  const descriptions = [
    '온라인 체크인 신청을 완료하시면 출발 24시간 전에 자동으로 체크인이 완료되며, 입력하신 휴대전화 번호로 탑승권이 전송됩니다.',
    '온라인 체크인 신청 완료 후에도 좌석 변경 및 항공편 변경이 가능합니다. ',
    '입력한 여권 정보가 부정확하거나 유효하지 않을 경우 출/도착지 사전 심사결과에 따라 탑승권 발급이 불가할 수도 있습니다.',
  ];
  return (
    <GuideList
      title="온라인 체크인 신청 안내"
      descriptions={descriptions}
    />
  );
};
