import React from 'react'
import { ThemeProvider } from 'styled-components'
import ThemeContext from './context'
import usePersistedState from '../../utils/usePersistedState'

import dark from '../../styles/themes/dark'
import light from '../../styles/themes/light'

const ThemeModeProvider = ({ children }) => {
  const [theme, setTheme] = usePersistedState('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  const contextData = {
    theme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={contextData}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeModeProvider