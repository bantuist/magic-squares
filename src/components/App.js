import React, { Component } from 'react';
import MagicSquares from '../components/MagicSquares';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
`;
const Heading = styled.h1`
  font-size: 4em;
`;

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Heading>Magic Squares</Heading>
        <MagicSquares /> 
      </Container>
    );
  }
}

export default App;
