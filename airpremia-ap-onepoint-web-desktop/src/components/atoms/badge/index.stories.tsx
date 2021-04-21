import React, { FC } from 'react';
import styled from 'styled-components';
import { withKnobs, select } from '@storybook/addon-knobs';
import Badge from './';
import * as Colors from '@airpremia/cdk/styles/colors';

export default {
  title: 'desktop / Atoms / Badge',
  component: Badge,
  decorators: [withKnobs],
};

const backgroundColorSelect = {
  label: 'background-color',
  options: {
    ...Colors,
  },
  defaultValue: Colors.DARK_GRAY1,
};

export const 벳지: FC = () => {
  return (
    <S.container>
      <Badge
        backgroundColor={select(
          backgroundColorSelect.label,
          backgroundColorSelect.options,
          backgroundColorSelect.defaultValue,
        )}
      >
        NOTICE
      </Badge>
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 60px;
    height: 24px;
  `,
};
