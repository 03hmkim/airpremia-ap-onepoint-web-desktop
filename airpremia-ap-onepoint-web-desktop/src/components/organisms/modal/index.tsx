import { FC, useEffect, useRef } from 'react';
import { useModal } from 'src/hooks';
import { mapper, makeRenderDom } from './modalMapper';
import { createPortal } from 'react-dom';
import {
  EModalPosition,
  EModalType,
  EDefaultModalTable,
} from '@airpremia/core/stores/models/ui';

interface IProps {
  onClearToken?: () => void;
}
/**
 * 단일 모달을 위한 컴포넌트
 */
const Modal: FC<IProps> = ({ onClearToken }) => {
  const {
    UIStore: { modal },
    onHideModal,
  } = useModal();
  const ref = useRef<HTMLDivElement | null>(null);
  const modalMap = mapper(modal);
  const onHide = () => {
    if (
      modal.target === EDefaultModalTable.SAVED_LOGIN_INFO
    ) {
      onClearToken && onClearToken();
    }
    onHideModal({ type: EModalType.MODAL });
  };

  const render = () =>
    makeRenderDom({
      modal,
      onHide,
      children: modalMap[modal.target],
    })[modal.position || EModalPosition.CENTER];

  useEffect(() => {
    ref.current = document.querySelector('#popup-root');
  }, []);

  return modal.isOpen && ref.current
    ? createPortal(render(), ref.current)
    : null;
};

export default Modal;
