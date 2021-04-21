import React from 'react';
import styled from 'styled-components';
import Radio from 'src/components/molecules/radio';
import Image10 from 'public/images/img_bookflight_wifi_10.svg';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';
import { commaNumber } from '@airpremia/core/lib/util';

interface IStyleProps {}

interface IProps<T> extends IStyleProps {
  /** 선택 유무 */
  isActive: boolean;
  /** 이미지 */
  image?: any;
  /** data- 에 삽입될 value */
  value: T;
  /** 금액 */
  price: number;
  onClick?: (value: T) => void;
}

function SsrInputWifi<T>({
  isActive,
  image,
  value,
  price,
  onClick,
}: IProps<T>) {
  const onClickLocal = () => {
    if (typeof onClick == 'function') onClick(value);
  };

  return (
    <S.container data-id={value} onClick={onClickLocal}>
      <div className="inputWrapper">
        <Radio isActive={isActive}>
          <div className="wrapper">
            <div className="imageWrapper">{image}</div>
            <div className="labelWrapper">
              {commaNumber(price)} 원
            </div>
          </div>
        </Radio>
      </div>
    </S.container>
  );
}

SsrInputWifi.defaultProps = {
  image: Image10,
};

const S = {
  container: styled.div<IStyleProps>`
    display: flex;
    align-items: center;
    cursor: pointer;
    div + div {
      padding-left: 15px;
    }
    .wrapper {
      display: flex;
      align-items: center;
    }
    .imageWrapper {
    }
    .labelWrapper {
      font-size: 16px;
      font-weight: 600;
      line-height: 1.75;
      letter-spacing: -0.32px;
      color: ${DARK_GRAY1};
    }
  `,
};

export default SsrInputWifi;
