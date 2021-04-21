// @ts-nocheck
import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '@airpremia/core/stores';

import Fonts from '../src/styles/fonts';
import GlobalStyle from '../src/styles/globalStyle';
import Normalize from '../src/styles/normalize';
import Reset from '../src/styles/reset';

import { withNextRouter } from './withNextRouter';

function withGlobalStyles(storyFn) {
  return (
    <Provider store={configureStore()}>
      <Reset />
      <Fonts />
      <GlobalStyle />
      <Normalize />
      {storyFn()}
    </Provider>
  );
}

addDecorator(withGlobalStyles);
addDecorator(withNextRouter);

// automatically import all files ending in *.stories.tsx
configure(
  require.context('../', true, /\.stories\.tsx?$/),
  module,
);
