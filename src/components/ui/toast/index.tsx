'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Toast.module.scss';

export interface ToastProps {
  open: boolean;
  position?: 'top' | 'bottom' | 'center';
  text: string;
  duration?: number;
  onClose: () => void;
  button?: React.ReactNode;
  className?: string;
}

const ToastMain: React.FC<ToastProps> = ({
  open,
  position = 'bottom',
  text,
  duration = 3000,
  onClose,
  button,
  className,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [open, duration, onClose]);

  if (!mounted) return null;

  return createPortal(
    <div className={[styles.toastWrapper, styles[position], className].filter(Boolean).join(' ')}>
      <div className={[
        styles.toast,
        styles[position],
        open ? styles.open : ''
      ].join(' ')}>
        <div className={styles.text}>{text}</div>
        {button && <div className={styles.buttonArea}>{button}</div>}
      </div>
    </div>,
    document.body
  );
};

const ToastButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...props }) => {
  return (
    <button className={[styles.toastButton, className].filter(Boolean).join(' ')} {...props}>
      {children}
    </button>
  );
};

export * from './ToastProvider';

export const Toast = Object.assign(ToastMain, {
  Button: ToastButton,
});

