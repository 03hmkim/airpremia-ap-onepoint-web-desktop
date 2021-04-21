import { FC, Fragment } from 'react';
import styled from 'styled-components';
import { PopupTitle } from 'src/components';
import {
  BLUE1,
  WHITE1,
} from '@airpremia/cdk/styles/colors';
import { TaskButton } from 'src/components';
import { useRouter } from 'next/router';
import { useModal } from 'src/hooks';
import { EModalType } from '@airpremia/core/stores/models/ui';

interface IProps {}

const SignupSuccess: FC<IProps> = () => {
  const { onHideModal } = useModal();
  const router = useRouter();

  return (
    <S.container>
      <S.title>
        <PopupTitle>
          <Fragment>
            에어프레미아의
            <br />
            새로운 멤버가 되신 것을
            <br />
            환영합니다!
          </Fragment>
        </PopupTitle>
      </S.title>
      <S.description>
        <p>
          꼭 필요한 것만 선택된 항공 경험으로
          <br />
          여러분의 여행을 채워보세요.
        </p>
      </S.description>
      <S.button>
        <TaskButton
          onClick={() => {
            onHideModal({ type: EModalType.MODAL });
            router.push('/');
          }}
          backgroundColor={BLUE1}
          color={WHITE1}
        >
          홈으로 이동
        </TaskButton>
      </S.button>
    </S.container>
  );
};

const S = {
  container: styled.div`
    padding: 50px;
    width: 380px;
    height: 380px;
    background-image: url('/images/seq_join_fin_pc.gif');
  `,

  title: styled.div`
    margin-bottom: 10px;
  `,
  description: styled.div`
    p {
      font-size: 14px;
      line-height: 24px;
      letter-spacing: -0.28px;
      color: ${BLUE1};
      font-weight: 600;
    }
  `,
  button: styled.div`
    margin-top: 136px;
  `,
};

export default SignupSuccess;
