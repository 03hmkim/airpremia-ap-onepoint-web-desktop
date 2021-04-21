import { FC } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import {
  DARK_GRAY2,
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';

interface IProps {
  title?: string;
  createdAt?: string;
  postType?: string;
}

const getType = (postType: string) => {
  switch (postType) {
    case 'NOTICE':
      return '공지사항';
    case 'NEWS':
      return '보도자료';

    default:
      return '공지사항';
  }
};

const PostHeader: FC<IProps> = ({
  title = '',
  postType = '',
  createdAt = '',
}: IProps) => {
  const type = getType(postType);
  return (
    <S.container>
      <h1 className="font-bold">{title}</h1>
      <S.description>
        {type} |{' '}
        {moment(new Date(createdAt).getTime()).format(
          'YYYY. M. D',
        )}
      </S.description>
    </S.container>
  );
};

const S = {
  container: styled.div`
    h1 {
      font-size: 36px;
      line-height: 40px;
      letter-spacing: -0.27px;
      color: ${DARK_GRAY2};
    }
  `,
  description: styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;

    font-size: 16px;
    line-height: 40px;
    letter-spacing: -0.32px;
    color: ${LIGHT_GRAY7};
  `,
};

export default PostHeader;
