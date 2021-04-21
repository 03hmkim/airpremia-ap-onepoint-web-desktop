import { pick } from 'lodash';
import http from '../http';
import { StatusResp, CommonResp } from '../config';
import {
  IGetInfoAccidentList,
  IGetInfoAccidentsDetail,
  IInfoAccidentsDetailReq,
} from './types';

/** 사고 리스트 조회 */
// TODO 백엔드에서 data 구조 변경하면 CommonResp 로 변경
export const getInfoAccidentsList = () =>
  http.get<void, any>('/info/accidents');

/** 사고 상세 조회 */
export const getInfoAccidentDetail = ({
  accidentId,
}: IGetInfoAccidentsDetail) =>
  http.get<IGetInfoAccidentsDetail, any>(
    `/info/accidents/${accidentId}`,
  );

/** 사고 게시물(post 내부) 상세 조회 */
export const getInfoAccidentsPostDetail = (
  payload: IInfoAccidentsDetailReq,
) => {
  const params = pick(payload, ['hasPrevNext']);
  // TODO 백엔드에서 data 구조 변경하면 CommonResp 로 변경
  return http.get<IInfoAccidentsDetailReq, any>(
    `/info/accidents/posts/${payload.postId}`,
    {
      params,
    },
  );
};

// TODO 백엔드에서 data 구조 변경하면 CommonResp 로 변경
/** 다크사이트 활성화 여부 조회 */
export const getInfoAccidentsStatus = () =>
  http.get<void, CommonResp<StatusResp>>(
    '/info/accidents/status',
  );

/** 사고 게시물 리스트 조회 */
export const getInfoAccidentList = ({
  accidentId,
  page = 0,
  postType,
  size = 8,
}: IGetInfoAccidentList) => {
  return http.get<IGetInfoAccidentList, any>(
    `/info/accidents/${accidentId}/posts`,
    {
      params: { page, postType, size },
    },
  );
};
