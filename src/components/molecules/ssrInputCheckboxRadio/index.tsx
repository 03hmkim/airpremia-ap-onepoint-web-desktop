import React, { useState } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import Radio from 'src/components/molecules/radio';
import Checkbox from 'src/components/molecules/checkbox';
import ImageDefault from 'public/images/img_baggage_default@2x.png';
import { commaNumber } from '@airpremia/core/lib/util';
import {
  DARK_GRAY1,
  LIGHT_GRAY7,
  ORANGE2,
} from '@airpremia/cdk/styles/colors';

export enum ESsrInputType {
  CHECKBOX,
  RADIO,
}

interface IStyleProps {
  /** 선택 유무 */
  isActive: boolean;
}

interface IProps<T> extends IStyleProps {
  /** checkbox or radio */
  inputType?: ESsrInputType;
  /** 이미지 */
  image?: string;
  /** data- 에 삽입될 value */
  value: T;
  /** 이름 */
  name?: string;
  /** 설명 */
  description?: string;
  /** 가격 */
  price?: number;
  children?: React.ReactElement | string;
  onClick?: (value?: T) => void;
}

function SsrInputCheckboxRadio<T>({
  inputType,
  isActive,
  image,
  value,
  name,
  description,
  price,
  onClick,
}: IProps<T>) {
  const InputBox =
    inputType === ESsrInputType.CHECKBOX ? Checkbox : Radio;

  let priceLabel;
  if (price === 0) {
    priceLabel = '무료';
  } else if (price === undefined) {
    priceLabel = '';
  } else {
    priceLabel = `${commaNumber(price)} 원`;
  }
  const [imageUrl, setImageUrl] = useState<
    string | undefined
  >(image);

  const onClickLocal = () => {
    if (typeof onClick == 'function') onClick(value);
  };

  const onError = () => {
    setImageUrl(ImageDefault);
  };

  return (
    <S.container
      isActive={isActive}
      data-id={value}
      onClick={onClickLocal}
    >
      <div className="imageWrapper">
        <img src={imageUrl} onError={onError} alt={name} />
        <div className="boxWrapper">
          <InputBox isActive={isActive} />
        </div>
      </div>
      <div className="labelWrapper">
        <div className="label first">{name}</div>
        {description && (
          <div className="label second">{description}</div>
        )}
        {priceLabel && (
          <div className="label third">{priceLabel}</div>
        )}
      </div>
    </S.container>
  );
}

SsrInputCheckboxRadio.defaultProps = {
  inputType: ESsrInputType.CHECKBOX,
  image: ImageDefault,
};

const S = {
  container: styled.div<IStyleProps>`
    div,
    img {
      pointer-events: none;
    }

    display: inline-flex;
    cursor: pointer;

    .imageWrapper {
      position: relative;
      width: 120px;
      height: 160px;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
      .boxWrapper {
        position: absolute;
        top: 10px;
        left: 10px;
      }
    }
    .labelWrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 15px;
      max-width: 284px;
      font-size: 15px;
      line-height: 1.87;
      letter-spacing: -0.28px;
      color: ${DARK_GRAY1};
      .first {
        font-weight: 600;
        color: ${ifProp('isActive', ORANGE2, DARK_GRAY1)};
      }
      .second {
        font-size: 14px;
        line-height: 1.43;
        letter-spacing: -0.28px;
        color: ${LIGHT_GRAY7};
      }
      .third {
        font-weight: 600;
        padding-top: 13px;
        height: 28px;
      }
    }
  `,
};

export default SsrInputCheckboxRadio;
