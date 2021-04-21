import http from '../http';
import {
  IGetInfoQuestion,
  IGetInfoQuestionCategory,
  IGetInfoQuestions,
} from './types';
import { CommonResp } from '../config';

/** FAQ 목록 조회 */
export const getInfoQuestions = (
  payload: IGetInfoQuestions,
) =>
  http.get<IGetInfoQuestions, CommonResp>(
    '/info/questions',
    {
      params: payload,
    },
  );

/** FAQ 조회 */
export const getInfoQuestion = ({
  questionId,
}: IGetInfoQuestion) =>
  http.get<IGetInfoQuestion, CommonResp>(
    `/info/questions/${questionId}`,
  );

/** 모든 카테고리 조회 */
export const getInfoQuestionCategories = () =>
  http.get<void, CommonResp>('/info/questions/categories');

/** 카테고리 조회 */
export const getInfoQuestionCategory = ({
  categoryId,
}: IGetInfoQuestionCategory) =>
  http.get<IGetInfoQuestionCategory, CommonResp>(
    `/info/questions/categories${categoryId}`,
  );
