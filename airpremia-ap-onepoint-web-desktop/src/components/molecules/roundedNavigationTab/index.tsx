import styled from 'styled-components';
import { FC } from 'react';
import { RoundedButton5 } from 'src/components';

interface IProps {
  list: string[];
  currIdx: number;
  onClick: (idx: number) => void;
}

const RoundedNavigationTab: FC<IProps> = ({
  list,
  currIdx,
  onClick,
}) => {
  return (
    <S.container>
      {list.map((item, i) => {
        return (
          <div key={`roundedNavigationTab${i.toString()}`}>
            <RoundedButton5
              isActive={i === currIdx}
              onClick={() => onClick(i)}
            >
              {item}
            </RoundedButton5>
          </div>
        );
      })}
    </S.container>
  );
};

const S = {
  container: styled.div`
    display: flex;
    align-items: center;
  `,
};

export default RoundedNavigationTab;
