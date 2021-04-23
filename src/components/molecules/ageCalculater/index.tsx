import styled from 'styled-components';
import moment from 'moment';
import { useState } from 'react';
import {
  ORANGE2,
  DARK_GRAY1,
  DARK_BLUE1,
  WHITE1,
} from '@airpremia/cdk/styles/colors';
import { Input, TaskButton } from 'src/components';
import { EInputType } from 'src/components/atoms/input';
import { EPassengerType } from '@airpremia/core/stores/models/bookingSession';

interface IStyleProps {}

export interface IProps extends IStyleProps {
  baseDate: moment.Moment;
}

const passengerLabel = {
  [EPassengerType.ADULT]: '성인',
  [EPassengerType.CHILD]: '소아',
  [EPassengerType.INFANT]: '유아',
  [EPassengerType.SEAT_INFANT]: '자리가 필요한 유아',
};

const getAge = (birthDate: string, baseDate = moment()) => {
  const birDateMoment = moment(birthDate);
  if (birDateMoment.isValid()) {
    const today = moment(baseDate);
    return today.diff(birDateMoment, 'year');
  }
  alert(
    '생년월일이 올바르게 기입되었는지 다시 확인해주세요',
  );
};

function AgeCalculater({ baseDate }: IProps) {
  const [birthDate, setBirthDate] = useState('');
  const handleOnInput = (inputText: any) => {
    if (inputText.length > 8) {
      inputText= inputText.substr(0, 8);
    }
    if (inputText.includes('.')){ // 임시수정
      inputText = inputText.replace('.', '');
    }
    // console.log(/.+-/.test(inputText));
    return inputText;
  } // 20210302 smartport JYN
  const validBirthDate = birthDate.length === 8;
  const onChangeValue = (e: any) => {
    // setBirthDate(e.target.value);
    setBirthDate(handleOnInput(e.target.value));
    // 20210302 smartport JYN
  };
  const [
    calculatedPassengerType,
    setCalculatedPassengerType,
  ] = useState<EPassengerType | undefined>();
  const onCalculate = () => {
    const age = getAge(birthDate, baseDate);

    if (age && age < 0) {
      alert('생년월일이 잘못 되었습니다.');
    } else {
      if (age || age === 0) {
        if (age < 2) {
          return setCalculatedPassengerType(
            EPassengerType.INFANT,
          );
        }
        if (age > 1 && age < 12) {
          return setCalculatedPassengerType(
            EPassengerType.CHILD,
          );
        }
        if (age >150) {
          alert('생년월일이 잘못 되었습니다.');
          return;
        }

        return setCalculatedPassengerType(
          EPassengerType.ADULT,
        );
      }
    }
  };

  const boardingDay = moment(baseDate).format('YYYY.M.DD.');

  return (
    <S.container>
      <div className="middle">
        <div className="label">생년월일</div>
        <div className="inputWrapper">
          <Input
            isFocus
            type={EInputType.NUMBER}
            placeholder="생년월일 8자리 입력 (예: 20170810)"
            value={birthDate}
            onChange={onChangeValue}
          />
        </div>
        {calculatedPassengerType && (
          <div className="display">
            선택한 여정일 ({boardingDay}) 기준으로
            <span>
              [
              {
                passengerLabel[
                  calculatedPassengerType
                    ? calculatedPassengerType
                    : EPassengerType.ADULT
                ]
              }
              ]
            </span>
            입니다.
          </div>
        )}
      </div>
      <div className="bottom">
        <TaskButton
          disabled={!validBirthDate}
          color={WHITE1}
          backgroundColor={DARK_BLUE1}
          onClick={onCalculate}
        >
          계산하기
        </TaskButton>
      </div>
    </S.container>
  );
}

AgeCalculater.defaultProps = {};

const S = {
  container: styled.div`
  
    em {
      color: ${ORANGE2};
      font-style: normal;
    }
    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }

    .middle {
      padding-top: 40px;
      .label {
        display: flex;
        align-items: center;
        position: relative;
        font-size: 18px;
        line-height: 2.14;
        letter-spacing: -0.28px;
        color: ${DARK_GRAY1};
        .emphasisWrapper {
          position: relative;
          top: -6px;
          left: 3px;
        }
      }
      .inputWrapper {
        width: 100%;
        padding: 5px 0 10px;
        border-bottom: 1px solid ${DARK_GRAY1};
        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button {
          opacity: 0;
        }
      }
      .display {
        padding-top: 60px;
        font-size: 18px;
        font-weight: 600;
        line-height: 1.36em;
        text-align: center;
        color: ${DARK_GRAY1};
        span {
          color: ${ORANGE2};
          padding: 0 10px;
        }
      }
    }
    .bottom {
      padding-top: 60px;
      font-size: 18px;
      button {
        display: block;
        width: 100%;
      }
    }

    @media only screen and (max-width: 767px) { 
      h3 {
        font-size: 14px;
        .middle {
          font-size: 14px;
        }
      }

      .middle {
        .label {
          font-size: 14px;
          font-weight: 300;
        }

        .display {
          font-size: 14px;
        }
      }

      .bottom {
        font-size: 15px;
      }
    }

    @media only screen and (max-height: 740px) { 

      .middle {
        padding-top: 20px;
        .display {
          padding-top: 40px;
        }
      }

      .bottom {
        padding-top: 40px;
      }
    }
  `,
};

export default AgeCalculater;
