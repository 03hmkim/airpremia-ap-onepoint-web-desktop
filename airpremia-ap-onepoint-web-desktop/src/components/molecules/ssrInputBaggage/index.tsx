import styled from 'styled-components';
import { addComma } from '@airpremia/core/lib/service';
import { NumberStepper } from 'src/components';
import { useState, useEffect } from 'react';
import imgUrlDefault from 'public/images/img_baggage_default@2x.png';

interface IStyleProps {}
interface IProps extends IStyleProps {
  id?: string;
  /** 기본 제공 유무 */
  isDefault?: boolean;
  imgUrl?: string;
  label?: string;
  /** 가격 */
  price?: number;
  /** 수량 */
  count?: number;
  /** 최소 수량 */
  min?: number;
  /** 최대 수량 */
  max?: number;
  onChange?: (payload: number) => void;
}

function SsrInputBaggage({
  id,
  isDefault,
  imgUrl,
  label,
  price,
  count,
  min,
  max,
  onChange,
}: IProps) {
  const priceLocal = price ? price : 0;
  const countLocal = count ? count : 0;
  const onChangeLocal = (payload: number) => () => {
    if (typeof onChange != 'function') return;

    if (id) onChange(payload);
  };

  const [imgUrlLocal, setimgUrlLocal] = useState<
    string | undefined
  >(imgUrl);

  const onError = () => {
    setimgUrlLocal(imgUrlDefault);
  };

  useEffect(() => {
    if (imgUrl === undefined) {
      onError();
    }
  }, [imgUrl]);

  return (
    <S.container>
      <div className="thumbnail">
        <img
          src={imgUrlLocal}
          onError={onError}
          alt={name}
        />
      </div>
      <div className="labelWrapper">
        <div className="label">{label}</div>
        {!isDefault && (
          <div className="price">
            {addComma(priceLocal)} 원
          </div>
        )}
      </div>
      <div className="inputWrapper">
        {isDefault ? (
          <div className="defaultDescription">
            1개 기본 제공
          </div>
        ) : (
          <div className="stepperWrapper">
            <NumberStepper
              value={countLocal}
              min={min}
              max={max}
              onMinus={onChangeLocal(countLocal - 1)}
              onPlus={onChangeLocal(countLocal + 1)}
            />
          </div>
        )}
      </div>
    </S.container>
  );
}

SsrInputBaggage.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    display: flex;
    .thumbnail {
      width: 120px;
      height: 160px;
      img {
        display: block;
        width: 100%;
        height: 100%;
        border: none;
      }
    }
    .labelWrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 15px;
      font-size: 15px;
      font-weight: 600;
      letter-spacing: -0.3px;
      .price {
        padding-top: 8px;
      }
    }
    .inputWrapper {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .defaultDescription {
      padding-right: 13px;
      font-size: 15px;
      font-weight: 600;
      letter-spacing: -0.3px;
    }
    .stepperWrapper {
      width: 154px;
    }
  `,
};

export default SsrInputBaggage;
