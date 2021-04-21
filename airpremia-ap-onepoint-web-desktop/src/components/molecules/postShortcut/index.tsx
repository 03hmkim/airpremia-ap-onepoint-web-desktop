import styled from 'styled-components';
import { FC } from 'react';
import {
  LIGHT_GRAY7,
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';

interface IProps {
  label: string;
  title: string;
  postId: string;
  postType: string;
}

const postShortcut: FC<IProps> = ({
  label,
  title,
  postId,
  postType,
}: IProps) => {
  return (
    <S.container
      data-post-id={postId}
      data-post-type={postType}
    >
      <sub>{label}</sub>
      <p>{title}</p>
    </S.container>
  );
};

const S = {
  container: styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    cursor: pointer;

    sub,
    p {
      font-size: 15px;
      line-height: 28px;
      letter-spacing: -0.3px;
      bottom: 0;
      pointer-events: none;
    }

    sub {
      color: ${LIGHT_GRAY7};
      flex-basis: 100px;
    }
    p {
      color: ${DARK_GRAY1};
    }
  `,
};

export default postShortcut;
