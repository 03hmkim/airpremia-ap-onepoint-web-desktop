// @TODO: 추후 모달 레이아웃 통일 용도로 개발.. 미완성
// @TODO: 2021.02.24 smartport className 추가

import styled from 'styled-components';
import { FC, ReactElement } from 'react';
// import {
//   IModalHideProps,
//   IModalDefaultState,
// } from '@airpremia/core/stores/models/ui';
import { Dim, XButton } from 'src/components';
import { WHITE1 } from '@airpremia/cdk/styles/colors';
import { prop } from 'styled-tools';

export interface IStyle {
  overflow?: 'hidden' | 'initial' | string;
}

export interface IProps extends IStyle {
  hasCloseButton?: boolean;
  onClose: () => void;
  onClickBackground: () => void;
  children: ReactElement | null;
  className: any;
}

const ModalCenterWrapper: FC<IProps> = ({
  onClose,
  hasCloseButton,
  onClickBackground,
  children,
  className,
  ...props
}: IProps) => {
  return (
    <S.container>
      <S.wrapper id="modal-wrapper" className={className} {...props}>
        <S.xButtonWrapper>
          {hasCloseButton != null ? hasCloseButton : true && (
            <XButton handleClick={onClose} />
          )}
        </S.xButtonWrapper>
        {children}
      </S.wrapper>
      <Dim handleClick={onClickBackground} />
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
    width: calc(100% - 290px);
    padding: 0;
    min-height: 300px;
    box-sizing: border-box;
    /* max-height: 85vh; */
    max-height: calc(100vh - 85px);
    height: 100%;
    display: inherit;
    flex-direction: column;
    background-color: ${WHITE1};
    border-radius: 16px;
    z-index: 110;
    position: relative;
    /* overflow: hidden; */
    overflow: ${prop('overflow', 'hidden')};
    &.min{
      width: 480px;
    }
    &.max{
      width: 640px;
    }
    &.hAuto{
      height: auto;
      > div:nth-child(2){
        padding-bottom: 0;
      }
    }
  `,

  xButtonWrapper: styled.div`
    position: absolute;
    right: 45px;
    top: 58px;
    z-index: 150;
    @media only screen and (max-width: 767px) { 
      top: 49px;
    }
  `, 
};

export default ModalCenterWrapper;
