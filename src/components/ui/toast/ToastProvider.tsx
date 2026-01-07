'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { Toast } from './index';

interface ToastOptions {
  type?: 'success' | 'danger' | 'info';
  position?: 'top' | 'bottom' | 'center';
  duration?: number;
  button?: React.ReactNode;
}

interface ToastContextType {
  toast: (message: string, options?: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [options, setOptions] = useState<ToastOptions>({});

  const showToast = useCallback((msg: string, opts?: ToastOptions) => {
    setMessage(msg);
    setOptions(opts || {});
    setOpen(true);
  }, []);

  const closeToast = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <ToastContext.Provider value={{ toast: showToast }}>
      {children}
      <Toast
        open={open}
        text={message}
        position={options.position || 'bottom'}
        duration={options.duration}
        onClose={closeToast}
        button={options.button}
      />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

