import styled from 'styled-components';

interface IStyleProps {}
interface IProps extends IStyleProps {}

// TODO 기획서엔 없지만 디자인에 없음. 추후 확인해서 사라졌으면 제거
function FlightSummaryWithTotal({}: IProps) {
  return <S.container></S.container>;
}

FlightSummaryWithTotal.defaultProps = {};

const S = {
  container: styled.div<IStyleProps>``,
};

export default FlightSummaryWithTotal;
