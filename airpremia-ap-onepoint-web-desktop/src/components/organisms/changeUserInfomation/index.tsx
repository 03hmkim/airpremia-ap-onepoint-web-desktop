import { FC } from 'react';
import { mapValues } from 'lodash';
import styled, { css } from 'styled-components';
import TextInput from 'src/components/molecules/textInput';
import { EInputType } from 'src/components/atoms/input';
import { useBooking } from '@airpremia/core/hooks';
import { useBookingLocal } from 'src/hooks';
import {
  LIGHT_GRAY6,
  LIGHT_GRAY5,
} from '@airpremia/cdk/styles/colors';
import { IInputData } from '@airpremia/core/stores/models/auth';

import {
  Select,
  Radio,
  AutoComplete_me,
  BirthDateSelectorGroup,
} from 'src/components';
import { ESelectPosition } from 'src/components/molecules/select';
import { IBirthType } from '../birthDateSelectorGroup';
import { getLocalISOTime } from '@airpremia/core/lib/service';
import { IRadioStatusChangeProps } from 'src/components/molecules/radio';
import { ifProp } from 'styled-tools';
import { formattingDate } from '@airpremia/core/lib/me';
import { checkValid } from '@airpremia/core/lib/auth';
// import { render } from 'react-dom';

interface IProps {
  /** 이름, 성을 변경 할수 있는지 여부 (예약 후 에는 변경할 수 없음) */
  canChange?: boolean;

  /** 이메일 */
  email: string;
  /** 국가번호 */
  countryNumber: number;
  /** 휴대폰번호 */
  phoneNumber: string;

  /** 이름 데이터 */
  firstName: IInputData;
  /** 이름 데이터 변경 함수 */
  onChangeFirstName: (data: IInputData) => void;

  /** 성 데이터 */
  lastName: IInputData;
  /** 성 데이터 변경 함수 */
  onChangeLastName: (data: IInputData) => void;

  /** 생년월일 데이터 */
  birthDate: IInputData;
  /** 생년월일 데이터 변경 함수 */
  onChangeBirthDate: (data: IInputData) => void;

  /** 여권 데이터 */
  passport: string;
  /** 여권 데이터 변경 함수 */
  onChangePassport: (passport: string) => void;

  /** 국적 데이터 변경 함수 */
  onChangeCountryCode: (countryCode: string) => void;

  /** passport 만료일 */
  passportExpiredDate?: string;
  /** passport 만료일 설정 함수 */
  onChangePassportExpiredDate?: (
    localISOTime: string,
  ) => void;

  /** 국적 데이터 */
  nationalityLabel: string;
  /** 국적 데이터 변경 함수 */
  onChangeNationalityLabel: (
    nationalityLabel: string,
  ) => void;
  /** 국적 드롭다운 show/hide flag */
  isNationalityShow: boolean;
  /** 국적 드롭다운 show/hide flag change 함수 */
  onChangeNationalityShow: (status: boolean) => void;

  /** 할인 코드 데이터 변경 함수 */
  // onChangeDiscountCode: (
  //   DiscountCodeText: string,
  // ) => void;

  /** 광고성 정보수신 flag */
  isSubscribe?: boolean;
  /** 광고성 정보수신 flag change */
  onChangeSubscribeStatus?: (status: boolean) => void;

  /** 이메일/휴대폰/패스워드 변경 */
  onShowModal: (target: string) => void;
}

