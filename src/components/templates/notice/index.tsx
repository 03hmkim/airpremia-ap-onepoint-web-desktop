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
const NoticeListTemplate: FC<IProps> = ({
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
        <S.li onClick={onClick}>
            {/* <Link href="./notice-content"> */}
                <a>
                    <S.left>
                        <S.itemTitle>{title}</S.itemTitle>
                        <S.description>{description}</S.description>
                    </S.left>
                    <S.right>
                        <S.description className="date">{createdDate}</S.description>
                    </S.right>
                </a>
            {/* </Link> */}
        </S.li>
    );
};

const S = {
    li: styled.div`
        padding: 30px 0;
        border-bottom: 1px solid ${LIGHT_GRAY5};

        a{
            display: flex;
            justify-content: space-between;
            cursor: pointer;
        }

        &:hover{
            h5 {
                color: ${ORANGE1};
            }
        }
    `,
    left: styled.div`
        width: 85%;
    `,
    right: styled.div`
        width: 15%;
        text-align: right;
    `,
    itemTitle: styled.h5`
        font-size: 24px;
        font-weight: 700;
        line-height: 1.8em;
        @media only screen and (max-width: 767px){
            font-size: 22px;
            letter-spacing: -0.4px;
        }
    `,
    description: styled.p`
        margin-top: 10px;
        font-size: 18px;
        color: ${LIGHT_GRAY8};
        line-height: 1.8em;
        @media only screen and (max-width: 767px){
            font-size: 14px;
            letter-spacing: -0.28px;
        }

        &.date{
        margin-top: 0;
        }
    `,
}

export default NoticeListTemplate;