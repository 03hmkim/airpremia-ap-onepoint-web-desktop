import styled from 'styled-components';
import { DARK_GRAY1 } from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {
  /** 제목 */
  title?: string;
  /** 설명 list */
  descriptions: string[];
}

function WarningList({
  title = '온라인 체크인 신청 안내',
  descriptions,
}: IProps) {
  return (
    <S.container>
      <S.title className="font-bold">
        <h3>{title}</h3>
      </S.title>
      <ul>
        {descriptions.map((description: string, index) => (
          <li key={index}>{description}</li>
        ))}
      </ul>
    </S.container>
  );
}

WarningList.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    ul {
      padding-top: 10px;
      li {
        font-size: 15px;
        line-height: 36px;
        letter-spacing: -0.3px;
        color: ${DARK_GRAY1};
        display: flex;
        align-items: center;
        &:not(:last-of-type) {
          margin-bottom: 15px;
        }
        &:before {
          content: '';
          width: 4px;
          height: 4px;
          background-color: ${DARK_GRAY1};
          display: inline-block;
          border-radius: 50%;
          margin-right: 10px;
        }
      }
    }
  `,
  title: styled.div`
    margin-bottom: 20px;

    h3 {
      font-size: 22px;
      line-height: 34px;
      letter-spacing: -0.44px;
      margin-left: 5px;
      color: ${DARK_GRAY1};
    }
  `,
};

export default WarningList;
