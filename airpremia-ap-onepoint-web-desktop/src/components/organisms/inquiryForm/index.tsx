import styled from 'styled-components';
import {
  DARK_GRAY1,
  WHITE1,
  LIGHT_GRAY6,
} from '@airpremia/cdk/styles/colors';
import { TextInput } from 'src/components';
import { TaskButton } from 'src/components';
import { useBooking } from '@airpremia/core/hooks';
import { useState, useEffect } from 'react';
import { EInputType } from 'src/components/atoms/input';
import { checkInputForm } from '@airpremia/core/lib/auth';

interface IStyleProps {}
interface IProps extends IStyleProps {
  /** 폼 타이틀 */
  title: string;
  /** 조회 버튼 라벨 */
  buttonLabel?: string;
  /** 예약번호를 조회할 필요 유무 */
  needReservationNumber?: boolean;
  onClick: () => void;
}

function InquiryForm({
  title,
  buttonLabel,
  needReservationNumber,
  onClick,
}: IProps) {
  const {
    bookingStore,
    onChangeInput,
    onBlurInput,
  } = useBooking();
  const {
    firstName,
    lastName,
    recordLocator,
  } = bookingStore;
  const [isActive, setActive] = useState<boolean>(false);

  const firstNameData = {
    value: firstName.value,
    target: 'firstName',
    type: EInputType.TEXT,
    placeholder: '이름 입력',
    onChange: (e: any) => onChangeInput(e, true),
    onBlur: onBlurInput,
  };

  const lastNameData = {
    value: lastName.value,
    target: 'lastName',
    type: EInputType.TEXT,
    placeholder: '성 입력',
    onChange: (e: any) => onChangeInput(e, true),
    onBlur: onBlurInput,
  };

  const reservationNumberData = {
    value: recordLocator.value,
    target: 'recordLocator',
    type: EInputType.TEXT,
    placeholder: '예약번호 입력',
    onChange: onChangeInput,
    onBlur: onBlurInput,
  };

  useEffect(() => {
    setActive(
      checkInputForm(lastName, firstName, recordLocator),
    );
  }, [lastName, firstName, recordLocator]);

  return (
    <S.container>
      <div className="title font-bold">{title}</div>
      <div className="formWrapper">
        <div className="row">
          <div className="label">성</div>
          <div className="input">
            <TextInput
              borderColor={'transparent'}
              inputProps={lastNameData}
            >
              <sub className="warning">
                {lastName.error && lastName.msg}
              </sub>
            </TextInput>
          </div>
        </div>
        <div className="row">
          <div className="label">이름</div>
          <div className="input">
            <TextInput
              borderColor={'transparent'}
              inputProps={firstNameData}
            >
              <sub className="warning">
                {firstName.error && firstName.msg}
              </sub>
            </TextInput>
          </div>
        </div>
        {needReservationNumber && (
          <div className="row">
            <div className="label">예약번호</div>
            <div className="input">
              <TextInput
                borderColor={'transparent'}
                inputProps={reservationNumberData}
              >
                <sub className="warning">
                  {recordLocator.error && recordLocator.msg}
                </sub>
              </TextInput>
            </div>
          </div>
        )}
      </div>
      <div className="buttonWrapper">
        <TaskButton onClick={onClick} disabled={!isActive}>
          {buttonLabel ? buttonLabel : '조회'}
        </TaskButton>
      </div>
    </S.container>
  );
}

export function CheckinInquiryForm({
  title,
  buttonLabel,
  needReservationNumber,
  onClick,
}: IProps) {
  const {
    bookingStore,
    onChangeInput,
    onBlurInput,
  } = useBooking();
  const {
    firstName,
    lastName,
    recordLocator,
  } = bookingStore;
  const [isActive, setActive] = useState<boolean>(false);

  const firstNameData = {
    value: firstName.value,
    target: 'firstName',
    type: EInputType.TEXT,
    placeholder: '이름 입력',
    onChange: (e: any) => onChangeInput(e, true),
    onBlur: onBlurInput,
  };

  const lastNameData = {
    value: lastName.value,
    target: 'lastName',
    type: EInputType.TEXT,
    placeholder: '성 입력',
    onChange: (e: any) => onChangeInput(e, true),
    onBlur: onBlurInput,
  };

  const reservationNumberData = {
    value: recordLocator.value,
    target: 'recordLocator',
    type: EInputType.TEXT,
    placeholder: '예약번호 입력',
    onChange: onChangeInput,
    onBlur: onBlurInput,
  };

  useEffect(() => {
    setActive(
      checkInputForm(lastName, firstName, recordLocator),
    );
  }, [lastName, firstName, recordLocator]);

  return (
    <S.container>
      <div className="title font-bold">{title}</div>
      <div className="formWrapper">
        <div className="row">
          <div className="label">성</div>
          <div className="input">
            <TextInput
              borderColor={'transparent'}
              inputProps={lastNameData}
            >
              <sub className="warning">
                {lastName.error && lastName.msg}
              </sub>
            </TextInput>
          </div>
        </div>
        <div className="row">
          <div className="label">이름</div>
          <div className="input">
            <TextInput
              borderColor={'transparent'}
              inputProps={firstNameData}
            >
              <sub className="warning">
                {firstName.error && firstName.msg}
              </sub>
            </TextInput>
          </div>
        </div>
        {needReservationNumber && (
          <div className="row">
            <div className="label">예약번호</div>
            <div className="input">
              <TextInput
                borderColor={'transparent'}
                inputProps={reservationNumberData}
              >
                <sub className="warning">
                  {recordLocator.error && recordLocator.msg}
                </sub>
              </TextInput>
            </div>
          </div>
        )}
      </div>
      <div className="buttonWrapper">
        <TaskButton onClick={onClick} disabled={!isActive}>
          {buttonLabel ? buttonLabel : '조회'}
        </TaskButton>
      </div>
    </S.container>
  );
}

InquiryForm.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    .title {
      font-size: 22px;
      letter-spacing: -0.44px;
    }
    padding: 50px;
    border-radius: 12px;
    border: solid 2px ${DARK_GRAY1};
    background-color: ${WHITE1};
    .formWrapper {
      padding-top: 60px;
      .row {
        display: flex;
        align-items: center;
        padding: 10px 0;
        border-bottom: 1px solid ${LIGHT_GRAY6};
        .label {
          width: 200px;
        }
        .input {
          flex: 1;
          .warning {
            display: block;
          }
        }
      }
    }
    .buttonWrapper {
      margin: 50px auto 0;
      width: 300px;
      height: 50px;
    }
  `,
};

export default InquiryForm;
