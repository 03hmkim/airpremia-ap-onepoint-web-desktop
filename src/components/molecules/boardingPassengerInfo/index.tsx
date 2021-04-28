import { FC, Fragment } from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import SvgInfo from 'public/images/btn_info.svg';
import { Tag } from 'src/components';
import { IBookingDetailPassenger } from '@airpremia/core/api/checkin/types';
import {
  convertPassengerType,
  convertGenderType,
  addComma,
  getMoney,
} from '@airpremia/core/lib/service';
import {
  DARK_GRAY1,
  LIGHT_GRAY7,
  LIGHT_GRAY6,
  LIGHT_GRAY8,
  LIGHT_GRAY5,
  ORANGE2,
  RED2,
} from '@airpremia/cdk/styles/colors';

interface IProps {
  passenger: IBookingDetailPassenger;
  isCanceled: boolean;
}

const BoardingPassengerInfo: FC<IProps> = ({
  passenger,
  isCanceled,
}) => {
  const {
    firstName,
    lastName,
    gender,
    type,
    userId,
    journeys,
    totalAmount,
    totalPoint,
    mileage,
    infant,
  } = passenger;

  return (
    <S.container>
      <S.title>
        <S.name>
          <h3 className="font-bold">
            {firstName}&nbsp;{lastName}&nbsp;
          </h3>
          <h4 className="font-bold">
            ({convertPassengerType(type)}/
            {convertGenderType(gender, true)})
          </h4>
          {isCanceled && <span>예약취소</span>}
        </S.name>
        <S.email>
          {/* {userId ?
            (<p>{userId}</p>) : (<div>포인트 적립</div>)} */}
        </S.email>
      </S.title>

      {!!infant && (
        <S.title className="infant">
          <S.name>
            <h3 className="font-bold">
              {infant.firstName}&nbsp;{infant.lastName}
              &nbsp;
            </h3>
            <h4 className="font-bold">
              ({convertPassengerType('INF')}/
              {convertGenderType(infant.gender, true)})
            </h4>
            {isCanceled && <span>예약취소</span>}
          </S.name>
        </S.title>
      )}

      <S.detail>
        {journeys.map((item, i) => {
          const {
            designator,
            firstPassengerSegmentSsrs,
            firstPassengerSegmentSeat,
          } = item;
          return (
            <S.wrapper
              key={`${item.journeyKey}${i.toString()}`}
              className="wrapper"
            >
              <S.tag>
                <Tag
                  backgroundColor={
                    isCanceled ? LIGHT_GRAY6 : DARK_GRAY1
                  }
                >
                  <Fragment>
                    {designator.origin}-
                    {designator.destination}
                  </Fragment>
                </Tag>
              </S.tag>
              <S.content isCanceled={isCanceled}>
                <h5>좌석 / 클래스</h5>
                {firstPassengerSegmentSeat.length > 0 && (
                  <p>
                    {
                      firstPassengerSegmentSeat[0]
                        .unitDesignator
                    }
                    &nbsp;/&nbsp;
                    {
                      firstPassengerSegmentSeat[0]
                        .cabinClassText
                    }
                  </p>
                )}
              </S.content>
              {firstPassengerSegmentSsrs.map((ssr, i) => (
                <S.content
                  key={`firstPassengerSegmentSsr${i.toString()}`}
                  isCanceled={isCanceled}
                >
                  <h5>{ssr.categoryText}</h5>
                  <p>{ssr.ssrText}</p>
                </S.content>
              ))}
            </S.wrapper>
          );
        })}
      </S.detail>
      {isCanceled ? ('') : (
        <S.bottomInfo isCanceled={isCanceled}>
          <div className="left">
            <h5>결제 금액</h5>
            <output>
              {getMoney(totalAmount, 'KRW')}{' '}
              {totalPoint
                ? +`${getMoney(totalPoint, 'KRW')}`
                : ''}
            </output>
          </div>
          {userId && (
            <div className="right">
              {mileage ? (
                <Fragment>
                  <p className="mileage">
                    {addComma(mileage)} pp
                  </p>
                  &nbsp;
                  <p>적립 완료</p>
                </Fragment>
              ) : (
                <p>포인트 적립 불가</p>
              )}
              <SvgInfo />
            </div>
          )}
        </S.bottomInfo>
      )}
    </S.container>
  );
};

