import React, { createContext, useCallback, useState, useContext } from 'react';
import api, { SessionsPostModel } from '../services/api';

interface AuthContextState {
  user: object;
  signIn(credentials: { email: string; password: string }): Promise<void>;
  signOut(): void;
}

interface AuthUserState {
  token: string;
  user: object;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthUserState>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if (user && token) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthUserState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post<SessionsPostModel>('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarber:user');

    setData({} as AuthUserState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextState => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
};

export { AuthContextProvider, useAuth };