const ChangeUserInfomation: FC<IProps> = ({
  canChange = false,
  countryNumber,
  phoneNumber,
  email,
  firstName,
  onChangeFirstName,
  lastName,
  onChangeLastName,
  birthDate,
  onChangeBirthDate,
  passport,
  onChangePassport,
  onChangeCountryCode,
  // onChangeDiscountCode,
  nationalityLabel,
  onChangeNationalityLabel,
  isNationalityShow,
  onChangeNationalityShow,
  passportExpiredDate = '',
  onChangePassportExpiredDate = () => {},
  isSubscribe = true,
  onChangeSubscribeStatus = () => {},
  onShowModal,
}) => {
  const { onBlurLocalInputData } = useBookingLocal();
  const { bookingStore } = useBooking();
  const { countryCodeList } = bookingStore;

  const firstNameData = {
    value: firstName.value,
    target: 'firstName',
    type: EInputType.TEXT,
    placeholder: '영문 이름 입력',
    onChange: (e: any) => {
      const value = e.target.value;
      onChangeFirstName({
        ...firstName,
        value,
      });
    },
    onBlur: (e: any) => {
      const { target } = e.target.dataset;
      const res = onBlurLocalInputData({
        target,
        data: firstName,
      });
      onChangeFirstName(res);
    },
  };

  const lastNameData = {
    value: lastName.value,
    target: 'lastName',
    type: EInputType.TEXT,
    placeholder: '영문 성 입력',
    onChange: (e: any) => {
      const value = e.target.value;
      onChangeLastName({
        ...lastName,
        value,
      });
    },
    onBlur: (e: any) => {
      const { target } = e.target.dataset;
      const res = onBlurLocalInputData({
        target,
        data: lastName,
      });
      onChangeLastName(res);
    },
  };

  const birthData = {
    value: birthDate.value,
    target: 'birthDate',
    type: EInputType.TEXT,
    placeholder: '생년월일',
    onChange: (e: any) => {
      const value = e.target.value;
      const removedCommaValue = value.split('.').join('');

      onChangeBirthDate({
        ...birthDate,
        value: removedCommaValue,
      });
    },
    onBlur: () => {
      const checkedData = checkValid(
        'birthDate',
        birthDate,
      );
      if (checkedData.error) {
        alert(checkedData.msg);
      } else {
        const data = formattingDate(birthDate);
        onChangeBirthDate(data);
      }
    },
  };

  const passportData = {
    value: passport,
    target: 'passport',
    type: EInputType.TEXT,
    placeholder: '여권 번호 입력',
    onChange: (e: any) => {
      onChangePassport(e.target.value);
    },
  };

  //●
  const nationalitySelectProps = {
    label: nationalityLabel,
    isShowMenu: isNationalityShow,
    position: ESelectPosition.DOWN,
    onClick: () =>{
      console.log("선택국가=",nationalityLabel);
      onChangeNationalityShow(!isNationalityShow);
    }
  };

  const nationalityContentProps = {
    key: 'countryCode',
    label: 'countryText',
    dataList: countryCodeList,
    onChange: (data: any) => {
      onChangeCountryCode(data.countryCode);
      onChangeNationalityLabel(data.countryText);
      onChangeNationalityShow(!isNationalityShow);
    },
    emptyMessage: (
      <p>
        국가명/지역명 또는 국가번호를 찾을 수 없습니다.
        <br />
        검색어를 다시 한 번 확인해주세요.
      </p>
    ),
    selectLabel: nationalityLabel,
  };

  const deleteDateLabelProperty = (date: IBirthType) =>
    mapValues(date, (o) => {
      return o.num;
    });

  const makeDate = (date: any): string => {
    const { year, month, day } = date;
    if (year && month && day) {
      return getLocalISOTime(`${year}/${month}/${day}`);
    }
    return '';
  };

  const callbackDate = (date: IBirthType) => {
    const obj = deleteDateLabelProperty(date);
    return onChangePassportExpiredDate(makeDate(obj));
  };
  onChangeSubscribeStatus;
  const onChangeEUCitizenStatus = ({
    target,
  }: IRadioStatusChangeProps) => {
    onChangeSubscribeStatus(target === 'agree');
  };

  const agreeRadioData = {
    isActive: isSubscribe,
    target: 'agree',
    onChange: onChangeEUCitizenStatus,
  };

  const disagreeRadioData = {
    isActive: !isSubscribe,
    target: 'disagree',
    onChange: onChangeEUCitizenStatus,
  };

  const wrappingKey = (target: string) => () =>
    onShowModal(target);

  return (
    <S.container>
      <S.basicInfo>
        <S.left>
          <S.title className="font-bold">기본정보</S.title>
        </S.left>
        <S.right>
          <S.row>
            <S.label>이메일 주소</S.label>
            <S.content>
              <S.text>{email}</S.text>
              <u onClick={wrappingKey('changeEmail2')}>
                변경
              </u>
            </S.content>
          </S.row>
          <S.row>
            <S.label>휴대폰 번호</S.label>
            <S.content>
              <S.text>
                +{countryNumber} | {phoneNumber}
              </S.text>
              <u
                onClick={wrappingKey('changePhoneNumber2')}
              >
                변경
              </u>
            </S.content>
          </S.row>
          <S.row hasBorder={canChange}>
            <S.label>영문 성</S.label>
            <S.content>
              {canChange ? (
                <TextInput
                  borderColor="transparent"
                  inputProps={lastNameData}
                />
              ) : (
                <S.text>{lastName.value}</S.text>
              )}
            </S.content>
          </S.row>
          <S.row hasBorder={canChange}>
            <S.label>영문 이름</S.label>
            <S.content>
              {canChange ? (
                <TextInput
                  borderColor="transparent"
                  inputProps={firstNameData}
                />
              ) : (
                <S.text>{firstName.value}</S.text>
              )}
            </S.content>
          </S.row>
          <S.row hasBorder={canChange}>
            <S.label>생년월일</S.label>
            <S.content>
              {canChange ? (
                <TextInput
                  borderColor="transparent"
                  inputProps={birthData}
                />
              ) : (
                <S.text>{birthDate.value}</S.text>
              )}
            </S.content>
          </S.row>
          <S.row>
            <S.label>비밀번호</S.label>
            <S.content>
              <u onClick={wrappingKey('changePassword2')}>
                비밀번호 변경
              </u>
            </S.content>
          </S.row>
        </S.right>
      </S.basicInfo>

      <S.passportInfo>
        <S.left>
          <S.title className="font-bold">여권정보</S.title>
        </S.left>
        <S.right>
          <S.row hasBorder>
            <S.label>여권 번호</S.label>
            <S.content>
              <TextInput
                borderColor="transparent"
                inputProps={passportData}
              />
            </S.content>
          </S.row>
          <S.row hasBorder>
            <S.label>여권 만료일</S.label>
            <S.content>
              <BirthDateSelectorGroup
                originalBirth={passportExpiredDate || ''}
                callbackBirth={callbackDate}
                addEndOfYear={10}
              />
            </S.content>
          </S.row>
          <S.row hasBorder>
            <S.label>국적</S.label>
            <S.content>
              <S.autoComplete>
                <Select {...nationalitySelectProps}>
                  <AutoComplete_me
                    {...nationalityContentProps}
                  />
                </Select>
              </S.autoComplete>
            </S.content>
          </S.row>
        </S.right>
      </S.passportInfo>

      <S.advSubscribe>
        <S.left>
          <S.title className="font-bold">
            광고성 정보 수신
          </S.title>
        </S.left>
        <S.right noPadding>
          <S.content>
            <b>
              에어프레미아 이용에 도움이 되는 특가, 이벤트
              정보를 보내드립니다.
            </b>
            <S.radioWrapper>
              <Radio {...agreeRadioData}>
                <p>동의함</p>
              </Radio>
              <Radio {...disagreeRadioData}>
                <p>동의하지 않음</p>
              </Radio>
            </S.radioWrapper>
          </S.content>
        </S.right>
      </S.advSubscribe>
    </S.container>
  );
};

