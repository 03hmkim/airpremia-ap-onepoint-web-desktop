import { FC, ReactElement } from 'react';
import styled from 'styled-components';
// import { BLACK, WHITE, GRAY } from '@airpremia/cdk/styles/colors';

interface IProps {
  button: ReactElement;
}

const UserLeaveTemplate: FC<IProps> = ({
  button,
}) => {
  return (
    <S.container>
      <S.titleWrapper>
        <S.button>{button}</S.button>
      </S.titleWrapper>
    </S.container>
  );
};

const S = {
  container: styled.div`
  display: flex;
    align-items: center;
    text-align: center;
  `,

  titleWrapper: styled.div``,

  button: styled.div`
  display: flex;
    align-items: center;
  width: 57px;
  height: 22px;
  padding: 21px 0 0;
  font-family: NotoSansCJKkr;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: -0.3px;
  text-align: center;
  color: var(--light-gray-7);
  `,

 
};

export default UserLeaveTemplate;
