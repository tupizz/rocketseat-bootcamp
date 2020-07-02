import React from 'react';

import GlobalStyle from './styles/globals';
import SignIn from './pages/SignIn';

import ContextProvider from './context';

const App: React.FC = () => (
  <>
    <GlobalStyle />

    <ContextProvider>
      <SignIn />
    </ContextProvider>
  </>
);

export default App;
