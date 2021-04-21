import React, { FC, Fragment, useState } from 'react';
import cx from 'classnames';
import { withKnobs } from '@storybook/addon-knobs';
import SignupStep3 from '.';
import {
  PopupTitle,
  PopupDescription,
  Stepper,
  TextInput,
  PrivacyCheck,
} from 'src/components';
import { TaskButton, Label } from 'src/components';

import styled from 'styled-components';
import { EInputType } from 'src/components/atoms/input';
import { isAllCheck } from '@airpremia/core/lib/service';

export default {
  title: 'desktop / Templates / SignupStep3',
  component: SignupStep3,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Signup step 3',
  },
};

export const 회원가입상세정보기입: FC = () => {
  const initData = { value: '', error: false, msg: '' };
  const [gender, setGender] = useState('');
  const [lastName, setLastName] = useState(initData);
  const [firstName, setFirstName] = useState(initData);
  const [birth, setBirth] = useState('');
  const [termsCheckList, setTermCheckList] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const firstNameData = {
    inputData: {
      value: firstName.value,
      target: 'firstName',
      type: EInputType.TEXT,
      placeholder: '영문 이름',
      onChange: (e: any) => {
        const { value } = e.target;
        setFirstName((prev) => ({
          ...prev,
          value,
        }));
      },
      onBlur: () => () => {},
    },
  };

  const lastNameData = {
    labelData: {
      children: '이름',
      fontSize: '14px',
    },
    inputData: {
      value: lastName.value,
      target: 'lastName',
      type: EInputType.TEXT,
      placeholder: '영문 성',
      onChange: (e: any) => {
        const { value } = e.target;
        setLastName((prev) => ({
          ...prev,
          value,
        }));
      },
      onBlur: () => () => {},
    },
  };

  const birthData = {
    labelData: {
      children: '생년월일',
      fontSize: '14px',
    },
    inputData: {
      value: birth,
      target: 'birth',
      type: EInputType.TEXT,
      placeholder: '생년월일 8자리 입력',
      onChange: (e: any) => setBirth(e.target.value),
      onBlur: () => {},
    },
  };

  const privacyList = [
    '전체동의',
    '(필수) 개인 정보 수급 및 국외 이전 동의',
    '(필수) 에어프레미아 이용 약관 동의',
    '(필수) 국제 운송 약관 동의',
    '(선택) 광고성 정보 수신 동의',
  ];

  const makeCheckboxData = (
    idx: number,
    target?: string,
  ) => ({
    isActive: termsCheckList[idx],
    target: target || idx.toString(),
    children: privacyList[idx],
    onChange: (status: boolean, target?: string) => {
      setTermCheckList(() => {
        let newData = [...termsCheckList];
        if (target === 'all') {
          newData.fill(status ? true : false);
        } else {
          newData.splice(Number(target), 1, status);
          newData = [...isAllCheck(newData)];
        }
        newData.splice(Number(target), 1, status);
        return newData;
      });
    },
  });

  const checkboxData: any = {
    all: makeCheckboxData(0, 'all'),
    first: makeCheckboxData(1),
    second: makeCheckboxData(2),
    third: makeCheckboxData(3),
    fourth: makeCheckboxData(4),
  };

  return (
    <SignupStep3
      title={<PopupTitle>회원가입</PopupTitle>}
      description={
        <PopupDescription>
          <Fragment>
            항공권 예매에 필요한 필수 정보입니다.
            <br />
            여권에 표시된 정보와 동일하게 입력해주세요.
          </Fragment>
        </PopupDescription>
      }
      stepper={<Stepper curr={2} />}
      gender={
        <Fragment>
          <S.label>
            <Label fontSize={'14px'}>성별</Label>
          </S.label>
          <div>
            <div
              className={cx({
                selected: gender === 'Male',
              })}
              data-gender="Male"
              onClick={() => setGender('Male')}
            >
              <p>남성</p>
            </div>
            <div
              className={cx({
                selected: gender === 'Female',
              })}
              data-gender="Female"
              onClick={() => setGender('Female')}
            >
              <p>여성</p>
            </div>
          </div>
        </Fragment>
      }
      name={
        <S.textInputWrapper>
          <div>
            <TextInput
              labelProps={lastNameData.labelData}
              inputProps={lastNameData.inputData}
            >
              <sub className="warning">
                {lastName.error && lastName.msg}
              </sub>
            </TextInput>
          </div>
          <div>
            <TextInput inputProps={firstNameData.inputData}>
              <sub className="warning">
                {firstName.error && firstName.msg}
              </sub>
            </TextInput>
          </div>
        </S.textInputWrapper>
      }
      birth={
        <TextInput
          labelProps={birthData.labelData}
          inputProps={birthData.inputData}
        />
      }
      privacyCheck={
        <S.privacyCheckWrapper>
          {Object.keys(checkboxData).map((item, i) => (
            <PrivacyCheck
              key={`privacyCheckboxData${i.toString()}`}
              checkboxProps={checkboxData[item]}
              isBold={i === 0}
            />
          ))}
        </S.privacyCheckWrapper>
      }
      confirmButton={<TaskButton>회원가입 완료</TaskButton>}
      goBack={<u>이전으로 돌아가기</u>}
    />
  );
};

const S = {
  label: styled.div`
    margin-bottom: 10px;
  `,

  textInputWrapper: styled.div`
    & > div:first-of-type {
      margin-bottom: 25px;
    }
  `,

  privacyCheckWrapper: styled.div`
    & > div:not(:last-of-type) {
      margin-bottom: 10px;
    }
  `,
};
