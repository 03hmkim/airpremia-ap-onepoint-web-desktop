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
  `,

  left: styled.div`
    width: 350px;
    height: 500px;
    overflow: hidden;

    > img{
      width: 100%;
      height: auto;
    }
  `,

  right: styled.div`
    margin-left: 80px;
  `,

  header: styled.div`
    height: 124px;

    h5 {
      color: ${DARK_GRAY1};
      font-size: 16px;
      line-height: 25px;
      letter-spacing: -0.28px;
      
      &.gray{
        color: ${LIGHT_GRAY7};
      }
    }
  `,

  list: styled.div`
    strong {
      color: ${DARK_GRAY1};
      font-size: 20px;
      font-weight: 700;
      letter-spacing: -0.2px;
    }

    .listWrap {
      margin-top: 20px;

      dl {
        padding: 20px 0;
        display: flex;
        font-size: 16px;
        border-bottom: 1px solid ${LIGHT_GRAY5};
  
        dt{
          width: 140px;
          margin-right: 10px;
          font-weight: 700;
        }  
      }
    }
  `,
};

export default PromotionContent;