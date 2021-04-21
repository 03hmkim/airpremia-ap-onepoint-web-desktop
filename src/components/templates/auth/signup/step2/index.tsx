import { FC, ReactElement } from 'react';
import styled from 'styled-components';

import { AuthContainer } from 'src/styles/layout';
import { LIGHT_GRAY7 } from '@airpremia/cdk/styles/colors';

interface IProps {
  title: ReactElement;
  description: ReactElement;
  stepper: ReactElement;
  phoneAuthForm: ReactElement;
  nextButton: ReactElement;
  guide?: ReactElement | null;
}

const SignupStep2Template: FC<IProps> = ({
  title,
  description,
  stepper,
  phoneAuthForm,
  nextButton,
  guide,
}) => {
  return (
    <AuthContainer pb={120}>
      <S.header>
        <S.title>{title}</S.title>
        <S.description>{description}</S.description>
        <S.stepper>{stepper}</S.stepper>
      </S.header>
      <S.body>
        <S.phoneAuthWrapper>
          <S.phoneAuthForm>{phoneAuthForm}</S.phoneAuthForm>
        </S.phoneAuthWrapper>
        <S.nextButton>{nextButton}</S.nextButton>
      </S.body>
      {guide && <S.guide>{guide}</S.guide>}
    </AuthContainer>
  );
};

const S = {
  header: styled.div`
    margin-bottom: 120px;
    position: relative;
  `,

  title: styled.div`
    margin-bottom: 10px;
  `,

  description: styled.div``,

  stepper: styled.div`
    position: absolute;
    top: 8px;
    right: 0;
  `,

  body: styled.div``,

  phoneAuthWrapper: styled.div`
    margin-bottom: 60px;
  `,

  phoneAuthForm: styled.div``,

  nextButton: styled.div`
    text-align: center;
    button {
      width: 300px;
      height: 50px;
      margin-bottom: 20px;
    }
  `,

  guide: styled.div`
    margin-top: 80px;
    h5 {
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    p {
      font-size: 13px;
      color: ${LIGHT_GRAY7};
      width: 380px;
      line-height: 23px;
    }
  `,
};

export default SignupStep2Template;
