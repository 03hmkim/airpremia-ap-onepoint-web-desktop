import { FC, useState } from 'react';
import styled from 'styled-components';
import {
  TextNavigationTab,
} from 'src/components';

interface IProps {}

const fareInformationTab: FC<IProps> = ({}) => {
  const [currIdx, setCurrIdx] = useState(0);
  const tabList = ['운임구성', '서비스 안내', '위약금 안내', '신분 할인'];
  

  return (
    <S.container>      
      <TextNavigationTab
        currIdx={currIdx}
        list={tabList}
        onClick={setCurrIdx}
      />
    </S.container>
  );
};

const S = {
  container: styled.div`
  padding-top: 0;
  `,
};

export default fareInformationTab;
