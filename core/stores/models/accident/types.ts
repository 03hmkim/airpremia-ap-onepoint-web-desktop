import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import {
  IAccidentData,
  IAccidentDetail,
  IAccidentNewsData,
  IAccidentNoticeData,
  IAccidentPostData,
} from '@airpremia/core/api/info/types';

export type IAccidentAction = ActionType<typeof actions>;

export interface IAccidentState {
  status: boolean;
  isAccidentListRequest: boolean;
  isAccidentNoticeRequest: boolean;
  isAccidentNewsRequest: boolean;
  isCurrentAccidentRequest: boolean;
  isAccidentPostDetailRequest: boolean;

  accidentList: IAccidentData[] | any;
  postDetailData: IAccidentPostData | null;
  currentAccidentData: IAccidentDetail | null;
  accidentNoticeData: IAccidentNoticeData | null;
  accidentNewsData: IAccidentNewsData | null;
}
