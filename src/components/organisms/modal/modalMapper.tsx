import {
  EDefaultModalTable,
  IModalDefaultState,
  EModalPosition,
} from '@airpremia/core/stores/models/ui';
import {
  ModalCenter,
  ModalRightSide,
  PopupPageoutAlert,
  ChangeEmail,
  RegisteredUser,
  SignupSuccess,
  SavedLoginInfoPopup,
} from 'src/components';
import { IProps as IModalCenterProps } from 'src/components/molecules/modalCenter';
import { IProps as IModalRightSideProps } from 'src/components/molecules/modalRightSide';

type modalProps = IModalCenterProps | IModalRightSideProps;

export const makeRenderDom = ({
  ...props
}: modalProps) => ({
  [EModalPosition.CENTER]: (
    <ModalCenter {...props}>{props.children}</ModalCenter>
  ),
  [EModalPosition.SIDE_RIGHT]: (
    <ModalRightSide {...props}>
      {props.children}
    </ModalRightSide>
  ),
});

export const mapper = (modal: IModalDefaultState) => {
  return {
    [EDefaultModalTable.NONE]: null,
    [EDefaultModalTable.PAGEOUT_ALERT]: (
      <PopupPageoutAlert {...modal} />
    ),
    [EDefaultModalTable.REGISTERED_USER]: (
      <RegisteredUser />
    ),
    [EDefaultModalTable.CHANGE_EMAIL]: (
      <ChangeEmail originEmail={'test@airpremia.com'} />
    ),
    [EDefaultModalTable.SAVED_LOGIN_INFO]: (
      <SavedLoginInfoPopup />
    ),
    [EDefaultModalTable.SIGNUP_SUCCESS]: <SignupSuccess />,
  };
};
