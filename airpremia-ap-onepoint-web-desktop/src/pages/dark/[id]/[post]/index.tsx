import { Fragment, useEffect } from 'react';
import { flow, get } from 'lodash/fp';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import {
  DarksitePost as DarksitePostTemplate,
  TableBody,
  PostHeader,
  PostShortcut,
  DarksiteHeader,
} from 'src/components';
import { TaskButton } from 'src/components';
import { useAccident } from '@airpremia/core/hooks';
import { useUrl } from 'src/hooks';
import {
  LIGHT_GRAY6,
  WHITE1,
} from '@airpremia/cdk/styles/colors';

const DarksitePost = () => {
  const router = useRouter();
  const { url } = useUrl();
  const {
    accidentStore,
    onLoadAccidentPostDetail,
    onChangeRoutePostPage,
  } = useAccident();
  const { postDetailData } = accidentStore;
  const buttonProps = {
    border: `solid 1px ${LIGHT_GRAY6}`,
    height: '40px',
    fontSize: '14px',
    backgroundColor: WHITE1,
    onClick: () => {
      const originUrl = url
        .split('/')
        .slice(0, -1)
        .join('/');
      router.push(originUrl);
    },
  };

  const onLoadPostData = () => {
    const id = flow(get(['query', 'postId']))(router);

    onLoadAccidentPostDetail(id);
  };

  useEffect(() => {
    onLoadPostData();
  }, []);

  return (
    <S.container>
      <DarksitePostTemplate
        header={<DarksiteHeader />}
        title={
          <PostHeader
            title={postDetailData?.title}
            createdAt={postDetailData?.createdAt}
            postType={postDetailData?.postType}
          />
        }
        content={postDetailData?.content}
        shortcut={
          <TableBody onClick={onChangeRoutePostPage}>
            <Fragment>
              {!!postDetailData?.prevPost && (
                <PostShortcut
                  label="이전글"
                  title={postDetailData?.prevPost.title}
                  postId={postDetailData?.prevPost.id}
                  postType={
                    postDetailData?.prevPost.postType
                  }
                />
              )}
              {!!postDetailData?.nextPost && (
                <PostShortcut
                  label="다음글"
                  title={postDetailData?.nextPost.title}
                  postId={postDetailData?.nextPost.id}
                  postType={
                    postDetailData?.nextPost.postType
                  }
                />
              )}
            </Fragment>
          </TableBody>
        }
        backbutton={
          <TaskButton {...buttonProps}>목록</TaskButton>
        }
      />
    </S.container>
  );
};

const S = {
  container: styled.div``,
};

export default DarksitePost;
