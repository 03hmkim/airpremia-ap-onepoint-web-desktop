import { FC, Fragment } from 'react';
import styled from 'styled-components';
import { TripInformationBox } from 'src/components';
import { Horizon } from 'src/components';
import {
  LIGHT_GRAY6,
  LIGHT_GRAY8,
} from '@airpremia/cdk/styles/colors';
import { EBorderShape } from 'src/components/atoms/horizon';
import { IFlightTicketSearchLeg } from '@airpremia/core/api/ticket/types';
import { useCommon } from '@airpremia/core/hooks';
import { getHumanizeTime } from '@airpremia/core/lib/booking';
import moment from 'moment';
import { flow, last} from 'lodash';

interface IProps {
  legs: IFlightTicketSearchLeg[];
}

const TripInfomation: FC<IProps> = ({ legs }) => {
  const { commonStore } = useCommon();
  const { language } = commonStore;
  const timeFormat = 'YYYY. M. D dddd';
  const getLeg = flow(
    last,
  )(legs); // 국내선에 환승정보가 없으므로 임시 수정
           // 20210303 smartport JYN

  return (
    <S.container>
      <S.wrapper>
        <Horizon top={40} bottom={30} />

        {legs.map((leg, i) => {
          return (
            <Fragment key={`leg${i.toString()}`}>
              <TripInformationBox
                leg={leg}
                language={language}
              />
              {leg.isTransferAtNext && (
                <S.transferAreaWrapper>
                  <Horizon
                    top={30}
                    bottom={30}
                    color={LIGHT_GRAY6}
                    shape={EBorderShape.DASHED}
                    width={1}
                  />
                  <S.transferArea>
                    <h4 className="font-bold">환승</h4>
                    <S.description>
                      {getHumanizeTime({
                        duration: leg.termToNextLegInMinute,
                      })}
                    </S.description>
                  </S.transferArea>
                  <Horizon
                    top={30}
                    bottom={30}
                    color={LIGHT_GRAY6}
                    shape={EBorderShape.DASHED}
                    width={1}
                  />
                </S.transferAreaWrapper>
              )}
            </Fragment>
          );
        })}

        <Horizon top={30} bottom={40} />

        <S.result>
          <div>
            <p>도착</p>
            <p>{moment(getLeg?.departureTime)
                .locale(language.code)
                .format(timeFormat)}</p>
          </div>
          <div>
            <p>전체 소요 시간</p>
            <p>{getHumanizeTime({
              duration: getLeg?.flightTimeInMinute
            })}</p>
          </div>
        </S.result>
      </S.wrapper>
    </S.container>
  );
};

const S = {
  container: styled.div`
  `,

  header: styled.div``,

  description: styled.div`
    font-size: 14px;
    line-height: 26px;
    letter-spacing: -0.28px;
    color: ${LIGHT_GRAY8};
  `,

  wrapper: styled.div``,

  transferAreaWrapper: styled.div``,

  transferArea: styled.div`
    h4 {
      margin-bottom: 5px;
      font-size: 18px;
      line-height: 1;
      letter-spacing: -0.36px;
    }
  `,

  result: styled.div`
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    p {
      &:first-of-type {
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.26px;
        margin-bottom: 7px;
      }
      &:last-of-type {
        font-size: 21px;
        line-height: 24px;
        letter-spacing: -0.32px;
        font-weight: 600;
      }
    }

    @media only screen and (max-width:767px) {
      p {
        &:first-of-type {
          font-size: 13px;
        }
        &:last-of-type {
          font-size: 16px;
        }
      }
    }
  `,
};

export default TripInfomation;
