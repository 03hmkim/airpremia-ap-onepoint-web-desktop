import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import React, { FC, useState } from 'react';
import { useBookingLocal, } from 'src/hooks';
import {
  useBooking,
  useCommon,
} from '@airpremia/core/hooks';
import ItineraryTypeButtons from '../itineraryTypeButtons';
import Select, {
  ESelectPosition,
} from 'src/components/molecules/select';
import { ESelectType } from 'src/hooks/useBooking/useBookingSession';
import {
  DARK_GRAY1,
  WHITE1,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
  LIGHT_GRAY1,
} from '@airpremia/cdk/styles/colors';
import {
  DatePickerRange,
} from 'src/components';
import { TaskButton } from 'src/components';
import { EFlightType } from '@airpremia/core/stores/models/bookingSession';


interface IStyleProps {}
interface IProps extends IStyleProps {
  hasItineraryType?: boolean;
  isRebook?: boolean;
}

const TicketSearchHorizontalRebook: FC<IProps> = ({
  hasItineraryType = false,
  isRebook = false,
}) => {
  
  console.log("2 isRebook", isRebook)
  const {
    onChangeItineraryTypeLocal,
    stationLabel,
    openedSelect,
    changeSelect,
    onChangeOrigin,
    menuItemStations,
    originMenuStations,
    onChangeDestination,
    destinationMenuStations,
    dateLabel,
    isPremiumEconomy,
    togglePremiumEconomy,
  } = useBookingLocal();
  const {
    bookingSessionStore,
    onChangeDate,
    onLoadLowFaresData,
    onSearchChangeFlight,
  } = useBooking();
  const { commonStore, onChangeCurrency } = useCommon();
  const { currency, currencyList } = commonStore;
  const {
    itineraryType,
    itinerary,
    date,
    currencyCode,
  } = bookingSessionStore;
  const [isSelectOpen, setSelectOpen] = useState(false);
  const { origin, destination } = itinerary;
  const dateLength = date.length; //추가

  const onClickDatePicker = () => {
    if (origin && destination) {
      return changeSelect(ESelectType.DATE)();
    } else {
      alert('잘못된 진행입니다');
    }
  };


  const selectProps = {
    label: currency.unit,
    isShowMenu: isSelectOpen,
    position: ESelectPosition.DOWN,
    // onClick: () => setSelectOpen(!isSelectOpen),
    onClick: () => {},
  };

  const onClickCurrency = (e: any) => {
    onChangeCurrency(e.target.innerText);
    setSelectOpen(!isSelectOpen);
  };

  const onClickSearch = () => {
    if (
      origin &&
      destination &&
      dateLength != 0
    ) {

      var departureDt = date[0].locale('ko').format("YYYY-MM-DD")+"T00:00:00"
      var arrivalDt = dateLength>1 ? date[1].locale('ko').format("YYYY-MM-DD")+"T00:00:00" : undefined

      onSearchChangeFlight({ 
        destination: destination,
        origin: origin,
        departure: departureDt,
        arrival: arrivalDt,
      });
    }else {
      alert('출발지, 도착지, 날짜를 선택하세요.');
    }
  };

  return (
    <S.container>
      <div className="top itineraryTypeButtonsWrapper">
        {hasItineraryType && (
          <ItineraryTypeButtons
            type={itineraryType}
            onChangeType={onChangeItineraryTypeLocal}
          />
        )}
        {hasItineraryType && (
          <div className="currency">
            <h5>결제 통화</h5>
            <div className="select">
              <Select {...selectProps}>
                <S.wrapper onClick={onClickCurrency}>
                  {currencyList.map((item, i) => (
                    <S.currencyItem
                      isSelected={item === currency.unit}
                      key={`currencySelect${i.toString()}`}
                    >
                      {item}
                    </S.currencyItem>
                  ))}
                </S.wrapper>
              </Select>
            </div>
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="selectsWrapper">
          <div className="selectWrapper ">
            <Select
              position={ESelectPosition.DOWN}
              label={stationLabel(origin)}
              placeholder="출발지"
              isShowMenu={
                openedSelect === ESelectType.ORIGIN
              }
              onClick={changeSelect(ESelectType.ORIGIN)}
            >
              <div
                className="menuWrapper station"
                onClick={onChangeOrigin}
              >
                {menuItemStations(
                  originMenuStations,
                  origin,
                )}
              </div>
            </Select>
          </div>
          <div className="selectWrapper">
            <Select
              position={ESelectPosition.DOWN}
              label={stationLabel(destination)}
              placeholder="도착지"
              isShowMenu={
                openedSelect === ESelectType.DESTINATION
              }
              onClick={changeSelect(
                ESelectType.DESTINATION,
              )}
            >
              <div
                className="menuWrapper station"
                onClick={onChangeDestination}
              >
                {menuItemStations(
                  destinationMenuStations,
                  destination,
                )}
              </div>
            </Select>
          </div>
          <div className="selectWrapper">
            <Select
              position={ESelectPosition.DOWN}
              label={dateLabel}
              placeholder="날짜 선택"
              isShowMenu={openedSelect === ESelectType.DATE}
              onClick={onClickDatePicker}
            >
              <div className="menuWrapper date">
                <DatePickerRange
                  isOneDayTrip={
                    itineraryType === EFlightType.OW
                  }
                  isPremiumEconomy={isPremiumEconomy}
                  itinerary={itinerary}
                  currencyCode={currencyCode}
                  date={bookingSessionStore.date}
                  onTogglePremiumEconomy={
                    togglePremiumEconomy
                  }
                  onClickCompleteButton={changeSelect(
                    ESelectType.PASSENGER,
                  )} 
                  onChangeDay={onChangeDate}
                  onLoad={onLoadLowFaresData}
                />
              </div>
            </Select>
          </div>
        </div>
        <div className="buttonWrapper">
          <TaskButton onClick={onClickSearch}>
            변경 항공권 검색
          </TaskButton>
        </div>
      </div>
    </S.container >
  );
};

TicketSearchHorizontalRebook.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .bottom {
      display: flex;
      padding-top: 30px;
    }
    .selectsWrapper {
      width: 1030px;
      height: 54px;
      border: 1px solid ${DARK_GRAY1};
      border-radius: 8px;
      background-color: ${WHITE1};
      display: flex;
      align-items: center;
      padding: 0 20px;
      .selectWrapper + .selectWrapper {
        position: relative;
        padding-left: 40px;

        &:before {
          content: '';
          position: absolute;
          top: 15px;
          left: 20px;
          width: 1px;
          height: 20px;
          background-color: ${LIGHT_GRAY5};
        }
      }
      .selectWrapper {
        width: 200px;
        padding: 14px 0;
        &.passenger {
          flex: 1;
        }
      }
    }
    .menuWrapper {
      top: 22px;
      &.station {
        left: -20px;
        width: 400px;
        padding: 15px 26px;
        box-sizing: border-box;
      }
      &.date {
        left: -240px;
      }
      &.passenger {
        right: -21px;
      }
    }
    .buttonWrapper {
      padding-left: 10px;
      width: 160px;
      height: 56px;
    }

    .currency {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      h5 {
        margin-right: 11px;
        font-size: 14px;
        line-height: 28px;
        letter-spacing: -0.28px;
        font-weight: 600;
      }
      .select {
        font-size: 15px;
        line-height: 30px;
        letter-spacing: -0.23px;
        width: 57px;
        padding: 0 10px;
        box-sizing: border-box;

        & > div > div:last-of-type {
          top: 8px;
          right: 73px;
        }
      }
    }
    .chTable{
      text-aling: center;
    }
    .chTr{
      width: 100%;
    }
    .chTd{
      width: 50px;
    }
  `,

  wrapper: styled.div`
    min-width: 118px;
    border-radius: 8px;
    box-shadow: 7px 7px 7px 0 rgba(0, 0, 0, 0.03);
    border: ${DARK_GRAY1};
    background-color: ${WHITE1};
    padding: 15px 0;
    font-weight: 600;
  `,

  currencyItem: styled.div<{ isSelected: boolean }>`
    height: 29px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    font-size: 13px;
    line-height: 36px;
    letter-spacing: -0.26px;
    color: ${ifProp('isSelected', DARK_GRAY1, LIGHT_GRAY8)};
    cursor: pointer;
    &:hover {
      background-color: ${LIGHT_GRAY1};
      color: ${DARK_GRAY1};
    }
  `,

  //추가
  modalTitle : styled.div``,
  textArea: styled.div`
    height: 100%;
    &.auto{
      padding: 0 50px 50px;
      overflow-y: auto;
      box-sizing: border-box;
    }
  `,

  btnArea: styled.div`
    text-align : center;
    padding: 25px 50px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 1px solid ${LIGHT_GRAY5};
    &.auto{
      position: static;
    }
  `,
  table: styled.div`
    text-align : center;
  `,
  tr: styled.span`
  `,
  td: styled.span`
    width:100%;
  `,
};




export default TicketSearchHorizontalRebook;
