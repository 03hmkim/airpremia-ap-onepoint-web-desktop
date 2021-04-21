import styled from 'styled-components';
import {
  DARK_GRAY1,
  LIGHT_GRAY8,
} from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {
  /** 제목 */
  title: string;
  /** 설명 */
  description?: React.ReactElement | string;
}

/** SSR 마감 */
function ClosedInfo({ title, description }: IProps) {
  return (
    <S.container>
      <h3>{title}</h3>
      <div className="description">{description}</div>
    </S.container>
  );
}

ClosedInfo.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    h3 {
      font-size: 18px;
      font-weight: 600;
      line-height: 1.56;
      letter-spacing: -0.36px;
      color: ${DARK_GRAY1};
    }
    .description {
      padding-top: 20px;
      font-size: 15px;
      line-height: 1.67;
      letter-spacing: -0.3px;
      text-align: center;
      color: ${LIGHT_GRAY8};
    }
  `,
};

export default ClosedInfo;
