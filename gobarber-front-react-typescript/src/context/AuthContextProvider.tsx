import React, { createContext, useCallback } from 'react';
import api from '../services/api';

interface AuthContextState {
  name: string;
  signIn(credentials: { email: string; password: string }): Promise<void>;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthContextProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', { email, password });

    console.log(response);
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'Tadeu', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
