import React from 'react';
import styled from 'styled-components';
import cx from 'classnames';

export interface IProps {
  className?: string;
  children?: React.ReactElement | string;
  handleClick?: (e: any) => void;
}

function Dim({ className, children, handleClick }: IProps) {
  return (
    <S.container
      className={cx('Dim', {
        [className as string]: className,
      })}
      onClick={handleClick}
    >
      {children}
    </S.container>
  );
}

Dim.defaultProps = {
  className: '',
  children: '',
  handleClick: () => {},
};

const S = {
  container: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    background-color: rgba(34, 34, 34, 0.8);
  `,
};

export default Dim;
