import styled from 'styled-components';
import { FC, useEffect, useMemo, useState } from 'react';
import { prop } from 'styled-tools';
import { useRouter } from 'next/router';
import moment from 'moment';
import {
  Horizon, 
  Tag,
  Loading,
} from 'src/components';
import {
  useBooking,
  useScroll,
} from '@airpremia/core/hooks';
import { getStationLabel } from '@airpremia/core/lib/booking';
import {
  DARK_GRAY1,
  LIGHT_GRAY6,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';
import FlightIcon from 'public/images/ticket/ico-flight.svg';
import { EBorderShape } from 'src/components/atoms/horizon';
import { Container } from 'src/styles/layout';
import Link from 'next/link';

interface IProps {}

const oneBoardingPass: FC<IProps> = ({}) => {
  const router = useRouter();
  const { bookingStore, onFindTrip } = useBooking();
  const { upScroll } = useScroll();
  const {
    bookingDetailInfo,
    checkinList,
    isTripRequest,
    isTripSuccess
  } = bookingStore;
  const hasItem = useMemo(() => {
    return checkinList.length > 0;
  }, [checkinList]);
  const [isLoad, setLoad] = useState(false);

  const {
    firstName,
    lastName,
    recordLocator,
  } = router.query;
  useEffect(() => {
    upScroll();

    const first = Array.isArray(firstName)
      ? firstName[0]
      : firstName;

    const last = Array.isArray(lastName)
      ? lastName[0]
      : lastName;

    const reservation = Array.isArray(recordLocator)
      ? recordLocator[0]
      : recordLocator;

    onFindTrip({ first, last, reservation });
    setLoad(true);
  }, []);

  if(isLoad) {
    if (isTripRequest) {
      return <Loading />;
    } else {
      if(isTripSuccess) {
        if(bookingDetailInfo && bookingDetailInfo?.boardingPassInfo.journeys.length <= 0) {
          loadFail();
        }
      } else {
        loadFail();
      }
    }
    setLoad(false);
  }
  
  function loadFail() {
    alert("유효하지 않은 여정입니다.");
    router.push('/checkin/oneBoardingPassForm');
  }

  const textList =
    bookingDetailInfo?.boardingPassInfo.tripType === 'OneWay'
      ? ['가는날']
      : ['가는날', '오는날'];

  if (!bookingDetailInfo) {
    return <Loading />;
  }
  
  return (
    <Container>
      <S.container>
        <S.header>
          <h2 className="font-bold">{"탑승권 확인"}</h2>
          <h5>{hasItem ? '탑승권을 확인할 여정을 선택해주세요' : ''}</h5>
        </S.header>
        <S.body>
          <S.subContainer>
            {bookingDetailInfo?.boardingPassInfo.journeys.map((item, i) => (
              <S.wrapper
                key={`${item.journeyKey}${i.toString()}`}
                isCanceled={item.isCanceled}
              >
                <S.top>
                  <div className="tag-group">
                    <Tag backgroundColor={DARK_GRAY1}>
                      {textList[i]}
                    </Tag>
                    {item.isRefundable && <Tag>환불불가</Tag>}
                    {item.isDelayed && (
                      <Tag backgroundColor={ORANGE2}>지연</Tag>
                    )}
                  </div>
                  <div className="description-group">
                    {bookingDetailInfo.bookingInfo.isCommingSoon ? (
                      <div className="boarding-pass">
                          <Link
                            href={`/checkin/boarding-pass?journeyKey=${item.journeyKey}&recordLocator=${recordLocator}&firstName=${firstName}&lastName=${lastName}`}
                          >
                            <a target="_blank">
                              탑승권
                            </a>
                          </Link>
                      </div>
                      ) : null }
                  </div>
                </S.top>
                <S.bottom>
                  <S.column width={53}>
                    <h6>{getStationLabel(item.origin)}</h6>
                    <p>
                      {moment(item.departure).format('HH : mm')}
                    </p>
                  </S.column>
                  <span>
                    <FlightIcon />
                  </span>
                  <S.column width={76}>
                    <h6>{getStationLabel(item.destination)}</h6>
                    <p>
                      {moment(item.arrival).format('HH : mm')}
                      &nbsp;
                      {item.dateChange
                        ? `+${item.dateChange}`
                        : ''}
                    </p>
                  </S.column>
                  <S.column width={124}>
                    <h6>출발일</h6>
                    <p>
                      {moment(item.departure)
                        .locale('ko')
                        .format('YYYY. M. D (dd)')}
                    </p>
                  </S.column>
                  <S.column width={134}>
                    <h6>클래스</h6>
                    <p>{item.cabinClassText}</p>
                  </S.column>
                  <S.column width={134}>
                    <h6>항공편명</h6>
                    <p>{item.identifier}</p>
                  </S.column>
                </S.bottom>
                {i !== bookingDetailInfo?.boardingPassInfo.journeys.length - 1 && (
                  <Horizon
                    shape={EBorderShape.DASHED}
                    width={1}
                    color={LIGHT_GRAY6}
                  />
                )}
              </S.wrapper>
            ))}
          </S.subContainer>
        </S.body>
      </S.container>
    </Container>
  );
};

const S = {
  container: styled.div``,
  subContainer: styled.div`
    border-radius: 8px;
    border: solid 1px ${LIGHT_GRAY6};
    padding: 0 30px;
  `,
  wrapper: styled.div<{ isCanceled: boolean }>`
    padding-top: 30px;
  `,
  header: styled.div`
    margin-bottom: 80px;
    h2 {
      font-size: 36px;
      line-height: 48px;
      letter-spacing: -0.72px;
      margin-bottom: 10px;
    }

    h5 {
      font-size: 14px;
      line-height: 25px;
      letter-spacing: -0.28px;
      padding-bottom: 20px;
    }
  `,
  body: styled.div``,
  top: styled.div`
    display: flex;
    justify-content: space-between;

    .tag-group {
      display: flex;

      & > div {
        margin-right: 3px;
      }
    }

    .description-group {
      display: flex;
    }

    .boarding-pass {
      text-align: center;
      font-weight: 600;
      height: 30px;
      width: 94px;
      border-radius: 300px;
      border: solid 1px ${LIGHT_GRAY6};
      font-size: 14px;
      line-height: 28px;
      letter-spacing: -0.28px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  `,
  bottom: styled.div`
    display: flex;
    padding-bottom: 34px;
    span {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin: 0 20px 6px;
    }
    & > div {
      margin-right: 70px;
      &:nth-child(1),
      &:nth-child(2) {
        margin-right: 0;
      }
    }
  `,

  column: styled.div<{ width?: number }>`
    display: flex;
    flex-direction: column;
    min-width: ${prop('width')}px;

    h6 {
      font-size: 13px;
      line-height: 35px;
      letter-spacing: -0.26px;
    }
    p {
      margin-top: 12px;
      font-size: 18px;
      line-height: 35px;
      letter-spacing: -0.36px;
      font-weight: 600;
    }
  `,
};

export default oneBoardingPass;