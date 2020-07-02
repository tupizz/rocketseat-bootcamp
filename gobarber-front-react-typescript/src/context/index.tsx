import React from 'react';
import { AuthContextProvider } from './AuthContextProvider';
import { ToastContextProvider } from './ToastContextProvider';

const ContextProvider: React.FC = ({ children }) => {
  return (
    <AuthContextProvider>
      <ToastContextProvider>{children}</ToastContextProvider>
    </AuthContextProvider>
  );
};

export default ContextProvider;
