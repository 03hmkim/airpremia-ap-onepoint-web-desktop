import { FC } from 'react';
import styled from 'styled-components';

import {
    LIGHT_GRAY5,
    LIGHT_GRAY8,
    ORANGE1,
  } from '@airpremia/cdk/styles/colors';
  import { useRouter } from 'next/router';

interface IProps {
    title: string,
    description: string,
    createdDate: string,
    noticeId: string,
}
const MainNoticeTemplate: FC<IProps> = ({
    title,
    description,
    createdDate,
    noticeId
}: IProps) => {
    const router = useRouter();
    const onClick = () => {
        router.push(
            `/customer/notice/notice-content?noticeId=${noticeId}`
        );
    }
    return(
        <S.listWrapper>
            <ul>
                <li onClick={onClick}>
                  <a>
                    <div className="title">
                        <h4>{title}</h4>
                        <p className="desc">{description}</p>
                    </div>
                    <div className="date">{createdDate}</div>
                  </a>
                </li>
            </ul>
        </S.listWrapper>
    );
    
};

const S = {
    container: styled.div`
  
    `,
    listWrapper: styled.div`
  
    > ul > li {
      padding: 30px 0;
      border-bottom: 1px solid ${LIGHT_GRAY5};

      &::after{
        content: "";
        display: block;
        clear: both;
      }

      a {        
        cursor: pointer;
        
        &:hover {
          h4 {          
            color: ${ORANGE1};
          }          
        }
      }
    }
    .title {
      width: calc(100% - 120px);
      float: left;

      h4 {
        font-size: 18px;
        font-weight: bold;
        line-height: 1.3em;
      }

      .desc {
        margin-top: 10px;
        color: ${LIGHT_GRAY8};
        font-size: 16px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 1.3em;
      }
    }

    .date {
      margin-top: 20px;
      float: right;
      color: ${LIGHT_GRAY8};
      font-size: 16px;
    }

    @media only screen and (max-width: 767px) {
      > ul > li {
        padding: 15px 0;
      }

      .title {
        width: 100%;

        h4 {
          font-size: 16px;
        }

        .desc {
          font-size: 13px;
          font-weight: 300;
        }
      }

      .date {
        display: none;
      }
    }
  `,
  };
export default MainNoticeTemplate;