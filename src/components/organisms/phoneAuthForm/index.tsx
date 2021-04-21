import { FC, useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import {
  Select,
  // AutoComplete,
  TextInput,
} from 'src/components';
import { Label } from 'src/components';
import { useAuth } from '@airpremia/core/hooks';
import { EInputType } from 'src/components/atoms/input';
import { ESelectPosition } from 'src/components/molecules/select';
import { getTimeHumanize } from '@airpremia/core/lib/service';
import {
  ORANGE1,
  LIGHT_GRAY6,
  WHITE1,
  DARK_GRAY1,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
// import { ICountryCodeDetailResp } from '@airpremia/core/api/auth/types';
import { postUserPhoneAuthCode } from '@airpremia/core/api/user/user';
import { phoneNumberRegExp } from '@airpremia/core/lib/auth';
import { default as dataDummy } from 'src/components/templates/checkin/checkinDetailInfo/dummy';
import { CheckinAutoComplete } from 'src/components/molecules/autoComplete/index';

interface IProps {
  /** Timer 종료할때 사용 */
  forceStopTimer?: boolean;
  /** 인풋 박스 위 태그 라벨 */
  tagLabel?: string;
  /** 국가코드 라벨 */
  label: string;
  phoneNumber: string;
  authCode: string;
  onChangeLabel: (label: string) => void;
  onChangeValue: (e: any) => void;
  onSendAuthCode?: (status: boolean) => void;
}

const PhoneAuthForm: FC<IProps> = ({
  label = '+ 82',
  tagLabel = '휴대폰 번호',
  phoneNumber,
  authCode,
  onChangeLabel,
  onChangeValue,
  onSendAuthCode,
  forceStopTimer = false,
}: IProps) => {
  const {
    authStore,
    handleCountryCodeLoad,
    handleSortedCountryCodeChange,
    onCountryCodeChange,
  } = useAuth();
  const {
    countryCodeList,
    // sortedCountryCodeData,
  } = authStore;

  const [isOpen, setOpen] = useState(false);
  const [initLoad, setInitLoad] = useState(true);
  const [isSend, setSendStatus] = useState(0);
  const [leftTime, setLeftTime] = useState(0);
  const [stopTimer, setStopTimer] = useState(false);

  const sendText = ['인증', '재전송'];
  let timer: any;

  const isPhoneNumberValidation = useMemo(
    () =>
      (phoneNumber.length &&
        phoneNumberRegExp.test(phoneNumber)) ||
      false,
    [phoneNumber],
  );

  const onAuthNumberSend = async () => {
    if (!isPhoneNumberValidation) {
      return alert('정확한 휴대번호를 입력해주세요');
    }

    setStopTimer(false);
    onSendAuthCode && onSendAuthCode(true);
    if (!isSend) {
      setSendStatus(1);
    }
    try {
      await postUserPhoneAuthCode({
        countryNumber: Number(label.split(' ')[1]),
        phoneNumber: phoneNumber,
      });

      setLeftTime(179);
    } catch (e) {
      window.alert(e.response.data.message);
      throw e;
    }
  };

  const onCountryCodeChangeInterceptor = (data: any) => {
    onChangeLabel(`+ ${data.countryNumber}`);
    onCountryCodeChange(data);
    setOpen(!isOpen);
  };
  const phoneNumberData = {
    value: phoneNumber,
    target: 'phoneNumber',
    type: EInputType.NUMBER,
    placeholder: '휴대폰 번호 입력',
    maxLength: 15,
    onChange: (e: any) => onChangeValue(e),
  };

  const authCodeData = {
    value: authCode,
    target: 'authCode',
    type: EInputType.NUMBER,
    placeholder: '인증번호 입력',
    maxLength: 6,
    onChange: (e: any) => onChangeValue(e),
  };

  const selectProps = {
    label,
    isShowMenu: isOpen,
    position: ESelectPosition.DOWN,
    onClick: () => setOpen(!isOpen),
  };

  const contentProps = {
    key: 'countryNumber',
    label: 'description',
    dataList: dataDummy.countryCodeList.counties,
    onChange: (data: any) =>
      onCountryCodeChangeInterceptor(data),
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

  useEffect(() => {
    if (initLoad) {
      if (!countryCodeList.length) {
        handleCountryCodeLoad();
      }
      setInitLoad(false);
    }

    if (stopTimer) {
      setLeftTime(0);
      clearInterval(timer);
    } else {
      timer =
        leftTime > 0 &&
        setInterval(() => setLeftTime(leftTime - 1), 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [leftTime, stopTimer]);

  useEffect(() => {
    if (forceStopTimer) {
      setStopTimer(forceStopTimer);
    }
  }, [forceStopTimer]);

  return (
    <S.container>
      <S.wrapper>
        <div className="phone-number-wrapper">
          <S.label>
            <Label>{tagLabel}</Label>
          </S.label>
          <S.phoneArea>
            <S.autoComplete>
              <Select {...selectProps}>
                <CheckinAutoComplete {...contentProps} />
              </Select>
            </S.autoComplete>
            <S.textInput isBold={!!phoneNumberData.value}>
              <TextInput
                hasClearBtn={false}
                borderColor={DARK_GRAY1}
                inputProps={phoneNumberData}
              />
            </S.textInput>
            <S.sendButton onClick={onAuthNumberSend}>
              {sendText[isSend]}
            </S.sendButton>
          </S.phoneArea>
          {leftTime > 0 && (
            <sub>인증 문자를 발송했습니다.</sub>
          )}
        </div>
        {/* {isSend ? ( */}
        {/* // <div className="auth-number"> */}
        <S.authCodeWrapper isShow={!!isSend}>
          <S.textInput isBold={!!authCodeData.value}>
            <TextInput
              borderColor={DARK_GRAY1}
              inputProps={authCodeData}
            />
          </S.textInput>

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
        </S.authCodeWrapper>
        {/* ) : // </div> */}
        {/* null} */}
      </S.wrapper>
    </S.container>
  );
};

const S = {
  container: styled.div``,

  label: styled.div`
    font-size: 14px;
    line-height: 30px;
    font-weight: 600;
    letter-spacing: -0.28px;
    margin-bottom: 4px;
  `,

  wrapper: styled.div`
    margin-bottom: 40px;

    em {
      font-style: normal;
      color: ${ORANGE1};
    }

    .phone {
      display: flex;
      position: relative;
      justify-content: space-between;
      height: 40px;
      margin-bottom: 40px;
      box-sizing: border-box;

      .textinput {
        width: 100%;
      }

      .send-btn {
        position: absolute;
        padding: 0;
        top: 9px;
        right: 0;
        width: 50px;
        height: 24px;
        border-radius: 12px;
        border: solid 1px ${LIGHT_GRAY6};
        background-color: ${WHITE1};
        color: ${LIGHT_GRAY6};
        font-size: 11px;
        font-weight: 600;
        &.active {
          background-color: ${WHITE1};
          color: ${DARK_GRAY1};
        }
      }
    }

    .phone-number-wrapper {
      position: relative;
      sub {
        position: absolute;
        bottom: -10px;
        font-size: 12px;
        color: ${BLUE1};
      }
    }
  `,

  phoneArea: styled.div`
    display: flex;
    margin-bottom: 25px;
  `,

  autoComplete: styled.div`
    border-bottom: solid 1px black;
    padding: 9px 0;
    margin-right: 11px;
    min-width: 50px;
    flex-basis: auto;
    font-weight: 600;
  `,

  textInput: styled.div<{ isBold: boolean }>`
    flex: 1;

    input {
      font-weight: ${ifProp('isBold', 600, 'normal')};
    }
  `,

  sendButton: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 0;
    top: 41px;
    right: 0;
    width: 50px;
    height: 24px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    background-color: ${WHITE1};
    color: ${DARK_GRAY1};
    border: solid 1px ${LIGHT_GRAY6};
  `,

  authCodeWrapper: styled.div<{ isShow: boolean }>`
    position: relative;
    display: ${ifProp('isShow', 'block', 'none')};

    .time-guide {
      position: absolute;
      top: 6px;
      right: 0;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: -0.24px;
      color: ${BLUE1};
      margin-left: 196px;
      margin-top: 6px;

      display: ${ifProp('isShow', 'block', 'none')};

      sub {
        font-size: 100%;
        bottom: 0;
        color: ${BLUE1};
        &:nth-child(2) {
          color: ${DARK_GRAY1};
        }
      }
      sub {
      }
    }
  `,
};

export default PhoneAuthForm;
