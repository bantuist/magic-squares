import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  cursor: pointer;
  margin: 0 5px;
`;

const Controls = ({ onSolve, onClue, onReset }) => {
  return (
    <Container>
      <Button onClick={onSolve}>Solve</Button>
      <Button onClick={onClue}>Clue</Button>
      <Button onClick={onReset}>Reset</Button>
    </Container>
  );
};

export default Controls;