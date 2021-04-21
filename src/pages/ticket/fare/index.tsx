import { FC } from 'react';
import { Container } from 'src/styles/layout';

interface IProps {}

const FlightStatus: FC<IProps> = ({}) => {
  return (
    <Container>
      <h1
        style={{
          textAlign: 'center',
        }}
        className="font-premia-bold"
      >
        퍼블변경예정
      </h1>
    </Container>
  );
};

export default FlightStatus;
