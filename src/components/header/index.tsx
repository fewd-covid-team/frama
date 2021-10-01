import * as React from 'react';
import { Container, HeaderWrapper, Logo, Row, Column, StyledLink } from './index.styles';

function Header(): JSX.Element {
  const content = (
    <Container>
      <Row>
        <Column>
          <Logo> Covid-19 frama </Logo>
        </Column>
        <Column>
          <StyledLink to="/traitors">Traitors</StyledLink>
        </Column>
        <Column>
          <StyledLink to="/stats">Statistics</StyledLink>
        </Column>
        <Column>
          <StyledLink to="/tips">Tips</StyledLink>
        </Column>
      </Row>
    </Container>
  );
  return <HeaderWrapper>{content}</HeaderWrapper>;
}

export default Header;
