import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import {
  IGetInfoAccidentList,
  IGetInfoAccidentsDetail,
  IInfoAccidentsDetailReq,
  IPaginationProps,
} from '../../../api/info/types';
import { CommonResp } from '@airpremia/core/api/config';

/** 다크사이트 open 상태 체크 */
export const ACCIDENT_OPEN_STATUS_REQUEST =
  'accident/ACCIDENT_OPEN_STATUS_REQUEST';
export const ACCIDENT_OPEN_STATUS_SUCCESS =
  'accident/ACCIDENT_OPEN_STATUS_SUCCESS';
export const ACCIDENT_OPEN_STATUS_FAILURE =
  'accident/ACCIDENT_OPEN_STATUS_FAILURE';

export const accidentOpenStatusActions = createAsyncAction(
  ACCIDENT_OPEN_STATUS_REQUEST,
  ACCIDENT_OPEN_STATUS_SUCCESS,
  ACCIDENT_OPEN_STATUS_FAILURE,
)<void, CommonResp, AxiosError>();

/** 사고 리스트 전체 조회 */
export const ACCIDENT_LIST_REQUEST =
  'accident/ACCIDENT_LIST_REQUEST';
export const ACCIDENT_LIST_SUCCESS =
  'accident/ACCIDENT_LIST_SUCCESS';
export const ACCIDENT_LIST_FAILURE =
  'accident/ACCIDENT_LIST_FAILURE';

export const accidentListActions = createAsyncAction(
  ACCIDENT_LIST_REQUEST,
  ACCIDENT_LIST_SUCCESS,
  ACCIDENT_LIST_FAILURE,
)<void, CommonResp, AxiosError>();

/** 사고 상세 조회 */
export const ACCIDENT_DETAIL_REQUEST =
  'accident/ACCIDENT_DETAIL_REQUEST';
export const ACCIDENT_DETAIL_SUCCESS =
  'accident/ACCIDENT_DETAIL_SUCCESS';
export const ACCIDENT_DETAIL_FAILURE =
  'accident/ACCIDENT_DETAIL_FAILURE';

// @TODO: 서버 공통 Response 작업 완료 되면 CommonResp 로 설정해야함
export const accidentDetailDataActions = createAsyncAction(
  ACCIDENT_DETAIL_REQUEST,
  ACCIDENT_DETAIL_SUCCESS,
  ACCIDENT_DETAIL_FAILURE,
)<IGetInfoAccidentsDetail, CommonResp, AxiosError>();

/** news, notice, 사고 상세 받아오기 */
export const ACCIDENT_CONTENTS_LIST_REQUEST =
  'accident/ACCIDENT_CONTENTS_LIST_REQUEST';
export const ACCIDENT_CONTENTS_LIST_SUCCESS =
  'accident/ACCIDENT_CONTENTS_LIST_SUCCESS';
export const ACCIDENT_CONTENTS_LIST_FAILURE =
  'accident/ACCIDENT_CONTENTS_LIST_FAILURE';

export const accidentContentListActions = createAsyncAction(
  ACCIDENT_CONTENTS_LIST_REQUEST,
  ACCIDENT_CONTENTS_LIST_SUCCESS,
  ACCIDENT_CONTENTS_LIST_FAILURE,
)<
  IPaginationProps,
  { news: CommonResp; notice: CommonResp },
  AxiosError
>();

/** 사고 게시물 리스트 조회 */
export const ACCIDENT_INFO_LIST_REQUEST =
  'accident/ACCIDENT_INFO_LIST_REQUEST';
export const ACCIDENT_INFO_LIST_SUCCESS =
  'accident/ACCIDENT_INFO_LIST_SUCCESS';
export const ACCIDENT_INFO_LIST_FAILURE =
  'accident/ACCIDENT_INFO_LIST_FAILURE';

export const accidentInfoListActions = createAsyncAction(
  ACCIDENT_INFO_LIST_REQUEST,
  ACCIDENT_INFO_LIST_SUCCESS,
  ACCIDENT_INFO_LIST_FAILURE,
)<IGetInfoAccidentList, CommonResp, AxiosError>();

/** 사고 게시물 상세 조회 */
export const ACCIDENT_POST_DETAIL_REQUEST =
  'accident/ACCIDENT_POST_DETAIL_REQUEST';
export const ACCIDENT_POST_DETAIL_SUCCESS =
  'accident/ACCIDENT_POST_DETAIL_SUCCESS';
export const ACCIDENT_POST_DETAIL_FAILURE =
  'accident/ACCIDENT_POST_DETAIL_FAILURE';

export const accidentPostDetailActions = createAsyncAction(
  ACCIDENT_POST_DETAIL_REQUEST,
  ACCIDENT_POST_DETAIL_SUCCESS,
  ACCIDENT_POST_DETAIL_FAILURE,
)<IInfoAccidentsDetailReq, CommonResp, AxiosError>();
