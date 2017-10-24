import React, { Component } from 'react';
import MagicSquares from '../components/MagicSquares';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Heading = styled.h1`
  font-size: 4em;
`;
const Code = styled.code`
  font-size: 1em;
`;

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Header>
          <Heading>Magic Squares</Heading>
          <Code>{'<'}UnderDevelopment {'/>'}</Code>
        </Header>
        <MagicSquares />
      </Container>
    );
  }
}

export default App;
