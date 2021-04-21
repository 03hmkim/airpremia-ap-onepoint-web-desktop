import { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface IProps {
  tableHead?: ReactElement;
  tableBody?: ReactElement;
}

const Table: FC<IProps> = ({
  tableHead,
  tableBody,
}: IProps) => {
  return (
    <S.container>
      {tableHead}
      {tableBody}
    </S.container>
  );
};

const S = {
  container: styled.div`
    /* width: 1400px; */
    padding: 0 100px;
    margin: 0 auto;
    box-sizing: border-box;
  `,
};

export default Table;
