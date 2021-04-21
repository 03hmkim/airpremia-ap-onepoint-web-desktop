import { useState, useMemo } from 'react';
import {
  EStationType,
  EFlightType,
} from '@airpremia/core/stores/models/bookingSession';
import { useBooking } from '@airpremia/core/hooks';
import { stationCodeList, cautionData } from './dataset';
import {
  IStation,
  IMenuItemStationProps,
} from 'src/components/organisms/ticketSearchVertical';
import { MenuItemStation } from 'src/components';
import { IMarketsData } from '@airpremia/core/api/ticket/types';
import styled from 'styled-components';
import { LIGHT_GRAY7 } from '@airpremia/cdk/styles/colors';
import { useRouter } from 'next/router';
import { getPassengersLabel } from '@airpremia/core/lib/booking';

export enum ESelectType {
  NONE,
  ORIGIN,
  DESTINATION,
  DATE,
  PASSENGER,
}

export default () => {
  const router = useRouter();
  const {
    bookingSessionStore,
    onFilterStationList,
    onChangeItineraryType,
    onChangeItineraryPlace,
    onSearchFlightTicket,
    //onSearchFlightArrDep,
  } = useBooking();

  const [openedSelect, setOpenedSelect] = useState<
    ESelectType
  >(ESelectType.NONE);
  const {
    fromList,
    toList,
    date,
    passengers,
    itinerary,
    itineraryType,
  } = bookingSessionStore;
  const { origin, destination } = itinerary;
  const [isPremiumEconomy, setIsPremiumEconomy] = useState<
    boolean
  >(false);
  const dateLength = date.length;

  const _getCurrentStationList = (type: ESelectType) => {
    if (
      type === ESelectType.ORIGIN ||
      type === ESelectType.DESTINATION
    ) {
      onFilterStationList(
        type === ESelectType.ORIGIN
          ? EStationType.ORIGIN
          : EStationType.DESTINATION,
      );
    }
  };

  // Select
  const changeSelect = (target: ESelectType) => () => {
    if (openedSelect === target) {
      setOpenedSelect(ESelectType.NONE);
    } else {
      setOpenedSelect(target);
      _getCurrentStationList(target);
    }
  };

  // 여정 타입
  const onChangeItineraryTypeLocal = (
    itineraryType: EFlightType,
  ) => () => {
    onChangeItineraryType({
      itineraryType,
    });
  };

  // 취항지 선택
  const stationLabel = (id: string | null) => {
    if (!id) return '';

    const label = stationCodeList
      .filter((item: IStation) => item.id === id)
      .shift()?.label;

    if (!label) return '';

    return `${label}(${id})`;
  };

  // caution Data
  const getCautionData = useMemo(() => cautionData, []);

  const menuItemStations = (
    items: IMenuItemStationProps[],
    selectedId: string | null,
  ) => {
    return items.map(
      (menuItemStationProps: IMenuItemStationProps) => (
        <MenuItemStation
          {...menuItemStationProps}
          isSelected={
            selectedId === menuItemStationProps.id
          }
          key={menuItemStationProps.id}
        />
      ),
    );
  };

  const originMenuStations: IMenuItemStationProps[] = (fromList as Array<
    IMarketsData
  >)?.map((marketData: IMarketsData) => {
    return {
      disabled: !!marketData.commingSoonInfo,
      isComing: !!marketData.commingSoonInfo,
      label: stationLabel(marketData.from),
      id: marketData.from,
    };
  });

  const onChangeOrigin = (e: any) => {
    onChangeItineraryPlace({
      itineraryPlaceType: EStationType.ORIGIN,
      airportCode: e.target.dataset.id,
    });
    changeSelect(ESelectType.DESTINATION)();
  };

  const destinationMenuStations: IMenuItemStationProps[] = (toList as Array<
    IMarketsData
  >)?.map((marketData: IMarketsData) => {
    return {
      disabled: !!marketData.commingSoonInfo,
      isComing: !!marketData.commingSoonInfo,
      label: stationLabel(marketData.to),
      id: marketData.to,
    };
  });

  const onChangeDestination = (e: any) => {
    onChangeItineraryPlace({
      itineraryPlaceType: EStationType.DESTINATION,
      airportCode: e.target.dataset.id,
    });
    changeSelect(ESelectType.DATE)();
  };

  const dateLabel = useMemo(() => {
    let dateLabel: string | React.ReactElement = '';
    if (dateLength) {
      if (itineraryType === EFlightType.OW) {
        dateLabel = (
          <S.dateLabel>
            {bookingSessionStore.date[0]
              ?.locale('ko')
              .format('M.D.(dd)')}
          </S.dateLabel>
        );
      } else if (itineraryType === EFlightType.RT) {
        dateLabel = (
          <S.dateLabel>
            {bookingSessionStore.date[0]
              ?.locale('ko')
              .format('M.D.(dd)')}
            <span className="dash">-</span>
            {dateLength === 1 ? (
              <sub>오는 날 선택</sub>
            ) : (
              bookingSessionStore.date[1]
                ?.locale('ko')
                .format('M.D.(dd)')
            )}
          </S.dateLabel>
        );
      }
    }
    return dateLabel;
  }, [itineraryType, date]);

  // 택 선택
  const togglePremiumEconomy = () =>
    setIsPremiumEconomy(!isPremiumEconomy);

  const passengersLabel = useMemo(() => {
    return getPassengersLabel(passengers);
  }, [passengers]);

  // 검색
  const onSearch = () => {
    const correctDateLength =
      itineraryType === EFlightType.OW ? 1 : 2;

    if (
      origin &&
      destination &&
      dateLength === correctDateLength
    ) {
      onSearchFlightTicket();
      router.push('/ticket/flight/cabin-class');
    } else {
      alert('출발지, 도착지, 날짜를 선택하세요.');
    }
  };


  //출도착 검색★
  const onArrDepSearch = () => {
    // const correctDateLength =
    //   itineraryType === EFlightType.OW ? 1 : 2;
    if (
      origin &&
      destination
    ) {
      // console.log("origin", origin);
      // console.log("destination", destination); 
      // console.log("date", date);

      //onSearchFlightArrDep();
      router.push('/checkin/depArrCheck'); 
      // router.push('/checkin/depArrCheck/dacTab/tabResult');
    } else {
      alert('출발지, 도착지를 선택하세요');
    }
  };
  


  return {
    openedSelect,
    passengersLabel,
    onChangeItineraryTypeLocal,
    stationLabel,
    menuItemStations,
    originMenuStations,
    onChangeOrigin,
    destinationMenuStations,
    onChangeDestination,
    dateLabel,
    isPremiumEconomy,
    togglePremiumEconomy,
    changeSelect,
    onSearch,
    getCautionData,
    onArrDepSearch,
  };
};

const S = {
  dateLabel: styled.div`
    font-size: 18px;
    font-weight: 700;
    line-height: 1.87;
    letter-spacing: -0.3px;
    .dash {
      padding: 0 4px;
    }
    sub {
      font-size: 18px;
      color: ${LIGHT_GRAY7};
    }

    @media only screen and (max-width: 767px) {
      font-size: 14px;
      font-weight: 300;

      sub {
        font-size: 14px;
        font-weight: 300;
      }
    }
  `,
};
