import styled from 'styled-components';
import {
  WHITE1,
  DARK_GRAY2,
  LIGHT_GRAY1,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';
import {
  ItineraryTypeButtons,
  Select,
  DatePickerRange,
  PassengersDropdown,
} from 'src/components';
import { 
  // LinkText2, 
  TaskButton,
} from 'src/components';
import { useBookingLocal } from 'src/hooks';
import {
  useBooking,
  useCommon,
  useLoading,
} from '@airpremia/core/hooks';
import { EFlightType } from '@airpremia/core/stores/models/bookingSession';
import { ESelectType } from 'src/hooks/useBooking/useBookingSession';
import { useState } from 'react';
import { ESelectPosition } from 'src/components/molecules/select';
import { ifProp } from 'styled-tools';
import { NewModal, PopupTitle } from 'src/components';
import { CustomerAlert } from 'src/components/organisms/CustomerAlert';
import { EScrollType } from 'src/components/templates/centerPopup';
import { date } from '@storybook/addon-knobs';
import { useModal } from 'src/hooks';
import BtnIcoSearch from 'public/images/btn_ico_search.svg';


export interface IStation {
  /** 취항지 id */
  id: string;
  /** 취항지 이름 */
  label: string;
}

export interface IMenuItemStationProps {
  disabled: boolean;
  isComing: boolean;
  label: string;
  id: string;
}

interface IStyleProps {}
interface IProps extends IStyleProps {}

function TicketSearchVertical({}: IProps) {
  const {
    openedSelect,
    changeSelect,
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
    passengersLabel,
    onSearch,
  } = useBookingLocal();
  const {
    bookingSessionStore,
    onChangeDate,
    onLoadLowFaresData,
    onChangePassengers,
  } = useBooking();
  const { commonStore, onChangeCurrency } = useCommon();
  const { showLoading } = useLoading();
  const { currency, currencyList } = commonStore;
  const {
    itineraryType,
    itinerary,
    currencyCode,
    passengers,
  } = bookingSessionStore;
  const { origin, destination } = itinerary;
  const [isSelectOpen, setSelectOpen] = useState(false);
  const onClickDatePicker = () => {
    if (origin && destination) {
      return changeSelect(ESelectType.DATE)();
    } else {
      alert('도착지를 선택해주세요.');
    }
  };


   //모달오픈설정
  const { onHideNewModal } = useModal();
  const {
    onShowNewModal,
    UIStore: { newModal },
  } = useModal();

  let [tabBox] = useState(CustomerAlert);//모달바디내용

  const rulePop1 = () => onShowNewModal('rulePop1');

  const goBooking = async () => {
    onHideNewModal();
    await showLoading();
    onSearch();
  }

  const onClickModal = () => {
    switch (newModal.target) {
      case 'rulePop1':
        return(
          <NewModal
            className="hAuto"
            type={EScrollType.TYPE1}
            title={
              <S.modalTitle>
                <PopupTitle>
                  <>
                    국내선을 이용하시는 고객님께<span className="textEnter" />
                    안내 드립니다.
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
        );
    }
  }

  //모달 작업추가
  const onClickSearch = () => {
    if (origin && destination && date.length != 0) {
      // onSearch();
      // onHookingClickEvent();
      rulePop1();
    } else {
      alert('출발지, 도착지, 날짜를 선택하세요.');
    }
    console.log("모달클릭");
  
  };

  const selectProps = {
    label: currency.unit,
    isShowMenu: isSelectOpen,
    position: ESelectPosition.RIGHT,
    // onClick: () => setSelectOpen(!isSelectOpen),
    onClick: () => {},
  };

  const onClickCurrency = (e: any) => {
    onChangeCurrency(e.target.innerText);
    setSelectOpen(!isSelectOpen);
  };

  
  return (
    <S.container>
      {onClickModal()}
      <h3>
        에어프레미아와
        <br />
        함께 떠나볼까요? :-)
      </h3>
      <div className="top">
        <div className="itineraryTypeButtonsWrapper">
          <ItineraryTypeButtons
            type={itineraryType}
            onChangeType={onChangeItineraryTypeLocal}
          />
        </div>
        {/* <div className="linkTextWrapper">
          <LinkText2 onClick={() => {}}>
            포인트 예매
          </LinkText2>
        </div> */}
      </div>
      <div className="middle">
        <div className="selectWrapper">
          <Select
            label={stationLabel(origin)}
            placeholder="출발지"
            isShowMenu={openedSelect === ESelectType.ORIGIN}
            onClick={changeSelect(ESelectType.ORIGIN)}
          >
            <div
              className="menuWrapper station"
              onClick={onChangeOrigin}
            >
              {menuItemStations(originMenuStations, origin)}
            </div>
          </Select>
        </div>
        <div className="selectWrapper">
          <Select
            label={stationLabel(destination)}
            placeholder="도착지"
            isShowMenu={
              openedSelect === ESelectType.DESTINATION
            }
            onClick={changeSelect(ESelectType.DESTINATION)}
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
        <div className="selectWrapper">
          <Select
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
                onComplete={changeSelect(ESelectType.NONE)}
                className="main"
              />
            </div>
          </Select>
        </div>
      </div>
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

      <div className="bottom">
        <TaskButton onClick={onClickSearch}>
          <p>
            <span className="text">항공권 검색</span>
            <span className="ico"><BtnIcoSearch /></span>
          </p>
        </TaskButton>
      </div>
    </S.container>
  );
}

TicketSearchVertical.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    width: 100%;
    user-select: none;
    background-color: ${WHITE1};
    position: relative;
    box-sizing: border-box;

    h3 {
      padding-top: 10px;
      margin-bottom: 175px;
      color: ${DARK_GRAY2};
      font-size: 40px;
      font-weight: 700;
      line-height: 48px;
    }
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .linkTextWrapper {
      display: none;
      font-size: 15px;
    }
    .middle {
      padding-top: 25px;
    }
    .bottom {
      font-size: 18px;
      font-weight: 700;

      button {
        height: 60px;
        border-radius: 70px;

        p {
          display: flex;
          align-item: center;
          justify-content: center;
        }
        .text{
          line-height: 34px;
        }
        .ico{
          margin-left: 15px;
        }
      }
    }
    .selectWrapper {
      padding: 22px 0;
      border-bottom: 1px solid ${LIGHT_GRAY5};
    }
    .menuWrapper {
      &.station {
        top: -40px;
        left: 546px;
        width: 300px;
        padding: 15px 26px;
        box-sizing: border-box;
      }
      &.date {
        top: -397px;
        left: 546px;
      }
      &.passenger {
        width: 440px;
        top: -500px;
        left: 546px;
      }
    }

    .currency {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 47px;
      margin: 10px 0 40px;
      h5 {
        margin-right: 11px;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: -0.26px;
        font-weight: 700;
      }
      .select {
        padding-left: 10px;
        font-size: 14px;
        line-height: 28px;
        letter-spacing: -0.28px;
        box-sizing: border-box;

        & > div > div:last-of-type {
          top: -85px;
          right: -77px;
        }
      }
    }

    @media only screen and (max-width: 1440px) {
      h3{        
        margin-bottom: 70px;
        font-size: 30px;
        line-height: 36px;
      }
      .selectWrapper {
        padding: 15px 0;
      }
      .menuWrapper {
        &.station {
          top: -38px;
          left: 411px;
        }
        &.date {
          top: -350px;
          left: 411px;
        }
        &.passenger {
          top: -404px;
          left: 411px;
        }
      }
    }

    @media only screen and (max-width: 1300px) {
      .menuWrapper {
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

            .btn-close {
              display: block !important;
            }

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

    @media only screen and (max-width: 1059px) {
      .menuWrapper {
        &.passenger {
          width: 300px;
          top: -370px;
          left: 411px;
        }
      }
    }

    @media only screen and (max-width: 767px) {

      .currency {
        h5 {
          font-size: 14px;
          font-weight: 400;
        }
      }

      .bottom {
        button {
          height: 50px;

          .text {
            font-size: 16px;
            font-weight: 400;
          }

          .ico {
            padding-top: 5px;

            svg {
              width: 24px;
              height: 24px;
            }
          }
        }
      }

      .menuWrapper {
        &.station,
        &.passenger {
          width: 100%;
          top: 15px;
          left: 0;
        }
        
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

    @media only screen and (max-width: 599px) {
      h3 {
        padding-top: 0;
        margin-bottom: 20px;
        font-size: 24px;
        line-height: 32px;
      }
      .currency {
        margin: 5px 0 10px;
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
   `,
 
   btnArea: styled.div`
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


export default TicketSearchVertical;
