import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export enum EModalType {
  MODAL = 'modal',
  TOAST = 'toast',
}

export enum EDefaultModalTable {
  NONE = 'NONE',
  PAGEOUT_ALERT = 'PAGEOUT_ALERT',
  REGISTERED_USER = 'REGISTERED_USER',
  CHANGE_EMAIL = 'CHANGE_EMAIL',
  SAVED_LOGIN_INFO = 'SAVED_LOGIN_INFO',
  SIGNUP_SUCCESS = 'SIGNUP_SUCCESS',
}

export enum EModalPosition {
  CENTER, // 중앙에 뜨는 모달
  SIDE_RIGHT, // 오른쪽 사이드에서 뜨는 모달
}

export enum EModalAnimationType {
  // 추후에 업데이트 할 예정 (현재는 NONE이 Default)
  FADE,
  SWIPE,
  NONE,
}

interface IModalTypeProps {
  type?: EModalType;
  data?: any;
}

export interface IModalShowProps extends IModalTypeProps {
  options: IModalDefaultState;
}

export interface IModalHideProps extends IModalTypeProps {
  // @TODO: 추후 multi modal이 될 경우 사용
}

export interface IModalDefaultState {
  isOpen?: boolean;
  hasBackButton?: boolean;
  hasCloseButton?: boolean;
  target: EDefaultModalTable;
  position?: EModalPosition;
  animationType?: EModalAnimationType;
  data?: any;
}

export enum EToastPopupType {
  NORMAL = 'normal',
  ERROR = 'error',
}

export interface IToastPopup {
  isShow?: boolean;
  type?: EToastPopupType;
  text: string;
}

export interface IUiState {
  modal: IModalDefaultState;
  newModal: {
    target: EDefaultModalTable | string;
  };
  toastPopup: IToastPopup;
  /** 전체 로딩 유무 */
  isLoading: boolean;
  [index: string]: any; // dynamic 변수 선언을 위해 추가함 ex> store[dynamic_variable]
}

export type IUiAction = ActionType<typeof actions>;
