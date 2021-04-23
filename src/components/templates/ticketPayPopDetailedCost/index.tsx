import { FC, useState } from 'react';
import styled from 'styled-components';
import {
  TextNavigationTab,
} from 'src/components';
import TabContent from './tabCont';

interface IProps {}

const TicketPayPopDetailedCost: FC<IProps> = ({}) => {
  const [currIdx, setCurrIdx] = useState(0);
  const tabList = ['항공권별', '탑승객별'];
  

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
    > div{      
      padding-left: 50px;
      padding-right: 50px;
    }

    @media only screen and (max-width: 767px) {
      > div{      
        padding-left: 25px;
        padding-right: 25px;
      } 
    }
  `,
};

export default TicketPayPopDetailedCost;
