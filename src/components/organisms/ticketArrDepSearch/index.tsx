import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { FC, useState } from 'react';
import { useBookingLocal } from 'src/hooks';
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
  LIGHT_GRAY7,
  LIGHT_GRAY9,
  BLUE1,
  ORANGE1,
  RED2
} from '@airpremia/cdk/styles/colors';
import { TaskButton } from 'src/components';
import moment from 'moment';
// import dayjs from 'dayjs';

//////★★★★★★★★★★
interface IStyleProps {}
interface IProps extends IStyleProps {
  hasItineraryType?: boolean;
  onHookingClickEvent?: () => void;
}

const TicketArrDepSearch: FC<IProps> = ({
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
    // onSearch,
    onArrDepSearch,
  } = useBookingLocal();
  const {
    bookingSessionStore,
  } = useBooking();
  const { commonStore, onChangeCurrency } = useCommon();
  const { currency, currencyList } = commonStore;
  const {
    itineraryType,
    itinerary,
    // date,
  } = bookingSessionStore;
  const [isSelectOpen, setSelectOpen] = useState(false);
  const { origin, destination } = itinerary;

  // const momentDate =moment().format('YYYY-MM-DD');
  // const dayjsDate = dayjs().format('YYYY-MM-DD');
  // const checkDay = dayjs().format('ddd');

  // const [day, setDay] = useState(dayjsDate);

  // const ddd = dayjs().format('YYYY.MM.DD');

  // const [chday, setChday] = useState(ddd);
  // const [kday, setKDay] = useState(checkDay);

  //★ 날짜 설정해주기
  // changeSelect(ESelectType.DATE)
  localStorage.setItem(
    'today',
    moment().format('YYYYMMDD'),
  ); 

  
  const selectProps = {
    label: currency.unit,
    isShowMenu: isSelectOpen,
    position: ESelectPosition.DOWN,
    onClick: () => setSelectOpen(!isSelectOpen),
  };

  const onClickCurrency = (e: any) => {
    onChangeCurrency(e.target.innerText);
    setSelectOpen(!isSelectOpen);
  };

  const onClickSearch = () => {
    // onSearch();
    onArrDepSearch();
    onHookingClickEvent();
  };

  //★날짜데이터 적용하기
  // const onClickDay = () =>{
  //   alert('클릭');
  // }

  return (
    <>
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
              placeholder="출발지 선택"
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
              placeholder="도착지 선택"
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
        </div>
        <div className="buttonWrapper">
          <TaskButton onClick={onClickSearch}>
            조회하기
          </TaskButton>
        </div>
      </div>
    </S.container>

    <C.wrap>
      <C.sbody>
        <S.stBox>

          {/* <C.btn className='Selected'
            onClick={onClickDay}
          >
            <C.itemText>{chday} <C.bold>({kday})</C.bold></C.itemText>
          </C.btn> */}

          <C.btn>
            <C.itemText>2019.9.2. <C.bold>(월)</C.bold></C.itemText>
          </C.btn>
          <C.btn>
            <C.itemText>2019.9.3. <C.bold>(화)</C.bold></C.itemText>
          </C.btn>
          <C.btn className='Selected'>
            <C.itemText>2019.9.4. <C.bold>(수)</C.bold></C.itemText>
          </C.btn>
          <C.btn>
            <C.itemText>2019.9.5. <C.bold>(목)</C.bold></C.itemText>
          </C.btn>
          <C.btn>
            <C.itemText>2019.9.6. <C.bold>(금)</C.bold></C.itemText>
          </C.btn>
        </S.stBox>
        </C.sbody>
      </C.wrap>
      </>
  );
};

