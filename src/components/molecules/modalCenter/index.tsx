// @TODO: 추후 모달 레이아웃 통일 용도로 개발.. 미완성

import styled from 'styled-components';
import { FC, ReactElement } from 'react';
import {
  IModalHideProps,
  IModalDefaultState,
} from '@airpremia/core/stores/models/ui';
import { Dim, XButton } from 'src/components';
import { WHITE1 } from '@airpremia/cdk/styles/colors';

export interface IProps {
  modal: IModalDefaultState;
  onHide: (props: IModalHideProps) => void;
  children: ReactElement | null;
}

const ModalCenter: FC<IProps> = ({
  modal,
  onHide,
  children,
}: IProps) => {
  const { hasCloseButton } = modal;
  return (
    <S.container>
      <S.wrapper id="modal-wrapper">
        <S.xButtonWrapper>
          {hasCloseButton && (
            <XButton handleClick={onHide} />
          )}
        </S.xButtonWrapper>
        {children}
      </S.wrapper>
      <Dim handleClick={onHide} />
    </S.container>
  );
};

const S = {
  container: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  `,

  wrapper: styled.div`
    min-width: 320px;
    max-width: 640px;
    padding: 0;
    min-height: 300px;
    box-sizing: border-box;
    max-height: calc(100vh - 85px);
    display: inherit;
    flex-direction: column;
    background-color: ${WHITE1};
    border-radius: 16px;
    z-index: 110;
    position: relative;
    overflow: hidden;

    @media only screen and (max-width: 767px) {
      width: calc(100% - 40px);
    }
  `,

  xButtonWrapper: styled.div`
    position: absolute;
    right: 45px;
    top: 58px;
    z-index: 150;
  `,
};

export default ModalCenter;
