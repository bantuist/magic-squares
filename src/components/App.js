import React, { Component } from 'react';
import MagicSquares from '../components/MagicSquares';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <Container className="App">
        <MagicSquares /> 
      </Container>
    );
  }
}

export default App;
