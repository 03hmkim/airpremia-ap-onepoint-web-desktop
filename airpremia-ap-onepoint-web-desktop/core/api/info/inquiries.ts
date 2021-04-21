import { pickBy } from 'lodash';
import http from '../http';
import {
  IDeleteInfoInquiry,
  IGetInfoInquires,
  IGetInfoInquiry,
  IPostInfoInquiry,
  IPutInfoInquiry,
} from './types';
import { CommonResp } from '../config';

/** 1대1 문의 리스트 조회 */
export const getInfoInquiries = (
  payload: IGetInfoInquires,
) =>
  http.get<IGetInfoInquires, CommonResp>(
    '/info/inquiries',
    {
      params: payload,
    },
  );

/** 1대1 문의 등록 */
export const postInfoInquiry = (
  payload: IPostInfoInquiry,
) =>
  http.post<IPostInfoInquiry, CommonResp>(
    '/info/inquiries',
    payload,
  );

/** 1대1 문의 상세 조회 */
export const getInfoInquiry = ({
  inquiryId,
}: IGetInfoInquiry) =>
  http.get<IGetInfoInquiry, CommonResp>(
    `/info/inquiries/${inquiryId}`,
  );

/** 1대1 문의 수정 */
export const putInfoInquiry = (
  payload: IPutInfoInquiry,
) => {
  const pickedPayload = pickBy(
    payload,
    (_: string, key: string) => key != 'inquiryId',
  );
  return http.put<IPutInfoInquiry, CommonResp>(
    `/info/inquiries/${payload.inquiryId}`,
    pickedPayload,
  );
};

/** 1대1 문의 삭제 */
export const deleteInfoInquiry = ({
  inquiryId,
}: IDeleteInfoInquiry) =>
  http.delete<IDeleteInfoInquiry, CommonResp>(
    `/info/inquiries/${inquiryId}`,
  );
