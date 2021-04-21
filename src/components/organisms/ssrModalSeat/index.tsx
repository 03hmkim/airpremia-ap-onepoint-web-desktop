import { flow, map, find, get, filter, indexOf } from 'lodash/fp';
import styled from 'styled-components';
import { useSsr as useSsrLocal } from 'src/hooks';
import {
  ClosedInfo,
  WarningList,
  SeatMapPremium,
  SeatMapEconomy,
} from 'src/components';
import { TaskButton } from 'src/components';
import {
  Fragment,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import {
  commaNumber,
  getLabelInList,
  getLastId,
  isLastId,
} from '@airpremia/core/lib/util';
import { SsrModalS } from 'src/styles/common';
import { ISsrRequestItem } from 'src/hooks/useSsr/useSsr';
import {
  IAvailableSsr,
  ISsrTrip,
} from '@airpremia/core/stores/models/ssr';
import {
  ssrModalSeatClosedDescription,
  ssrModalSeatWarningDescriptions,
} from './dataset';
import {
  ECabinClass,
  IIdLabel,
} from '@airpremia/core/lib/types';
import { ISeatItem } from '@airpremia/core/hooks/useSsr/seat';
import { getInitialName } from '@airpremia/core/lib/ssr';
import { useSsr } from '@airpremia/core/hooks';
import { useBooking } from '@airpremia/core/hooks';
interface IStyleProps {}

interface IProps extends IStyleProps {
  /** 새로운 segment props */
  /** @deprecated */
  newSegments?: IAvailableSsr[];
  trips?: ISsrTrip[];
  passengers?: IIdLabel[];
  /** 선택 완료 버튼 event */
  onSubmit?: (submitIds?: ISsrRequestItem[]) => void;
  type?: String;
}

function SsrModalSeat({
  trips,
  passengers,
  onSubmit,
  type,
}: IProps) {
  const {
    getTabsElement,
    getLeftItemsElement,
    getActivatedTabIsClosed,
    onClickMenuItem,
    initializeMenuItems,
    getCabinClass,
    getCheckinCabinClass,
    getPassengerName,
  } = useSsrLocal();

  const {
    bookingSessionStore
  } = useBooking();

  const {
    passengersInfomation
  } = bookingSessionStore;

  const { infant } = passengersInfomation;

  const {
    getSeatMap,
    onUpdateSsrSeat,
    getOccupiedSeats,
    getSelectedSeatLabel,
    getOccupiedSeatsPrice,
  } = useSsr();

  const [selectedTripId, setSelectedTripId] = useState<
    string
  >('');
  const [
    selectedPassengerId,
    setSelectedPassengerId,
  ] = useState<string>('');

  const adultInfantSet = flow(
    map((passenger: any) => {
      return {
        adultKey: passenger.seatInfantNok,
        infantKey: passenger.passengerKey,
      }
    })
  )(infant)

  // const isInfantorNot = useMemo(() => {
  //   return flow(
  //     get('infant'),
  //     find(['passengerKey', selectedPassengerId]),
  //   )(passengersInfomation);
  // }, [selectedPassengerId])
  // TODO useMemo
  const closedTitle = `${getLabelInList(selectedTripId)(
    trips,
  )} 좌석 선택이 마감되었습니다.`;

  const isLastTabId = useMemo(() => {
    return isLastId(selectedTripId, trips);
  }, [selectedTripId, trips]);

  const selectedTripCabinClass = useMemo(() => {
    if(type == "checkin") return getCheckinCabinClass(selectedTripId);
    else return getCabinClass(selectedTripId);
  }, [selectedTripId]);

  const findAdultKey = flow(
    find(['infantKey', selectedPassengerId]),
    get('adultKey'),
    )(adultInfantSet);

  const findInfantKey = flow(
    find(['adultKey', selectedPassengerId]),
    get('infantKey'),
    )(adultInfantSet);

  const findWithPassengerKey = findAdultKey ? flow(
    find(['infantKey', selectedPassengerId]),
    get('adultKey'),
    )(adultInfantSet) : flow(
      find(['adultKey', selectedPassengerId]),
      get('infantKey'),
      )(adultInfantSet);

  const filteredSeatMap = useMemo(() => {
    return flow(
      find(['tripId', selectedTripId]),
      get('seatMap'),
      filter(['cabinClass', selectedTripCabinClass]),
      map((seat: any) => {
        const occupiedSeat = flow(
          find(['seatId', seat.seatId]),
        )(getOccupiedSeats);

        if (!occupiedSeat) {
          return {
            ...seat,
            isOccupied: false,
            passengerId: selectedPassengerId,
            tripId: selectedTripId,
          };
        }
        const initialName = flow(
          get('passengerId'),
          getPassengerName,
          getInitialName,
        )(occupiedSeat);

        return {
          ...seat,
          isOccupied: true,
          initialName,
          passengerId: flow(get('passengerId'))(occupiedSeat),
          tripId: selectedTripId,
        };
      }),
    )(getSeatMap);
  }, [
    getSeatMap,
    selectedTripId,
    selectedTripCabinClass,
    getOccupiedSeats,
  	selectedPassengerId,
  ]);

  flow(
    map((seat: any) => {
      if(findAdultKey || findInfantKey) {
        const indexOfSeat = Number(indexOf(seat, filteredSeatMap));
        if (selectedTripCabinClass === ECabinClass.PREMIUM) {
          if (!seat.assignable) {
            if (seat.column === "A" || seat.column === "H") {
              filteredSeatMap[indexOfSeat+1].assignable = false;
            } else if(seat.column === "B" || seat.column === "J") {
              filteredSeatMap[indexOfSeat-1].assignable = false;
            } else if(seat.column === "E") {
              filteredSeatMap[indexOfSeat-1].assignable = false;
              filteredSeatMap[indexOfSeat+1].assignable = false;
            } else if(seat.column === "D") {
              if (filteredSeatMap[indexOfSeat+2].assignable === false){
                filteredSeatMap[indexOfSeat+1].assignable = false;
              }
            }
          }
        }
        if (selectedTripCabinClass === ECabinClass.ECONOMY) {
          if (!seat.assignable) {
            if (seat.column === "B" || seat.column === "E" || seat.column === "H" ) {
              filteredSeatMap[indexOfSeat-1].assignable = false;
              filteredSeatMap[indexOfSeat+1].assignable = false;
            } else if(seat.column === "A" || seat.column === "D" || seat.column === "G"){
              if (filteredSeatMap[indexOfSeat+2].assignable === false){
                filteredSeatMap[indexOfSeat+1].assignable = false;
              }
            }
          }
        }
      }
    })
  )(filteredSeatMap)


  const passengersWithSelectedLabel = useMemo(() => {
    return flow(
      map((passenger: any) => {

        const isInfant = flow(
          get('infant'),
          find(['passengerKey', passenger.id]),
        )(passengersInfomation);

        const isChild = flow(
          get('child'),
          find(['passengerKey', passenger.id]),
        )(passengersInfomation);

        var passengerType: string;

        isInfant === undefined ? isChild === undefined ? passengerType = 'adult' : passengerType = 'child' : passengerType = 'infant'

        return {
          ...passenger,
          selectedSsrLabel: getSelectedSeatLabel({
            tripId: selectedTripId,
            passengerId: passenger.id,
          }),
		    	type: passengerType,
        };
      }),
    )(passengers);
  }, [selectedTripId, passengers, getOccupiedSeats]);

  const getInfantseatMap = flow(
    filter(['type', 'infant']),
  )(passengersWithSelectedLabel);

  let tmp: any[] = [];

  for (let i=0; i<getInfantseatMap.length; i++) {
    if (getInfantseatMap[i].selectedSsrLabel === '자동지정') continue;
    tmp.push(Number(getInfantseatMap[i].selectedSsrLabel.slice(0,-1)))
  }

  const getAutoSetting = useMemo (() => {
    if(type != "checkin") {
      return flow(
        find(['selectedSsrLabel', '자동지정']),
      )(passengersWithSelectedLabel)
    } else {
      return flow(
        find(['selectedSsrLabel', '']),
      )(passengersWithSelectedLabel)
    }
  },[passengersWithSelectedLabel]);

  const hasTotal = useMemo(() => {
    return !!getOccupiedSeatsPrice;
  }, [getOccupiedSeatsPrice]);

  const onClickSeat = useCallback(
    ({ column, row }: ISeatItem) => {
      if (findAdultKey || findInfantKey) {
        if(selectedTripCabinClass === ECabinClass.PREMIUM){
          // AB DEF HJ
          let columnArr: any[] = ["A", "B", "D", "E", "F", "H", "J"];
          const findIndex = column === "B" || column === "F" || column === "J" ? 
          (indexOf(column, columnArr)) -1 : indexOf(column, columnArr);
          onUpdateSsrSeat({
            tripId: selectedTripId,
            passengerId: selectedPassengerId,
            column: columnArr[findIndex],
            row,
          });
          onUpdateSsrSeat({
            tripId: selectedTripId,
            passengerId: findWithPassengerKey,
            column: columnArr[findIndex + 1],
            row,
          });
        } else {
          // ABC DEF GHJ
          let columnArr: any[] = ["A", "B", "C", "D", "E", "F", "G", "H", "J"];
          if (column === "B" || column === "E" || column === "H") {
            flow(
              map((seat: any) => {
                if (seat.column === columnArr[(indexOf(column, columnArr)) + 1] && seat.row === row && !seat.assignable) {
                  column = columnArr[(indexOf(column, columnArr)) - 1];
                }
              })
            )(filteredSeatMap)
          }

          const findIndex = column === "C" || column === "F" || column === "J" ? 
          (indexOf(column, columnArr)) -1 : indexOf(column, columnArr);

          onUpdateSsrSeat({
            tripId: selectedTripId,
            passengerId: selectedPassengerId,
            column: columnArr[findIndex],
            row,
          });
          onUpdateSsrSeat({
            tripId: selectedTripId,
            passengerId: findWithPassengerKey,
            column: columnArr[findIndex + 1],
            row,
          });
        }
      } else { 
        onUpdateSsrSeat({
          tripId: selectedTripId,
          passengerId: selectedPassengerId,
          column,
          row,
        });
      }
    },
    [selectedTripId, selectedPassengerId],
  );

  for (let i=0; i<filteredSeatMap.length; i++){
    for(let j=0; j<tmp.length; j++){
      // if (filteredSeatMap[i].row === tmp[j] && isInfantorNot != undefined){
      if (filteredSeatMap[i].row === tmp[j] && (findInfantKey || findAdultKey)){
        filteredSeatMap[i].assignable = false;
      }
    }
  }

  const onComplete = useCallback(() => {
    if (typeof onSubmit != 'function') return;
    if (getAutoSetting != undefined) {
      if(type != "checkin") alert('좌석 미선택 시 임의로 좌석이 지정됩니다.');
      else {
        alert('모든 인원의 좌석을 선택해주세요.');
        return;
      }
    }

    onSubmit([getOccupiedSeats]);
    
  }, [getAutoSetting]);

  const onNextTab = useCallback(() => {
    if (getAutoSetting != undefined) {
      alert('좌석 미선택 시 임의로 좌석이 지정됩니다.');
    }
    setSelectedTripId(getLastId(trips));
  }, [getAutoSetting]);

  const seatMapElement = useMemo(() => {
    switch (selectedTripCabinClass) {
      case ECabinClass.PREMIUM:
        return (
          <SeatMapPremium
            seatMap={filteredSeatMap}
            onClick={onClickSeat}
          />
        );
      case ECabinClass.ECONOMY:
        return (
          <SeatMapEconomy
            seatMap={filteredSeatMap}
            onClick={onClickSeat}
          />
        );
      default:
        return <div />;
    }
  }, [
    selectedTripCabinClass,
    selectedPassengerId,
    filteredSeatMap,
    onClickSeat,
  ]);

  useEffect(() => {
    initializeMenuItems(setSelectedTripId, trips);
    initializeMenuItems(
      setSelectedPassengerId,
      passengersWithSelectedLabel,
    );
  }, []);

  return (
    <S.container>
      <S.top>
        <div className="title font-bold">좌석 선택</div>
        <div className="tabsWrapper">
          {getTabsElement({
            tabs: trips,
            selectedTabId: selectedTripId,
            onClick: onClickMenuItem(setSelectedTripId),
          })}
        </div>
      </S.top>
      <S.middle>
        {getActivatedTabIsClosed({
          tabs: trips,
          selectedTabId: selectedTripId,
        }) ? (
          <ClosedInfo
            title={closedTitle}
            description={ssrModalSeatClosedDescription}
          />
        ) : (
          <div className="innerWrapper">
            <div className="left">
              {getLeftItemsElement({
                leftItems: passengersWithSelectedLabel,
                selectedLeftItemId: selectedPassengerId,
                onClick: onClickMenuItem(
                  setSelectedPassengerId,
                ),
              })}
            </div>
            <div className="right">
              <div className="inputsWrapper">
                {seatMapElement}
              </div>
              <div className="noticeWrapper">
                <div className="warningListWrapper">
                  <WarningList
                    descriptions={
                      ssrModalSeatWarningDescriptions
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </S.middle>
      <S.bottom>
        <div className="priceWrapper">
          {hasTotal && (
            <Fragment>
              <div className="label">추가 금액</div>
              <div className="value">
                {commaNumber(getOccupiedSeatsPrice)} 원
              </div>
            </Fragment>
          )}
        </div>
        <div className="buttonsWrapper">
          {!isLastTabId && (
            <Fragment>
              <div className="buttonWrapper">
                <TaskButton onClick={onNextTab}>
                  오는 편 선택
                </TaskButton>
              </div>
            </Fragment>
          )}
          {isLastTabId && (
            <div className="buttonWrapper">
              <TaskButton onClick={onComplete}>
                선택 완료
              </TaskButton>
            </div>
          )}
        </div>
      </S.bottom>
    </S.container>
  );
}

SsrModalSeat.defaultProps = {};

const S = {
  ...SsrModalS.S1,
  container: styled.div<IStyleProps>`
    .inputsWrapper {
      width: 450px;
    }
  `,
};

export default SsrModalSeat;