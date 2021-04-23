import { FC, useState } from 'react';
import styled from 'styled-components';
import {
  TextNavigationTab,
} from 'src/components';
import TabContent from './tabCont';

interface IProps {
  // list: string[];
  Idx: number;
  // onClick: (idx: number) => void;
}

const TabDataRule: FC<IProps> = ({
  // list,
  Idx,
  // onClick,
}) => {
  const tabList = ['항공권 규정', '수하물 규정', '항공 위험물품 안내', '국제 운송 약관'];
  const [currIdx, setCurrIdx] = useState(Idx);
  

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
      > div {
        padding-left: 25px;
        padding-right: 25px;
      }
    }
  `,
};

export default TabDataRule;
