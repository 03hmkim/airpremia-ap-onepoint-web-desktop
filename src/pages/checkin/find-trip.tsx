import { FC, useEffect, useState, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import {
  BookingSearchTemplate,
  InquiryForm,
  LinkBarWithImage,
  BookingListTemplate,
  RoundedNavigationTab,
  TripListTable,
  WarningList,
} from 'src/components';
import {
  useAuth,
  useBooking,
  useScroll,
} from '@airpremia/core/hooks';
import { Container } from 'src/styles/layout';
// import img from 'public/images/img_banner_illust_02.png';
import { IFindReservationRespBooking } from '@airpremia/core/stores/models/booking';
import { NewPagination } from 'src/components';
import { flow, take, drop } from 'lodash/fp';
//import {useParams} from "react-router-dom";
// import queryString from 'query-string';
// import { Pagination } from 'src/components';

interface IProps { }

const FindTrip: FC<IProps> = () => {
  const router = useRouter();
  const {
    bookingStore,
    onFindMyReservation,
  } = useBooking();
  const { authStore } = useAuth();
  const { upScroll } = useScroll();
  const {
    firstName,
    lastName,
    recordLocator,
    isTripRequest,
    isTripSuccess,
    bookings,
  } = bookingStore;
  const { isLogIn } = authStore;

  const [currIdx, setCurrIdx] = useState(0);
  //const [currIdx, setCurrIdx] = checkQuery.check==='1' ? useState(0) : useState(1);

  //dh
  // useEffect(()=>{
  //   const checkQuery = queryString.parse(location.search);
  //   if(checkQuery.check=="1") setCurrIdx(1);
  //   else setCurrIdx(0);
  //   console.log("currIdx",currIdx);
  //   // console.log("currIdx",checkQuery.check=="1");
  // });
  
  const [tripList, setTripList] = useState<
    IFindReservationRespBooking[]
  >([]);
  const [currPage, setCurrPage] = useState(1);

  const contentsPerPage = 5;

  const pageList = flow(
      drop((currPage-1)*contentsPerPage),
      take(contentsPerPage)
    )(tripList)

  const handleChange = 
    (e: ChangeEvent<unknown>, value: number) => {
      console.log(e.target);
      setCurrPage(value);
    };

  const tabList = ['다가오는 여정', '지난 여정'];
  const headerList = [
    '예약번호',
    '여정',
    '노선',
    '일정',
    '상태',
  ];
  const widthList = [150, 100, 380, 544, 106, 1134];

  const description = [
    '타 서비스를 통해 항공권을 예약하신 경우, 예약 내용이 정확하지 않을 수 있습니다.',
    '항공권의 예약 변경은 출발 1시간 전까지 가능합니다.',
    '구매한 항공권에 대한 예약변경 및 환불 시 운임규정에 따른 예약변경 수수료(재발행 수수료) 및 환불 위약금 또는 환불 수수료가 징수될 수 있습니다.',
    '예약 내역은 탑승일 이후 5년까지만 조회가능합니다.',
  ];

  useEffect(() => {
    if (isLogIn) {
      onFindMyReservation();
    }
  }, [isLogIn, isTripSuccess]);

  useEffect(() => {
    const isComing = currIdx === 0;
    setTripList(
      bookings.filter(
        (item) => item.isCommingSoon === isComing,
      ),
    );
  }, [bookings, currIdx]);

  useEffect(() => {
    setCurrPage(1)
  }, [currIdx]);

  useEffect(() => {
    upScroll();
  }, []);

  const changeRoute = () => {
    router.push(
      `/checkin/trip-detail-information?firstName=${firstName.value}&lastName=${lastName.value}&recordLocator=${recordLocator.value}`,
    );
  };

  if (isLogIn) {
    if (isTripRequest) {
      return <div>loading... </div>;
    }
    return (
      <Container>
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
              list={pageList}
              emptyMessage={`${tabList[currIdx]}이 없습니다.`}
            />
          }
          paging={
            <NewPagination
              count={Math.ceil(tripList.length/contentsPerPage)}
              siblingCount={3}
              boundaryCount={1}
              page={currPage}
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
      </Container>
    );
  } else {
    return (
      <Container>
        <BookingSearchTemplate
          title="예약 조회"
          inquiryForm={
            <InquiryForm
              needReservationNumber
              title="조회할 여정의 탑승자 정보를 입력해주세요 :-)"
              onClick={changeRoute}
            />
          }
          linkBarWithImage={<LinkBarWithImage />}
        />
      </Container>
    );
  }
};

export default FindTrip;
