import React, { Component } from 'react';
import GithubCorner from 'react-github-corner';
import MagicSquares from '../components/MagicSquares';
import styled from 'styled-components';

const Container = styled.div`
`;
const Grid = styled.div`
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
  margin-bottom: 20px;
`;

class App extends Component {
  render() {
    return (
      <Container className="App">
        <GithubCorner href="https://github.com/bantuist/magic-squares" />
        <Grid>
          <Header>
            <Heading>Magic Squares</Heading>
            <Code>{'<'}UnderDevelopment {'/>'}</Code>
          </Header>
          <MagicSquares />
        </Grid>
      </Container>
    );
  }
}

export default App;
