import React from 'react'

import {
  Container,
  H1,
  Image,
  ContainerItems,
  InputLabel,
  Input,
  Button
} from './styles';

const App = () => {

  return (
    <Container>
      <Image />
      <ContainerItems>
        <H1>Olá! </H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome"> </Input>

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade"> </Input>
      </ContainerItems>
    </Container>

  )
}

export default App;
