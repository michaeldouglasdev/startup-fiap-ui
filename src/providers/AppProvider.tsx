import React from 'react';
import { ToastProvider } from './ToastProvider';

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
    {children}
  </ToastProvider>
);

export default AppProvider;
