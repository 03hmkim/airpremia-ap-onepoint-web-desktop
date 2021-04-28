import { FC } from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';

interface IContainerStyle {
  /** padding top */
  pt?: number;
  /** padding bottom */
  pb?: number;
  /** padding right */
  pr?: number;
  /** padding left */
  pl?: number;
  /** padding ex>"5px 0 0 5px" */
  padding?: string;
  /** min-width */
  minWidth?: number;
}

const Container = styled.div<IContainerStyle>`
  box-sizing: border-box;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: ${prop('padding', '0')};
  padding-top: ${prop('pt', 60)}px;
  padding-bottom: ${prop('pb', 160)}px;
  padding-right: ${prop('pr')}px;
  padding-left: ${prop('pl')}px;
  @media only screen and (max-width: 767px) {
    padding-bottom: ${prop('pb', 40)}px;
  }
`;

const AuthWrapper = styled.div`
  max-width: 540px;
  margin: 0 auto;
`;

const AuthContainer: FC<IContainerStyle> = ({
  children,
  ...props
}) => (
  <Container {...props}>
    <AuthWrapper>{children}</AuthWrapper>
  </Container>
);

export { Container, AuthContainer };
