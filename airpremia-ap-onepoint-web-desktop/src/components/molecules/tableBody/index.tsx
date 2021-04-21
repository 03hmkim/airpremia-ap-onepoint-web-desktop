import { ReactElement } from 'react';
import styled from 'styled-components';
import { FC } from 'react';

interface IProps {
  onClick: (e: any) => void;
  children?: ReactElement | ReactElement[];
}

const TableBody: FC<IProps> = ({
  onClick,
  children,
}: IProps) => (
  <S.container onClick={onClick}>{children}</S.container>
);

const S = {
  container: styled.div`
    display: flex;
    align-items: center;
    width: 1200px;
    max-height: 800px;
    box-sizing: border-box;
    flex-wrap: wrap;

    & > div {
      flex-basis: 100%;
    }
  `,
};

export default TableBody;
