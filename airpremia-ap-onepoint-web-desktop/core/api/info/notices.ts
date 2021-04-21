import http from '../http';
import { IGetInfoNotice, IGetInfoNotices } from './types';
import { CommonResp } from '../config';

/** 공지사항 조회 */
export const getInfoNotices = (payload: IGetInfoNotices) =>
  http.get<IGetInfoNotices, CommonResp>('/info/notices', {
    params: payload,
  });

/** 공지사항 상세 조회 */
export const getInfoNotice = ({
  noticeId,
}: IGetInfoNotice) =>
  http.get<IGetInfoNotice, CommonResp>(
    `/info/notices/${noticeId}`,
  );
