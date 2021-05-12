import { FC, useState } from 'react';
import styled from 'styled-components';
import {
  TextNavigationTab,
} from 'src/components';
import TabContent from './tabCont';

interface IProps {}

const DeclarationTab: FC<IProps> = ({}) => {
  const [currIdx, setCurrIdx] = useState(0);
  const tabList = ['세관신고', '병무신고', '여행자검역'];
  

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
  padding-top: 15px;
  `,
};

export default DeclarationTab;
