import React from 'react'
import { useTheme } from '../../hooks/theme'

import { Button, Switch, Language } from '../../components'

import { Container, TopBar, Wrapper, Space } from './styles'

const Home = () => {
  const { toggleTheme } = useTheme()
  return (
    <Container>
      <TopBar>
        <Switch toggle={toggleTheme} />
        <Language />
      </TopBar>
      
      <Wrapper>
        <Button variant="primary">Botão</Button> 
        <br />
        <Button variant="secondary">Botão</Button>  
      </Wrapper>
      
    </Container>
  )
}

export default Home