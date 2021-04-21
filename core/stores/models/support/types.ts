import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export interface ISupportEventListItem {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  thumbnailUrl: string;
  dDay: number;
  labels?: ('apply-end' | 'selecting')[];
}

export interface ISupportState {
  event: {
    list: {
      ing: ISupportEventListItem[];
      ended: ISupportEventListItem[];
      applied: ISupportEventListItem[];
    };
    detail?: ISupportEventListItem;
  };
}

export type ISupportAction = ActionType<typeof actions>;
