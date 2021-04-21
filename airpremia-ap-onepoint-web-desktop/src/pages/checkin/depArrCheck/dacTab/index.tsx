import { FC, useState, ChangeEvent
  // , useEffect 
} from 'react';
import styled from 'styled-components';
import {
  TextNavigationTab,
  // flightArrDep,
} from 'src/components';
// import TabContent from './tabCont';
// import TabResult from './tabResult';
import { flow, take, drop } from 'lodash/fp';
import { IFlightDepArr } from '@airpremia/core/stores/models/bookingSession';
import { 
  DepArrListTemplate,   
  TicketArrDepSearch,
  DepArrListTable,  
} from 'src/components';
import { NewPagination } from 'src/components';
// import { 
//   useLoading,
//  } from '@airpremia/core/hooks';

// import {
//   onArrDepSearch
// } from 'src/hooks/useBooking/useBookingSession';


interface IProps {} 

const pointTab: FC<IProps> = ({}) => {
  const [currIdx, setCurrIdx] = useState(0);
  const tabList = ['구간 조회', '편명 조회', '실시간'];
  const headerList = ['항공편', '출발', '도착', '운항상태'];
  // const widthList = [163, 180, 380, 411, 66, 1134];
  const widthList = [163, 180, 380, 411];

  
  // const { showLoading } = useLoading();



  const contentsPerPage = 5;

  // const [depArrList, setDepArrList] = useState<
  const depArrList = useState<
    IFlightDepArr[]
  >([]);


  const pageList = flow(
    drop((currIdx-1)*contentsPerPage),
    take(contentsPerPage)
    )(depArrList)

  console.log('depArrList', depArrList);
  console.log('pageList', pageList);
    
  const handleChange = 
  (e: ChangeEvent<unknown>, value: number) => {
    console.log(e.target);
    setCurrIdx(value);
  };

  // useEffect (() => {
  //   onArrDepSearch();
  // }, [])
  
  //★출도착 조회
  return ( 
    <S.container>      
      {/* <TicketArrDepSearch/> */}

      {/* 초기값 */}
      {/* <TabContent
        currIdxCont={currIdx}
      /> */}

      <DepArrListTemplate 
        // title="출도착조회"
        tab={
          <TextNavigationTab
            currIdx={currIdx}
            list={tabList}
            onClick={setCurrIdx}
          />
        }
        search = {<TicketArrDepSearch/>}
        tripList={
          <DepArrListTable
            currIdx = {currIdx}
            headerList={headerList}
            widthList={widthList}
            list={pageList}
            emptyMessage={`${tabList[currIdx]}이 없습니다.`}
          />
        }
        paging={
          <NewPagination
            count={
              Math.ceil(depArrList.length/contentsPerPage)
            }
            siblingCount={3}
            boundaryCount={1} 
            page={currIdx}
            onChange={handleChange}
        />
        }
      />

      {/* <TabResult 
        currIdxCont={currIdx}
      /> */}

    </S.container>
  );
};

const S = {
  container: styled.div`
  padding-top: 15px;
  `,
};

export default pointTab;
