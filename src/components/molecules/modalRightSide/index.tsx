import styled from 'styled-components';
import { FC, ReactElement, useEffect } from 'react';
import {
  IModalHideProps,
  IModalDefaultState,
} from '@airpremia/core/stores/models/ui';
import { Dim, XButton } from 'src/components';
import { WHITE1 } from '@airpremia/cdk/styles/colors';
import { useScroll } from '@airpremia/core/hooks';

export interface IProps {
  modal: IModalDefaultState;
  onHide: (props: IModalHideProps) => void;
  children: ReactElement | null;
}

const ModalRightSide: FC<IProps> = ({
  modal,
  onHide,
  children,
}: IProps) => {
  const { hasCloseButton } = modal;
  const { hideScrollBody, showScrollBody } = useScroll();

  useEffect(() => {
    hideScrollBody();
    return showScrollBody;
  }, []);

  return (
    <S.container className="mgReset">
      <S.wrapper>
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
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  `,

  wrapper: styled.div`
    width: 800px;
    height: 100%;
    background-color: ${WHITE1};
    z-index: 110;
    position: fixed;
    right: 0;
  `,

  xButtonWrapper: styled.div`
    position: absolute;
    right: 45px;
    top: 58px;
    z-index: 150;
  `,
};

export default ModalRightSide;
