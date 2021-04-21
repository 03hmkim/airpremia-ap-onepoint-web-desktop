import { FC } from 'react';
import { Container } from 'src/styles/layout';

interface IProps {}

const Bonus: FC<IProps> = ({}) => {
  return (
    <Container>
      <h1
        style={{
          textAlign: 'center',
        }}
        className="font-premia-bold"
      >
        국제선시 작업예정
      </h1>
    </Container>
  );
};

export default Bonus;
