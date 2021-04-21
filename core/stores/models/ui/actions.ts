import { createAction } from 'typesafe-actions';
import {
  IModalShowProps,
  IModalHideProps,
  IToastPopup,
} from './types';

export const MODAL_SHOW = 'ui/MODAL_SHOW';
export const handleModalShow = createAction(MODAL_SHOW)<
  IModalShowProps
>();

export const MODAL_HIDE = 'ui/MODAL_HIDE';
export const handleModalHide = createAction(MODAL_HIDE)<
  IModalHideProps
>();

export const NEW_MODAL_SHOW = 'ui/NEW_MODAL_SHOW';
export const handleNewModalShow = createAction(
  NEW_MODAL_SHOW,
)<string>();

export const NEW_MODAL_HIDE = 'ui/NEW_MODAL_HIDE';
export const handleNewModalHide = createAction(
  NEW_MODAL_HIDE,
)();

export const TOAST_POPUP_SHOW = 'ui/TOAST_POPUP_SHOW';
export const handleToastPopupShow = createAction(
  TOAST_POPUP_SHOW,
)<IToastPopup>();

export const TOAST_POPUP_HIDE = 'ui/TOAST_POPUP_HIDE';
export const handleToastPopupHide = createAction(
  TOAST_POPUP_HIDE,
)();

export const LOADING_SHOW = 'ui/LOADING_SHOW';
export const handleLoadingShow = createAction(
  LOADING_SHOW,
)();
export const LOADING_HIDE = 'ui/LOADING_HIDE';
export const handleLoadingHide = createAction(
  LOADING_HIDE,
)();
