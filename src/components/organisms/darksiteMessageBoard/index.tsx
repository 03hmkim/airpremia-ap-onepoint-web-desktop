import { Fragment } from 'react';
import styled from 'styled-components';
import { map } from 'lodash';
import { WHITE1 } from '@airpremia/cdk/styles/colors';

import { Contact } from 'src/components';
import { IProps as IContactProps } from 'src/components/molecules/contact';

export interface IStyleProps {}

export interface IProps extends IStyleProps {
  /** description */
  description: string;
  /** 첫번째 Item */
  firstItem: IContactProps;
  /** 두번째 Item */
  secondItem: IContactProps;
}

function DarksiteMessageBoard({
  description,
  firstItem,
  secondItem,
}: IProps) {
  return (
    <S.container>
      <h1>
        {map(description.split('\n'), (item, i) => (
          <Fragment key={`title${i.toString()}`}>
            {item}
            <br />
          </Fragment>
        ))}
      </h1>
      <S.contactWrapper>
        <Contact {...firstItem} />
        <Contact {...secondItem} />
      </S.contactWrapper>
    </S.container>
  );
}

DarksiteMessageBoard.defaultProps = {
  firstItem: Contact.defaultProps,
  secondItem: Contact.defaultProps,
};

const S = {
  container: styled.div`
    & > h1 {
      font-size: 34px;
      line-height: 54px;
      letter-spacing: -0.68px;
      font-weight: 600;
      color: ${WHITE1};
      margin-bottom: 70px;
    }
  `,

  contactWrapper: styled.div`
    display: flex;

    .label {
      color: ${WHITE1};
      opacity: 0.5;
    }

    .text {
      font-size: 26px;
      letter-spacing: normal;
      line-height: 30px;
      font-family: 'Premia', sans-serif;
      color: ${WHITE1};
      font-weight: 300;
    }

    & > div:last-of-type {
      margin-left: 70px;
    }
  `,
};

export default DarksiteMessageBoard;
