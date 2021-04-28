import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import {
  LIGHT_GRAY7,
  DARK_GRAY1,
  LIGHT_GRAY8,
  LIGHT_GRAY6,
  LIGHT_GRAY5,
} from '@airpremia/cdk/styles/colors';
import { Arrow } from 'src/components';
import { EPosition } from 'src/components/atoms/arrow';
import {
  useState,
  useCallback,
  useMemo,
  useEffect,
} from 'react';

interface IStyleProps {}
interface IProps extends IStyleProps {
  /**  탑승객 이름 */
  name: string;
  /**  탑승객 타입 라벨(성인 or 유아 or 소아) */
  typeLabel: string;
  /** 탑승객 성별 라벨(남 or 여) */
  genderLabel: string;
  /** 활성화/비활성화 */
  disabled: boolean;
  /** 신청 가능 or 신청 불가 or 신청 완료 */
  buttonLabel: string;
  /** 신청 불가능시 이유 라벨(ex. 비상구 좌석 고객) */
  buttonSubLabel?: string;
  /** 확장패널 열림시 보이는 컴포넌트 */
  children?: React.ReactElement | string;
}

function PassengerFormExpansionPanel({
  name,
  typeLabel,
  genderLabel,
  disabled,
  buttonLabel,
  buttonSubLabel,
  children,
}: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHiddenRemove, setHiddenRemove] = useState(false);
  const toggle = useCallback(() => {
    if (disabled) return;
    setIsOpen(!isOpen);
  }, [isOpen]);
  const arrowPosition = isOpen
    ? EPosition.UP
    : EPosition.DOWN;
  const arrowColor = useMemo(() => {
    return disabled ? LIGHT_GRAY7 : DARK_GRAY1;
  }, [disabled]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setHiddenRemove(true), 500);
    } else {
      setHiddenRemove(false);
    }
  });

  return (
    <S.container>
      <S.header>
        <S.left>
          <div className="name font-premia-bold">
            {name}
          </div>
          <div className="labelWrapper">
            <div className="type">{typeLabel}</div>
            <div className="gender">{genderLabel}</div>
          </div>
        </S.left>
        <S.right disabled={disabled} onClick={toggle}>
          <div className="labelWrapper">
            <div className="label">{buttonLabel}</div>
            {disabled && buttonSubLabel && (
              <div className="canReason">
                ({buttonSubLabel})
              </div>
            )}
          </div>
          <div className="arrowWrapper">
            <Arrow
              color={arrowColor}
              position={arrowPosition}
            />
          </div>
        </S.right>
      </S.header>
      <S.body
        isOpen={isOpen}
        isHiddenRemove={isHiddenRemove}
      >
        <div className="innerWrapper">{children}</div>
      </S.body>
    </S.container>
  );
}

PassengerFormExpansionPanel.defaultProps = {
  name: 'JINWON LEE',
  typeLabel: '성인',
  genderLabel: '여',
  disabled: false,
  buttonLabel: '신청 가능',
};

const S = {
  container: styled.div<IStyleProps>``,
  header: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 110px;
    border-bottom: solid 1px ${LIGHT_GRAY5};
  `,
  left: styled.div`
    .name {
      font-size: 24px;
      letter-spacing: -0.48px;
    }
    .labelWrapper {
      display: flex;
      padding-top: 10px;
      font-size: 18px;
      letter-spacing: -0.28px;
      color: ${LIGHT_GRAY8};
      .gender {
        position: relative;
        padding-left: 13px;
        &:before {
          content: '';
          position: absolute;
          top: 2px;
          left: 6.7px;
          width: 1px;
          height: 11px;
          background-color: ${LIGHT_GRAY6};
        }
      }
    }
    @media only screen and (max-width: 1059px) { 
      .labelWrapper {
        font-size: 14px;
      }
    }
    @media only screen and (max-width: 767px) { 
    
    }
  `,
  right: styled.div<{ disabled: boolean }>`
    display: flex;
    align-items: center;
    color: ${ifProp('disabled', LIGHT_GRAY7, DARK_GRAY1)};
    cursor: ${ifProp('disabled', 'reset', 'pointer')};
    text-align: right;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.32px;
    .canReason {
      padding-top: 12px;
    }
    .arrowWrapper {
      padding-left: 20px;
    }
  `,
  body: styled.div<{
    isOpen: boolean;
    isHiddenRemove: boolean;
  }>`
    overflow: hidden;
    overflow: ${ifProp('isHiddenRemove', 'unset')};
    transition: all 0.5s;
    margin-left: 215px;
    max-height: ${ifProp('isOpen', '512px', '0')};
    padding-top: ${ifProp('isOpen', '30px', '0')};
    .innerWrapper {
      /* border-top: 1px solid ${LIGHT_GRAY5}; */
    }
    @media only screen and (max-width: 1059px) { 
      margin-left:0px;
    }
    @media only screen and (max-width: 767px) { 
    
    }
  `,
};

export default PassengerFormExpansionPanel;
