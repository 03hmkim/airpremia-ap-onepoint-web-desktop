import { FC } from 'react';
import styled from 'styled-components';
import { Tag, TaskButton } from 'src/components';
import { useModal } from 'src/hooks';
import { useMe } from '@airpremia/core/hooks';
import {
  DARK_GRAY1,
  LIGHT_GRAY7,
  BLUE1,
} from '@airpremia/cdk/styles/colors';
import { prop } from 'styled-tools';
import { addComma } from '@airpremia/core/lib/service';

interface IProps {}

const SuccessSavePoints: FC<IProps> = ({}) => {
  const { onHideNewModal } = useModal();
  const {
    meStore,
    onSavePointsAfterBoardingInit,
  } = useMe();
  const { pointsStatus, earnPoint } = meStore;

  const onClose = () => {
    onSavePointsAfterBoardingInit();
    onHideNewModal();
  };

  return (
    <S.container>
      <S.tag>
        <Tag backgroundColor={DARK_GRAY1}>왕복</Tag>
      </S.tag>
      <S.journey>
        <S.trip>서울/인천(ICN) - 호치민(SGN)</S.trip>
        <S.description>
          <S.date>2019. 10. 15. - 2019. 10. 30.</S.date>
          <span />
          <S.recordLocator>예약번호 123456</S.recordLocator>
        </S.description>
      </S.journey>
      <S.result>
        <S.row color={BLUE1}>
          <p>적립된 마일리지</p>
          <p>{addComma(earnPoint?.amount)} M</p>
        </S.row>
        <S.row>
          <p>적립 후 사용 가능 마일리지</p>
          <p>{addComma(pointsStatus?.active)} M</p>
        </S.row>
      </S.result>
      <S.button>
        <TaskButton onClick={onClose}>확인</TaskButton>
      </S.button>
    </S.container>
  );
};

const S = {
  container: styled.div`
    padding: 0 50px;
  `,
  tag: styled.div`
    div {
      padding: 0 8px;
    }
  `,
  journey: styled.div`
    margin-top: 10px;
    padding-bottom: 120px;
    margin-bottom: 25px;
    border-bottom: solid 1px ${DARK_GRAY1};
  `,
  trip: styled.div`
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.36px;
    font-weight: 600;
  `,
  description: styled.div`
    display: flex;
    margin-top: 5px;
    font-size: 13px;
    line-height: 26px;
    letter-spacing: -0.26px;
    color: ${LIGHT_GRAY7};
    align-items: center;

    span {
      position: relative;
      height: 10px;
      display: block;
      border-right: solid 1px ${LIGHT_GRAY7};
      margin: 0 10px;
    }
  `,
  date: styled.div``,
  recordLocator: styled.div``,

  result: styled.div`
    & > div:first-of-type {
      margin-bottom: 15px;
    }
  `,
  row: styled.div<{ color?: string }>`
    color: ${prop('color', DARK_GRAY1)};
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 15px;
    line-height: 17px;
    letter-spacing: -0.3px;
    font-weight: 600;
  `,

  button: styled.div`
    margin-top: 45px;
  `,
};

export default SuccessSavePoints;
