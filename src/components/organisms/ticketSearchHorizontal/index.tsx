import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import React, { FC, useState } from 'react';
import { useBookingLocal, useModal } from 'src/hooks';
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
  PassengersDropdown,
} from 'src/components';
import { TaskButton } from 'src/components';
import { EFlightType } from '@airpremia/core/stores/models/bookingSession';
import {
  NewModal,
  PopupTitle,
} from 'src/components';
import { CustomerAlert } from 'src/components/organisms/CustomerAlert';
import { EScrollType } from 'src/components/templates/centerPopup';


interface IStyleProps {}
interface IProps extends IStyleProps {
  hasItineraryType?: boolean;
  onHookingClickEvent?: () => void;
}

const TicketSearchHorizontal: FC<IProps> = ({
  hasItineraryType = false,
  onHookingClickEvent = () => {},
}) => {
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
    onSearch,
    passengersLabel,
  } = useBookingLocal();
  const {
    bookingSessionStore,
    onChangeDate,
    onLoadLowFaresData,
    onChangePassengers,
  } = useBooking();
  const { commonStore, onChangeCurrency } = useCommon();
  const { currency, currencyList } = commonStore;
  const {
    itineraryType,
    itinerary,
    date,
    currencyCode,
    passengers,
  } = bookingSessionStore;
  const [isSelectOpen, setSelectOpen] = useState(false);
  const { origin, destination } = itinerary;
  const dateLength = date.length; //추가

  const onClickDatePicker = () => {
    if (origin && destination) {
      return changeSelect(ESelectType.DATE)();
    } else {
      alert('도착지를 선택해주세요.');
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

  //모달오픈설정
   const { onHideNewModal } = useModal();
   const {
     onShowNewModal,
     UIStore: { newModal },
   } = useModal();

    let [tabBox] = useState(CustomerAlert);//모달바디내용

    const rulePop1 = () =>
    onShowNewModal('rulePop1');

    const goBooking = () => {
      onHideNewModal();
      onSearch();
      onHookingClickEvent();
    }

    const onClickModal = () => {
       switch (newModal.target) {
         case 'rulePop1':
          console.log("모달창 들어옴ok");
          return(
            <S.container>
              <NewModal
                className="hAutoDf hCalc800 min"
                type={EScrollType.TYPE1}
                title={
                  <S.modalTitle>
                    <PopupTitle>
                      <>
                        국내선을 이용하시는 고객님께 안내 드립니다.
                      </>
                    </PopupTitle>
                  </S.modalTitle>
                }
                body={
                  <S.textArea>
                    <Tab.box>
                      {tabBox[0].text}
                    </Tab.box>
                  </S.textArea>
                }
                button={
                  <S.btnArea className="twin">
                    <TaskButton className="line" onClick={onHideNewModal}>취소</TaskButton>
                    <TaskButton onClick={goBooking}>확인</TaskButton>
                  </S.btnArea>
                }
              />
            </S.container>
          );
        }
      }

  //모달
  const onClickSearch = () => {
    if (
      origin &&
      destination &&
      dateLength != 0
    ) {
      // onSearch();
      // onHookingClickEvent();
      rulePop1();
    }else {
      alert('출발지, 도착지, 날짜를 선택하세요.');
    }
  };

  return (
    <S.container>
      {onClickModal()}
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
          <div className="selectWrapper passenger">
            <Select
              position={ESelectPosition.DOWN}
              label={passengersLabel}
              placeholder="인원 선택"
              isShowMenu={
                openedSelect === ESelectType.PASSENGER
              }
              onClick={changeSelect(ESelectType.PASSENGER)}
            >
              <div className="menuWrapper passenger">
                <PassengersDropdown
                  passengers={passengers}
                  onChangePassengers={onChangePassengers}
                  onComplete={changeSelect(
                    ESelectType.NONE,
                  )}
                />
              </div>
            </Select>
          </div>
        </div>
        <div className="buttonWrapper">
          <TaskButton onClick={onClickSearch}>
            항공권 검색
          </TaskButton>
        </div>
      </div>
    </S.container>
  );
};

TicketSearchHorizontal.defaultProps = {};

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
      width: calc(100% - 170px);
      height: 48px;
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
        left: -160px;
      }
      &.passenger {
        right: -21px;
      }
    }
    .buttonWrapper {
      font-size: 18px;
      padding-left: 10px;
      width: 160px;
    }

    .currency {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      h5 {
        margin-right: 11px;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: -0.28px;
        font-weight: 600;
      }
      .select {
        font-size: 18px;
        line-height: 30px;
        letter-spacing: -0.23px;
        width: 62px;
        padding: 0 10px;
        box-sizing: border-box;

        & > div > div:last-of-type {
          top: 8px;
          right: 73px;
        }
      }
    }
    @media only screen and (max-width: 1199px) {
      .selectsWrapper {
        .selectWrapper {
          width: 180px;
        }   
      }
      .menuWrapper {
        &.date {
          left: -250px;
        }
      }
    }
    .chTr{
      width: 100%;
    }
    .chTd{
      width: 50px;
    }

    @media only screen and (max-width: 1059px) {
      .bottom {
        flex-direction: column;
      }
      .selectsWrapper {
        width: calc(100% - 41px);
        height: 40px;
        flex-direction: column;
        border: 0px;

        .selectWrapper {
          width: 100%;
          padding: 8px 20px;
          border: 1px solid #222222;
          border-radius: 8px;
          margin-bottom: 20px;

          &:before {
            display: none;
          }

          &:last-child {
            margin-bottom: 0px;
          }
        }

        .selectWrapper + .selectWrapper {
          padding-left: 20px;
        }
      }

      .buttonWrapper {
        width: 100%;
        height: 40px;
        margin-top: 200px;
        padding-left: 0px;
      }

      .menuWrapper {
        width: 100%;

        &.station {
          width: calc(100% - -42px);
          left: -21px;
          top: 15px;
        }

        &.passenger {
          width: calc(100% - -42px);
          top: 15px;
        }

        &.date {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 0;
          z-index: 100;
          border-radius: 0;
  
          > div{
            width: 100%;
            height: 100%;
            padding: 25px 25px 0;

            .calendar-inner {
              height: calc(100% - 91px);
              padding-bottom: 25px;
              overflow-y: auto;
              overflow-x: hidden;
              flex-direction: column;
              box-sizing: border-box;

              > div:first-of-type {
                margin-right: 0;
                margin-bottom: 20px;
              }
  
              .body {
                .row .box{
                  width: 14.28%;
                  padding: 0;
                }
                .row:first-of-type {
                  margin: 0;
                  height: 20px;
                }
              }
            }

            .calendar-info{
              width: calc(100% - 50px);
              height: 40px;
              padding: 25px;
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              border-top: 1px solid ${LIGHT_GRAY5};
            }
          }
        }
      }
    }
    
    @media only screen and (max-width: 999px) {
      
    }

    @media only screen and (max-width: 767px) {
      .currency {
        h5 {
          font-size: 16px;
          margin-right: 5px;
        }
        .select {
          font-size: 16px;
          padding: 0 0 0 10px;
        }
      }

      .menuWrapper {
        &.date {
          > div{
            padding: 25px 10px 0;

            .calendar-info{
              width: calc(100% - 30px);
              height: 60px;
              padding: 15px 15px;
            }
          }
        }
      }
    }

    @media only screen and (max-width: 479px) {
      .buttonWrapper {
        font-size: 14px;
      }
      .currency {
        h5 {
          font-size: 14px;
        }
        .select {
          font-size: 14px;
          padding: 0 0 0 10px;
        }
      }
    }

    @media only screen and (max-height: 740px) {
      .menuWrapper {
        &.date {
          >div {
            .calendar-inner {
              .body {
                .row .box {
                  height: 40px;
                }
              }
            }
          }
        }
      }
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
    font-size: 18px;
    line-height: 36px;
    letter-spacing: -0.26px;
    color: ${ifProp('isSelected', DARK_GRAY1, LIGHT_GRAY8)};
    cursor: pointer;
    &:hover {
      background-color: ${LIGHT_GRAY1};
      color: ${DARK_GRAY1};
    }

    @media only screen and (max-width: 767px) { 
      font-size: 16px;
    }
    
    @media only screen and (max-width: 479px) {
      font-size: 14px;
    }
  `,

  //추가
  modalTitle : styled.div`
  `,
  textArea: styled.div``,

  btnArea: styled.div`
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

const Tab = {
  box: styled.div``,

  textArea: styled.div`
    height: 100%;
    > div {
      height: 100%;
    }
  `,
};



export default TicketSearchHorizontal;
