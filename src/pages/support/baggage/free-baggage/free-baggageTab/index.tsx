import { FC, useState } from 'react';
import styled from 'styled-components';
import {
  TextNavigationTab,
} from 'src/components';
import TabContent from './tabCont';

interface IProps {}

const FreeBaggageTab: FC<IProps> = ({}) => {
  const [currIdx, setCurrIdx] = useState(0);
  const tabList = ['휴대수하물', '위탁수하물'];
  

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
    margin-top: 60px;
  `,
};

export default FreeBaggageTab;
