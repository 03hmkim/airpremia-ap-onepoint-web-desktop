import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
export interface INoticeState {
    isNoticeRequest: boolean;
    isNoticeContentRequest: boolean;
    notices: INoticesResp[];
    noticeContent: INoticeContentResp[];
}

export interface INoticesResp {
    id: number,
    title: string,
    createdAt: string,
    updatedAt: string,
    deletedAt: string,
    readCount: string,
    read: boolean,
    contents: string,
    readers: string
}

export interface INoticeContentResp {
    content: string;
    lang: string;
    title: string;
    noticeId: number;
}

export type INoticesAction = ActionType<typeof actions>;