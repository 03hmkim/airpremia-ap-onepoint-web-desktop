import { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface IProps {
  hasMoreButton: boolean;
  title: string;
  pointsHeader: ReactElement;
  pointsBody: ReactElement;
  more: ReactElement;
  caution: ReactElement;
}

const pointsTemplate: FC<IProps> = ({
  hasMoreButton,
  title,
  pointsHeader,
  pointsBody,
  more,
  caution,
}) => {
  return (
    <S.container>
      <S.title>
        <h1 className="font-bold">{title}</h1>
      </S.title>
      <S.pointsHeader>{pointsHeader}</S.pointsHeader>
      <S.pointsBody>{pointsBody}</S.pointsBody>
      {hasMoreButton && <S.more>{more}</S.more>}
      <S.caution>{caution}</S.caution>
    </S.container>
  );
};

const S = {
  container: styled.div``,

  title: styled.div`
    h1 {
      font-size: 36px;
      line-height: 50px;
      letter-spacing: -0.72px;
    }
  `,

  pointsHeader: styled.div`
    margin-top: 100px;
  `,

  pointsBody: styled.div`
    margin-top: 100px;
  `,

  more: styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
  `,
  caution: styled.div`
    width: 966px;
    margin-top: 80px;
  `,
};

export default pointsTemplate;
