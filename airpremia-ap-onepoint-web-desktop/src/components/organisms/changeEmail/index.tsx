import { FC, useState } from 'react';
import styled from 'styled-components';
import { TextInput } from 'src/components';
import { TaskButton } from 'src/components';
import { EInputType } from 'src/components/atoms/input';
import {
  DARK_GRAY1,
  LIGHT_GRAY8,
  DARK_BLUE1,
  LIGHT_GRAY6,
} from '@airpremia/cdk/styles/colors';
import { checkEmailValid } from '@airpremia/core/lib/auth';

interface IProps {
  originEmail: string;
  onSubmit?: () => void;
}

const ChangeEmail: FC<IProps> = ({
  originEmail = 'test@airpremia.com',
  onSubmit = () => {},
}: IProps) => {
  const [newEmail, setNewEmail] = useState({
    value: '',
    error: false,
    msg: '',
  });
  const [isActive, setActive] = useState(false);
  const label = {
    children: '변경할 이메일 주소',
  };

  const input = {
    value: newEmail.value,
    target: 'email',
    type: EInputType.TEXT,
    placeholder: '이메일 주소 입력',
    onChange: (e: any) => {
      const newData = {
        ...newEmail,
        value: e.target.value,
      };
      setNewEmail(() => newData);
    },
    onBlur: () => {
      const res = checkEmailValid(newEmail);
      setNewEmail(res);
      if (res.value && !res.error) {
        setActive(true);
      } else {
        setActive(false);
      }
    },
  };

  return (
    <S.container>
      <S.top>
        <p>현재 사용 중인 이메일 주소</p>
        <b>{originEmail}</b>
      </S.top>
      <S.middle>
        <TextInput labelProps={label} inputProps={input}>
          <S.warning className="warning">
            {newEmail.error && newEmail.msg}
          </S.warning>
        </TextInput>
      </S.middle>
      <S.bottom>
        <p>
          - 다음에 로그인 할 때 새로운 이메일 주소로
          로그인해야 합니다.
        </p>
      </S.bottom>
      <S.button>
        <TaskButton
          backgroundColor={
            isActive ? DARK_BLUE1 : LIGHT_GRAY6
          }
          onClick={isActive ? onSubmit : () => {}}
        >
          변경
        </TaskButton>
      </S.button>
    </S.container>
  );
};

const pFont = `
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.28px;
`;

const S = {
  container: styled.div`
    & > div {
      padding: 0 50px;
    }
  `,

  title: styled.div``,

  top: styled.div`
    margin: 80px 0 45px;
    p {
      ${pFont};
      margin-bottom: 12px;
    }
    b {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.28px;
      font-weight: 600;
    }
  `,

  middle: styled.div`
    margin-bottom: 80px;
    .label {
      ${pFont};
    }
    .textinput {
      border-bottom: solid 1px ${DARK_GRAY1};
    }
  `,

  bottom: styled.div`
    p {
      ${pFont};
      color: ${LIGHT_GRAY8};
    }
  `,

  button: styled.div`
    margin-top: 80px;
  `,

  warning: styled.sub``,
};

export default ChangeEmail;
