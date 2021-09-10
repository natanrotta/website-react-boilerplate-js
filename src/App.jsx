import React from 'react'
import GlobalStyle from "./styles/global";
import Routes from './Routes'
import { ThemeModeProvider } from './contexts/theme';

const App = () => {
  return (
    <ThemeModeProvider>
      <GlobalStyle />
      <Routes />
    </ThemeModeProvider>
  );
}

export default App;
