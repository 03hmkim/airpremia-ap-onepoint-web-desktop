import React, { Fragment } from 'react';
import { mapSplit } from './util';

export const mapNewLine = (str: string) =>
  mapSplit(str, (item, i) => (
    <Fragment key={i.toString()}>
      {item} <br />
    </Fragment>
  ));
