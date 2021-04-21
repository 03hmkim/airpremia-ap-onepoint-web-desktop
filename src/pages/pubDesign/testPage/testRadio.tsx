import { FC } from 'react';
import styled from 'styled-components';
import { Radio } from 'src/components';
import { IRadioStatusChangeProps } from 'src/components/molecules/radio';

interface IProps {
  hasEUCitizen: boolean;
  onChange: (status: boolean) => void;
}

const EuCitizenRadio: FC<IProps> = ({
  hasEUCitizen,
  onChange,
}) => {
  const onChangeEUCitizenStatus = ({
    target,
  }: IRadioStatusChangeProps) => {
    onChange(target === 'Y');
  };
  const yesRadioData = {
    isActive: hasEUCitizen,
    target: 'Y',
    onChange: onChangeEUCitizenStatus,
  };
  const noRadioData = {
    isActive: !hasEUCitizen,
    target: 'N',
    onChange: onChangeEUCitizenStatus,
  };

  return (
    <S.container>
        <Radio {...yesRadioData}>
          <p className="radio-text">예</p>
        </Radio>
        <Radio {...noRadioData}>
          <p className="radio-text">아니오</p>
        </Radio>
    </S.container>
  );
};

const S = {
  container: styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
};

export default EuCitizenRadio;
