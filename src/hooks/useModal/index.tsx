import { useCallback } from 'react';
import { includes } from 'lodash';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '@airpremia/core/stores';
import {
  handleModalShow,
  handleModalHide,
  handleNewModalShow,
  IModalShowProps,
  IModalHideProps,
  handleNewModalHide,
  handleToastPopupShow,
  handleToastPopupHide,
} from '@airpremia/core/stores/models/ui';
import { EAuthPopup } from '@airpremia/core/stores/models/auth';
import { useUrl } from 'src/hooks';

const bodyDomModifier = (property: string) =>
  (document.getElementsByTagName(
    'body',
  )[0].style.overflow = property);

const useModal = () => {
  const router = useRouter();
  const { url } = useUrl();

  const UIStore = useSelector(
    (state: RootStore) => state.ui,
  );
  const dispatch = useDispatch();

  const handlePopupHide = () => {
    router.push(url, undefined, {
      shallow: true,
    });
  };

  const onShowModal = useCallback(
    (props: IModalShowProps, data?: any) => {
      bodyDomModifier('hidden');
      const newProps = data
        ? { ...props, data: data }
        : props;

      return dispatch(handleModalShow(newProps));
    },
    [dispatch],
  );

  const onHideModal = (props?: IModalHideProps) => {
    bodyDomModifier('unset');
    const uiType = UIStore[props?.type || ''];

    if (includes(EAuthPopup, uiType.target.toLowerCase())) {
      handlePopupHide();
      return setTimeout(
        () => dispatch(handleModalHide(props || {})),
        0,
      );
    }

    return dispatch(handleModalHide(props || {}));
  };

  const onShowNewModal = useCallback(
    (type: string) => {
      bodyDomModifier('hidden');
      dispatch(handleNewModalShow(type));
    },
    [dispatch],
  );

  const onHideNewModal = useCallback(() => {
    bodyDomModifier('unset');
    dispatch(handleNewModalHide());
  }, [dispatch]);

  const onShowToastPopup = useCallback(
    (text: string) => {
      dispatch(handleToastPopupShow({ text }));
    },
    [dispatch],
  );

  const onHideToastPopup = useCallback(() => {
    dispatch(handleToastPopupHide());
  }, [dispatch]);

  return {
    UIStore,
    onShowModal,
    onHideModal,
    onShowNewModal,
    onHideNewModal,
    onShowToastPopup,
    onHideToastPopup,
  };
};

export default useModal;
