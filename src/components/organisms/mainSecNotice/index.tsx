import styled from 'styled-components';
import { useEffect } from 'react';
import { reverse, flow, take } from 'lodash/fp';
import { 
  DARK_GRAY1,
  LIGHT_GRAY8,
} from '@airpremia/cdk/styles/colors';
import { useNotice } from '@airpremia/core/hooks';
import moment from 'moment';
import { MainNoticeTemplate } from 'src/components'

function MainSecNotice () {
 const {
    noticeStore,
    onGetNotices
  } = useNotice();
  const { notices } = noticeStore;

  const mainNoticeList = flow(
    take(5)
  )(reverse(notices))

  useEffect (() => {
    onGetNotices()
  }, [])
  return (
    <S.container>
      <S.listWrapper>
            {mainNoticeList.map ((notice: any, i: number) => {
          return (
            <S.wrapper key={i.toString()}>
              <MainNoticeTemplate
                title={notice.title}
                description={notice.description}
                createdDate={moment(notice.createdAt).format('YYYY-MM-DD')}
                noticeId={notice.id}
              />
            </S.wrapper>
          )
        })}
      </S.listWrapper>
    </S.container>
  );
}


const S = {
  container: styled.div`

  `,
  wrapper: styled.div``,
  listWrapper: styled.div`
    border-top: 1px solid ${DARK_GRAY1};
    border-bottom: 1px solid ${DARK_GRAY1};

    > div:last-child > ul > li {
      border-bottom: 0;
    }

    .date {
      margin-top: 20px;
      float: right;
      color: ${LIGHT_GRAY8};
      font-size: 16px;
    }

    @media only screen and (max-width: 767px) {

      .title {
        width: 100%;

        h4 {
          font-size: 16px;
        }

        .desc {
          margin-top: 10px;
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

export default MainSecNotice;