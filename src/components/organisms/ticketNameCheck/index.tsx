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
import {
  DARK_GRAY1,
  WHITE1,
  LIGHT_GRAY5,
  LIGHT_GRAY8,
  LIGHT_GRAY1,
} from '@airpremia/cdk/styles/colors';
import { TaskButton, Input } from 'src/components';

interface IStyleProps {}
interface IProps extends IStyleProps {
  hasItineraryType?: boolean;
  onHookingClickEvent?: () => void;
}

const TicketNameCheck: FC<IProps> = ({
  hasItineraryType = false,
  onHookingClickEvent = () => {},
}) => {
  const {
    onChangeItineraryTypeLocal,
    onSearch,
  } = useBookingLocal();
  const {
    bookingSessionStore,
  } = useBooking();
  const { commonStore, onChangeCurrency } = useCommon();
  const { currency, currencyList } = commonStore;
  const {
    itineraryType,
  } = bookingSessionStore;
  const [isSelectOpen, setSelectOpen] = useState(false);

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
    onSearch();
    onHookingClickEvent();
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
            <p className="bold">AP</p>
          </div>
          <div className="selectWrapper">
            <Input placeholder={'4자리 숫자 입력'} />
          </div>
        </div>
        <div className="buttonWrapper">
          <TaskButton onClick={onClickSearch}>
            조회하기
          </TaskButton>
        </div>
      </div>
    </S.container>
  );
};

TicketNameCheck.defaultProps = {};

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
      width: 988px;
      height: 54px;
      border: 1px solid ${DARK_GRAY1};
      border-radius: 8px;
      background-color: ${WHITE1};
      display: flex;
      align-items: center;
      padding: 0 20px;
      .selectWrapper + .selectWrapper {
        width: 100%;
        position: relative;
        padding-left: 40px;
        &:before {
          content: '';
          position: absolute;
          left: 20px;
          width: 1px;
          height: 20px;
          background-color: ${LIGHT_GRAY5};
        }
      }
      .selectWrapper {
        width: 90px;
        &.passenger {
          flex: 1;
        }
        .bold{
          font-weight: bold;
        }
      }
    }
    .menuWrapper {
      top: 22px;
      &.station {
        left: -20px;
        width: 515px;
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

export default TicketNameCheck;
