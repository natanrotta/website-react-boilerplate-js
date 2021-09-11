import React from 'react'
import GlobalStyle from "./styles/global";
import Routes from './Routes'
import { ThemeModeProvider } from './contexts/theme';
import { I18nProvider } from './contexts/i18n';

const App = () => {
  return (
    <ThemeModeProvider>
       <I18nProvider>
          <GlobalStyle />
          <Routes />
       </I18nProvider>
    </ThemeModeProvider>
  );
}

export default App;
