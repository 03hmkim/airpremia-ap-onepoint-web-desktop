import styled from 'styled-components';
import {
  DARK_GRAY2,
  LIGHT_GRAY8,
  LIGHT_GRAY7,
} from '@airpremia/cdk/styles/colors';

interface IStyleProps {}

interface IProps extends IStyleProps {
  tag?: React.ReactElement;
  title: string;
  description?: string;
}

function PayTitle({ tag, title, description }: IProps) {
  return (
    <S.container>
      <div className="tagWrapper">{tag}</div>
      <div className="title font-bold">{title}</div>
      <div className="description">{description}</div>
    </S.container>
  );
}

PayTitle.defaultProps = {
  title: '서울/인천 - 하노이',
  description: '왕복 항공권 (성인 1, 유아 1, 소아 1 )',
};

const S = {
  container: styled.div`
    .title {
      padding-top: 6px;
      font-size: 36px;
      line-height: 1.17;
      letter-spacing: -0.72px;
      color: ${DARK_GRAY2};
    }
    .description {
      padding-top: 15px;
      font-size: 18px;
      line-height: 1.71;
      letter-spacing: -0.28px;
      color: ${LIGHT_GRAY8};
    }
    .buttonWrapper {
      padding-top: 30px;
      button {
        font-size: 12px;
        font-weight: 600;
        line-height: 1.5;
        letter-spacing: -0.24px;
        color: ${LIGHT_GRAY7};
        border-bottom: 1px solid ${LIGHT_GRAY7};
      }
    }

    @media only screen and (max-width: 1059px) {
      .title {
        font-size: 30px;
      }
      .description {
        font-size: 16px;
      }
    }
    @media only screen and (max-width: 767px) { 
        .title {
          font-size: 26px;
        }
        .description {
          font-size: 14px;
        }
    }
  `,
};

export default PayTitle;
