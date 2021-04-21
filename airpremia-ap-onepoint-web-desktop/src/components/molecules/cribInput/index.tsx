import styled from 'styled-components';
import { RoundedButton2 } from 'src/components';
import { ERoundedButtonType } from 'src/components/atoms/roundedButton2';
import { LIGHT_GRAY7 } from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {
  id: string;
  passengerName: string;
  patronName: string;
  isApply: boolean;
  onClick?: (id: string, action: string) => void;
}

function CribInput({
  id,
  passengerName,
  patronName,
  isApply,
  onClick,
}: IProps) {
  const onClickLocal = (action: string) => () => {
    if (typeof onClick == 'function') onClick(id, action);
  };

  return (
    <S.container>
      <div className="left">
        <div className="passengerName font-premia-bold">
          {passengerName}
        </div>
        <div className="patronName">
          보호자 : {patronName}
        </div>
      </div>
      <div className="right">
        {isApply ? (
          <RoundedButton2
            colorType={ERoundedButtonType.WHITE}
            onClick={onClickLocal('cancel')}
          >
            신청 취소
          </RoundedButton2>
        ) : (
          <RoundedButton2
            colorType={ERoundedButtonType.BLUE}
            onClick={onClickLocal('apply')}
          >
            대여 신청
          </RoundedButton2>
        )}
      </div>
    </S.container>
  );
}

CribInput.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .passengerName {
      font-size: 22px;
      letter-spacing: -0.44px;
    }
    .patronName {
      padding-top: 5px;
      font-size: 14px;
      letter-spacing: -0.28px;
      color: ${LIGHT_GRAY7};
    }
  `,
};

export interface ICribInput extends IProps {}

export default CribInput;
