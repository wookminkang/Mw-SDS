import React from 'react';
import styles from './Input.module.scss';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: boolean | string;
  success?: boolean | string;
  helpText?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, success, helpText, size = 'md', disabled, ...props }, ref) => {
    
    const isError = !!error;
    const isSuccess = !!success;
    
    const inputClasses = [
      styles.input,
      styles[size],
      isError ? styles.error : '',
      isSuccess ? styles.success : '',
    ].filter(Boolean).join(' ');

    return (
      <div className={[styles.inputContainer, className].filter(Boolean).join(' ')}>
        {label && <label className={styles.label}>{label}</label>}
        <div className={styles.inputWrapper}>
          <input
            ref={ref}
            className={inputClasses}
            disabled={disabled}
            {...props}
          />
        </div>
        {isError && typeof error === 'string' && (
          <span className={[styles.message, styles.error].join(' ')}>{error}</span>
        )}
        {isSuccess && typeof success === 'string' && (
          <span className={[styles.message, styles.success].join(' ')}>{success}</span>
        )}
        {!isError && !isSuccess && helpText && (
          <span className={[styles.message, styles.help].join(' ')}>{helpText}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };

