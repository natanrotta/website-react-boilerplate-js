import React from 'react'
import { useTheme } from '../../hooks/theme'

import Language from '../../components/Language'
import Switch from '../../components/Switch'

import { Wrapper } from './styles'

const Home = () => {
  const { toggleTheme } = useTheme()
  return (
    <Wrapper>
      <div>
        <Switch toggle={toggleTheme} />
      </div>
      <div>
        <Language />
      </div>
    </Wrapper>
  )
}

export default Home