import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { EInputType } from 'src/components/atoms/input';
import { prop } from 'styled-tools';
// import { useMe } from '@airpremia/core/hooks';
import TextInput from 'src/components/molecules/textInput';
import { TaskButton } from 'src/components';
import { IPostPointsEarnParams } from '@airpremia/core/api/user/types';
// import SuccessSavePoints from '../successSavePoints';
// import { BLACK, WHITE, GRAY } from '@airpremia/cdk/styles/colors';

interface IProps {
  onClickSave?: (params: IPostPointsEarnParams) => void;
}

const SavePointsAfterBoarding: FC<IProps> = ({
  onClickSave = () => {},
}) => {
  // const {
  //   meStore: { isPointsSaveAfterBoardingSuccess },
  // } = useMe();
  const transportationCarrierCode = 'YP';
  const [recordLocator, setRecordLocator] = useState('');
  const [
    transportationIdentifier,
    setTransportationIdentifier,
  ] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [isActive, setActive] = useState<boolean>(false);

  const recordLocatorData = {
    labelData: {
      fontSize: '14px',
      children: '항공권 번호',
    },
    inputData: {
      value: recordLocator,
      target: 'recordLocator',
      type: EInputType.TEXT,
      placeholder: '항공권 번호 입력',
      onChange: (e: any) => {
        setRecordLocator(e.target.value.toUpperCase());
      },
    },
  };

  const transportationIdentifierData = {
    labelData: {
      fontSize: '14px',
      children: '편명',
    },

    inputData: {
      value: transportationIdentifier,
      target: 'transportationIdentifier',
      type: EInputType.NUMBER,
      placeholder: '편명의 숫자 입력',
      onChange: (e: any) => {
        setTransportationIdentifier(e.target.value);
      },
    },
  };

  const departureDateData = {
    labelData: {
      fontSize: '14px',
      children: '탑승일',
    },

    inputData: {
      value: departureDate,
      target: 'departureDate',
      type: EInputType.NUMBER,
      placeholder: '탑승일 8자리 입력',
      onChange: (e: any) => {
        setDepartureDate(e.target.value);
      },
    },
  };

  const onSubmit = () => {
    onClickSave({
      departureDate,
      recordLocator,
      transportationCarrierCode,
      transportationIdentifier,
    });
  };

  useEffect(() => {
    if (
      recordLocatorData &&
      transportationIdentifier &&
      departureDate
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [
    recordLocatorData,
    transportationIdentifier,
    departureDate,
  ]);

  return (
    <S.container>
      <S.wrapper>
        <TextInput
          labelProps={recordLocatorData.labelData}
          inputProps={recordLocatorData.inputData}
        />
      </S.wrapper>

      <S.wrapper mt={45}>
        <TextInput
          labelProps={
            transportationIdentifierData.labelData
          }
          inputProps={
            transportationIdentifierData.inputData
          }
        />
      </S.wrapper>

      <S.wrapper mt={33}>
        <TextInput
          labelProps={departureDateData.labelData}
          inputProps={departureDateData.inputData}
        />
      </S.wrapper>

      <S.button>
        <TaskButton disabled={!isActive} onClick={onSubmit}>
          적립
        </TaskButton>
      </S.button>
    </S.container>
  );
};

const S = {
  container: styled.div`
    padding: 0 50px;
  `,

  wrapper: styled.div<{ mt?: number }>`
    margin-top: ${prop('mt', 0)}px;
  `,

  button: styled.div`
    margin-top: 40px;
  `,
};

export default SavePointsAfterBoarding;
