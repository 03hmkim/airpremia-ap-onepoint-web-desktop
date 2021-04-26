import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { XButtonRound } from 'src/components';
import {
  DARK_GRAY1,
  BLUE1,
} from '@airpremia/cdk/styles/colors';

export interface IProps {
  icon: ReactElement<SVGAElement>;
  email: string;
  onClick: () => void;
  onClickXButton: () => void;
}

const LoginShortcutBox: FC<IProps> = ({
  icon,
  email,
  onClick,
  onClickXButton,
}: IProps) => {
  return (
    <S.container onClick={onClick}>
      <S.icon>{icon}</S.icon>
      <S.wrapper>
        <p>이메일 계정으로 로그인</p>
        <p className="email">{email}</p>
      </S.wrapper>
      <S.XButtonRound>
        <XButtonRound onClick={onClickXButton} />
      </S.XButtonRound>
    </S.container>
  );
};

const S = {
  container: styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 380px;
    height: 104px;
    border-radius: 8px;
    border: solid 1px ${DARK_GRAY1};
    padding: 25px 20px;
    box-sizing: border-box;

    @media only screen and (max-width: 767px) {
      width: 100%;
      height: auto;
      flex-direction: column;
    }
  `,

  icon: styled.div`
    flex-basis: 40px;
    margin-right: 20px;

    @media only screen and (max-width: 767px) {
      margin-bottom: 10px;
      margin-right: 0;
    }
  `,

  wrapper: styled.div`
    p {
      font-size: 18px;
      line-height: 23px;
      letter-spacing: -0.32px;
      font-weight: 600;
    }

    .email {
      font-size: 18px;
      line-height: 30px;
      letter-spacing: -0.3px;
      color: ${BLUE1};
    }

    @media only screen and (max-width: 767px) {
      p,
      p .email {
        font-size: 14px;
        font-weight: 300;
      }
    }
  `,

  XButtonRound: styled.div`
    position: absolute;
    right: 20px;
  `,
};

export default LoginShortcutBox;
