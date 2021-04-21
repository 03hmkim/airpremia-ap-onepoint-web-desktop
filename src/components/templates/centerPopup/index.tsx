/** 기능 보수 해서 사용 (현재사용 X) */

import { FC, ReactElement, Fragment } from 'react';
import styled from 'styled-components';

export enum EScrollType {
  /** 팝업내 스크롤 발생 X (브라우저스크롤발생), 하단 버튼 고정영역 X */
  TYPE1,
  /** 팝업내 스크롤 발생 O, 하단 버튼 고정영역 X */
  TYPE2,
  /** 팝업내 스크롤 발생 O, 하단 버튼 고정영역 O */
  TYPE3,  

  /** new 팝업내 스크롤 발생 X, 하단 버튼 고정영역 "상관없음", tabButton X */
  TYPE4,
  /** new 팝업내 스크롤 발생 X, 하단 버튼 고정영역 "상관없음", tabButton O */
  TYPE5,
  /** new 팝업내 스크롤 발생 O, 하단 버튼 고정영역 X, tabButton X */
  TYPE6,
  /** new 팝업내 스크롤 발생 O, 하단 버튼 고정영역 X, tabButton O */
  TYPE7,
  /** new 팝업내 스크롤 발생 O, 하단 버튼 고정영역 O, tabButton X */
  TYPE8,    
  /** new 팝업내 스크롤 발생 O, 하단 버튼 고정영역 O, tabButton O */
  TYPE9,
  
}

interface IStyle {}

interface IScrollProps extends IStyle {
  body: ReactElement;
  className: any;
  button?: ReactElement;
}

export interface IProps extends IScrollProps {
  title: ReactElement;

  type?: EScrollType;
}

const Type1: FC<IScrollProps> = ({
  body,
  button,
}: IScrollProps) => (
  <S.top>
    <S.body>{body}</S.body>
    {button && <S.button>{button}</S.button>}
  </S.top>
);

const Type2: FC<IScrollProps> = ({
  body,
  button,
  ...props
}: IScrollProps) => (
  <S.scroll {...props}>
    <S.body>{body}</S.body>
    {button && <S.button>{button}</S.button>}
  </S.scroll>
);

const Type3: FC<IScrollProps> = ({
  body,
  button,
  ...props
}: IScrollProps) => (
  <Fragment>
    <S.scroll {...props}>
      <S.body>{body}</S.body>
    </S.scroll>
    {button && <S.button>{button}</S.button>}
  </Fragment>
);

const Type4: FC<IScrollProps> = ({
  body,
  button,
}: IScrollProps) => (
  <Fragment>
    <S.scroll4>
      <S.bodyAuto>{body}</S.bodyAuto>
    </S.scroll4>
    {button && <S.button>{button}</S.button>}
  </Fragment>
);

const Type5: FC<IScrollProps> = ({
  body,
  button,
}: IScrollProps) => (
  <Fragment>
    <S.scroll5>
      <S.bodyAuto>{body}</S.bodyAuto>
    </S.scroll5>
    {button && <S.button>{button}</S.button>}
  </Fragment>
);

const Type6: FC<IScrollProps> = ({
  body,
  button,
  ...props
}: IScrollProps) => (
  <Fragment>
    <S.scroll6 {...props}>
      <S.bodyFull>{body}</S.bodyFull>
    </S.scroll6>
    {button && <S.button>{button}</S.button>}
  </Fragment>
);

const Type7: FC<IScrollProps> = ({
  body,
  button,
  ...props
}: IScrollProps) => (
  <Fragment>
    <S.scroll7 {...props}>
      <S.bodyFull>{body}</S.bodyFull>
    </S.scroll7>
    {button && <S.button>{button}</S.button>}
  </Fragment>
);

const Type8: FC<IScrollProps> = ({
  body,
  button,
  ...props
}: IScrollProps) => (
  <Fragment>
    <S.scroll8 {...props}>
      <S.bodyFull>{body}</S.bodyFull>
    </S.scroll8>
    {button && <S.button>{button}</S.button>}
  </Fragment>
);

const Type9: FC<IScrollProps> = ({
  body,
  button,
  ...props
}: IScrollProps) => (
  <Fragment>
    <S.scroll9 {...props}>
      <S.bodyFull>{body}</S.bodyFull>
      </S.scroll9>
    {button && <S.button>{button}</S.button>}
  </Fragment>
);

const CenterPopupLayout: FC<IProps> = ({
  type = EScrollType.TYPE1,
  title,

  ...props
}: IProps) => {
  return (
    <S.container>
      <S.title>{title}</S.title>

      {type === EScrollType.TYPE1 && <Type1 {...props} />}
      {type === EScrollType.TYPE2 && <Type2 {...props} />}
      {type === EScrollType.TYPE3 && <Type3 {...props} />}
      {type === EScrollType.TYPE4 && <Type4 {...props} />}
      {type === EScrollType.TYPE5 && <Type5 {...props} />}
      {type === EScrollType.TYPE6 && <Type6 {...props} />}
      {type === EScrollType.TYPE7 && <Type7 {...props} />}
      {type === EScrollType.TYPE8 && <Type8 {...props} />}
      {type === EScrollType.TYPE9 && <Type9 {...props} />}
    </S.container>
  );
};

const S = {
  container: styled.div`
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    box-sizing: border-box;
  `,

  title: styled.div.attrs(() => ({
    className: 'popup-title',
  }))`
    padding: 0 50px;
    height: 150px;
    @media only screen and (max-height: 740px) { 
      height: auto;
    }
  `,

  scroll: styled.div.attrs(() => ({
    className: 'popup-scroll',
  }))<IStyle>`
    height: calc(100% - 40px);
    overflow-y: auto;
    padding: 0 50px;
    margin-top: 40px;
  `,

  body: styled.div.attrs(() => ({
    className: 'popup-body',
  }))``,

  top: styled.div`
    margin-top: 40px;
  `,

  button: styled.div.attrs(() => ({
    className: 'popup-button',
  }))`
    margin-top: 40px;
    padding: 0 50px;
  `,



  bodyAuto: styled.div.attrs(() => ({
    className: 'popup-body-auto',
  }))`
    height: auto;
  `,

  bodyFull: styled.div`
    height: 100%;
  `,

  scroll4: styled.div`
    height: auto;
  `,
  scroll5: styled.div`
    height: auto;
  `,
  scroll6: styled.div`
    height: calc(100% - 150px);
    overflow-y: auto;
  `,
  scroll7: styled.div`
    height: calc(100% - 150px);
  `,
  scroll8: styled.div`
    height: calc(100% - 252px);
    overflow-y: auto;
  `,
  scroll9: styled.div`
    height: calc(100% - 252px);
  `,
};


export default CenterPopupLayout;
