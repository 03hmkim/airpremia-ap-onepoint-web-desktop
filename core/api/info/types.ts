export enum EPostType {
  NEWS = 'NEWS',
  NOTICE = 'NOTICE',
}

export interface IInfoAccidentsDetailReq {
  postId: string;
  hasPrevNext: boolean;
}

export interface IGetInfoInquires {
  page: number;
  size: number;
  sort: string;
}

export interface IPostInfoInquiry {
  contents: string;
  email: string;
  familyName: string;
  personalName: string;
  phone: string;
  receiveEmail: string;
  type: string;
}

export interface IPutInfoInquiry
  extends IPostInfoInquiry,
    IGetInfoInquiry {}

export interface IGetInfoInquiry {
  inquiryId: string;
}

export interface IDeleteInfoInquiry
  extends IGetInfoInquiry {}

export interface IGetInfoNotices {
  page: number;
  size: number;
  sort: string;
  title: string;
}

export interface IGetInfoNotice {
  noticeId: string;
}

export interface IGetInfoQuestions {
  categoryId: number;
  page: number;
  size: number;
  sort: string;
}

export interface IGetInfoQuestion {
  questionId: number;
}

export interface IGetInfoQuestionCategory {
  categoryId: number;
}

export interface IGetInfoAccidentsDetail {
  accidentId: string;
}

export interface IGetInfoAccidentList
  extends IGetInfoAccidentsDetail {
  page: number;
  postType: string;
  size: number;
}

export interface IPaginationProps {
  accidentId: string;
  page?: number;
  size?: number;
  postType?: EPostType;
}

export interface IAccidentData {
  id: string;
  name: string;
  flightNumber: string;
  occurredAt: string;
  createdAt: string;
  updatedAt: string;
  [key: string]: string | number | boolean;
}

export interface IAccidentDetail extends IAccidentData {
  description: string;
  contact: string;
  contact2: string;
}

export interface IAccidentContentList {
  id: string;
  postType: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  important: boolean;
}

export interface IAccidentNoticeData {
  posts: IAccidentContentList[];
  totalCount: number;
}

export interface IAccidentNewsData {
  posts: IAccidentContentList[];
  totalCount: number;
}

export interface IShortcutData {
  createdAt: string;
  id: string;
  orderIndex: number;
  postType: string;
  title: string;
  updatedAt: string;
}

export interface IAccidentPostData {
  id: string;
  postType: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  prevPost?: IShortcutData | null;
  nextPost?: IShortcutData | null;
}
