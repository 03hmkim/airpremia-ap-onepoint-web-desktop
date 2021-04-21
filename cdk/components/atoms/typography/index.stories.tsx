/* eslint-disable */
import React from 'react';

import Typography, { IProps } from './';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'cdk / Atoms / Typography',
  component: Typography,
  argTypes: {
    fontType: {
      control: {
        type: 'inline-radio',
        options: [
          'type36',
          'type30',
          'type22',
          'type14',
          'type12',
        ],
      },
    },
    fontFamily: {
      control: {
        type: 'inline-radio',
        options: ['normal', 'premia'],
      },
    },
    fontWeight: {
      control: {
        type: 'inline-radio',
        options: ['regular', 'medium', 'bold'],
      },
    },
    color: {
      control: 'color',
    },
  },
};

const TemplateKorean: Story<IProps> = (args) => {
  return (
    <Typography {...args}>
      에어프레미아는 수하물을 운송, 보관 및 관리하는
      과정에서 회사의 고의 또는 과실로 수하물에 손해가
      발생한 경우에 한하여 보상에 대한 책임을 부담합니다.
    </Typography>
  );
};

export const 타이포그래피_한글 = TemplateKorean.bind({});
타이포그래피_한글.args = {
  fontType: 'type22',
  breakAll: true,
  ml: 10,
  mb: 10,
};

const TemplateEnglish: Story<IProps> = (args) => {
  return (
    <Typography {...args}>
      An aircraft is a vehicle that is able to fly by
      gaining support from the air. It counters the force of
      gravity by using either static lift or by using the
      dynamic lift of an airfoil, or in a few cases the
      downward thrust from jet engines.
    </Typography>
  );
};

export const 타이포그래피_영문 = TemplateEnglish.bind({});
타이포그래피_영문.args = {
  fontType: 'type22',
  ml: 10,
  mb: 10,
};
