import { FC, useState } from 'react';
import styled from 'styled-components';
import {
  RoundedNavigationTab,
} from 'src/components';
import TabContent from './tabCont';

interface IProps {}

const EnterTab: FC<IProps> = ({}) => {
  const [currIdx, setCurrIdx] = useState(0);
  const tabList = ['국민', '외국인'];
  

  return (
    <S.container>      
      <RoundedNavigationTab
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

  `,
};

export default EnterTab;
