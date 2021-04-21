import React, { FC, useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Darksite from '.';

import {
  DarksiteHeader,
  DarksiteMessageBoard,
  Table,
  TableHead,
  TableBody,
  TableBodyItem,
} from 'src/components';
import { WHITE1 } from '@airpremia/cdk/styles/colors';
import moment from 'moment';
import { action } from '@storybook/addon-actions';
import { Select } from 'src/components';
import { ESelectPosition } from 'src/components/molecules/select';

export default {
  title: 'desktop / Templates / DarksiteMain',
  component: Darksite,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'Darksite 메인 화면',
  },
};

const firstItem = {
  labelContent: {
    children: '탑승자 문의센터',
    color: WHITE1,
  },
  textContent: {
    children: '02-1445-8879',
  },
};

const secondItem = {
  labelContent: {
    children: '홍보센터',
    color: WHITE1,
  },
  textContent: {
    children: '02-1445-8879',
  },
};

const onClickItem = (e: any) =>
  action('click event', e.target.dataset.postId);

export const 다크사이트템플릿: FC = () => {
  const [isShow, setShow] = useState(false);
  const onClick = () => setShow(!isShow);
  return (
    <Darksite
      header={<DarksiteHeader />}
      dropdown={
        <Select
          position={ESelectPosition.DOWN}
          color={WHITE1}
          label="다른 사고 보기"
          isShowMenu={isShow}
          onClick={onClick}
        >
          <div className="dropdown-children">
            <p>AP123</p>
            <p>AP124</p>
          </div>
        </Select>
      }
      messageBoard={
        <DarksiteMessageBoard
          description="사과문 예시"
          firstItem={firstItem}
          secondItem={secondItem}
        />
      }
      newsTable={
        <Table
          tableHead={<TableHead>보도자료</TableHead>}
          tableBody={
            <TableBody onClick={onClickItem}>
              <TableBodyItem
                title="고정된 사과문 예시입니다. 길어질 경우 ...으로 표기됩니다."
                subTitle={moment('2020-05-23').format(
                  'YYYY. M. D',
                )}
                postId="new1"
                postType="NEWS"
              />
              <TableBodyItem
                title="고정된 사과문 예시입니다2."
                subTitle={moment('2020-05-21').format(
                  'YYYY. M. D',
                )}
                postId="new2"
                postType="NOTICE"
              />
            </TableBody>
          }
        />
      }
      noticeTable={
        <Table
          tableHead={<TableHead>공지사항</TableHead>}
          tableBody={
            <TableBody onClick={onClickItem}>
              <TableBodyItem
                title="고정된 사과문 예시입니다."
                subTitle={moment('2020-05-23').format(
                  'YYYY. M. D',
                )}
                postId="notice1"
                postType="NEWS"
              />
              <TableBodyItem
                title="고정된 사과문 예시입니다2."
                subTitle={moment('2020-05-21').format(
                  'YYYY. M. D',
                )}
                postId="notice2"
                postType="NOTICE"
              />
            </TableBody>
          }
        />
      }
    />
  );
};
