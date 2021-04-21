import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import {
  MODAL_SHOW,
  MODAL_HIDE,
  NEW_MODAL_SHOW,
  NEW_MODAL_HIDE,
  TOAST_POPUP_SHOW,
  TOAST_POPUP_HIDE,
  LOADING_SHOW,
  LOADING_HIDE,
} from './actions';
import {
  IUiState,
  IUiAction,
  EModalAnimationType,
  EDefaultModalTable,
  EModalPosition,
  EModalType,
  EToastPopupType,
} from './types';

const initialState: IUiState = {
  newModal: {
    target: EDefaultModalTable.NONE,
  },
  modal: {
    isOpen: false,
    hasBackButton: false,
    hasCloseButton: true,
    target: EDefaultModalTable.NONE,
    position: EModalPosition.CENTER,
    animationType: EModalAnimationType.NONE,
    data: null,
  },
  toastPopup: {
    isShow: false,
    text: '',
    type: EToastPopupType.NORMAL,
  },
  isLoading: false,
};

const accident = createReducer<IUiState, IUiAction>(
  initialState,
  {
    [MODAL_SHOW]: (state, { payload }) =>
      produce(state, (draft) => {
        const {
          type = EModalType.MODAL,
          options,
          data,
        } = payload;
        const {
          hasBackButton,
          hasCloseButton,
          target,
          position,
          animationType,
        } = options;

        draft[type].isOpen = true;
        draft[type].target = target;
        draft[type].hasBackButton =
          hasBackButton || state[type].hasBackButton;
        draft[type].hasCloseButton =
          hasCloseButton || state[type].hasCloseButton;
        draft[type].position =
          position || state[type].position;
        draft[type].animationType =
          animationType || state[type].animationType;
        draft[type].data = data || state[type].data;
      }),

    [MODAL_HIDE]: (state, { payload }) =>
      produce(state, (draft) => {
        const { type = EModalType.MODAL } = payload;
        draft[type] = initialState[type];
      }),

    [NEW_MODAL_SHOW]: (state, { payload }) =>
      produce(state, (draft) => {
        draft.newModal.target = payload;
      }),

    [NEW_MODAL_HIDE]: (state) =>
      produce(state, (draft) => {
        draft.newModal.target = EDefaultModalTable.NONE;
      }),

    [TOAST_POPUP_SHOW]: (state, { payload }) =>
      produce(state, (draft) => {
        const { type, text } = payload;
        draft.toastPopup.isShow = true;
        draft.toastPopup.text = text;
        draft.toastPopup.type =
          type || EToastPopupType.NORMAL;
      }),

    [TOAST_POPUP_HIDE]: (state) =>
      produce(state, (draft) => {
        draft.toastPopup.isShow = false;
        draft.toastPopup.text = '';
      }),
    [LOADING_SHOW]: (state) =>
      produce(state, (draft) => {
        draft.isLoading = true;
      }),
    [LOADING_HIDE]: (state) =>
      produce(state, (draft) => {
        draft.isLoading = false;
      }),
  },
);

export default accident;
