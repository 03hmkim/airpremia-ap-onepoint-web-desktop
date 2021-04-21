import { FC } from 'react';
import styled from 'styled-components';
import {
  LIGHT_GRAY8,
  LIGHT_GRAY5,
  DARK_GRAY1,
  ORANGE2,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
import { addComma } from '@airpremia/core/lib/service';
import moment from 'moment';

interface IProps {
  grade: string;
  savedMileage?: number;
  holdingStartDate?: string;
  holdingEndDate?: string;
}

interface IGradeData {
  nextGrade?: string;
  stayMileage: number;
  goalMileage?: number;
}

interface IGrade {
  BLUE: IGradeData;
  SILVER: IGradeData;
  GOLD: IGradeData;
  [x: string]: IGradeData;
}

const gradeData: IGrade = {
  BLUE: {
    nextGrade: 'SILVER',
    stayMileage: 0,
    goalMileage: 80000,
  },
  SILVER: {
    nextGrade: 'GOLD',
    stayMileage: 80000,
    goalMileage: 300000,
  },
  GOLD: {
    stayMileage: 300000,
  },
};

const UpgradeRender: FC<IProps> = ({
  grade,
  savedMileage = 0,
}) => {
  const data = gradeData[grade];
  return (
    <S.wrapper>
      <S.title className="font-bold">
        {data.nextGrade} 등급이 되려면
      </S.title>
      <S.description>
        최근 24개월 동안 {addComma(data.goalMileage)}M을
        적립해야 합니다.
      </S.description>
      <S.box>
        <div>
          <p>승급에 필요한 M</p>
          <p>{addComma(data.goalMileage)}M</p>
        </div>
        <div>
          <p>나의 최근 24개월 적립 M</p>
          <p className="red">{addComma(savedMileage)} M</p>
        </div>
      </S.box>
    </S.wrapper>
  );
};

const StayRender: FC<IProps> = ({
  grade,
  savedMileage = 0,
  holdingStartDate = '2019-12-25T23:30:00',
  holdingEndDate = '2021-11-25T23:30:00',
}) => {
  const data = gradeData[grade];
  return (
    <S.wrapper>
      <S.title className="font-bold">
        {grade} 등급을 유지하려면
      </S.title>
      <S.description>
        등급 유지 기간 (
        {moment(holdingStartDate).format('YYYY.M')} ~{' '}
        {moment(holdingEndDate).format('YYYY.M')})
        동안&nbsp;
        {addComma(data.stayMileage)}M을 적립해야 합니다.
      </S.description>
      <S.box>
        <div>
          <p>등급 유지에 필요한 M</p>
          <p>{addComma(data.stayMileage)}M</p>
        </div>
        <div>
          <p>나의 최근 24개월 적립 M</p>
          <p className="blue">{addComma(savedMileage)} M</p>
        </div>
      </S.box>
    </S.wrapper>
  );
};

const BluePopup: FC<IProps> = (props) => {
  return (
    <S.container>
      <UpgradeRender {...props} />
    </S.container>
  );
};
const SilverPopup: FC<IProps> = (props) => {
  return (
    <S.container>
      <UpgradeRender {...props} />
      <S.margin>
        <StayRender {...props} />
      </S.margin>
    </S.container>
  );
};
const GoldPopup: FC<IProps> = (props) => {
  return (
    <S.container>
      <StayRender {...props} />
    </S.container>
  );
};

const GradeUpdgradeOrStay: FC<IProps> = (props) => {
  if (props.grade === 'BLUE')
    return <BluePopup {...props} />;
  if (props.grade === 'SILVER')
    return <SilverPopup {...props} />;
  if (props.grade === 'GOLD')
    return <GoldPopup {...props} />;

  return null;
};

const S = {
  container: styled.div``,

  wrapper: styled.div``,

  title: styled.div`
    font-size: 18px;
    line-height: 34px;
    letter-spacing: -0.36px;
  `,

  description: styled.div`
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.28px;
    margin-top: 20px;
    color: ${LIGHT_GRAY8};
  `,

  box: styled.div`
    padding: 30px 0;
    margin-top: 30px;
    border-top: solid 2px ${DARK_GRAY1};
    border-bottom: solid 1px ${LIGHT_GRAY5};
    font-weight: 600;

    & > div {
      display: flex;
      justify-content: space-between;
      &:first-of-type {
        margin-bottom: 15px;
      }
    }

    .red {
      color: ${ORANGE2};
    }

    .blue {
      color: ${BLUE1};
    }
  `,

  margin: styled.div`
    margin-top: 60px;
  `,
};

export default GradeUpdgradeOrStay;
