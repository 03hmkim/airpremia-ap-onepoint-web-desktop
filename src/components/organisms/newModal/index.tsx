import { FC, useRef } from 'react';
import { useModal } from 'src/hooks';
import { createPortal } from 'react-dom';
import {
  ModalCenterWrapper,
  CenterPopup,
} from 'src/components';
import { IProps as ICenterPopupProps } from 'src/components/templates/centerPopup';

interface IStyle {
  overflow?: 'hidden' | 'initial' | string;
  className?: string;
  tabmenu?: string;
}

interface IProps extends IStyle {
  title: ICenterPopupProps['title'];
  body: ICenterPopupProps['body'];
  button?: ICenterPopupProps['button'];
  type?: ICenterPopupProps['type'];
  hasCloseButton?: boolean;
  onClose?: () => void;
  onClickBackground?: () => void;
  
}
/**
 * 단일 모달을 위한 컴포넌트
 */
const NewModal: FC<IProps> = ({
  onClose,
  onClickBackground,
  hasCloseButton,
  tabmenu,
  ...props
}) => {
  const { onHideNewModal } = useModal();
  const ref = useRef<HTMLDivElement | null>(null);

  ref.current = document.querySelector('#popup-center');

  return ref.current
    ? createPortal(
        <ModalCenterWrapper
          onClose={onClose || onHideNewModal}
          onClickBackground={
            onClickBackground || onHideNewModal
          }
          overflow={props.overflow}
          className={props.className}
          hasCloseButton={hasCloseButton}
        >
          <CenterPopup
            className={props.className}
            tabmenu={tabmenu}
            {...props}
          />
        </ModalCenterWrapper>,
        ref.current,
      )
    : null;
};

export default NewModal;
