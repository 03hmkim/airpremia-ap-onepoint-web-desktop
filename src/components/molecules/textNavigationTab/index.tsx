import styled from 'styled-components';
import { FC } from 'react';
import { TextTabButton } from 'src/components';

interface IProps {
  list: string[];
  currIdx: number;
  onClick: (idx: number) => void;
}

const TextNavigationTab: FC<IProps> = ({
  list,
  currIdx,
  onClick,
}) => {
  return (
    <S.container>
      {list.map((item, i) => {
        return (
          <div key={`textNavigationTab${i.toString()}`}>
            <TextTabButton
              isActive={i === currIdx}
              onClick={() => onClick(i)}
            >
              {item}
            </TextTabButton>
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
    button {
      width: fit-content;
      display: flex;
      align-items: center;
    }
  `,
};

export default TextNavigationTab;