const S = {
  container: styled.div`
    padding: 60px 0 66px;
  `,
  basicInfo: styled.div`
    display: flex;
    padding-bottom: 70px;
    border-bottom: solid 1px ${LIGHT_GRAY5};
  `,
  passportInfo: styled.div`
    display: flex;
    padding: 60px 0 80px;
    border-bottom: solid 1px ${LIGHT_GRAY5};
  `,
  advSubscribe: styled.div`
    display: flex;
    padding-top: 63px;
  `,
  title: styled.div`
    font-size: 22px;
    line-height: 28px;
    letter-spacing: -0.44px;
  `,
  left: styled.div`
    flex-basis: 220px;
    width: 220px;
    margin-right: 100px;
  `,
  right: styled.div<{ noPadding?: boolean }>`
    flex: 1;
    padding-top: ${ifProp('noPadding', 0, 10)}px;

    & > div:not(:first-of-type) {
      margin-top: 10px;
    }
  `,
  row: styled.div<{ hasBorder?: boolean }>`
    display: flex;
    align-items: center;
    height: 42px;

    ${({ hasBorder }) =>
      hasBorder &&
      css`
        padding-bottom: 10px;
        border-bottom: solid 1px ${LIGHT_GRAY6};
      `}
  `,
  label: styled.div`
    flex-basis: 200px;
    width: 200px;
  `,
  content: styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    input {
      font-weight: 600;
      &::placeholder {
        font-weight: normal;
      }
    }
    u {
      font-size: 13px;
      line-height: 30px;
      letter-spacing: -0.26px;
      cursor: pointer;
    }
    b {
      font-weight: 600;
      font-size: 15px;
      line-height: 22px;
      letter-spacing: -0.33px;
    }
  `,
  text: styled.div`
    font-size: 15px;
    line-height: 30px;
    letter-spacing: -0.3px;
    font-weight: 600;
  `,
  autoComplete: styled.div``,
  radioWrapper: styled.div`
    display: flex;
    align-items: center;
    & > div:first-of-type {
      margin-right: 40px;
    }
    p {
      font-weight: 600;
    }
  `,
};

export default ChangeUserInfomation;
