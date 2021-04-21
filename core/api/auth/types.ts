/** @deprecated */
export interface ILoginReq {
  email: string;
  password: string;
  type: string;
}

/** @deprecated */
export interface ILoginRequiredData {
  data: ILoginReq;
  isLoginStay: boolean;
  router?: any;
}

/** @deprecated */
export interface ICountryCodeDetailResp {
  countryNumber: number;
  description: string;
}

/** @deprecated */
export interface ISortedCountryCodeData {
  [propName: string]: ICountryCodeDetailResp[];
}

/** @deprecated */
export interface ISimpleValueData {
  target: string;
  value: string;
}
