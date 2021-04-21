import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from 'axios';
import { CommonResp } from '../../../api/config';
import { IGetInfoNotices, IGetInfoNotice } from '../../../api/info/types';

export const NOTICE_LIST_REQUEST = 
    'notice/NOTICE_LIST_REQUEST';
export const NOTICE_LIST_SUCCESS = 
    'notice/NOTICE_LIST_SUCCESS';
export const NOTICE_LIST_FAILURE = 
    'notice/NOTICE_LIST_FAILURE';

export const handleNoticesLoad = createAsyncAction(
    NOTICE_LIST_REQUEST,
    NOTICE_LIST_SUCCESS,
    NOTICE_LIST_FAILURE
)<IGetInfoNotices, CommonResp, AxiosError>();


export const NOTICE_CONTENT_REQUEST = 
    'notice/NOTICE_CONTENT_REQUEST';
export const NOTICE_CONTENT_SUCCESS = 
    'notice/NOTICE_CONTENT_SUCCESS';
export const NOTICE_CONTENT_FAILURE = 
    'notice/NOTICE_CONTENT_FAILURE';

export const handleNoticeContentLoad = createAsyncAction(
    NOTICE_CONTENT_REQUEST,
    NOTICE_CONTENT_SUCCESS,
    NOTICE_CONTENT_FAILURE
)<IGetInfoNotice, CommonResp, AxiosError>();
