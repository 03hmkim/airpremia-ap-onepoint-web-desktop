export interface CommonResp<T = any> {
  data: T;
  code: number;
  message: string;
  error?: any;
  // TODO refactoring 후에 제거
  [anyData: string]: any;
}

export interface StatusResp {
  status: boolean;
}
