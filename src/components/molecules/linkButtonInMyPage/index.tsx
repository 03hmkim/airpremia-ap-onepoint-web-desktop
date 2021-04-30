import { FC } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { Arrow } from 'src/components';
import { ORANGE1, LIGHT_GRAY8 } from '@airpremia/cdk/styles/colors';

interface IStyle {
  isEmphasis?: boolean;
}

interface IProps extends IStyle {
  needArrow?: boolean;
  title: string;
  description: string | number;
  link: string;
}

const LinkButtonInMyPage: FC<IProps> = ({
  title,
  description,
  link,
  needArrow = false,
  ...props
}) => {
  return (
    <S.container>
      <Link href={link}>
        <a>
          <S.title {...props}>
            <h3>{title}</h3>
          </S.title>
          <S.description className="font-premia-bold">
            {description}{' '}
            {needArrow && (
              <Arrow scale={0.6} borderWidth="3" />
            )}
          </S.description>
        </a>
      </Link>
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: fit-content;
  `,

  title: styled.div<IStyle>`
    h3 {
      font-size: 18px;
      line-height: 17px;
      letter-spacing: -0.26px;
      font-weight: 600;
      position: relative;
      color: ${LIGHT_GRAY8};

      ${({ isEmphasis }) =>
        isEmphasis &&
        css`
          &::after {
            content: '';
            width: 5px;
            height: 5px;
            background-color: ${ORANGE1};
            border-radius: 50%;
            position: absolute;
            margin-left: 4px;
            margin-top: 1px;
          }
        `}
    }

    @media only screen and (max-width: 767px) {
      h3 {
        font-size: 13px;
      }
    }
  `,

  description: styled.div`
    display: flex;
    align-items: center;
    font-size: 30px;
    line-height: 30px;
    letter-spacing: -0.6px;
    margin-top: 10px;

    @media only screen and (max-width: 767px) {
      font-size: 24px;
    }
  `,
};

export default LinkButtonInMyPage;
