import { ReactElement, Fragment } from 'react';
import styled from 'styled-components';
import { FC } from 'react';

import {
  DARK_GRAY1,
  LIGHT_GRAY7,
  LIGHT_GRAY5,
} from '@airpremia/cdk/styles/colors';

interface IProps {
  postId: string | number;
  postType: string;
  title?: ReactElement | string;
  subTitle?: ReactElement | string;
  children?: ReactElement | string;
}

const TableBodyItem: FC<IProps> = ({
  title,
  postType,
  subTitle,
  children,
  postId,
}: IProps) => {
  return (
    <S.container
      data-post-id={postId}
      data-post-type={postType}
    >
      {children ? (
        children
      ) : (
        <Fragment>
          <h3>{title}</h3>
          <p>{subTitle}</p>
        </Fragment>
      )}
    </S.container>
  );
};

const S = {
  container: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    border-bottom: solid 2px ${LIGHT_GRAY5};
    cursor: pointer;

    h3,
    p {
      pointer-events: none;
    }

    h3 {
      font-size: 18px;
      line-height: 28px;
      letter-spacing: -0.36px;
      font-weight: 600;
      color: ${DARK_GRAY1};
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      width: 800px;
      overflow: hidden;
    }

    p {
      font-size: 14px;
      line-height: 28px;
      letter-spacing: -0.28px;
      color: ${LIGHT_GRAY7};
    }
  `,
};

export default TableBodyItem;
