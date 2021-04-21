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
      <p>
        (필수) 탑승객 중 EU 시민 혹은 EU 거주자가
        있으신가요?
      </p>
      <div className="radio-wrapper">
        <Radio {...yesRadioData}>
          <p className="radio-text">예</p>
        </Radio>
        <Radio {...noRadioData}>
          <p className="radio-text">아니오</p>
        </Radio>
      </div>
    </S.container>
  );
};

const S = {
  container: styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .radio-wrapper {
      display: flex;
      .radio-text {
        margin-right: 50px;
        font-weight: 600;
      }
    }
  `,
};

export default EuCitizenRadio;
