import React, { FC } from 'react';
import {
  withKnobs,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs';
import BannerDarksite from '.';
import * as Colors from '@airpremia/cdk/styles/colors';

const TITLE_TEXT_ID = 'Atoms/Title Text';
const TITLE_SUB_TEXT_ID = 'Atoms/Subtitle Text';

export default {
  title: 'desktop / Molecules / BannerDarksite',
  component: BannerDarksite,
  decorators: [withKnobs],
};

const colorSelect = {
  label: 'color',
  options: {
    ...Colors,
  },
  defaultValue: Colors.WHITE1,
};

export const bannerDarksite: FC = () => {
  const titleTextContent = {
    color: select(
      colorSelect.label,
      colorSelect.options,
      Colors.DARK_GRAY1,
      TITLE_TEXT_ID,
    ),
    fontSize: text('font size', '32px', TITLE_TEXT_ID),
    lineHeight: text('line height', '44px', TITLE_TEXT_ID),
    letterSpacing: text(
      'letter spacing',
      '-0.68px',
      TITLE_TEXT_ID,
    ),
    width: text('width', '100%', TITLE_TEXT_ID),
    fontWeight: text(
      'font weight (bold | medium | normal | weight',
      'bold',
      TITLE_TEXT_ID,
    ),
    opacity: text('opacity', '1', TITLE_TEXT_ID),
    isPremiaFont: boolean(
      '프레미아 폰트 사용',
      true,
      TITLE_TEXT_ID,
    ),
    textAlign: 'center',
    children: 'AP123편 사고 경과 안내',
  };
  const subtitleTextContent = {
    color: select(
      colorSelect.label,
      colorSelect.options,
      Colors.DARK_GRAY1,
      TITLE_SUB_TEXT_ID,
    ),
    fontSize: text('font size', '16px', TITLE_SUB_TEXT_ID),
    lineHeight: text(
      'line height',
      '20px',
      TITLE_SUB_TEXT_ID,
    ),
    letterSpacing: text(
      'letter spacing',
      '-0.32px',
      TITLE_SUB_TEXT_ID,
    ),
    width: text('width', '100%', TITLE_SUB_TEXT_ID),
    fontWeight: text(
      'font weight (bold | medium | normal | weight',
      'medium',
      TITLE_SUB_TEXT_ID,
    ),
    opacity: text('opacity', '0.9', TITLE_SUB_TEXT_ID),
    isPremiaFont: boolean(
      '프레미아 폰트 사용',
      false,
      TITLE_SUB_TEXT_ID,
    ),
    children: '심려를 끼쳐드려 죄송합니다.',
  };
  return (
    <BannerDarksite
      titleTextContent={titleTextContent}
      subtitleTextContent={subtitleTextContent}
    />
  );
};
