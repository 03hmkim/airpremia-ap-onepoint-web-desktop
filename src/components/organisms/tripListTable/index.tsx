import { FC } from 'react';
import { prop } from 'styled-tools';
import moment from 'moment';
import styled from 'styled-components';
import { map, compact, join, flow } from 'lodash/fp';
import { useRouter } from 'next/router';
import {
  TableHeaderWithList,
  TableBodyWithList,
} from 'src/components';
import { useCommon } from '@airpremia/core/hooks';
import {
  BLUE1,
  LIGHT_GRAY7,
  LIGHT_GRAY5,
} from '@airpremia/cdk/styles/colors';

interface IProps {
  headerList: string[];
  widthList: number[];
  list: any[];
  emptyMessage: string;
}

const onMakeRangeDate = (
  code: string,
  ...args: string[]
) => {
  return flow(
    map(
      (item: string) =>
        item &&
        moment(item)
          .locale(code)
          .format('YYYY. M. D. (dd)'),
    ),
    compact,
    join(' - '),
  )(args);
};

const TripListTable: FC<IProps> = ({
  headerList,
  widthList,
  list,
  emptyMessage,
}) => {
  const router = useRouter();
  const { commonStore } = useCommon();
  const {
    language: { code },
  } = commonStore;

  return (
    <S.container>
      <S.header>
        <TableHeaderWithList
          headerList={headerList}
          widthList={widthList}
        />
      </S.header>
      <S.body>
        <TableBodyWithList headerList={headerList}>
          {list?.length > 0 ? (
            list.map((item, i) => {
              const isOneWay = item.tripType === 'OneWay';
              const onClick = () =>
                router.push(`/checkin/trip-detail-information?recordLocator=${item.recordLocator}`);

              return (
                <S.wrapper
                  key={`item${i.toString()}`}
                  onClick={onClick}
                >
                  <S.bodyItem width={widthList[0]}>
                    {item.recordLocator}
                  </S.bodyItem>
                  <S.bodyItem width={widthList[1]}>
                    {isOneWay ? '편도' : '왕복'}
                  </S.bodyItem>
                  <S.bodyItem width={widthList[2]}>
                    {item.originText}&nbsp;
                    {isOneWay ? '→' : '-'}&nbsp;
                    {item.destinationText}
                  </S.bodyItem>
                  <S.bodyItem width={widthList[3]}>
                    {onMakeRangeDate(
                      code,
                      item.beginDate,
                      item.endDate,
                    )}
                  </S.bodyItem>
                  <S.bodyItem
                    width={widthList[4]}
                    color={BLUE1}
                  >
                    {item.statusText}
                  </S.bodyItem>
                </S.wrapper>
              );
            })
          ) : (
            <S.emptyMessage>
              <p>{emptyMessage}</p>
            </S.emptyMessage>
          )}
        </TableBodyWithList>
      </S.body>
    </S.container>
  );
};

const S = {
  container: styled.div`
    @media only screen and (max-width: 767px) {
      border-top:solid 2px #222222;
    }
  `,
  header: styled.div`
    >div{
      width:100%;
    }
    @media only screen and (max-width: 767px) {
      display:none;
    }
  `,
  body: styled.div``,
  wrapper: styled.div`
    border-bottom: solid 1px ${LIGHT_GRAY5};
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    cursor: pointer;
    @media only screen and (max-width: 1059px) {
      justify-content:space-between;
    }
    @media only screen and (max-width: 767px) { 
      display:block;
      height:auto;
      overflow:hidden;
      padding:15px 0;
    }
  `,

  bodyItem: styled.p<{ width: number; color?: string }>`
    flex-basis: ${prop('width')}px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 600;
    color: ${prop('color')};

    @media only screen and (max-width: 767px) { 
      font-size:14px;
      width:50%;
      float:left;
      margin-right:0px;
      &:nth-child(even){
        text-align:right;
      }
    }
  `,

  emptyMessage: styled.div`
    padding: 100px 0;
    width: 100%;
    text-align: center;
    color: ${LIGHT_GRAY7};
    border-bottom: solid 1px ${LIGHT_GRAY5};
    p {
      font-size: 18px;
      line-height: 20px;
      letter-spacing: -0.28px;
    }
  `,
};

export default TripListTable;
