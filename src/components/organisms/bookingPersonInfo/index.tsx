import { FC, useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';

import { useModal } from 'src/hooks';
import {
  useAuth,
  useBooking,
  useMe,
} from '@airpremia/core/hooks';
import {
  Select,
  TextInput,
  AutoComplete,
  NewModal,
  ChangeEmail,
  ChangePhoneNumber,
  PopupTitle,
  ComTitle,
} from 'src/components';
import {
  DARK_GRAY2,
  LIGHT_GRAY7,
  DARK_GRAY1,
  ORANGE1,
  LIGHT_GRAY6,
  RED2,
} from '@airpremia/cdk/styles/colors';
import { EInputType } from 'src/components/atoms/input';
import { ESelectPosition } from 'src/components/molecules/select';
import {
  postUserConfirmPhoneAuthCode,
  postUserPhoneAuthCode,
} from '@airpremia/core/api/user/user';
import { ifProp } from 'styled-tools';
import {
  WHITE1,
  LIGHT_GRAY1,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
import { getTimeHumanize } from '@airpremia/core/lib/service';
import { EScrollType } from 'src/components/templates/centerPopup';

interface IProps {
  userEmail?: string;
  userPhone?: string;
}

const BookingPersonInfo: FC<IProps> = () => {
  const {
    bookingSessionStore,
    onBlurBookingAgentInfo,
    onChangeBookingAgentInfo,
  } = useBooking();
  const {
    authStore,
    handleSortedCountryCodeChange,
  } = useAuth();
  const {
    onShowNewModal,
    UIStore: { newModal },
  } = useModal();
  const { meStore } = useMe();
  const { bookingAgentInfomation } = bookingSessionStore;
  const { isLogIn, sortedCountryCodeData } = authStore;
  const { userInfo } = meStore;
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
  } = bookingAgentInfomation;
  let timer: any;
  const [initLoad, setInitLoad] = useState(true);
  const [label, setLabel] = useState('+ 82');
  const [isOpen, setOpen] = useState(false);
  const [isSend, setSend] = useState(false);
  const [authCode, setAuthCode] = useState('');
  const [leftTime, setLeftTime] = useState(0);
  const [phoneAuthStatus, setPhoneAuthStatus] = useState<
    boolean
  >(false);
  const onCountryCodeChangeInterceptor = (data: any) => {
    onChangeBookingAgentInfo({
      target: 'countryCodeData',
      value: data,
    });
  };
  const convertPhoneFormat = isLogIn
    ? `+ ${userInfo?.countryNumber} ${userInfo?.phoneNumber}`
    : '';

  const selectProps = {
    label,
    isShowMenu: isOpen,
    position: ESelectPosition.DOWN,
    onClick: () => setOpen(!isOpen),
  };

  const contentProps = {
    key: 'countryNumber',
    label: 'description',
    dataList: sortedCountryCodeData,
    onChange: (data: any) => {
      onCountryCodeChangeInterceptor(data);
      setLabel(`+ ${data.countryNumber}`);
      setOpen(!isOpen);
    },
    onFliter: (e: any) => {
      handleSortedCountryCodeChange(e);
    },
    emptyMessage: (
      <p>
        국가명/지역명 또는 국가번호를 찾을 수 없습니다.
        <br />
        검색어를 다시 한 번 확인해주세요.
      </p>
    ),
  };

  const onChangeBookingAgentInfoIntercetor = (e: any) => {
    const { value, dataset } = e.target;
    const { target } = dataset;
    onChangeBookingAgentInfo({
      target,
      value,
    });
  };

  const MakeTitleDom = ({ text }: { text: string }) => (
    <S.modalTitle>
      <PopupTitle>{text}</PopupTitle>
    </S.modalTitle>
  );

  const onClickModal = () => {
    // TODO unreacable code로 리팩토링 요망. type에 따른 switch 필요
    switch (newModal.target) {
      case 'changeEmail':
        return (
          <NewModal
            className="btnN hAuto"
            type={EScrollType.TYPE1}
            title={<MakeTitleDom text="이메일 주소 변경" />}
            body={
              <ChangeEmail originEmail={userInfo?.email} />
            }
          />
        );

      case 'changePhoneNumber':
        return (
          <NewModal
            className="btnN hAuto"
            type={EScrollType.TYPE1}
            title={<MakeTitleDom text="휴대폰 번호 변경" />}
            body={
              <ChangePhoneNumber
                originPhoneNumber={`${convertPhoneFormat}`}
              />
            }
          />
        );

      default:
        return null;
    }
  };

  const onAuthNumberSend = async () => {
    if (phoneAuthStatus) return;
    if (phoneNumber.error) return;

    if (!phoneNumber.value || !label.split(' ')[1]) {
      alert('휴대폰 번호를 입력해주세요.');
    } else {
      setSend(true);
      try {
        await postUserPhoneAuthCode({
          countryNumber: Number(label.split(' ')[1]),
          phoneNumber: phoneNumber.value,
        });
        setLeftTime(179);
      } catch (e) {
        window.alert(e.response.data.message);
        throw e;
      }
    }
  };

  const onPhoneAuthSubmit = async () => {
    try {
      await postUserConfirmPhoneAuthCode({
        phoneNumber: phoneNumber.value,
        authCode,
        countryNumber: Number(label.split(' ')[1]),
      });
      setPhoneAuthStatus(true);
      setLeftTime(0);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  const firstNameData = {
    value: firstName.value,
    target: 'firstName',
    type: EInputType.TEXT,
    placeholder: '신분증에 표시된 언어로 이름 입력',
    onChange: onChangeBookingAgentInfoIntercetor,
    onBlur: onBlurBookingAgentInfo,
  };

  const lastNameData = {
    value: lastName.value,
    target: 'lastName',
    type: EInputType.TEXT,
    placeholder: '신분증에 표시된 언어로 성 입력',
    onChange: onChangeBookingAgentInfoIntercetor,
    onBlur: onBlurBookingAgentInfo,
  };

  const emailData = {
    value: email.value,
    target: 'email',
    type: EInputType.TEXT,
    placeholder: '이메일 입력',
    onChange: onChangeBookingAgentInfoIntercetor,
    onBlur: onBlurBookingAgentInfo,
  };

  const phoneNumberData = {
    value: phoneNumber ? phoneNumber.value : '',
    target: 'phoneNumber',
    type: EInputType.NUMBER,
    placeholder: '휴대폰 번호 입력',
    maxLength: 15,
    onChange: onChangeBookingAgentInfoIntercetor,
    onBlur: onBlurBookingAgentInfo,
  };

  const authNumberData = {
    value: authCode,
    target: 'authCode',
    type: EInputType.NUMBER,
    placeholder: '인증번호 입력',
    onChange: (e: any) => setAuthCode(e.target.value),
  };

  useEffect(() => {
    if (initLoad) {
      setInitLoad(false);
    }
    timer =
      leftTime > 0 &&
      setInterval(() => setLeftTime(leftTime - 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [leftTime]);

  return (
    <S.container>
      {isLogIn && onClickModal()}
      <ComTitle
        title="예매자 정보입력"
        description="예매자의 연락처로 예약 결과를 보내드립니다."
        desColor="gray"
      />
      <S.body>
        <S.subTitle>
          <h3 className="font-bold">예매자 정보</h3>
        </S.subTitle>

        {!isLogIn ? (
          <S.content className="editable">
            <S.wrapper isError={lastName.error}>
              <S.question>성</S.question>
              <S.answer>
                <TextInput inputProps={lastNameData} />
              </S.answer>
            </S.wrapper>
            {lastName.error && (
              <S.errorMessage>
                {lastName.msg}
              </S.errorMessage>
            )}
            <S.wrapper isError={firstName.error}>
              <S.question>이름</S.question>
              <S.answer>
                <TextInput inputProps={firstNameData} />
              </S.answer>
            </S.wrapper>
            {firstName.error && (
              <S.errorMessage>
                {firstName.msg}
              </S.errorMessage>
            )}
            <S.wrapper isError={email.error}>
              <S.question>이메일 주소</S.question>
              <S.answer>
                <TextInput
                  inputProps={emailData}
                  hasClearBtn={false}
                />
              </S.answer>
            </S.wrapper>
            {email.error && (
              <S.errorMessage>{email.msg}</S.errorMessage>
            )}

            <S.wrapper isError={phoneNumber.error}>
              <S.question className="question">
                휴대폰 번호
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
                  <S.authButton
                    onClick={onAuthNumberSend}
                    isActive={!phoneAuthStatus}
                  >
                    {!phoneAuthStatus && isSend
                      ? '재전송'
                      : '인증'}
                  </S.authButton>
                </div>
              </S.answer>
            </S.wrapper>
            <S.sendMessageArea
              isShow={leftTime > 0 || phoneAuthStatus}
            >
              {leftTime > 0 && (
                <sub>인증 문자를 발송했습니다.</sub>
              )}
              {phoneAuthStatus &&
                '성공적으로 인증되었습니다.'}
            </S.sendMessageArea>
            {phoneNumber.error && (
              <S.errorMessage>
                {phoneNumber.msg}
              </S.errorMessage>
            )}

            {!phoneAuthStatus && isSend && (
              <Fragment>
                <S.wrapper>
                  <S.question>인증 번호</S.question>
                  <S.answer>
                    <TextInput
                      inputProps={authNumberData}
                    />
                  </S.answer>
                  <S.authButton
                    onClick={onPhoneAuthSubmit}
                    isActive={!!authCode}
                  >
                    확인
                  </S.authButton>
                </S.wrapper>
                <S.sendMessageArea
                  isShow={phoneAuthStatus || leftTime > 0}
                >
                  {leftTime > 0 && (
                    <span className="time-guide">
                      <p>
                        <sub>
                          {getTimeHumanize(leftTime)[1]}분{' '}
                          {getTimeHumanize(leftTime)[2]}초
                        </sub>{' '}
                        <sub>내로 입력</sub>
                      </p>
                    </span>
                  )}
                </S.sendMessageArea>
              </Fragment>
            )}
          </S.content>
        ) : (
            <S.content>
              <S.rowContent>
                <p>이메일 주소</p>
                <div>
                  <p>{userInfo?.email}</p>
                  <button
                    onClick={() =>
                      onShowNewModal('changeEmail')
                    }
                  >
                    <u>변경</u>
                  </button>
                </div>
              </S.rowContent>
              <S.rowContent>
                <p>휴대폰 번호</p>
                <div>
                  <p>{convertPhoneFormat}</p>
                  <button
                    onClick={() =>
                      onShowNewModal('changePhoneNumber')
                    }
                  >
                    <u>변경</u>
                  </button>
                </div>
              </S.rowContent>
            </S.content>
          )}
      </S.body>
    </S.container>
  );
};

const S = {
  container: styled.div``,

  header: styled.div`
    h2 {
      font-size: 40px;
      line-height: 42px;
      letter-spacing: -0.6px;
      color: ${DARK_GRAY2};
      @media only screen and (max-width: 767px) {
        margin-bottom: 10px;
        font-size: 26px;
        letter-spacing: -0.052em;
        line-height: 36px;
        &.subtxO{
          margin-bottom: 10px;
        }
      }
    }

    p {
      font-size: 18px;
      line-height: 22px;
      letter-spacing: -0.28px;
      color: ${LIGHT_GRAY7};
      margin-top: 10px;
      @media only screen and (max-width: 767px) {
        margin-bottom: 80px;
        font-size: 14px;
        line-height: 1.36em;
        letter-spacing: -0.028em;
      }
    }
  `,

  body: styled.div`
    margin-top: 80px;
    padding: 80px 0;
    box-sizing: border-box;
    border-top: solid 2px ${DARK_GRAY1};
    border-bottom: solid 2px ${DARK_GRAY1};
    display: flex;
    @media only screen and (max-width: 1059px) {
      margin-top: 80px;
      padding: 80px 0;
      flex-direction: column;
    }
  `,
  modalTitle: styled.div``,

  subTitle: styled.div`
    flex-basis: 220px;
    margin-right: 100px;

    h3 {
      font-size: 24px;
      line-height: 28px;
      letter-spacing: -0.44px;
    }


    @media only screen and (max-width: 1059px) {
      flex-basis: 48px;
      margin-right: 0;
    }

    @media only screen and (max-width: 767px) {
      h3 {
        font-size: 18px;
      }
    }
  `,
  content: styled.div`
    flex: 1;
  `,

  rowContent: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 42px;

    &:not(:last-of-type) {
      margin-bottom: 10px;
    }

    p {
      font-size: 18px;
      line-height: 30px;
      letter-spacing: -0.3px;
      width: 200px;
    }

    div {
      display: flex;
      flex: 1;
      justify-content: space-between;
      align-items: center;

      p,
      u {
        font-weight: 600;
      }
      u {
        font-size: 18px;
        line-height: 1;
        letter-spacing: -0.26px;
      }
    }

    @media only screen and (max-width: 767px) {
      > p {
        width: 80px;
        font-size: 13px;
        font-weight: 300;
      }

      div {
        p {
          font-size: 16px;
          font-weight: 300;          
        }

        u {
          font-size: 13px;
          font-weight: 300;
        }
      }
    }
  `,

  wrapper: styled.div<{ isError?: boolean }>`
    margin-bottom: 5px;
    display: flex;
    position: relative;
    align-items: center;
    height: 64px;
    border-bottom: solid 1px
      ${({ isError }) => (isError ? ORANGE1 : LIGHT_GRAY6)};

    .answer {
      width: calc(100% - 195px);
      font-weight: 600;
      @media only screen and (max-width: 1059px) {
        width: 100%;
      };
    };
    @media only screen and (max-width: 1059px) {
      height: 72px;
      margin: 20px 0 5px;
      align-items: inherit;
      justify-content: space-around;
      flex-direction: column;
    };
    @media only screen and (max-width: 767px) {
      margin: 20px 0 0;
    };
  `,

  question: styled.div`
    width: 195px;
    font-size: 18px;
    @media only screen and (max-width: 767px) {
      font-size: 16px;
      line-height: 1.36em;
      letter-spacing: -0.032em;
    }
  `,

  answer: styled.div`
    width: calc(100% - 195px);
    font-weight: 600;
    @media only screen and (max-width: 1059px) {
      width: 100%;
    };
    .textinput {
      border-bottom: 0;
    }

    .phone {
      display: flex;
      align-items: center;

      .textinput {
        width: calc(100% - 150px);
      }
    }
  `,

  errorMessage: styled.sub`
    font-size: 18px;
    line-height: 18px;
    letter-spacing: -0.24px;
    bottom: 0;
    color: ${RED2};
    margin-left: 196px;
    @media only screen and (max-width: 1059px) {
      margin-left: 0;
    };
    @media only screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 26px;
      letter-spacing: -0.028em;
    }
  `,

  autoComplete: styled.div`
    padding: 14px 30px 14px 0;
    @media only screen and (max-width: 1059px) {
      padding: 14px 0px;
    }
  `,

  seperator: styled.div`
    margin: 2px 20px 0;
    height: 16px;
    border-right: solid 1px ${LIGHT_GRAY6};
    @media only screen and (max-width: 1059px) {
      margin: 2px 12px 0;
    }
  `,

  authButton: styled.div<{ isActive: boolean }>`
    position: absolute;
    right: 0;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.28px;
    width: 66px;
    border: solid 1px ${LIGHT_GRAY6};
    border-radius: 300px;
    text-align: center;
    cursor: ${ifProp('isActive', 'pointer', 'default')};
    pointer-events: ${ifProp(
    'isActive',
    'initial',
    'none',
  )};
    font-weight: 600;

    background-color: ${ifProp(
    'isActive',
    WHITE1,
    LIGHT_GRAY1,
  )};
    color: ${ifProp('isActive', DARK_GRAY1, LIGHT_GRAY6)};
    /* border: solid 1px ${ifProp(
    'isActive',
    DARK_GRAY1,
    LIGHT_GRAY6,
  )}; */
  @media only screen and (max-width: 1059px) {
    bottom: 10px;
  };
  @media only screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 26px;
    letter-spacing: -0.032em;;
  }
  `,

  sendMessageArea: styled.div<{ isShow: boolean }>`
    font-size: 18px;
    line-height: 1.8;
    letter-spacing: -0.24px;
    color: ${BLUE1};
    margin-left: 196px;
    margin-top: 6px;

    display: ${ifProp('isShow', 'block', 'none')};

    sub:nth-child(2) {
      color: ${DARK_GRAY1};
    }
  `,
};

export default BookingPersonInfo;
