import { NextPage } from 'next';
import React, {
  Fragment,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Title } from 'src/components';
import {
  EDefaultModalTable,
  EModalPosition,
  EModalAnimationType,
} from '@airpremia/core/stores/models/ui';
import { useScroll, useSsr, useLoading } from '@airpremia/core/hooks';
import {
  PayReceipt,
  ModalRightSide,
  Ssr,
} from 'src/components';
import { ISsrRequestItem } from 'src/hooks/useSsr/useSsr';
import { useSsr as useSsrLocal } from 'src/hooks';
import {
  ssrBundlePanelResources,
  ssrOriginalPanelResources,
  ssrSpecialPanelResources,
} from 'src/hooks/useSsr/dataset';

const modalOptions = {
  isOpen: true,
  hasBackButton: false,
  hasCloseButton: true,
  target: EDefaultModalTable.NONE,
  position: EModalPosition.SIDE_RIGHT,
  animationType: EModalAnimationType.NONE,
};

const Index: NextPage = () => {
  const { upScroll } = useScroll();
  const router = useRouter();
  const TitleChildren = (
    <Fragment>
      나에게 필요한 여행 옵션을
      <br />
      관리 해보세요 :-)
    </Fragment>
  );
  const { onHandleUpdateSsr } = useSsr();
  const { isLoading, showLoading, hideLoading } = useLoading();
  const {
    ssrUpdate,
    onLoadSsr,
    getSsrPanelsElement,
    getSsrExpansionPanelsElement,
    getModalElement,
    priceDataset,
    getSsrExpansionPanels,
    journeys,
    passengers,
  } = useSsrLocal();
  // TODO bundle checkbox 기능

  const [modalName, setModalName] = useState<string>('');

  const openModal = (target?: string) => {
    if (target === undefined) return;

    setModalName(target);
  };
  const openModalLocal = (id: string) => {
    openModal(id);
  };
  const closeModal = () => {
    openModal('');
  };

  const trips = useMemo(() => {
    switch (modalName) {
      case 'baggage':
        return []; // TODO
      case 'meal':
        return []; // TODO
      case 'seat':
        return journeys;
      default:
        return [];
    }
  }, [modalName]);

  const onSubmit = async (ssrIds?: ISsrRequestItem[]) => {
    onHandleUpdateSsr();

    if (!ssrIds?.length) {
      closeModal();
      return;
    }

    // TODO 추후 reducer 로 변경
    await ssrUpdate(ssrIds);
    closeModal();
  };

  const onClickPayReceipt = useCallback(async () => {
    await showLoading();
    await router.push('/ticket/pay/confirm');
  }, []);

  const onClickBundles = useCallback(() => {
    // TODO onClickBundles
  }, []);

  useEffect(() => {
    upScroll();

    if (isLoading) hideLoading();
  }, []);

  useEffect(() => {
    onLoadSsr();
  }, []);

  return (
    <S.container>
      <Ssr
        title={<Title>{TitleChildren}</Title>}
        bundlePanels={getSsrPanelsElement({
          list: ssrBundlePanelResources,
          onClick: onClickBundles,
        })}
        originalPanels={getSsrExpansionPanelsElement({
          list: getSsrExpansionPanels(
            ssrOriginalPanelResources,
          ),
          onClick: openModalLocal,
        })}
        specialPanels={getSsrExpansionPanelsElement({
          list: getSsrExpansionPanels(
            ssrSpecialPanelResources,
          ),
          onClick: openModalLocal,
        })}
        receipt={
          <PayReceipt
            dataset={priceDataset}
            buttonLabel="결제방법 선택"
            onClick={onClickPayReceipt}
          />
        }
      />
      {modalName && (
        <ModalRightSide
          modal={modalOptions}
          onHide={closeModal}
        >
          {getModalElement({
            modalName,
            trips,
            passengers,
            onSubmit,
          })}
        </ModalRightSide>
      )}
    </S.container>
  );
};

const S = {
  container: styled.div``,
};

export default Index;
