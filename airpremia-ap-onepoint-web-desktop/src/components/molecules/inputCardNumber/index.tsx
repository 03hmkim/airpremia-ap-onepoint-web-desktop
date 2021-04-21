import { useState } from 'react';
import styled from 'styled-components';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';
import { InputWithLabel } from 'src/components';
import { Input } from 'src/components';
import { EInputType } from 'src/components/atoms/input';

enum EInputCardNumberType {
  FIRST = 'FIRST',
  SECOND = 'SECOND',
  THIRD = 'THIRD',
  FOURTH = 'FOURTH',
}

interface IStyleProps {}
interface IProps extends IStyleProps {}

// TODO core/util 에 이관할 예정
function isNumber(s: any) {
  s += ''; // 문자열로 변환
  s = s.replace(/^\s*|\s*$/g, ''); // 좌우 공백 제거
  return !(s == '' || isNaN(s));
}

function InputCardNumber({}: IProps) {
  // TODO input value를 어떻게 prop으로 내릴 것인지 논의
  // TODO 마스킹 처리

  const [numbers, setNumbers] = useState({
    [EInputCardNumberType.FIRST]: '',
    [EInputCardNumberType.SECOND]: '',
    [EInputCardNumberType.THIRD]: '',
    [EInputCardNumberType.FOURTH]: '',
  });

  const onChange = (type: EInputCardNumberType) => (
    e: any,
  ) => {
    const { value } = e.target;
    if (!isNumber(value)) return;
    if (value.length > 4) return;

    setNumbers((prev) => {
      return {
        ...prev,
        [EInputCardNumberType[type]]: value,
      };
    });
  };

  return (
    <S.container>
      <InputWithLabel label="카드 번호">
        <div className="inputsWrapper">
          <div className="inputWrapper">
            <Input
              type={EInputType.NUMBER}
              placeholder=""
              value={numbers[EInputCardNumberType.FIRST]}
              onChange={onChange(
                EInputCardNumberType.FIRST,
              )}
            />
          </div>
          <div className="inputWrapper">
            <Input
              type={EInputType.NUMBER}
              placeholder=""
              value={numbers[EInputCardNumberType.SECOND]}
              onChange={onChange(
                EInputCardNumberType.SECOND,
              )}
            />
          </div>
          <div className="inputWrapper">
            <Input
              type={EInputType.NUMBER}
              placeholder=""
              value={numbers[EInputCardNumberType.THIRD]}
              onChange={onChange(
                EInputCardNumberType.THIRD,
              )}
            />
          </div>
          {/* TODO input 말고 다른 작업이 필요할 예정(보안) */}
          <div className="inputWrapper">
            <Input
              type={EInputType.NUMBER}
              placeholder=""
              value={numbers[EInputCardNumberType.FOURTH]}
              onChange={onChange(
                EInputCardNumberType.FOURTH,
              )}
            />
          </div>
        </div>
      </InputWithLabel>
    </S.container>
  );
}

InputCardNumber.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    .label {
      display: inline;
      font-size: 14px;
      line-height: 1.45;
      letter-spacing: -0.28px;
      color: ${DARK_GRAY1};
      padding-bottom: 4px;
    }
    input {
      border: 0;
      display: block;
      width: 35px;
      height: 24px;
    }
    .inputsWrapper {
      display: flex;
      padding: 8px 0;

      .inputWrapper {
        position: relative;
      }
      .inputWrapper + .inputWrapper {
        padding-left: 47px;
        &:before {
          position: absolute;
          top: 13px;
          left: 20px;
          content: '';
          width: 7px;
          height: 2px;
          background-color: ${DARK_GRAY1};
        }
      }
    }
  `,
};

export default InputCardNumber;
