import { Fragment, useEffect, useState } from 'react';

import styled, { css } from 'styled-components';
import {
  DARK_GRAY1,
  LIGHT_GRAY6,
  ORANGE1,
  RED2,
  LIGHT_GRAY1,
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';
import {
  EPassengerType,
  EGenderType,
  //EPaxtType,
} from '@airpremia/core/stores/models/bookingSession';
import {
  Checkbox,
  TextInput,
  Select,
  AutoComplete,
  Radio,
  DropdownCurrency,
} from 'src/components';

import {
  useAuth,
  useBooking,
  useMe,
} from '@airpremia/core/hooks';
import { EInputType } from 'src/components/atoms/input';
import { IRadioStatusChangeProps } from 'src/components/molecules/radio';
// import { ICountryCodeDetailResp } from '@airpremia/core/api/auth/types';
import { ESelectPosition } from 'src/components/molecules/select';
import { convertGenderType } from '@airpremia/core/lib/service';

export interface IStyleProps { }

export interface IProps {
  isBooker?: boolean;
  type: string;
  count: number;

}


const convertText = (type: string) => {
  switch (type) {
    case EPassengerType.ADULT:
      return '성인';
    case EPassengerType.CHILD:
      return '소아';
    default:
      return '유아';
  }
};

function PassengerDomForm({ isBooker, type, count }: IProps) {
  const {
    bookingSessionStore,
    onChangePassengerInput,
    onBlurPassengerInput,
    onChangeGender,
    onChangeNok,
    onChangeDiscountCode,
    onResetBooker,
    onChangeNationality,
    onLoadCountryCodeList,
  } = useBooking();



  const {
    authStore,
    // handleSortedCountryCodeChange,
  } = useAuth();
  const { meStore } = useMe();



  const {
    passengers,
    passengersInfomation,
  } = bookingSessionStore;
  const { isLogIn, /* sortedCountryCodeData */ } = authStore;
  const { userInfo } = meStore;
  const { adult } = passengers;
  const { MALE, FEMALE } = EGenderType;
  const data = passengersInfomation[type][count];
  const adultData = passengersInfomation.adult;

  const [isCheckboxActive, setCheckboxStatus] = useState(
    isLogIn,
  );
  const [nokText, setNokText] = useState('');
  // const [nationalityText, setNationalityText] = useState('');
  const [DiscountCodeText, setDiscountCodeText] = useState('');
  // const [label, setLabel] = useState('+ 82');
  // const [isOpen, setOpen] = useState(false);

  const onChangeCheckbox = (status: boolean) =>
    setCheckboxStatus(status);

  const onChangeGenderInterceptor = ({
    target,
  }: IRadioStatusChangeProps) => {
    const currentTarget = target === MALE ? MALE : FEMALE;
    onChangeGender(type, count, currentTarget);
  };



  const onChangeData = (e: any) => {
    const { value, dataset } = e.target;
    const { target } = dataset;

    onChangePassengerInput({
      type,
      index: count,
      target,
      value,
    });
  };

  const onBlurData = (e: any) => {
    const { dataset } = e.target;
    const { target } = dataset;
    onBlurPassengerInput({
      type,
      index: count,
      target,
    });
  };

  // const onCountryCodeChangeInterceptor = (
  //   data: ICountryCodeDetailResp,
  // ) => {
  //   onChangeCountryCode(data, type, count);
  // };

  /** 국적 */
  const [nationalityLabel, onChangeNationalityLabel] = useState(
    '',
  );
  const [isNationalityShow, onChangeNationalityShow] = useState(
    false,
  );

  const { bookingStore } = useBooking();
  const { countryCodeList } = bookingStore;

  useEffect(() => {

    if (!countryCodeList.length) {
      onLoadCountryCodeList();
    }
  }, [countryCodeList]);


  const onChangeNationalityInterceptor = (data: string) => {
    // setNationalityText(data);
    onChangeNationality(data, type, count);
  };

  const nationalitySelectProps = {
    placeholder: '국적 선택',
    label: nationalityLabel,
    isShowMenu: isNationalityShow,
    position: ESelectPosition.DOWN,
    onClick: () => onChangeNationalityShow(!isNationalityShow),
  };

  const nationalityContentProps = {
    value: data && data.countryCode ? data.countryCode.value : '',
    target: 'countryCode',
    key: 'countryCode',
    label: 'countryText',
    dataList: countryCodeList,
    onChange: (data: any) => {
      onChangeNationalityLabel(data.countryText);
      onChangeNationalityShow(!isNationalityShow);
      onChangeNationalityInterceptor(data.countryCode);
    },
    emptyMessage: (
      <p>
        국가명/지역명 또는 국가번호를 찾을 수 없습니다.
        <br />
        검색어를 다시 한 번 확인해주세요.
      </p>
    ),
  };

  // const selectProps = {
  //   label,
  //   isShowMenu: isOpen,
  //   position: ESelectPosition.DOWN,
  //   onClick: () => setOpen(!isOpen),
  // };
  // const contentProps = {
  //   key: 'countryNumber',
  //   label: 'description',
  //   dataList: sortedCountryCodeData,
  //   onChange: (data: any) => {
  //     onCountryCodeChangeInterceptor(data);
  //     setLabel(`+ ${data.countryNumber}`);
  //     setOpen(!isOpen);
  //   },
  //   onFliter: (e: any) => {
  //     handleSortedCountryCodeChange(e);
  //   },
  //   emptyMessage: (
  //     <p>
  //       국가명/지역명 또는 국가번호를 찾을 수 없습니다.
  //       <br />
  //       검색어를 다시 한 번 확인해주세요.
  //     </p>
  //   ),
  // };

  const onChangeNokInterceptor = (e: any) => {
    setNokText(e.target.innerHTML);
    onChangeNok(e, type, count);
  };

  const onChangeDiscountCodeInterceptor = (e: any) => {
    setDiscountCodeText(e.target.innerHTML);
    onChangeDiscountCode(e, type, count);
  };

  useEffect(() => {
    if (isLogIn) {
      onResetBooker(!isCheckboxActive);
    }
  }, [isCheckboxActive]);

  const maleRadioData = {
    isActive: data?.gender === EGenderType.MALE,
    target: EGenderType.MALE,
    onChange: onChangeGenderInterceptor,
  };
  const femaleRadioData = {
    isActive: data?.gender === EGenderType.FEMALE,
    target: EGenderType.FEMALE,
    onChange: onChangeGenderInterceptor,
  };

  const bookerData = {
    onChange: onChangeCheckbox,
    isActive: isCheckboxActive,
  };

  const firstNameData = {
    value:
      data && data.firstName ? data.firstName.value : '',
    target: 'firstName',
    type: EInputType.TEXT,
    placeholder: '신분증에 표시된 언어로 이름 입력',
    onChange: onChangeData,
    onBlur: onBlurData,
  };

  const lastNameData = {
    value: data && data.lastName ? data.lastName.value : '',
    target: 'lastName',
    type: EInputType.TEXT,
    placeholder: '신분증에 표시된 언어로 성 입력',
    onChange: onChangeData,
    onBlur: onBlurData,
  };

  const birthData = {
    value: data && data.birthDate ? data.birthDate.value : '',
    target: 'birthDate',
    type: EInputType.NUMBER,
    placeholder: '생년월일 8자리 입력     예): 20170810',
    onChange: onChangeData,
    onBlur: onBlurData,
  };



  // const phoneNumberData = {
  //   value:
  //     data && data.phoneNumber
  //       ? data.phoneNumber.value
  //       : '',
  //   target: 'phoneNumber',
  //   type: EInputType.NUMBER,
  //   placeholder: '휴대폰 번호 입력',
  //   maxLength: 15,
  //   onChange: onChangeData,
  // };

  const isInfant =
    type === EPassengerType.INFANT ||
    type === EPassengerType.SEAT_INFANT;

  // const isChild = type === EPassengerType.CHILD;
  const isAdult = type === EPassengerType.ADULT;

  if (isCheckboxActive && isBooker) {
    return (
      <S.container>
        <S.typeWrapper className="font-bold">
          {convertText(type)}&nbsp;{count + 1}
        </S.typeWrapper>
        <S.infomationForm>
          {isBooker && (
            <S.selectBox>
              <Checkbox {...bookerData}>
                <p>예매자 본인 탑승</p>
              </Checkbox>
            </S.selectBox>
          )}
          <S.wrapper>
            <S.question className="question">
              성별
            </S.question>
            <S.answer>
              <p>{convertGenderType(userInfo?.gender)}</p>
            </S.answer>
          </S.wrapper>
          <S.wrapper
            isError={
              data && data.lastName ? data.lastName.error : ''
            }
          >
            <S.question className="question">
              성
          </S.question>
            <S.answer>
              <p>{userInfo?.name.last}</p>
            </S.answer>
          </S.wrapper>
          <S.wrapper
            isError={
              data && data.firstName
                ? data.firstName.error
                : ''
            }
          >
            <S.question className="question">
              이름
          </S.question>
            <S.answer>
              <p>{userInfo?.name.first}</p>
            </S.answer>
          </S.wrapper>
          <S.wrapper
            isError={
              data && data.birthDate ? data.birthDate.error : ''
            }
          >
            <S.question className="question">
              생년월일
                </S.question>
            <S.answer>
              <TextInput
                inputProps={birthData}
                hasClearBtn={false}
              />
            </S.answer>
          </S.wrapper>
          {data?.birthDate?.error && (
            <S.errorMessage>
              {data?.birthDate?.msg}
            </S.errorMessage>
          )}
          <S.wrapper
            isError={
              data && data.nationality ? data.nationality.error : ''
            }
          >
            <S.question className="question">
              국적
                </S.question>
            <S.answer isSelected={data?.nationality}>
              <S.autoComplete>
                <Select  {...nationalitySelectProps}>
                  <AutoComplete
                    {...nationalityContentProps}
                  />
                </Select>
              </S.autoComplete>
            </S.answer>
          </S.wrapper>
          <S.wrapper
            isError={
              data && data.DiscountCode ? data.DiscountCode.error : ''
            }
          >
            <S.question className="question">
              할인대상
                </S.question>
            <S.answer isSelected={data?.discountCode}>
              <DropdownCurrency
                value={DiscountCodeText || '국내선 할인 대상 선택'}
                onClickItem={onChangeDiscountCodeInterceptor}
                triangleProps={{
                  color: data?.DiscountCode
                    ? DARK_GRAY1
                    : LIGHT_GRAY7,
                }} >
                <div>국내선 할인 대상 선택</div>
                <div>중증장애인(1~3급) 본인</div>
                <div>중증장애인(1~3급) 동반인 </div>
                <div>경증장애인(4~6급) 본인 </div>
                <div>국가유공상이자 본인 </div>
                <div>국가유공상이자 1-3급의 동반인 </div>
                <div>518민주 유공부상자 본인 </div>
                <div>고엽제 후유증 환자 본인 </div>
                <div>기초생활수급자 본인 </div>
                <div>기술기능분야 우수자 본인 </div>
              </DropdownCurrency>
            </S.answer>
          </S.wrapper>

          {/* <S.rowContent>
            <p>포인트 적립</p>
            <p>
              + {userInfo?.countryNumber}&nbsp;
              {userInfo?.phoneNumber}
            </p>
          </S.rowContent> */}
        </S.infomationForm>
      </S.container>
    );
  }

  // if (isCheckboxActive && isBooker) {
  //   return (
  //     <S.container>
  //       <S.typeWrapper className="font-bold">
  //         {convertText(type)}&nbsp;{count + 1}
  //       </S.typeWrapper>
  //       <S.infomationForm>
  //         {isBooker && (
  //           <S.selectBox>
  //             <Checkbox {...bookerData}>
  //               <p>예매자 본인 탑승</p>
  //             </Checkbox>
  //           </S.selectBox>
  //         )}
  //         <S.rowContent>
  //           <p>성별</p>
  //           <p>{convertGenderType(userInfo?.gender)}</p>
  //         </S.rowContent>
  //         <S.rowContent>
  //           <p>성</p>
  //           <p>{userInfo?.name.last}</p>
  //         </S.rowContent>
  //         <S.rowContent>
  //           <p>이름</p>
  //           <p>{userInfo?.name.first}</p>
  //         </S.rowContent>
  //         <S.rowContent>
  //           <p>생년월일</p>
  //           <p>{userInfo?.birthDate}</p>
  //         </S.rowContent>
  //         <S.rowContent>
  //           <p>국적</p>
  //           <p>{userInfo?.nationality}</p>
  //         </S.rowContent>
  //         <S.rowContent>
  //           <p>할인대상</p>
  //           <p>예매자 본인 탑승 할인대상은 어찌 가져와야할까요</p>
  //         </S.rowContent>

  //         {/* <S.rowContent>
  //           <p>포인트 적립</p>
  //           <p>
  //             + {userInfo?.countryNumber}&nbsp;
  //             {userInfo?.phoneNumber}
  //           </p>
  //         </S.rowContent> */}
  //       </S.infomationForm>
  //     </S.container>
  //   );
  // }

  return (
    <S.container>
      <S.typeWrapper className="font-bold">
        {convertText(type)}&nbsp;{count + 1}
      </S.typeWrapper>

      <S.infomationForm>
        {isLogIn && isBooker && (
          <S.selectBox>
            <Checkbox {...bookerData}>
              <p>예매자 본인 탑승</p>
            </Checkbox>
          </S.selectBox>
        )}
        {isAdult && (
          <Fragment>
            <S.wrapper>
              <S.question className="question">성별</S.question>
              <S.answer>
                <div className="radio-wrapper">
                  <Radio {...maleRadioData}>
                    <p className="radio-text">남자</p>
                  </Radio>
                  <Radio {...femaleRadioData}>
                    <p className="radio-text">여자</p>
                  </Radio>
                </div>
              </S.answer>
            </S.wrapper>

            <S.wrapper
              isError={
                data && data.lastName ? data.lastName.error : ''
              }
            >
              <S.question className="question">
                성
          </S.question>
              <S.answer>
                <TextInput
                  inputProps={lastNameData}
                  hasClearBtn={false}
                />
              </S.answer>
            </S.wrapper>
            {data?.lastName?.error && (
              <S.errorMessage>
                {data?.lastName?.msg}
              </S.errorMessage>
            )}

            <S.wrapper
              isError={
                data && data.firstName
                  ? data.firstName.error
                  : ''
              }
            >
              <S.question className="question">
                이름
          </S.question>
              <S.answer>
                <TextInput
                  inputProps={firstNameData}
                  hasClearBtn={false}
                />
              </S.answer>
            </S.wrapper>
            {data?.firstName?.error && (
              <S.errorMessage>
                {data?.firstName?.msg}
              </S.errorMessage>
            )}
            <S.wrapper
              isError={
                data && data.birthDate ? data.birthDate.error : ''
              }
            >
              <S.question className="question">
                생년월일
                </S.question>
              <S.answer>
                <TextInput
                  inputProps={birthData}
                  hasClearBtn={false}
                />
              </S.answer>
            </S.wrapper>
            {data?.birthDate?.error && (
              <S.errorMessage>
                {data?.birthDate?.msg}
              </S.errorMessage>
            )}
            <S.wrapper
              isError={
                data && data.nationality ? data.nationality.error : ''
              }
            >
              <S.question className="question">
                국적
                </S.question>
              <S.answer isSelected={data?.nationality}>
                <S.autoComplete>
                  <Select  {...nationalitySelectProps}>
                    <AutoComplete
                      {...nationalityContentProps}
                    />
                  </Select>
                </S.autoComplete>
              </S.answer>
            </S.wrapper>
            {data?.nationality?.error && (
              <S.errorMessage>
                {data?.nationality?.msg}
              </S.errorMessage>
            )}

            <S.wrapper
              isError={
                data && data.DiscountCode ? data.DiscountCode.error : ''
              }
            >
              <S.question className="question">
                할인대상
                </S.question>
              <S.answer isSelected={data?.DiscountCode}>
                <DropdownCurrency
                  value={DiscountCodeText || '국내선 할인 대상 선택'}
                  onClickItem={onChangeDiscountCodeInterceptor}
                  triangleProps={{
                    color: data?.DiscountCode
                      ? DARK_GRAY1
                      : LIGHT_GRAY7,
                  }} >
                  <div>국내선 할인 대상 선택</div>
                  <div>중증장애인(1~3급) 본인</div>
                  <div>중증장애인(1~3급) 동반인 </div>
                  <div>경증장애인(4~6급) 본인 </div>
                  <div>국가유공상이자 본인 </div>
                  <div>국가유공상이자 1-3급의 동반인 </div>
                  <div>518민주 유공부상자 본인 </div>
                  <div>고엽제 후유증 환자 본인 </div>
                  <div>기초생활수급자 본인 </div>
                  <div>기술기능분야 우수자 본인 </div>
                </DropdownCurrency>
              </S.answer>
            </S.wrapper>
            {data?.DiscountCode?.error && (
              <S.errorMessage>
                {data?.DiscountCode?.msg}
              </S.errorMessage>
            )}
          </Fragment>
        )}
        {!isAdult && (
          <Fragment>
            <S.wrapper>
              <S.question className="question">성별</S.question>
              <S.answer>
                <div className="radio-wrapper">
                  <Radio {...maleRadioData}>
                    <p className="radio-text">남자</p>
                  </Radio>
                  <Radio {...femaleRadioData}>
                    <p className="radio-text">여자</p>
                  </Radio>
                </div>
              </S.answer>
            </S.wrapper>

            <S.wrapper
              isError={
                data && data.lastName ? data.lastName.error : ''
              }
            >
              <S.question className="question">
                성
          </S.question>
              <S.answer>
                <TextInput
                  inputProps={lastNameData}
                  hasClearBtn={false}
                />
              </S.answer>
            </S.wrapper>
            {data?.lastName?.error && (
              <S.errorMessage>
                {data?.lastName?.msg}
              </S.errorMessage>
            )}

            <S.wrapper
              isError={
                data && data.firstName
                  ? data.firstName.error
                  : ''
              }
            >
              <S.question className="question">
                이름
          </S.question>
              <S.answer>
                <TextInput
                  inputProps={firstNameData}
                  hasClearBtn={false}
                />
              </S.answer>
            </S.wrapper>
            {data?.firstName?.error && (
              <S.errorMessage>
                {data?.firstName?.msg}
              </S.errorMessage>
            )}
            <S.wrapper
              isError={
                data && data.birthDate ? data.birthDate.error : ''
              }
            >
              <S.question className="question">
                생년월일
                </S.question>
              <S.answer>
                <TextInput
                  inputProps={birthData}
                  hasClearBtn={false}
                />
              </S.answer>
            </S.wrapper>
            {data?.birthDate?.error && (
              <S.errorMessage>
                {data?.birthDate?.msg}
              </S.errorMessage>
            )}
            <S.wrapper
              isError={
                data && data.nationality ? data.nationality.error : ''
              }
            >
              <S.question className="question">
                국적
                </S.question>
              <S.answer isSelected={data?.nationality}>
                <S.autoComplete>
                  <Select  {...nationalitySelectProps}>
                    <AutoComplete
                      {...nationalityContentProps}
                    />
                  </Select>
                </S.autoComplete>
              </S.answer>
            </S.wrapper>
            {data?.nationality?.error && (
              <S.errorMessage>
                {data?.nationality?.msg}
              </S.errorMessage>
            )}


          </Fragment>
        )}



        {/* {!isInfant && (
          <Fragment>
            <S.wrapper
              isError={
                data && data.phoneNumber
                  ? data.phoneNumber.error
                  : ''
              }
            >
              <S.question className="question">
                포인트 적립 (선택)
              </S.question>
              <S.answer>
                <div className="phone">
                  <S.autoComplete>
                    <Select {...selectProps}>
                      <AutoComplete {...contentProps} />
                    </Select>
                  </S.autoComplete>
                  <S.seperator />

                  <TextInput
                    hasClearBtn={false}
                    inputProps={phoneNumberData}
                  />
                </div>
              </S.answer>
            </S.wrapper>
            {data?.phoneNumber?.error && (
              <S.errorMessage>
                {data?.phoneNumber?.msg}
              </S.errorMessage>
            )}
          </Fragment>
        )}  */}

        {isInfant && !data.passengerKey && (
          <S.wrapper
            isError={
              data && data.phoneNumber
                ? data.phoneNumber.error
                : ''
            }
          >

            <S.question className="question">
              보호자
            </S.question>
            <S.answer isSelected={data?.nok}>
              <DropdownCurrency
                value={nokText || '보호자 선택'}
                onClickItem={onChangeNokInterceptor}
                triangleProps={{
                  color: data?.nok
                    ? DARK_GRAY1
                    : LIGHT_GRAY7,
                }}
              >
                {Array(adult)
                  .fill(0)
                  .map((item, i) => (
                    <div
                      key={`nok${adult}${item}${Math.floor(
                        Math.random() * 1000,
                      ).toString()}`}
                      data-passenger-key={
                        adultData[i].passengerKey
                      }
                    >
                      성인 {i + 1}
                      {adultData.length > 0 &&
                        adultData[i]?.lastName &&
                        adultData[i]?.firstName
                        ? ` (${adultData[i].lastName.value} ${adultData[i].firstName.value})`
                        : ''}
                    </div>
                  ))}
              </DropdownCurrency>
            </S.answer>
          </S.wrapper>
        )}
      </S.infomationForm>
    </S.container>
  );
}

PassengerDomForm.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    padding: 60px 0 70px;
    display: flex;
  `,

  typeWrapper: styled.div`
    width: 320px;
    font-size: 22px;
    line-height: 28px;
    letter-spacing: -0.44px;
  `,

  infomationForm: styled.div`
    width: calc(100% - 320px);
  `,

  wrapper: styled.div<{ isError?: boolean }>`
    display: flex;
    align-items: center;
    height: 60px;
    border-bottom: solid 1px
      ${({ isError }) => (isError ? ORANGE1 : LIGHT_GRAY6)};

    font-size: 15px;
    letter-spacing: -0.3px;

    .textinput {
      border: 0;
    }

    .dropdown-currency {
      width: fit-content;
      font-size: 15px;

      & > div {
        justify-content: unset;
      }
    }

    .dropdown-currency-items {
      width: 706px;
      max-height: 600px;
      left: -11px;
      top: 38px;
      padding: 15px 0;
      font-size: 14px;
      cursor: pointer;

      & > div {
        height: 50px;
        padding: 0 25px;
        display: flex;
        align-items: center;
        &:hover {
          background-color: ${LIGHT_GRAY1};
        }
      }
    }
  `,

  question: styled.div`
    width: 195px;
  `,

  answer: styled.div<{ isSelected?: boolean }>`
    width: calc(100% - 150px);
    font-weight: 600;

    .phone {
      display: flex;
      align-items: center;

      .textinput {
        width: calc(100% - 150px);
      }
    }

    .radio-wrapper {
      display: flex;
      .radio-text {
        margin-right: 50px;
        font-weight: 600;
      }
    }

    .dropdown-currency .value {
      color: ${LIGHT_GRAY7};
    }

    ${({ isSelected }) =>
      isSelected &&
      css`
        .dropdown-currency .value {
          color: ${DARK_GRAY1};
        }
      `}
  `,

  errorMessage: styled.sub`
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.24px;
    bottom: 0;
    color: ${RED2};
    margin-left: 196px;
  `,

  selectBox: styled.div`
    margin-bottom: 20px;
    height: 44px;
    display: flex;
    p {
      font-size: 15px;
      line-height: 28px;
      letter-spacing: -0.3px;
      color: ${DARK_GRAY1};
      margin-left: 4px;
      font-weight: 600;
    }
  `,

  rowContent: styled.div`
    display: flex;
    align-items: center;
    height: 42px;
    &:not(:last-of-type) {
      margin-bottom: 10px;
    }

    p {
      font-size: 15px;
      line-height: 30px;
      letter-spacing: -0.3px;
      &:first-of-type {
        flex-basis: 200px;
      }
      &:last-of-type {
        font-weight: 600;
      }
    }
  `,

  autoComplete: styled.div`
    padding: 14px 30px 14px 0;
  `,

  seperator: styled.div`
    margin: 2px 20px 0;
    height: 16px;
    border-right: solid 1px ${LIGHT_GRAY6};
  `,
};

export default PassengerDomForm;
