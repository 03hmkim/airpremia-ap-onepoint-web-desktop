import React, { FC, ChangeEvent }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/core/Pagination';
import styled from 'styled-components';
import {
  LIGHT_GRAY7,
  DARK_GRAY1,
} from '@airpremia/cdk/styles/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(0),
    },
  },
}));

interface PaginationStyle {
  count?: number;
  siblingCount?: number;
  boundaryCount?: number;
  page?: number;
  onChange?: (e: ChangeEvent<unknown>, page: number) => void;
}


const BasicPagination: FC<PaginationStyle> = ({
  count,
  siblingCount,
  boundaryCount,
  page,
  onChange,
}) => {
  onChange
  const classes = useStyles();
  return (
    <P.new>
      <div className={classes.root}>
        <Pagination
          count={count}
          siblingCount={siblingCount}
          boundaryCount={boundaryCount}
          page={page}
          onChange={onChange}
        />
      </div>
    </P.new>
  );
}

export default BasicPagination;


const P = {
  new: styled.div`
    > div {
      display: flex;
      justify-content: center;
    }
    nav > ul > li{
      margin-right: 10px;
      &:last-of-type(1){
        margin-right: 0;
      }
      button {
        width: 22px;
        min-width: auto;
        height: 32px;
        position: relative;
        color: ${LIGHT_GRAY7};
        font-weight: 400;
        font-family: 'Premia', 'NotoSans', serif;
        font-size: 16px;
        text-align: center;
        line-height: 30px;
        border: 2px solid transparent;
        border-radius: 12px;
        box-sizing: border-box;
        cursor: pointer;
        &.MuiPaginationItem-page:hover{
          color: ${DARK_GRAY1};
          font-weight: bold;
          background-color: transparent;
        }
        &.MuiPaginationItem-page:hover::after{
          content: '';
          width: 100%;
          height: 1px;
          position: absolute;
          bottom: 5px;
          left: 0;
          background-color: ${DARK_GRAY1};
        }
        &.MuiPaginationItem-page.Mui-selected{
          color: ${DARK_GRAY1};
          font-weight: bold;
          background-color: transparent;
          border-color: ${DARK_GRAY1};
        }
        &.MuiPaginationItem-page.Mui-selected:hover{
          background-color: transparent;
        }
        &.MuiPaginationItem-page.Mui-selected:hover::after{
          opacity: 0;
        }
        &.MuiPaginationItem-page{
          transition: none;
        }
      }      
      &:first-of-type > button.MuiPaginationItem-page:hover::after,
      &:last-of-type > button.MuiPaginationItem-page:hover::after{
        opacity: 0;
      }
      .MuiPaginationItem-ellipsis{
        min-width: auto;
        margin: 0;
        padding: 0;
        color: ${LIGHT_GRAY7};
        font-family: 'Premia', 'NotoSans', serif;
        font-size: 16px;
        line-height: 30px;
      }
    }
  `,
};