import { FC, useState } from 'react';
import styled from 'styled-components';
import {
  RoundedNavigationTab,
} from 'src/components';
import TabContent from './tabCont';

interface IProps {}

const CategoryTab: FC<IProps> = ({}) => {
  const [currIdx, setCurrIdx] = useState(0);
  const tabList = ['전체', '카테고리1', '카테고리2', '카테고리3'];
  

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
    margin-top: 100px;
    
    > div > div > button > span{
      font-size: 15px;
    }
  `,
};

export default CategoryTab;
