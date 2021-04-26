import { useState } from 'react';
import styled from 'styled-components';
export interface IStyleProps {}
export interface IProps extends IStyleProps {
  currIdxCont: number;
}
import {
  RoundedNavigationTab,
} from 'src/components';
import TabContentComposition from './compositionTab/tabCont';
import TabContentService from './serviceTab/tabCont';
import TabContentPenalty from './penaltyTab/tabCont';
import TabContentSale from './saleTab/tabCont';

function TabContent({currIdxCont}: IProps) {
  const [currIdx, setCurrIdx] = useState(0);
  const tabList = ['이코노미 35"', '프레미아 42"'];
  const tabList2 = ['이코노미 35"', '프레미아 42"'];
  const tabList3 = ['이코노미 35"', '프레미아 42"'];

  if ( currIdxCont === 0 ) {
    return (
      <C.wrap>
        <RoundedNavigationTab
          currIdx={currIdx}
          list={tabList}
          onClick={setCurrIdx}
        />
        <TabContentComposition
          currIdxCont={currIdx}
        />
      </C.wrap>
    )
  } else if( currIdxCont === 1 ) {
    return (
      <C.wrap>
        <RoundedNavigationTab
          currIdx={currIdx}
          list={tabList2}
          onClick={setCurrIdx}
        />
        <TabContentService
          currIdxCont={currIdx}
        />
      </C.wrap>
    )
  } else if( currIdxCont === 2 ) {
    return (
      <C.wrap>
        <RoundedNavigationTab
          currIdx={currIdx}
          list={tabList3}
          onClick={setCurrIdx}
        />
        <TabContentPenalty
          currIdxCont={currIdx}
        />
      </C.wrap>
    )
  } else{
    return (
      <C.wrap>
        <TabContentSale
        />
      </C.wrap>
    )
  }
}


const C = {
  wrap: styled.div`
    margin-top: 60px;
    @media only screen and (max-width: 767px) { 
      margin-top: 40px;
    }
  `,
}
export default TabContent;
