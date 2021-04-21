import styled from 'styled-components';
import { FC } from 'react';
import Link from 'next/link';
import Illust from 'public/images/img_illust@2x.png';
import { LIGHT_BLUE1 } from '@airpremia/cdk/styles/colors';

interface IStyleProps {}
interface IProps extends IStyleProps {
  description?: string;
  linkText?: string;
  href?: string;
  img?: any;
}

const LinkBarWithImage: FC<IProps> = ({
  description = '에어프레미아에서 항공권을 구매하셨다면 로그인 해주세요.',
  linkText = '로그인하기',
  href = '/auth/login',
  img = Illust,
}) => {
  return (
    <S.container>
      <S.left>
        <div className="text">{description}</div>
        <div className="link">
          <Link href={href}>
            <a>{linkText}</a>
          </Link>
        </div>
      </S.left>
      <S.right>
        <div className="img">
          <img src={img} alt="인사하는 승무원" />
        </div>
      </S.right>
    </S.container>
  );
};

LinkBarWithImage.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>`
    display: flex;
    justify-content: space-between;
    padding: 30px 30px;
    border-radius: 8px;
    background-color: ${LIGHT_BLUE1};
  `,
  left: styled.div<IStyleProps>`
    display: flex;
    align-items: center;
    a {
      text-decoration: underline;
    }
    .text,
    a {
      font-size: 15px;
      line-height: 28px;
      letter-spacing: -0.3px;
      font-weight: 600;
      padding-right: 10px;
    }
  `,
  right: styled.div<IStyleProps>`
    position: relative;
    .img {
      position: absolute;
      bottom: -30px;
      right: -30px;
      img {
        display: block;
        width: 140px;
        height: 140px;
      }
    }
  `,
};

export default LinkBarWithImage;
