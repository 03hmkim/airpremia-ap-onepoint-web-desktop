import { FC, ReactElement } from 'react';
import styled from 'styled-components';

import { AuthContainer } from 'src/styles/layout';

interface IProps {
  title: ReactElement;
  form: ReactElement;
}

const LoginTemplate: FC<IProps> = ({ title, form }) => {
  return (
    <AuthContainer>
      <S.title>{title}</S.title>
      <S.form>{form}</S.form>
    </AuthContainer>
  );
};

const S = {
  title: styled.div`
    margin-bottom: 120px;
    @media only screen and (max-width: 1059px) { 
        margin-bottom: 80px;
    }
    @media only screen and (max-width: 767px) { 
        margin-bottom: 60px;
    }
  `,

  form: styled.div``,
};

export default LoginTemplate;
