import { FC } from 'react';
import styled from 'styled-components';
import SvgCheckin from 'public/images/img_mobilecheck.svg';
import { LIGHT_GRAY7 } from '@airpremia/cdk/styles/colors';

interface IProps {}

const NothingOnlineCheckinCard: FC<IProps> = ({}) => {
  return (
    <S.container>
      <S.title className="font-premia-bold">
        NO RESERVATION
      </S.title>
      <S.description>
        온라인 체크인이 가능한 항공편이 없어요.
      </S.description>
      <S.image>
        <SvgCheckin />
      </S.image>
    </S.container>
  );
};

const S = {
  container: styled.div`
    padding: 30px;
    width: 100%;
    height: 215px;
    border-radius: 12px;
    border: solid 1px ${LIGHT_GRAY7};
    box-sizing: border-box;
    position: relative;
  `,

  title: styled.div`
    font-size: 24px;
    line-height: 26px;
    letter-spacing: -0.48px;
  `,

  description: styled.div`
    margin-top: 5px;
    font-size: 14px;
    line-height: 26px;
    letter-spacing: -0.28px;
  `,

  image: styled.div`
    position: absolute;
    right: 45px;
    bottom: 0;
  `,
};

export default NothingOnlineCheckinCard;
