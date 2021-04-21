import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { IMarketsData } from '@airpremia/core/api/ticket/types';
import { getStationLabel } from '@airpremia/core/lib/booking';
import {
  DARK_GRAY1,
  LIGHT_GRAY7,
  ORANGE1,
  WHITE1,
} from '@airpremia/cdk/styles/colors';

interface IProps {
  target: string;
  list: IMarketsData[];
  onClick: (e: any) => void;
}

function DropdownTrip({ target, list, onClick }: IProps) {
  const onClickLocal = (e: any) => {
    let target;
    if (e.target.tagName === 'LI') {
      target = e.target;
    } else {
      target = e.target.parentNode;
    }
    const { available, code } = target.dataset;

    if (!code || available === 'false') return;

    onClick(code);
  };
  return (
    <S.container onClick={onClickLocal}>
      {list.map((tripItem, index) => (
        <S.list
          key={index}
          isComming={!!tripItem.commingSoonInfo}
          data-code={tripItem[target]}
          data-available={!tripItem.commingSoonInfo}
          // data-available={tripItem.available}
        >
          <div className="label--destination__item">
            {getStationLabel(tripItem[target])}(
            {tripItem[target]})
          </div>
          {!!tripItem.commingSoonInfo && (
            <div className="coming_soon">Coming Soon</div>
          )}
        </S.list>
      ))}
    </S.container>
  );
}

DropdownTrip.defaultProps = {
  onClick: () => {},
};

const S = {
  container: styled.ul`
    width: 400px;
    height: 600px;
    padding: 15px 0;
    box-sizing: border-box;
    border-radius: 16px;
    box-shadow: 30px 30px 30px 0 rgba(0, 0, 0, 0.03);
    border: solid 1px ${DARK_GRAY1};
    background-color: ${WHITE1};
    z-index: 1;
    overflow-y: auto;
  `,

  list: styled.li<{ isComming: boolean }>`
    display: flex;
    justify-content: space-between;
    padding: 15px 25px;
    cursor: pointer;
    .label--destination__item {
      font-size: 14px;
      font-weight: 600;
      letter-spacing: -0.28px;
      color: ${ifProp(
        'isComming',
        LIGHT_GRAY7,
        DARK_GRAY1,
      )};
      }
    }
    .coming_soon {
      font-family: 'Premia-Bold', serif;
      font-size: 14px;
      letter-spacing: -0.28px;
      text-align: right;
      color: ${ORANGE1};
    }
  `,
};

export default DropdownTrip;
