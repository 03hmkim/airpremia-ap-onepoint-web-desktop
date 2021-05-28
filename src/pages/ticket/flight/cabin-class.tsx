import { Fragment, useState, useEffect } from 'react';
import { map } from 'lodash';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useBooking, useLoading } from '@airpremia/core/hooks';

import {
  FloatingFoldableItinerary,
  TicketCabinClass,
  CabinClassOneway,
  Caution,
  // GuideBar,
  Loading,
} from 'src/components';
import { TaskButton } from 'src/components';
import {
  WHITE1,
  DARK_GRAY1,
  // LIGHT_BLUE1,
} from '@airpremia/cdk/styles/colors';
import { useBookingLocal } from 'src/hooks';
import {
  ILowFaresDataParams,
  EFlightType,
} from '@airpremia/core/stores/models/bookingSession';
import { hasValidKeys } from '@airpremia/core/lib/booking';

export interface IStyleProps {}

export interface IProps extends IStyleProps {
  children: React.ReactElement | string;
}

function CabinClass({}: IProps) {
  const router = useRouter();
  const {
    floatingTotalPrice,
    onInitKeys,
    bookingSessionStore,
    onAddBookingSession,
    onLoadRibbonData,
  } = useBooking();
  const { showLoading } = useLoading();

  const { getCautionData } = useBookingLocal();
  const {
    keys,
    itineraryType,
    isAddBookingSessionRequest,
    isFlightTicketRequest,
    availability,
    itinerary,
    date,
    ribbonData,
  } = bookingSessionStore;

  const [isFolded, setFold] = useState(true);
  const onChangeFoldStatus = () => setFold(!isFolded);

  const [
    isNextButtonActive,
    setNextButtonActive,
  ] = useState<boolean>(false);

  const onLoadLowFaresArrow = async (
    params: ILowFaresDataParams,
  ) => onLoadRibbonData(params);

  const onPushRouter = () => {
    router.push('/ticket/flight/passengers');
  };

  const onClickNext = () => {
    showLoading();
    onAddBookingSession();
    onPushRouter();
  };

  useEffect(() => {
    if (isFlightTicketRequest) {
      onLoadRibbonData();
    }
  }, [date, isFlightTicketRequest]);

  useEffect(() => {
    onInitKeys();
    if (date.length) {
      onLoadRibbonData();
    } else {
      router.push('/');
    }
  }, []);

  useEffect(() => {
    if (itineraryType === EFlightType.RT) {
      if (keys.length === 2 && hasValidKeys(keys)) {
        return setNextButtonActive(true);
      }
    } else if (itineraryType === EFlightType.OW) {
      if (keys.length === 1 && hasValidKeys(keys)) {
        return setNextButtonActive(true);
      }
    }

    setNextButtonActive(false);
  }, [keys]);

  if (!availability.length) {
    return <Loading />;
  }

  return (
    <S.container>
      <TicketCabinClass
        floatingFoldableItinerary={
          <FloatingFoldableItinerary
            origin={itinerary.origin}
            destination={itinerary.destination}
            beginDate={date[0]}
            endDate={date[1]}
            totalPrice={floatingTotalPrice}
            isFolded={isFolded}
            onClick={onChangeFoldStatus}
            itineraryType={itineraryType}
          />
        }
        cabinClassOneWay={
          <Fragment>
            {map(availability, (item, i) => {
              const ribbonList =
                i === 0
                  ? ribbonData?.begin
                  : ribbonData?.end;
              return (
                <CabinClassOneway
                  idx={i}
                  key={`cabinClassOneway${i.toString()}`}
                  list={ribbonList || []}
                  market={item.market}
                  journeys={item.journeys}
                  onLoadLowFare={onLoadLowFaresArrow}
                  // way0 = {way0}
                  // way1 = {way1}
                  // way2 = {way2}
                  // way3 = {way3}
                />
              );
            })}
          </Fragment>
        }
        // guideBar={
        //   <GuideBar backgroundColor={LIGHT_BLUE1}>
        //     <S.guideBarWrapper>
        //       <S.left>
        //         <p>
        //           35,000원을 추가하면 환불 수수료가 없는
        //           항공권이 있다?
        //         </p>
        //       </S.left>
        //       <S.right>
        //         <button>변경하기</button>
        //       </S.right>
        //     </S.guideBarWrapper>
        //   </GuideBar>
        // }
        nextButton={
          <TaskButton
            onClick={onClickNext}
            disabled={
              isAddBookingSessionRequest ||
              !isNextButtonActive
            }
          >
            다음
          </TaskButton>
        }
        caution={
          <Caution
            title={getCautionData.title}
            body={getCautionData.body}
          />
        }
      />
    </S.container>
  );
}

CabinClass.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>``,

  guideBarWrapper: styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;

    @media only screen and (max-width: 767px) { 
      display: block;
    }
  `,
  left: styled.div`
    display: flex;
    align-items: center;
    p {
      font-size: 15px;
      line-height: 28px;
      letter-spacing: -0.3px;
      font-weight: 600;
      color: ${DARK_GRAY1};
    }

    @media only screen and (max-width: 767px) { 
      width: 100%;
      display: block;
      justify-content: center;
    }
  `,
  right: styled.div`
    button {
      width: 110px;
      height: 38px;
      border-radius: 19px;
      background-color: ${WHITE1};
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${DARK_GRAY1};
      font-size: 14px;
      line-height: 28px;
      letter-spacing: -0.28px;
      font-weight: 600;
    }

    @media only screen and (max-width: 767px) { 
      width: 100%;
      margin-top: 10px;
      display: block;

      button {
        margin: 0 auto;
      }
    }
  `,
};

export default CabinClass;
