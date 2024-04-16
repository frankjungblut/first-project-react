import React from 'react'

import People from './assets/people.svg'

import Arrow from './assets/arrow.svg'

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
  const users = [{ id: Math.random(), name:"Frank", age:28}, { id: Math.random(), name:"Rodolfi", age:28}]
  return (
    <Container>
      <Image alt='logo-imagem' src={People} />
      <ContainerItems>
        <H1>Olá! </H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade"></Input>

        <Button>
          Cadastrar
          <img src={Arrow}></img>
          </Button>

      <ul>
        {users.map(user =>(
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      </ContainerItems>
    </Container>

  )
}

export default App;
