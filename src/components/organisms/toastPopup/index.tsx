import styled from 'styled-components';
import { FC, useState, useEffect } from 'react';
import { useModal } from 'src/hooks';
import { RED2, WHITE1 } from '@airpremia/cdk/styles/colors';
import { ifProp } from 'styled-tools';

interface IProps {}

let timer: any;

const ToastPopup: FC<IProps> = () => {
  const defaultTime = 3;
  const {
    UIStore: { toastPopup },
    onHideToastPopup,
  } = useModal();
  const { isShow, text } = toastPopup;
  const [left, setLeft] = useState(defaultTime);

  useEffect(() => {
    if (isShow) {
      timer =
        left > 0 &&
        setInterval(() => setLeft(left - 1), 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [toastPopup.isShow, left]);

  useEffect(() => {
    if (left === 0) {
      onHideToastPopup();
      setLeft(defaultTime);
    }
  }, [left]);

  return (
    <S.container isShow={isShow}>
      <S.wrapper>{text}</S.wrapper>
    </S.container>
  );
};

const S = {
  container: styled.div<{ isShow?: boolean }>`
    position: fixed;
    top: 30px;
    width: 100%;
    z-index: ${ifProp('isShow', 1000, -5)};
    opacity: ${ifProp('isShow', 1, 0)};
    transition: ${ifProp('isShow', 'all 0.2s ease-in')};

    @media only screen and (max-width: 767px) {
      display: none;
    }
  `,

  wrapper: styled.div`
    padding: 15px 30px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.28px;
    height: 50px;
    opacity: 0.95;
    border-radius: 25px;
    display: flex;
    align-items: center;
    box-shadow: 7px 7px 7px 0 rgba(0, 0, 0, 0.05);
    max-width: 50%;
    width: fit-content;
    box-sizing: border-box;
    background-color: ${RED2};
    color: ${WHITE1};
  `,
};

export default ToastPopup;
