import { FC, ReactElement, Fragment } from 'react';
import styled from 'styled-components';
import { 
  LIGHT_GRAY8, 
  LIGHT_GRAY5,
  DARK_GRAY1,
 } from '@airpremia/cdk/styles/colors';

export enum EScrollType {
  /** new 반응형 */
  TYPE1  
}

interface IStyle {}

interface IScrollProps extends IStyle {
  className?: any;
  body?: ReactElement;
  sub?: ReactElement;
  button?: ReactElement;
  tab?: any;
}

export interface IProps extends IScrollProps {
  title: ReactElement;
  type?: EScrollType;
}

const Type1: FC<IScrollProps> = ({
  body,
  tab,
}: IScrollProps) => (
  <Fragment>
    <S.scroll className={tab}>
      <S.body>{body}</S.body>
    </S.scroll>
  </Fragment>
);

const CenterPopupLayout: FC<IProps> = ({
  type = EScrollType.TYPE1,
  title,
  sub,
  button,
  ...props
}: IProps) => {
  return (
    <S.container>
      <S.title>{title}</S.title>
      <S.sub>{sub}</S.sub>
      {type === EScrollType.TYPE1 && <Type1 {...props} />}
      {button && <S.button>{button}</S.button>}
    </S.container>
  );
};

const S = {
  container: styled.div`
    height: 100%;
    box-sizing: border-box;

    > div {
      padding-left: 50px;
      padding-right: 50px;
    }

    @media only screen and (max-width: 767px) { 
      > div {
        padding-left: 25px;
        padding-right: 25px;
      }
    }
  `,

  title: styled.div.attrs(() => ({
    className: 'popup-title',
  }))`
    padding-top: 50px;
    height: 150px;

    @media only screen and (max-height: 740px) { 
      height: auto;
    }
  `,

  sub: styled.div.attrs(() => ({
    className: 'pop-sub',
  }))`
    color: ${LIGHT_GRAY8};
    font-size: 18px;
  `,

  scroll: styled.div.attrs(() => ({
  }))<IStyle>`
    height: calc(100% - 200px);
    overflow-y: auto;
    padding-bottom: 50px;
    padding-top:50px;
    box-sizing: border-box;

    &.tabIs {
      padding-left: 0;
      padding-right: 0;
    }

    &.btnN{
      height: calc(100% - 200px);
    }
  `,

  body: styled.div.attrs(() => ({
    className: 'popup-body',
  }))`
    color: ${DARK_GRAY1};
    font-size: 18px;
    line-height: 1.8;
    letter-spacing: -0.3px;

    @media only screen and (max-width: 767px) { 
      font-size: 13px;
      font-weight: 300;
      line-height: 26px;
    }
  `,

  button: styled.div.attrs(() => ({
    className: 'popup-button',
  }))`
    padding-top: 25px;
    padding-bottom: 25px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    text-align : center;
    border-top: 1px solid ${LIGHT_GRAY5};
    box-sizing: border-box;

    &.static{
      position: static;
    }

    .twin{
      display: flex;
      justify-content: space-between;

      button{
        margin-right: 10px;
      }
      button:last-child{
        margin-right: 0;
      }
    }
  `,
};


export default CenterPopupLayout;
