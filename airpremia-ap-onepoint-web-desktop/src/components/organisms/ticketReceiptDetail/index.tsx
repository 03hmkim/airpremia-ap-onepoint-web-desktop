import { FC, Fragment } from 'react';
import styled from 'styled-components';
import { map } from 'lodash';
import {
  TicketReceiptHeader,
  TicketReceiptDetailContent,
} from 'src/components';
import { Title, Horizon } from 'src/components';
import { IProps as ITicketReceiptHeaderProps } from 'src/components/molecules/ticketReceiptHeader';
import { IProps as ITicketReceiptDetailContent } from 'src/components/molecules/ticketReceiptDetailContent';

import {
  DARK_GRAY1,
  ORANGE1,
} from '@airpremia/cdk/styles/colors';

interface IProps {
  headerProps?: ITicketReceiptHeaderProps;
  detailPropsList?: ITicketReceiptDetailContent[];
}

const TicketReceiptDetail: FC<IProps> = ({
  headerProps,
  detailPropsList,
}) => {
  return (
    <S.container>
      <S.title>
        <Title>
          <Fragment>
            항공권의 상세 금액을
            <br />
            확인해주세요 :-)
          </Fragment>
        </Title>
      </S.title>

      <S.scroll>
        <S.TicketReceiptHeader>
          <TicketReceiptHeader {...headerProps} />
        </S.TicketReceiptHeader>
        <Horizon
          width={2}
          color={DARK_GRAY1}
          top={20}
          bottom={30}
        />
        <S.TicketReceiptDetailContent>
          {map(detailPropsList, (props, i) => (
            <TicketReceiptDetailContent
              key={`ticketReceiptDetailContent${i.toString()}`}
              {...props}
            />
          ))}
          <Horizon
            width={2}
            color={DARK_GRAY1}
            top={20}
            bottom={30}
          />
          <S.total>
            <p>총 결제금액</p>
            <em>724,500 원</em>
          </S.total>
        </S.TicketReceiptDetailContent>
      </S.scroll>
    </S.container>
  );
};

const S = {
  container: styled.div``,

  title: styled.div`
    margin-bottom: 40px;
  `,

  scroll: styled.div`
    height: 100%;
    overflow: scroll;
    padding: 0 20px;
    margin-top: 80px;
  `,

  TicketReceiptHeader: styled.div``,

  TicketReceiptDetailContent: styled.div`
    & > div {
      margin-bottom: 30px;
    }
  `,

  total: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 13px;
      line-height: 24px;
      letter-spacing: -0.26px;
      font-weight: 600;
    }

    em {
      font-size: 20px;
      line-height: 24px;
      letter-spacing: -0.4px;
      font-weight: 600;
      color: ${ORANGE1};
    }
  `,
};

export default TicketReceiptDetail;
