import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import ButtonLinkType6 from '.';
import SvgIcon from 'public/images/ico_reservation_change.svg';

export default {
  title: 'desktop / Molecules / ButtonLinkType6',
  component: ButtonLinkType6,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Button Lint Type 6',
  },
};

export const 버튼링크타입6: FC = () => {
  return (
    <ButtonLinkType6
      SvgIcon={SvgIcon}
      text="일정변경"
      onClick={() => {}}
      disabled={false}
    />
  );
};

export const 버튼링크타입6_비활성화: FC = () => {
  return (
    <ButtonLinkType6
      disabled
      SvgIcon={SvgIcon}
      onClick={() => {}}
      text="일정변경"
    />
  );
};
