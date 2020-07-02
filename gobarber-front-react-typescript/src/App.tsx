import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/globals';
import Routes from './routes';

import ContextProvider from './context';

const App: React.FC = () => (
  <BrowserRouter>
    <ContextProvider>
      <Routes />
    </ContextProvider>

    <GlobalStyle />
  </BrowserRouter>
);

export default App;
