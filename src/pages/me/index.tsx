import { FC, useState, useEffect, ChangeEvent } from 'react';
// import img from 'public/images/img_banner_illust_02.png';
import {
  ProfileGroup,
  // LinkBarWithImage,
  WarningList,
  RoundedNavigationTab,
  TripListTable,
  MyPageTemplate,
} from 'src/components';
import {
  useAuth,
  useBooking,
  useScroll,
  useMe,
} from '@airpremia/core/hooks';
import { Container } from 'src/styles/layout';
import { IFindReservationRespBooking } from '@airpremia/core/stores/models/booking';
import { addComma } from '@airpremia/core/lib/service';
import { NewPagination } from 'src/components';
import { flow, take, drop } from 'lodash/fp';

interface IProps {}

const MyPage: FC<IProps> = ({}) => {
  const {
    bookingStore,
    onFindMyReservation,
  } = useBooking();
  const { upScroll } = useScroll();
  const { isTripSuccess, bookings } = bookingStore;
  const { authStore } = useAuth({
    canAccessOnlyLogin: true,
  });
  const { meStore } = useMe();
  const { isLogIn } = authStore;
  const { userInfo } = meStore;
  const [tripList, setTripList] = useState<
    IFindReservationRespBooking[]
  >([]);
  const [currIdx, setCurrIdx] = useState(0);
  const tabList = ['다가오는 여정', '지난 여정'];
  const headerList = [
    '예약번호',
    '여정',
    '노선',
    '일정',
    '상태',
  ];
  const widthList = [163, 180, 380, 400, 157, 1134];
  const description = [
    '타 서비스를 통해 항공권을 예약하신 경우, 예약 내용이 정확하지 않을 수 있습니다.',
    '항공권의 예약 변경은 출발 1시간 전까지 가능합니다.',
    '구매한 항공권에 대한 예약변경 및 환불 시 운임규정에 따른 예약변경 수수료(재발행 수수료) 및 환불 위약금 또는 환불 수수료가 징수될 수 있습니다.',
    '예약 내역은 탑승일 이후 5년까지만 조회가능합니다.',
  ];
  const linkButtonList = [
    {
      title: '나의 등급',
      description: userInfo?.grade,
      link: '/me/grade',
    },
    {
      title: '포인트',
      description: addComma(userInfo?.points),
      link: '/me/points',
      needArrow: true,
    },
    {
      title: '나의 쿠폰',
      description: userInfo?.numberOfCoupons,
      link: '/me/coupon',
      needArrow: true,
      isEmphasis: true,
    },
  ];
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
    upScroll();
  }, []);

  return (
    <Container>
      <MyPageTemplate
        title="마이페이지"
        profileGroup={
          <ProfileGroup linkButtonList={linkButtonList} />
        }
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
};

export default MyPage;
