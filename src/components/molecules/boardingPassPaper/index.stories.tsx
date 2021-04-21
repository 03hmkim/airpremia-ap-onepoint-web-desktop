import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import BoardingPassPaper from '.';
import boardingPasses from 'src/components/templates/checkin/passport/dummy';

export default {
  title: 'desktop / Molecules / BoardingPassPaper',
  component: BoardingPassPaper,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Boarding pass paper',
  },
};

export const 탑승권한장: FC = () => {
  return (
    <BoardingPassPaper boardingPass={boardingPasses[0]} />
  );
};
