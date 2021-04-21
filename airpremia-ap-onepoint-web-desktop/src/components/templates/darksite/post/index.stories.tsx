import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  PostHeader,
  PostShortcut,
  TableBody,
} from 'src/components';
import DarksitePost from '.';
import { action } from '@storybook/addon-actions';
import DarksiteHeader from 'src/components/organisms/darksiteHeader';

export default {
  title: 'desktop / Templates / DarksitePost',
  component: DarksitePost,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Darksite post',
  },
};

const data = {
  title: '개인정보 처리방침 개정안내',
  createdAt: '2020-02-21 06:01:10 +09:00',
  postType: 'NOTICE',
  content:
    "안녕하세요. 에어프레미아(이하 '회사')입니다.\n" +
    '\n' +
    '서비스를 이용해 주시는 이용자 여러분께 감사드리며, 새로운 개인정보 처리방침 적용에 관한 안내 말씀 드립니다.\n' +
    '회사는 이용자 여러분의 개인정보를 무엇보다 소중하게 처리하고 있으며, 어떤 사안보다도 우선하여 안전하게 관리하고 있습니다.\n' +
    '새롭게 변경될 개인정보 처리방침 내용을 확인하시고 서비스 이용에 참고하시기 바랍니다.\n' +
    '\n' +
    '1. 변경 사항\n' +
    '프레미아 계정 이용 시 연락처 정보를 추가 수집합니다.\n' +
    '\n' +
    '2. 변경 시기\n' +
    '변경된 개인정보 처리방침은 2020년 02월 26일(수)자로 효력이 발생됩니다.\n' +
    '\n' +
    '3. 문의 및 동의 철회\n' +
    "새로운 개인정보 처리방침 내용에 동의하지 않으시는 경우, 각 서비스 내에서 '탈퇴'를 신청하여 회원 탈퇴를 하실 수 있습니다.\n" +
    '개인정보 처리방침 내용에 대한 문의사항이 있으신 경우, \n' +
    '개인정보보호 담당부서(에어프레미아:고객센터)로 문의주시면 친절하게 안내해 드리겠습니다.\n' +
    '\n' +
    '회사는 앞으로도 이용자의 개인정보를 보다 안전하게 보호할 것을 약속드리며, 신뢰받는 서비스로 보답하겠습니다.\n' +
    '\n' +
    '감사합니다.',
};

const shortcut = {
  labelPrev: '이전글',
  labelNext: '다음글',
  onClick: action('click'),
  prevPost: {
    id: '12',
    postType: 'NOTICE',
    createdAt: '2020-02-24 15:31:41 +09:00',
    updatedAt: '2020-02-24 15:31:41 +09:00',
    important: false,
    title: '테스트 #7',
  },
  nextPost: {
    id: '2',
    postType: 'NOTICE',
    createdAt: '2020-02-21 06:01:19 +09:00',
    updatedAt: '2020-02-21 06:01:19 +09:00',
    important: true,
    title: '국민 여러분께 드리는 글',
  },
};

export const 다크사이트포스트: FC = () => {
  return (
    <DarksitePost
      header={<DarksiteHeader />}
      title={
        <PostHeader
          title={data.title}
          createdAt={data.createdAt}
          postType={data.postType}
        />
      }
      content={data.content}
      shortcut={
        <TableBody onClick={shortcut.onClick}>
          {shortcut.prevPost && (
            <PostShortcut
              label={shortcut.labelPrev}
              title={shortcut.prevPost.title}
              postId={shortcut.prevPost.id}
              postType={shortcut.prevPost.postType}
            />
          )}
          {shortcut.nextPost && (
            <PostShortcut
              label={shortcut.labelNext}
              title={shortcut.prevPost.title}
              postId={shortcut.prevPost.id}
              postType={shortcut.prevPost.postType}
            />
          )}
        </TableBody>
      }
    />
  );
};
