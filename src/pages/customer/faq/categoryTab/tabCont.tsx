import React from 'react';
import styled from 'styled-components';
import {
  DARK_GRAY1,
  LIGHT_GRAY6,
} from '@airpremia/cdk/styles/colors';
import Cate1 from './data/cate1'
import Cate2 from './data/cate2'
import Cate3 from './data/cate3'
import Cate4 from './data/cate4'

export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}

function TabContent({currIdxCont}: IProps) {

  if ( currIdxCont === 0 ) {
    return (
      <S.container>
        <S.total>
          <span>총 <strong>8</strong>건</span>
        </S.total>
        <Cate1 />
      </S.container>
    )
  } else if ( currIdxCont === 1 ) {
    return (
      <S.container>
        <S.total>
          <span>총 <strong>3</strong>건</span>
        </S.total>
        <Cate2 />
      </S.container>
    )
  } else if ( currIdxCont === 2 ) {
    return (
      <S.container>
        <S.total>
          <span>총 <strong>2</strong>건</span>
        </S.total>
        <Cate3 />
      </S.container>
    )
  } else {
    return (
      <S.container>
        <S.total>
          <span>총 <strong>3</strong>건</span>
        </S.total>
        <Cate4 />
      </S.container>
    )
  }
}


const S = {
  container: styled.div`

  `,
  total: styled.div`
    margin-top: 30px;
    padding: 20px 0;
    border-top: 1px solid ${DARK_GRAY1};
    border-bottom: 1px solid ${LIGHT_GRAY6};

    > span,
    > span > strong {
      color: ${DARK_GRAY1};
      font-size: 14px;
    }
  `,

};


export default TabContent;
