import React, { FC } from 'react';
import {
  withKnobs,
  select,
  text,
  boolean,
} from '@storybook/addon-knobs';
import Contact from '.';
import * as Colors from '@airpremia/cdk/styles/colors';

const GID = 'desktop / Molecules / Contact';
const LABELID = 'Label Content';
const TEXTID = 'Text Content';

export default {
  title: GID,
  component: Contact,
  decorators: [withKnobs],
};

const colorSelect = {
  label: 'color',
  options: {
    ...Colors,
  },
  defaultValue: Colors.DARK_GRAY1,
};

export const contact: FC = () => {
  const labelContent = {
    color: select(
      colorSelect.label,
      colorSelect.options,
      colorSelect.defaultValue,
      LABELID,
    ),

    fontSize: text('font-size', '13px', LABELID),

    lineHeight: text('line-height', '28px', LABELID),

    letterSpacing: text(
      'letter-spacing',
      '-0.26px',
      LABELID,
    ),

    width: text('width', '100%', LABELID),

    opacity: text('opacity', '1', LABELID),

    children: text('content', 'Text를 입력하세요', LABELID),
  };

  const textContent = {
    color: select(
      colorSelect.label,
      colorSelect.options,
      colorSelect.defaultValue,
      TEXTID,
    ),

    fontSize: text('font size', '34px', TEXTID),

    lineHeight: text('line height', '54px', TEXTID),

    letterSpacing: text(
      'letter spacing',
      '-0.68px',
      TEXTID,
    ),

    width: text('width', '100%', TEXTID),

    fontWeight: text(
      'font weight (bold | medium | normal | weight',
      '500',
      TEXTID,
    ),

    opacity: text('opacity', '1', TEXTID),

    isPremiaFont: boolean(
      '프레미아 폰트 사용',
      true,
      TEXTID,
    ),

    children: text('content', 'Text를 입력하세요', TEXTID),
  };

  return (
    <Contact
      labelContent={labelContent}
      textContent={textContent}
    />
  );
};
