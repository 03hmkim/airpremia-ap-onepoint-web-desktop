import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  Select,
  //AutoComplete,
  TextInput,
} from 'src/components';
import { CheckinAutoComplete } from 'src/components/molecules/autoComplete/index';
import {
  LIGHT_GRAY6,
  ORANGE1,
} from '@airpremia/cdk/styles/colors';
import { ESelectPosition } from 'src/components/molecules/select';
import { useBookingLocal } from 'src/hooks';
import { useBooking } from '@airpremia/core/hooks';

import {
  ECheckinDataChangeKeys,
  ICheckinStatusPassenger,
} from '@airpremia/core/stores/models/booking';
import { EInputType } from 'src/components/atoms/input';
import {
  makeDefaultInputData,
} from '@airpremia/core/lib/service';
import { ifProp } from 'styled-tools';
import { checkInputForm } from '@airpremia/core/lib/auth';
import { default as dataDummy } from 'src/components/templates/checkin/checkinDetailInfo/dummy';

interface IStyleProps {}
interface IProps extends IStyleProps {
  data: ICheckinStatusPassenger;
  idx: number;
  formFilled: boolean[] | null;
  onChangeFilledStatus: (status: boolean[]) => void;
}

function PassengerForm2({
  idx,
  data,
  formFilled,
  onChangeFilledStatus,
}: IProps) {
  const {
    onBlurLocalInputData,
  } = useBookingLocal();
  const {
    onChangeCheckinData,
  } = useBooking();
  const { travelDocument } = data;
  const {
    PHONE_NUMBER,
    GENDER,
  } = ECheckinDataChangeKeys;

  /** 휴대폰인증 국가코드 */
  const [label, setLabel] = useState('+ 82');
  const [
    isCountryNumberOpen,
    setCountryNumberOpen,
  ] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(
    makeDefaultInputData(''),
  );

  const selectProps = {
    label,
    isShowMenu: isCountryNumberOpen,
    position: ESelectPosition.DOWN,
    onClick: () =>
      setCountryNumberOpen(!isCountryNumberOpen),
  };

  const contentProps = {
    key: 'countryNumber',
    label: 'countryTextKr',
    dataList: dataDummy.countryCodeList.counties, //sortedCountryNumberData,
    onChange: (data: any) => {
      setLabel(`+ ${data.countryNumber}`);
      setCountryNumberOpen(!isCountryNumberOpen);
    },
    // onFliter: (e: any) => {
    //   handleSortedCountryCodeChange(e);
    // },
    emptyMessage: (
      <p>
        국가명/지역명 또는 국가번호를 찾을 수 없습니다.
        <br />
        검색어를 다시 한 번 확인해주세요.
      </p>
    ),
  };

  const phoneNumberData = {
    value: phoneNumber.value,
    target: 'phoneNumber',
    type: EInputType.NUMBER,
    placeholder: '휴대폰 번호 입력',
    maxLength: 15,
    onChange: (e: any) => {
      const { value } = e.target;
      setPhoneNumber((prev) => {
        return {
          ...prev,
          value,
        };
      });
      onChangeCheckinData({
        idx,
        key: PHONE_NUMBER,
        value: `${label.split(' ')[1]}|${e.target.value}`,
      });
    },
    onBlur: (e: any) => {
      const { target } = e.target.dataset;
      const res = onBlurLocalInputData({
        target,
        data: phoneNumber,
      });
      setPhoneNumber(res);
    },
  };

  const onInitSetInputData = () => {
    if (data.phoneNumber) {
      if (data.phoneNumber.indexOf('|') > -1) {
        setPhoneNumber(
          makeDefaultInputData(
            data.phoneNumber.split('|')[1],
          ),
        );
      } else {
        setPhoneNumber(
          makeDefaultInputData(data.phoneNumber),
        );
      }
    }

    if (data?.gender && !travelDocument?.gender) {
      onChangeCheckinData({
        idx,
        key: GENDER,
        value: data.gender,
      });
    }
  };

  useEffect(() => {
    onInitSetInputData();
  }, [travelDocument]);

  useEffect(() => {
    if (
      travelDocument &&
      Object.keys(travelDocument).length > 0
    ) {
      const isInputFilled = checkInputForm(
        phoneNumber,
      );

      if (isInputFilled) {
        const origin = formFilled || [];
        origin.splice(idx, 1, true);

        onChangeFilledStatus(origin);
      }
    }
  }, [data, phoneNumber]);

  return (
    <S.container>
      <div className="textInputsWrapper">
        <div className="row">
          <div className="label">휴대폰 번호</div>
          <S.phoneArea>
            <S.autoComplete>
              <Select {...selectProps}>
                <CheckinAutoComplete {...contentProps} />
              </Select>
            </S.autoComplete>
            <S.seperator />
            <S.textInput isBold={!!phoneNumberData.value}>
              <TextInput
                borderColor="transparent"
                inputProps={phoneNumberData}
              />
            </S.textInput>
          </S.phoneArea>
        </div>
        {phoneNumber.error && (
          <S.warning>{phoneNumber.msg}</S.warning>
        )}
      </div>
    </S.container>
  );
}

PassengerForm2.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    .textInputsWrapper {
      .row {
        display: flex;
        align-items: center;
        /* padding: 20px 0; */
        height: 62px;
        border-bottom: 1px solid ${LIGHT_GRAY6};
        .label {
          width: 200px;
          font-size: 15px;
          letter-spacing: -0.3px;
        }
        .value {
          font-weight: 600;
        }
      }
    }
    .checkboxWrapper {
      padding-top: 30px;
    }
  `,

  autoComplete: styled.div``,

  warning: styled.div`
    text-indent: 197px;
    position: relative;
    top: 5px;
    bottom: -16px;
    font-size: 12px;
    color: ${ORANGE1};
    line-height: 11px;
  `,

  phoneArea: styled.div`
    display: flex;
    align-items: center;
  `,

  seperator: styled.div`
    margin: 2px 20px 0;
    height: 16px;
    border-right: solid 1px ${LIGHT_GRAY6};
  `,

  textInput: styled.div<{ isBold: boolean }>`
    flex: 1;

    input {
      font-weight: ${ifProp('isBold', 600, 'normal')};
    }
  `,
};

export default PassengerForm2;
