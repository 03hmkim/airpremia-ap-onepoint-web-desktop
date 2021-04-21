import { FC, Fragment, ReactElement } from 'react';
import { map } from 'lodash';
import styled from 'styled-components';
import {
  DARK_GRAY1,
  LIGHT_GRAY6,
} from '@airpremia/cdk/styles/colors';

interface IProps {
  header?: ReactElement;
  title?: ReactElement;
  content?: string;
  shortcut?: ReactElement;
  backbutton?: ReactElement;
}

const DarksitePostTemplate: FC<IProps> = ({
  header,
  title,
  content,
  shortcut,
  backbutton,
}: IProps) => {
  return (
    <S.container>
      <S.header>{header}</S.header>
      <S.wrapper>
        <S.title>{title}</S.title>
        <S.content>
          {map(content?.split('\n'), (item, i) => (
            <Fragment key={`postContent${i.toString()}`}>
              {item}
              <br />
            </Fragment>
          ))}
        </S.content>
        <S.shortcut>{shortcut}</S.shortcut>
        <S.backbutton>{backbutton}</S.backbutton>
      </S.wrapper>
    </S.container>
  );
};

const S = {
  container: styled.div`
    /* min-width: 1440px; */
  `,

  wrapper: styled.div`
    /* width: 1400px; */
    padding: 0 100px;
    box-sizing: border-box;
    margin: 60px auto 160px;
  `,

  header: styled.div``,

  title: styled.div``,

  content: styled.div`
    margin-top: 100px;
    padding: 60px 0 80px;
    border-top: solid 2px ${DARK_GRAY1};
    font-size: 16px;
    line-height: 32px;
    letter-spacing: -0.32px;
  `,

  shortcut: styled.div`
    width: 100%;
    border-top: solid 2px ${LIGHT_GRAY6};
    border-bottom: solid 2px ${LIGHT_GRAY6};
    & > div > div:not(:last-of-type) {
      border-bottom: solid 1px ${LIGHT_GRAY6};
    }
  `,

  backbutton: styled.div`
    margin-top: 40px;
    width: 86px;
    height: 40px;
    button {
      font-size: 14px;
      padding: 0;
      color: ${DARK_GRAY1};
    }
  `,
};

export default DarksitePostTemplate;
