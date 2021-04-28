import { FC, ReactElement, ReactType } from 'react';
import styled from 'styled-components';
import { map } from 'lodash';
import SvgCaution from 'public/images/ico_caution.svg';
import { LIGHT_GRAY8 } from '@airpremia/cdk/styles/colors';

interface IProps {
  SvgIcon?: ReactType;
  isTitleBold?: boolean;
  title: ReactElement | string | null;
  body?: ReactElement | string[] | string | null;
}

const Caution: FC<IProps> = ({
  SvgIcon,
  title,
  body = '',
  isTitleBold = false,
}) => {
  return (
    <S.container>
      <S.title>
        {SvgIcon ? <SvgIcon /> : <SvgCaution />}
        <h3 className={isTitleBold ? 'font-bold' : ''}>
          {title}
        </h3>
      </S.title>
      <S.body>
        {Array.isArray(body)
          ? map(body, (item, i) => {
              return (
                <p key={`cautionBody${i.toString()}`}>
                  {item}
                </p>
              );
            })
          : body}
      </S.body>
    </S.container>
  );
};

const S = {
  container: styled.div``,

  title: styled.div`
    display: flex;
    align-items: baseline;
    margin-bottom: 15px;
    margin-left: 3px;

    h3 {
      font-size: 18px;
      line-height: 22px;
      margin-left: 5px;
    }

    @media only screen and (max-width: 767px) {
      h3 {
        font-size: 14px;
      }
    }
  `,

  body: styled.div`
    p {
      font-size: 18px;
      line-height: 28px;
      color: ${LIGHT_GRAY8};
      position:relative;
      padding-left:10px;

      &::before {
        content: '- ';
        position:absolute;
        left:0;
        top:0;
      }
    }

    @media only screen and (max-width: 767px) {
      p {
        font-size: 13px;
        font-weight: 300;
      }
    }
  `,
};

export default Caution;
