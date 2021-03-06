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
          <div className="button" key={`textNavigationTab${i.toString()}`}>
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

    .button {
      width: auto;
      margin-right: 40px;
    }

    .button:last-child {
      margin-right: 0;
    }

    @media only screen and (max-width: 767px){
      .button {
        margin-right: 25px;
      }
    }
  `,
};

export default TextNavigationTab;
