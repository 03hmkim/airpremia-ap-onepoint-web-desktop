import {
  useRef,
  useEffect,
  ReactElement,
  useState,
} from 'react';
import styled from 'styled-components';

import {
  DARK_GRAY1,
  WHITE1,
} from '@airpremia/cdk/styles/colors';
import { Triangle } from 'src/components';
import { EPosition } from 'src/components/atoms/arrow';
import { IProps as ITriangleProps } from 'src/components/atoms/triangle';

export interface IProps {
  value?: string;
  onClickItem: (e: any) => void;
  triangleProps?: ITriangleProps;
  children: ReactElement | ReactElement[] | string;
}

function Currency({
  value,
  onClickItem,
  triangleProps,
  children,
}: IProps) {
  const [isDropdownShow, setDropdownStatus] = useState<
    boolean
  >(false);
  const containerRef = useRef<HTMLInputElement>(null);

  const onChangeDropdownShow = () =>
    setDropdownStatus(!isDropdownShow);

  const onClickOutside = (e: any) => {
    if (
      containerRef.current &&
      containerRef.current.parentNode &&
      containerRef.current.parentNode.contains(
        e.target.parentNode,
      )
    ) {
      return;
    } else if (
      containerRef.current &&
      !containerRef.current.contains(e.target) &&
      isDropdownShow
    ) {
      onChangeDropdownShow();
    }
  };

  const onClickItemInterceptor = (e: any) => {
    onChangeDropdownShow();
    onClickItem(e);
  };

  const triangle = {
    position: isDropdownShow
      ? EPosition.UP
      : EPosition.DOWN,
    ...triangleProps,
  };

  useEffect(() => {
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener(
        'mousedown',
        onClickOutside,
      );
    };
  });

  return (
    <S.container
      ref={containerRef}
      className="dropdown-currency"
    >
      <S.selectButtonWrapper onClick={onChangeDropdownShow}>
        <p className="value">{value}</p>
        <Triangle {...triangle} />
      </S.selectButtonWrapper>

      {isDropdownShow && (
        <S.dropdownItems
          className="dropdown-currency-items"
          onClick={onClickItemInterceptor}
        >
          {children}
        </S.dropdownItems>
      )}
    </S.container>
  );
}

Currency.defaultProps = {
  value: '',
  onHideDropdown: () => { },
};

const S = {
  container: styled.div`
    position: relative;
    width: 50px;
    user-select: none;
  `,

  selectButtonWrapper: styled.div`
    display: flex;
    position: relative;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
    .value {
      margin-right: 5px;
    }
    .triangle {
      top: 1px;
      position: relative;
    }
  `,

  dropdownItems: styled.div`
    min-width: 118px;
    min-height: 80px;
    border-radius: 8px;
    box-shadow: 7px 7px 7px 0 rgba(0, 0, 0, 0.03);
    border: solid 1px ${DARK_GRAY1};
    background-color: ${WHITE1};
    padding: 15px 0;
    box-sizing: border-box;
    position: absolute;
    right: 0;
    top: 25px;
    z-index: 1;

    & > p {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 29px;
      text-align: center;
      cursor: pointer;
      &:hover {
        color: ${DARK_GRAY1};
      }
    }
  `,
};

export default Currency;
