import { flow, split, head, lowerFirst } from 'lodash/fp';

export const convertSsrType = (raw: string) => {
  return flow(split(':'), head, lowerFirst)(raw);
};
