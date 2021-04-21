import { useState, useCallback, useEffect } from 'react';
import { mapValues } from 'lodash';
import styled from 'styled-components';
import {
  Checkbox,
  Select,
  AutoComplete,
  TextInput,
  BirthDateSelectorGroup,
} from 'src/components';
import {
  LIGHT_GRAY6,
  ORANGE1,
} from '@airpremia/cdk/styles/colors';
import { ESelectPosition } from 'src/components/molecules/select';
import { useBookingLocal } from 'src/hooks';
import { useAuth, useBooking } from '@airpremia/core/hooks';

import {
  ECheckinDataChangeKeys,
  ICheckinStatusPassenger,
} from '@airpremia/core/stores/models/booking';
import { EInputType } from 'src/components/atoms/input';
import { IBirthType } from '../birthDateSelectorGroup';
import {
  getValuableObject,
  getLocalISOTime,
  makeDefaultInputData,
} from '@airpremia/core/lib/service';
import { ifProp } from 'styled-tools';
import { checkInputForm } from '@airpremia/core/lib/auth';

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
    getNationalText,
    onBlurLocalInputData,
  } = useBookingLocal();
  const {
    bookingStore,
    onChangeCheckinData,
  } = useBooking();
  const { authStore } = useAuth();
  const {
    isLogIn,
    sortedCountryCodeData: sortedCountryNumberData,
  } = authStore;
  const { sortedCountryCodeData } = bookingStore;
  const [isSave, setIsSave] = useState<boolean>(false);
  const { travelDocument } = data;
  const {
    ISSUED_BY_CODE,
    NATIONALITY,
    NUMBER,
    DATE_OF_BIRTH,
    EXPIRATION_DATE,
    PHONE_NUMBER,
    GENDER,
  } = ECheckinDataChangeKeys;

  const checkboxProps = {
    onChange: useCallback(() => setIsSave(!isSave), [
      isSave,
    ]),
    isActive: isSave,
  };

  /** 여권발행국 */
  const [
    issuedByCodeLabel,
    setIssuedByCodeLabel,
  ] = useState('');
  const [
    isIssuedByCodeShow,
    setIssuedByCodeShow,
  ] = useState(false);

  /** 국적 */
  const [nationalityLabel, setNationalityLabel] = useState(
    '',
  );
  const [isNationalityShow, setNationalityShow] = useState(
    false,
  );

  /** 여권번호 */
  const [passportNumber, setPassportNumber] = useState(
    makeDefaultInputData(''),
  );

  /** 휴대폰인증 국가코드 */
  const [label, setLabel] = useState('+ 82');
  const [
    isCountryNumberOpen,
    setCountryNumberOpen,
  ] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(
    makeDefaultInputData(''),
  );

  const issuedBySelectProps = {
    label: issuedByCodeLabel,
    isShowMenu: isIssuedByCodeShow,
    position: ESelectPosition.DOWN,
    onClick: () => setIssuedByCodeShow(!isIssuedByCodeShow),
  };

  const issuedByContentProps = {
    key: 'countryCode',
    label: 'countryText',
    dataList: sortedCountryCodeData,
    onChange: (data: any) => {
      setIssuedByCodeLabel(data.countryText);
      setIssuedByCodeShow(!isIssuedByCodeShow);
      setNationalityLabel(
        getNationalText(data.countryCode),
      );
      onChangeCheckinData({
        idx,
        key: ISSUED_BY_CODE,
        value: data.countryCode,
      });
      onChangeCheckinData({
        idx,
        key: NATIONALITY,
        value: data.countryCode,
      });
    },
    emptyMessage: (
      <p>
        국가명/지역명 또는 국가번호를 찾을 수 없습니다.
        <br />
        검색어를 다시 한 번 확인해주세요.
      </p>
    ),
  };

  const nationalitySelectProps = {
    label: nationalityLabel,
    isShowMenu: isNationalityShow,
    position: ESelectPosition.DOWN,
    onClick: () => setNationalityShow(!isNationalityShow),
  };

  const nationalityContentProps = {
    key: 'countryCode',
    label: 'countryText',
    dataList: sortedCountryCodeData,
    onChange: (data: any) => {
      setNationalityLabel(data.countryText);
      setNationalityShow(!isNationalityShow);
      onChangeCheckinData({
        idx,
        key: NATIONALITY,
        value: data.countryCode,
      });
    },
    emptyMessage: (
      <p>
        국가명/지역명 또는 국가번호를 찾을 수 없습니다.
        <br />
        검색어를 다시 한 번 확인해주세요.
      </p>
    ),
  };

  const passportNumberData = {
    value: passportNumber.value,
    target: 'passportNumber',
    type: EInputType.TEXT,
    placeholder: '여권번호입력',
    maxLength: 30,
    onChange: (e: any) => {
      const value = e.target.value;
      onChangeCheckinData({
        idx,
        key: NUMBER,
        value,
      });
      setPassportNumber((prev) => {
        return {
          ...prev,
          value,
        };
      });
    },
    onBlur: (e: any) => {
      const { target } = e.target.dataset;
      const res = onBlurLocalInputData({
        target,
        data: passportNumber,
      });
      onChangeCheckinData({
        idx,
        key: NUMBER,
        value: res.value,
      });
      setPassportNumber(res);
    },
  };

  const deleteDateLabelProperty = (date: IBirthType) =>
    mapValues(date, (o) => {
      return o.num;
    });

  const makeDate = (date: any) => {
    const { year, month, day } = date;
    return getLocalISOTime(`${year}/${month}/${day}`);
  };

  const callbackDate = (key: ECheckinDataChangeKeys) => (
    date: IBirthType,
  ) => {
    const obj = deleteDateLabelProperty(date);
    const valuableObj = getValuableObject(obj);

    if (Object.keys(valuableObj).length === 3) {
      onChangeCheckinData({
        idx,
        key,
        value: makeDate(obj),
      });
    }
  };

  const selectProps = {
    label,
    isShowMenu: isCountryNumberOpen,
    position: ESelectPosition.DOWN,
    onClick: () =>
      setCountryNumberOpen(!isCountryNumberOpen),
  };

  const contentProps = {
    key: 'countryNumber',
    label: 'description',
    dataList: sortedCountryNumberData,
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
    if (travelDocument) {
      const {
        issuedByCode,
        nationality,
        number,
      } = travelDocument;

      setIssuedByCodeLabel(getNationalText(issuedByCode));
      setNationalityLabel(getNationalText(nationality));
      setPassportNumber(makeDefaultInputData(number || ''));
      if (!issuedByCode) {
        onChangeCheckinData({
          idx,
          key: ISSUED_BY_CODE,
          value: 'KR',
        });
      }
      if (!nationality) {
        onChangeCheckinData({
          idx,
          key: NATIONALITY,
          value: 'KR',
        });
      }
    } else {
      setIssuedByCodeLabel(getNationalText('KR'));
      setNationalityLabel(getNationalText('KR'));
      onChangeCheckinData({
        idx,
        key: ISSUED_BY_CODE,
        value: 'KR',
      });
      onChangeCheckinData({
        idx,
        key: NATIONALITY,
        value: 'KR',
      });
    }

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
      const {
        dateOfBirth,
        expirationDate,
      } = travelDocument;

      const isInputFilled = checkInputForm(
        passportNumber,
        phoneNumber,
      );
      const isBirthFilled =
        !!dateOfBirth && !!expirationDate;

      if (isInputFilled && isBirthFilled) {
        const origin = formFilled || [];
        origin.splice(idx, 1, true);

        onChangeFilledStatus(origin);
      }
    }
  }, [data, passportNumber, phoneNumber]);

  return (
    <S.container>
      <div className="textInputsWrapper">
        <div className="row">
          <div className="label">여권 발행국</div>
          <S.autoComplete>
            <Select {...issuedBySelectProps}>
              <AutoComplete {...issuedByContentProps} />
            </Select>
          </S.autoComplete>
        </div>
        <div className="row">
          <div className="label">국적</div>
          <div className="value">
            <S.autoComplete>
              <Select {...nationalitySelectProps}>
                <AutoComplete
                  {...nationalityContentProps}
                />
              </Select>
            </S.autoComplete>
          </div>
        </div>

        <div className="row">
          <div className="label">여권번호</div>
          <div className="value">
            <TextInput
              borderColor="transparent"
              inputProps={passportNumberData}
            />
          </div>
        </div>
        {passportNumber.error && (
          <S.warning>{passportNumber.msg}</S.warning>
        )}

        <div className="row">
          <div className="label">생년월일</div>
          <div className="value">
            <BirthDateSelectorGroup
              originalBirth={
                travelDocument?.dateOfBirth || ''
              }
              callbackBirth={callbackDate(DATE_OF_BIRTH)}
            />
          </div>
        </div>

        <div className="row">
          <div className="label">여권 만료일</div>
          <div className="value">
            <BirthDateSelectorGroup
              originalBirth={
                travelDocument?.expirationDate || ''
              }
              callbackBirth={callbackDate(EXPIRATION_DATE)}
              addEndOfYear={10}
            />
          </div>
        </div>

        <div className="row">
          <div className="label">휴대폰 번호</div>
          <S.phoneArea>
            <S.autoComplete>
              <Select {...selectProps}>
                <AutoComplete {...contentProps} />
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

      {isLogIn && idx === 0 && (
        <div className="checkboxWrapper">
          <Checkbox {...checkboxProps} className="save">
            <div className="save">체크인 정보 저장</div>
          </Checkbox>
        </div>
      )}
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
