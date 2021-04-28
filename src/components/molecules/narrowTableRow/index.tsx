import { FC } from 'react';
import styled from 'styled-components';
import { prop, ifProp } from 'styled-tools';
import {
  LIGHT_GRAY5,
  DARK_GRAY1,
  BLUE1,
} from '@airpremia/cdk/styles/colors';

interface IProps {
  description?: string;
  subDescription?: string;
  option?: string;
  optionColor?: string;
  isEmphasisRow?: boolean;
}

const NarrowTableRow: FC<IProps> = ({
  description = '위탁 수하물, 유료 좌석, 유료 간식/주류, 기내 Wi-Fi, 기내 편의 용품',
  subDescription = '출발 72시간 이전 취소/환불',
  option,
  optionColor = DARK_GRAY1,
  isEmphasisRow = false,
}) => {
  return (
    <S.container isEmphasisRow={isEmphasisRow}>
      <S.left className="left">{description}</S.left>

      <S.right className="right">
        <S.description className="description">
          {subDescription}
        </S.description>

        {option && (
          <S.refundStatus
            className="refundStatus"
            optionColor={optionColor}
          >
            {option}
          </S.refundStatus>
        )}
      </S.right>
    </S.container>
  );
};

const flex = `
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const S = {
  container: styled.div<{ isEmphasisRow: boolean }>`
    font-size: 14px;
    letter-spacing: -0.28px;
    line-height: 20px;
    padding: 18px 0;
    border-bottom: solid 1px ${LIGHT_GRAY5};

    color: ${ifProp('isEmphasisRow', BLUE1)};
    ${flex};
    @media only screen and (max-width: 767px) { 
      display:block;
    }
  `,

  left: styled.div`
    flex: 1;
    font-weight: 600;
    @media only screen and (max-width: 767px) { 
      width:100%;margin-bottom:5px;
    }
  `,

  right: styled.div`
    flex: 1;
    ${flex};
    @media only screen and (max-width: 767px) { 
      width:100%;
    }
  `,

  description: styled.div``,

  refundStatus: styled.div<{ optionColor: string }>`
    color: ${prop('optionColor')};
  `,
};

export default NarrowTableRow;
