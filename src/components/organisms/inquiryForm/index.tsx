import styled from 'styled-components';
import {
  DARK_GRAY1,
  WHITE1,
  LIGHT_GRAY6,
  RED2
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
      <div className="title">{title}</div>
      <div className="formWrapper">
        <div className="row">
          <div className="label">성</div>
          <div className="input">
            <TextInput borderColor={'transparent'}inputProps={lastNameData}></TextInput>
          </div>
        </div>
        <sub className="warning">
          {lastName.error && lastName.msg}
        </sub>
        <div className="row">
          <div className="label">이름</div>
          <div className="input">
            <TextInput borderColor={'transparent'}inputProps={firstNameData}></TextInput>
          </div>
        </div>
        <sub className="warning">
          {firstName.error && firstName.msg}
        </sub>
        {needReservationNumber && (
          <div className="row">
            <div className="label">예약번호</div>
            <div className="input">
              <TextInput borderColor={'transparent'}inputProps={reservationNumberData}></TextInput>
            </div>
          </div>
        )}
        <sub className="warning">
          {recordLocator.error && recordLocator.msg}
        </sub>
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
      <div className="title">{title}</div>
      <div className="formWrapper">
        <div className="row">
          <div className="label">성</div>
          <div className="input">
            <TextInput
              borderColor={'transparent'}
              inputProps={lastNameData}
            />
          </div>
        </div>
        <sub className="warning">
          {lastName.error && lastName.msg}
        </sub>
        <div className="row">
          <div className="label">이름</div>
          <div className="input">
            <TextInput
              borderColor={'transparent'}
              inputProps={firstNameData}
            />
          </div>
        </div>
        <sub className="warning">
          {firstName.error && firstName.msg}
        </sub>
        {needReservationNumber && (
          <div className="row">
            <div className="label">예약번호</div>
            <div className="input">
              <TextInput
                borderColor={'transparent'}
                inputProps={reservationNumberData}
              />
            </div>
          </div>
        )}
        <sub className="warning textEnterM">
          {recordLocator.error && recordLocator.msg}
        </sub>
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
    padding: 50px;
    border-radius: 12px;
    border: solid 2px ${DARK_GRAY1};
    background-color: ${WHITE1};

    .title {
      font-size: 22px;
      letter-spacing: -0.44px;
      line-height: 1.8em;
    }

    .formWrapper {
      padding-top: 60px;
      .row {
        display: flex;
        align-items: center;
        padding: 10px 0;
        margin-bottom: 5px;
        border-bottom: 1px solid ${LIGHT_GRAY6};
        .label {
          width: 200px;
          font-size: 18px;
        }
        .input {
          flex: 1;
        }
      }
      .warning {
        font-size: 18px;
        line-height: 18px;
        letter-spacing: -0.24px;
        margin-left: 198px;
        bottom: 0;
        color: ${RED2};
        display: block;
      }
    }
    .buttonWrapper {
      margin: 50px auto 0;
      width: 300px;
      height: 50px;
    }

    @media only screen and (max-width: 1059px) {

      .formWrapper  {
        padding-top: 40px;
        .row {
          margin: 20px 0 5px 0;
          padding-bottom: 0px;
          display: block;
          &:first-child {
            margin-top: 0px;
          }
        }
        .warning {
          margin-left: 0px;
        }
      }
    }

    @media only screen and (max-width: 767px) {
      padding: 25px;

      .title {
        font-size: 18px;
      }

      .formWrapper {
        .row {
          .label {
            font-size: 14px;
          }
        }
        .warning {
          font-size: 14px;
        }
      }
    }

    @media only screen and (max-width: 479px) {
      .buttonWrapper {
        width: 100%;
      }
    }
  `,
};

export default InquiryForm;
