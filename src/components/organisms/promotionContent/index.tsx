import React from 'react';
import styled from 'styled-components';
import {
  LIGHT_GRAY5,
  LIGHT_GRAY7,
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';

interface IListData {
  th: string;
  td: string;
}

export interface IList {
  title: string | React.ReactElement;
  data: IListData[];
}

interface IProps {
  description?: string;
  desColor?: string;
  image?: any;
  list: IList;
}

function PromotionContent({
  description,
  desColor,
  image,
  list,
}: IProps) {
  return (
    <S.container>
      <S.body>
        <S.left>
          <img src={`/images/ticket/promotion/detail/${image}`} />
        </S.left>
        <S.right>
          <S.header>
            <h5 className={desColor}>{description}</h5>
          </S.header>
          <S.list>
            <strong>{list.title}</strong>
            <div className="listWrap">
              {list.data.map(
                (
                  data: IListData,
                  dataIndex: number,
                ) => {
                  return (
                    <dl
                      key={`${dataIndex}`}
                      className="dataWrap"
                    >
                      <dt>{data.th}</dt>
                      <dd>{data.td}</dd>
                    </dl>
                  );
                },
              )}
            </div>
          </S.list>
        </S.right>
      </S.body>
    </S.container>
  );
};

const S = {
  container: styled.div``,

  body: styled.div`
    padding: 80px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media only screen and (max-width: 767px) { 
      display: block;
      padding-bottom: 0;
    }
  `,

  left: styled.div`
    width: 33%;
    overflow: hidden;

    > img{
      width: 100%;
      height: auto;
    }
    @media only screen and (max-width: 767px) { 
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
    }
  `,

  right: styled.div`
    margin-left: 60px;
    width: 66%;
    @media only screen and (max-width: 767px) {
      margin-left: 0;
      margin-top: 80px;
      width: 100%;
    }
  `,

  header: styled.div`
    height: 124px;

    h5 {
      color: ${DARK_GRAY1};
      font-size: 18px;
      line-height: 26px;
      letter-spacing: 0;
      
      &.gray{
        color: ${LIGHT_GRAY7};
      }
      @media only screen and (max-width: 767px) { 
        font-size: 14px;
      }
    }
    @media only screen and (max-width: 767px) { 
      height: auto;
    }
  `,

  list: styled.div`
    strong {
      color: ${DARK_GRAY1};
      font-size: 21px;
      font-weight: 700;
      letter-spacing: -0.2px;
    }
    @media only screen and (max-width: 767px) { 
      font-size: 16px;
    }  

    .listWrap {
      margin-top: 20px;

      dl {
        padding: 20px 0;
        display: table;
        width: 100%;
        font-size: 18px;
        border-bottom: 1px solid ${LIGHT_GRAY5};
  
        dt{
          padding-right: 20px;
          width: 140px;
          display: table-cell;
          margin-right: 10px;
          font-weight: 700;
          @media only screen and (max-width: 767px) { 
            width: 100px;
          } 
        }
        dd{
          display: table-cell;
        }
        @media only screen and (max-width: 767px) { 
          font-size: 14px;
          &:last-child{
            border-bottom: 0;
          }
        }  
      }
    }
    @media only screen and (max-width: 767px){
      margin-top: 30px;
    }
  `,
};

export default PromotionContent;