import { FC, useState, useEffect } from 'react';
import { flow, get } from 'lodash/fp';
import Link from 'next/link';
import { map } from 'lodash';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import moment from 'moment';
import {
  DarksiteHeader,
  DarksiteMessageBoard,
  Table,
  TableHead,
  TableBody,
  TableBodyItem,
  DarksiteMain,
  Select,
} from 'src/components';
import { WHITE1 } from '@airpremia/cdk/styles/colors';
import { useAccident } from '@airpremia/core/hooks';
import { useUrl } from 'src/hooks';
import { ESelectPosition } from 'src/components/molecules/select';
import { IAccidentData } from '@airpremia/core/api/info/types';

const Darksite: FC = () => {
  const router = useRouter();
  const { url } = useUrl();
  const {
    accidentStore,
    onAccidentLoad,
    onLoadAccidentDetail,
    onAccidentContentLoad,
  } = useAccident();
  const {
    currentAccidentData,
    accidentList,
    accidentNewsData,
    accidentNoticeData,
  } = accidentStore;
  const [multiList, setMultiList] = useState<
    IAccidentData[]
  >([]);
  const [isShow, setShow] = useState(false);

  const [
    hasMultipleAccident,
    setMultipleAccident,
  ] = useState(false);
  const onClick = () => setShow(!isShow);

  const firstItem = {
    labelContent: {
      children: '탑승자 문의센터',
      color: WHITE1,
    },
    textContent: {
      children: currentAccidentData?.contact || '',
    },
  };

  const secondItem = {
    labelContent: {
      children: '홍보센터',
      color: WHITE1,
    },
    textContent: {
      children: currentAccidentData?.contact2 || '',
    },
  };
  const onClickItem = (e: any) => {
    const {
      postId: id,
      postType: _type,
    } = e.target.dataset;
    const type = _type.toLowerCase();

    router.push(`${url}/${type}?postId=${id}`);
  };

  useEffect(() => {
    const accidentId = flow(get(['query', 'id']))(router);

    onAccidentLoad();
    onLoadAccidentDetail(accidentId);
    onAccidentContentLoad(accidentId);
  }, []);

  useEffect(() => {
    if (
      accidentList &&
      (accidentList.length > 0 || accidentList.length > 0)
    ) {
      setMultiList(
        accidentList.length > 0
          ? accidentList
          : accidentStore.accidentList,
      );
      setMultipleAccident(true);
    }
  }, [accidentList]);

  return (
    <S.container>
      <DarksiteMain
        hasMultipleAccident={hasMultipleAccident}
        header={<DarksiteHeader />}
        messageBoard={
          <DarksiteMessageBoard
            description={
              currentAccidentData?.description || ''
            }
            firstItem={firstItem}
            secondItem={secondItem}
          />
        }
        dropdown={
          <Select
            position={ESelectPosition.DOWN}
            color={WHITE1}
            label="다른 사고 보기"
            isShowMenu={isShow}
            onClick={onClick}
          >
            <div className="dropdown-children">
              {map(multiList, (item, i) => (
                <Link
                  key={`dropdownChildren${i.toString()}`}
                  href="/dark/[item.id]"
                  as={`/dark/${item.id}`}
                >
                  <a>{item.flightNumber}</a>
                </Link>
              ))}
            </div>
          </Select>
        }
        noticeTable={
          <Table
            tableHead={<TableHead>공지사항</TableHead>}
            tableBody={
              <TableBody onClick={onClickItem}>
                {map(
                  accidentNoticeData?.posts,
                  (item, i) => (
                    <TableBodyItem
                      key={`accidentNoticeBodyItem${i.toString()}`}
                      title={item.title}
                      subTitle={moment(
                        new Date(item.createdAt).getTime(),
                      ).format('YYYY. M. D')}
                      postId={item.id}
                      postType={item.postType}
                    />
                  ),
                )}
              </TableBody>
            }
          />
        }
        newsTable={
          <Table
            tableHead={<TableHead>보도자료</TableHead>}
            tableBody={
              <TableBody onClick={onClickItem}>
                {map(accidentNewsData?.posts, (item, i) => (
                  <TableBodyItem
                    key={`accidentNewsBodyItem${i.toString()}`}
                    title={item.title}
                    subTitle={moment(
                      new Date(item.createdAt).getTime(),
                    ).format('YYYY. M. D')}
                    postId={item.id}
                    postType={item.postType}
                  />
                ))}
              </TableBody>
            }
          />
        }
      />
    </S.container>
  );
};

const S = {
  container: styled.div``,
};

export default Darksite;
