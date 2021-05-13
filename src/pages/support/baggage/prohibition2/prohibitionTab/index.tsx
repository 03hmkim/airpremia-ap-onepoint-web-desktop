import { FC, useState } from 'react';
import styled from 'styled-components';
import {
  TextNavigationTab,
} from 'src/components';
import TabContent from './tabCont';

interface IProps {}

const ProhibitionTab: FC<IProps> = ({}) => {
  const [currIdx, setCurrIdx] = useState(0);
  const tabList = ['주요제한물품', '리튬배터리'];
  

  return (
    <S.container>      
      <TextNavigationTab
        currIdx={currIdx}
        list={tabList}
        onClick={setCurrIdx}
      />
      <div className="tabCont">
        <TabContent
          currIdxCont={currIdx}
        />
      </div>
    </S.container>
  );
};

const S = {
  container: styled.div`
    margin-top: 60px;

    .tabCont {
      margin-top: 60px;
    }

    @media only screen and (max-width: 767px) {
      .tabCont {
        margin-top: 40px;
      } 
    }
  `,
};

export default ProhibitionTab;
