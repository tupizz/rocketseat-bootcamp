import React from 'react';

import GlobalStyle from './styles/globals';
import SignIn from './pages/SignIn';
import { AuthContextProvider } from './context/AuthContextProvider';

const App: React.FC = () => (
  <>
    <GlobalStyle />

    <AuthContextProvider>
      <SignIn />
    </AuthContextProvider>
  </>
);

export default App;
