import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import {
  DARK_GRAY1,
  WHITE1,
  LIGHT_GRAY1,
} from '@airpremia/cdk/styles/colors';

interface IProps {
  hasMultipleAccident?: boolean;
  header?: ReactElement;
  messageBoard?: ReactElement;
  dropdown?: ReactElement;
  newsTable?: ReactElement;
  noticeTable?: ReactElement;
}

const DarksiteMainTempleate: FC<IProps> = ({
  hasMultipleAccident,
  header,
  messageBoard,
  dropdown,
  noticeTable,
  newsTable,
}: IProps) => {
  return (
    <S.container>
      <S.header>{header}</S.header>
      <S.boardWrapper>
        <S.inner>
          <S.messageBoard>{messageBoard}</S.messageBoard>
          {hasMultipleAccident && (
            <S.dropdown>{dropdown}</S.dropdown>
          )}
        </S.inner>
      </S.boardWrapper>

      <S.tableWrapper>
        <S.table>{noticeTable}</S.table>
        <S.table>{newsTable}</S.table>
      </S.tableWrapper>
    </S.container>
  );
};

const S = {
  container: styled.div`
    /* min-width: 1440px; */
    margin-bottom: 160px;
  `,
  header: styled.div``,

  boardWrapper: styled.div`
    display: flex;
    background-color: ${DARK_GRAY1};
  `,

  inner: styled.div`
    background-color: ${DARK_GRAY1};
    padding: 100px;
    /* width: 1400px; */
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
  `,

  messageBoard: styled.div`
    width: 100%;
    position: relative;
  `,

  dropdown: styled.div`
    width: 130px;
    .label {
      width: 240px;
      height: 56px;
      border-radius: 8px;
      padding: 0 20px;
      box-sizing: border-box;
      border: solid 1px ${WHITE1};
    }

    .dropdown-children {
      width: 100%;
      border-radius: 12px;
      box-shadow: 7px 7px 7px 0 rgba(0, 0, 0, 0.03);
      padding: 15px 0;
      cursor: pointer;

      a {
        padding: 15px 24px;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.28px;
        display: block;

        &:hover {
          background-color: ${LIGHT_GRAY1};
        }
      }
    }
  `,

  tableWrapper: styled.div`
    margin-top: 80px;
  `,

  table: styled.div`
    margin-bottom: 100px;
  `,
};

export default DarksiteMainTempleate;
