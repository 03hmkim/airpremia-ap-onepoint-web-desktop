import styled from 'styled-components';
import {
  DARK_GRAY1,
  LIGHT_GRAY6,
} from '@airpremia/cdk/styles/colors';
import Tooltip from '../tooltip';

interface IStyleProps {}
interface IProps extends IStyleProps {
  label: string;
  tooltipDescription?: string;
  children?: React.ReactElement | string;
}

function InputWithLabel({
  label,
  tooltipDescription,
  children,
}: IProps) {
  return (
    <S.container>
      <div className="labelWrapper">
        <div className="label">{label}</div>
        {tooltipDescription && (
          <div className="tooltipWrapper">
            <Tooltip>{tooltipDescription}</Tooltip>
          </div>
        )}
      </div>
      {children}
    </S.container>
  );
}

InputWithLabel.defaultProps = {
  label: '카드 번호',
};

const S = {
  container: styled.div<IStyleProps>`
    width: 100%;
    border-bottom: 1px solid ${LIGHT_GRAY6};
    .labelWrapper {
      display: flex;
      align-items: center;
      .tooltipWrapper {
        padding-left: 3px;
      }
    }
    .label {
      font-size: 14px;
      line-height: 1.45;
      letter-spacing: -0.28px;
      color: ${DARK_GRAY1};
      padding-bottom: 4px;
    }
  `,
};

export default InputWithLabel;
