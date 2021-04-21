import { FC } from 'react';
import { Container } from 'src/styles/layout';

interface IProps {}

const Meal: FC<IProps> = ({}) => {
  return (
    <Container>
      <h1
        style={{
          textAlign: 'center',
        }}
        className="font-premia-bold"
      >
        준비 중 입니다.
      </h1>
    </Container>
  );
};

export default Meal;
