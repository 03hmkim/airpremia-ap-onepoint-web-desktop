import React, { FC, useState, ChangeEvent } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import BookingListTemplate from '.';
import {
  TripListTable,
  // LinkBarWithImage,
  RoundedNavigationTab,
} from 'src/components';
// import img from 'public/images/img_banner_illust_02.png';
import WarningList from 'src/components/molecules/warningList';
import { NewPagination } from 'src/components';

export default {
  title: 'desktop / Templates / BookingListTemplate',
  component: BookingListTemplate,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Trip List Template',
  },
};

export const 여행조회리스트: FC = () => {
  const [currIdx, setCurrIdx] = useState(0);
  const tabList = ['다가오는 여정', '지난 여정'];
  const headerList = [
    '예약번호',
    '여정',
    '노선',
    '일정',
    '상태',
  ];
  const handleChange = 
  (e: ChangeEvent<unknown>, value: number) => {
    console.log(e.target);
    console.log(value);

  };
  const widthList = [163, 180, 380, 411, 66, 1134];
  const list = [
    {
      recordLocator: '123456',
      tripType: 'OneWay',
      originText: '서울/인천(ICN)',
      destinationText: '하노이(HAN)',
      beginDate: '2020-05-25T23:30:00',
      endDate: '2020-05-26T23:30:00',
      statusText: '확약',
    },
    {
      recordLocator: 'A373737',
      tripType: 'Round',
      originText: '서울/인천(ICN)',
      destinationText: '하노이(HAN)',
      beginDate: '2020-05-29T23:30:00',
      endDate: '2020-05-30T23:30:00',
      statusText: '확약',
    },
  ];

  const description = [
    '타 서비스를 통해 항공권을 예약하신 경우, 예약 내용이 정확하지 않을 수 있습니다.',
    '항공권의 예약 변경은 출발 1시간 전까지 가능합니다.',
    '구매한 항공권에 대한 예약변경 및 환불 시 운임규정에 따른 예약변경 수수료(재발행 수수료) 및 환불 위약금 또는 환불 수수료가 징수될 수 있습니다.',
    '예약 내역은 탑승일 이후 5년까지만 조회가능합니다.',
  ];

  return (
    <BookingListTemplate
      title="예약조회"
      tab={
        <RoundedNavigationTab
          currIdx={currIdx}
          list={tabList}
          onClick={setCurrIdx}
        />
      }
      tripList={
        <TripListTable
          headerList={headerList}
          widthList={widthList}
          list={list}
          emptyMessage={`${tabList[currIdx]}이 없습니다.`}
        />
      }
      paging={
        <NewPagination
          count={10}
          siblingCount={3}
          boundaryCount={1}
          page={1}
          onChange={handleChange}
        />
      }
      // linkBarWithImage={
      //   <LinkBarWithImage
      //     description="다른 서비스에서 예약한 항공권이 있나요?"
      //     linkText="다른 서비스 예약 조회하기"
      //     href=""
      //     img={img}
      //   />
      // }
      warningList={
        <WarningList descriptions={description} />
      }
    />
  );
};
