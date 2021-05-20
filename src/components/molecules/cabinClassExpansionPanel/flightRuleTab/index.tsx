import { FC, useState } from 'react';
import styled from 'styled-components';
import {
  TextNavigationTab,
} from 'src/components';
import TabContent from './tabCont';

interface IProps {}

const FlightRuleTab: FC<IProps> = ({}) => {
  const [currIdx, setCurrIdx] = useState(0);
  const tabList = ['이코노미35"', '프레미아42"'];
  

  return (
    <S.container>      
      <TextNavigationTab
        currIdx={currIdx}
        list={tabList}
        onClick={setCurrIdx}
      />
      <TabContent
        currIdxCont={currIdx}
      />
    </S.container>
  );
};

const S = {
  container: styled.div`
  padding-top: 0;
  `,
};

export default FlightRuleTab;