TicketArrDepSearch.defaultProps = {};

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
      width: 100%;
      flex:1;
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
        width: 100%;
        flex:1;
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
        width: 515px;
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
    @media only screen and (max-width: 767px) { 
      .menuWrapper {
        top:10px;

        &.station {
          width: calc(100% + 40px);
        }
      }

      .bottom {
        display:block;
      }

      .selectsWrapper {
        height:auto;
        width:calc( 100% - 42px );
        display:block;
        .selectWrapper + .selectWrapper {
          margin:0;
          padding:0 0 14px 0;
        }
      }

      .buttonWrapper{
        width:100%;
        padding-left:0;
        margin-top:10px;
      }
    }
  `,

  stBox:styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
    .Selected{
      color: ${ORANGE1};
      border: 1px solid ${ORANGE1};
      border-radius: 28px;
    }
  @media only screen and (max-width: 599px) { 
    display:block;
    height:auto;
    overflow:hidden;
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
};



const C = {
  wrap: styled.div`
    margin-top: 60px;
      .displayNone{
        display: none;
      }
    @media only screen and (max-width: 1059px) { 
      margin-top: 40px;
    }
    @media only screen and (max-width: 767px) { 
      margin-top: 20px;
    }
  `,
  sbody: styled.div`
    margin-top: 100px;
    @media only screen and (max-width: 1059px) { 
      margin-top: 80px;
    }
    @media only screen and (max-width: 767px) { 
      margin-top: 60px;
    }
  `,
  title: styled.h4`
    font-size: 22px;
    font-weight: bold;
    @media only screen and (max-width: 1059px) { 
      font-size: 20px;
    }
    @media only screen and (max-width: 767px) { 
      font-size: 18px;
    }
  `,
  itemTitle: styled.h5`
    font-size: 20px;
    font-weight: bold;
    @media only screen and (max-width: 1059px) { 
      font-size: 18px;
    }
    @media only screen and (max-width: 767px) { 
      font-size: 16px;
    }
  `,
  sb: styled.div`
    margin-top: 60px;
  `,
  p: styled.p`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 1.8;
      &:first-child{
        margin-top: 20px;
      }
      &:last-child{
        margin-bottom: 0px;
      }
  `,
  itemText: styled.p`
    display: inline-block;
    font-size: 18px;
    line-height: 1.8;
    &.mt20{
      margin-top:20px;
    }
    @media only screen and (max-width: 1059px) { 
      font-size: 16px;
    }
    @media only screen and (max-width: 767px) { 
      font-size: 14px;
    }
  `,
  description: styled.p`
    margin-top: 10px;
    color: ${LIGHT_GRAY7};
    font-size: 18px;
    line-height: 28px;
    &.center{
      text-align:center;
    }
    &.mt20{
      margin-top:20px;
    }
    @media only screen and (max-width: 1059px) { 
      font-size: 14px;
    }
    @media only screen and (max-width: 767px) { 
      font-size: 13px;
    }
  `,
  bold: styled.span`
    font-weight: bold;
  `,
  li: styled.li`
    padding-left: 10px;
    position: relative;
    line-height: 36px;
      &::before{
        content:"";
        width: 4px;
        height: 4px;
        top: 15px;
        left: 0px;
        text-indent: -9999px;
        display: block;
        position: absolute;
        background-color: ${DARK_GRAY1};
        border-radius: 50%
      }
      &:first-child{
        margin: 0;
      }

  `,
  Badge:styled.div`
    width: 60px;
    height: 24px;
    margin: 0 auto;
    padding: 2px;
    color: #fff;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    border-radius: 4px;
    box-sizing: border-box;
      &.blue{
        background-color: ${BLUE1};
      }
      &.black{
        background-color: ${DARK_GRAY1};
      }
      &.red{
        background-color: ${RED2};
      }
    @media only screen and (max-width: 1059px) { 
      font-size: 14px;
    }
    @media only screen and (max-width: 767px) { 
       
    }
    `,
  line:styled.div`
    width: 83px;
    height: 1px;
    margin: 10px 20px 14px;
    background: ${LIGHT_GRAY9};
    `,
  textBox:styled.div`
    width: auto;
    display: inline-block;
    text-align: left;
    `,
  textBoxCenter:styled.div`
    width: auto;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
  `,
  bannerBox:styled.div`
    margin-top: 20px;
    padding: 32px 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    border: 1px solid #dddddd;
    border-radius: 12px;
      .mb6{
        margin-bottom:6px;
      }
      .mt15{
        margin-top:15px;
      }
    `,
  btn:styled.button`
    display: inline-block;
    padding: 13px 47px;
    border-radius: 12px;
    border: solid 1px ${WHITE1};
    font-size: 18px;
    font-weight: 600;
    color: ${DARK_GRAY1};

    @media only screen and (max-width: 767px) { 
      padding: 6px 10px;
      font-size: 16px;
    }
    @media only screen and (max-width: 599px) { 
      float:left;
      width:calc( 100% / 3 );
      text-align:center;
    }
`,
}

export default TicketArrDepSearch;