const S = {
  container: styled.div``,
  title: styled.div`
    display: flex;
    height: 50px;
    border-bottom: solid 1px ${DARK_GRAY1};
    justify-content: space-between;
    align-items: center;
    &.infant {
      margin-top: 20px;
    }
    @media only screen and (max-width: 767px) { 
      font-size:18px;
    }
  `,
  name: styled.div`
    display: flex;
    h3 {
      font-size: 20px;
      line-height: 26px;
      letter-spacing: -0.4px;
    }

    h4 {
      font-size: 18px;
      line-height: 26px;
      letter-spacing: -0.36px;
    }
    span {
      font-size: 16px;
      line-height: 26px;
      letter-spacing: -0.32px;
      font-weight: 600;
      color: ${RED2};
      margin-left: 10px;
    }
  `,
  email: styled.div`
    font-size: 14px;
    line-height: 26px;
    letter-spacing: -0.28px;
    font-weight: 600;
    p {
      color: ${LIGHT_GRAY7};
    }
    div {
      box-sizing: border-box;
      height: 30px;
      padding: 0 18px;
      border-radius: 300px;
      border: solid 1px ${LIGHT_GRAY6};
    }
  `,

  detail: styled.div`
    display: flex;
    padding: 25px 0;
    margin-bottom: 25px;
    height:auto;
    overflow:hidden;
    border-bottom: solid 1px ${LIGHT_GRAY5};
    & > div {
      flex: 1;
    }
    @media only screen and (max-width: 767px) { 
      display:block;
      padding-bottom:15px;
      & > div {
        width:100%;
      }
    }
  `,

  wrapper: styled.div`
    & > div {
      &:last-of-type {
        margin-bottom: 0;
      }
    }
    @media only screen and (max-width: 767px) { 
      margin-bottom:10px;
    }
  `,

  tag: styled.div`
    margin-bottom: 20px;
    & > div {
      padding: 0 5px;
    }
    @media only screen and (max-width: 767px) { 
      margin-bottom:5px;
    }
  `,

  content: styled.div<{ isCanceled: boolean }>`
    align-items: center;
    display: flex;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.3px;
    margin-bottom: 15px;

    h5 {
      color: ${LIGHT_GRAY8};
      min-width: 80px;
      margin-right: 105px;
    }
    p {
      font-weight: 600;
    }

    ${({ isCanceled }) =>
      isCanceled &&
      css`
        h5,
        p {
          color: ${LIGHT_GRAY6};
        }
      `}
  `,

  bottomInfo: styled.div<{ isCanceled: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      font-weight: 600;
      h5 {
        font-size: 16px;
        line-height: 26px;
        letter-spacing: -0.32px;
        font-weight: 600;
        margin-right: 30px;
      }
      output {
        font-size: 18px;
        line-height: 26px;
        letter-spacing: -0.36px;
        /* color: ${ORANGE2}; */
        color: ${ifProp('isCanceled', DARK_GRAY1, ORANGE2)};
        text-decoration: underline;
      }
    }
    .right {
      display: flex;
      align-items: center;
      p {
        font-size: 14px;
        line-height: 26px;
        letter-spacing: -0.28px;
        font-weight: 600;
      }

      .mileage {
        font-size: 15px;
        line-height: 26px;
        letter-spacing: -0.3px;
        font-weight: 600;
      }
      svg {
        margin-left: 3px;
      }
    }
  `,
};

export default BoardingPassengerInfo;
