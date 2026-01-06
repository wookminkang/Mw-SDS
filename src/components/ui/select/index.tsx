import React from 'react';
import styles from './Select.module.scss';

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  error?: boolean | string;
  success?: boolean | string;
  helpText?: string;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, success, helpText, size = 'md', disabled, children, ...props }, ref) => {
    
    const isError = !!error;
    const isSuccess = !!success;
    
    const selectClasses = [
      styles.select,
      styles[size],
      isError ? styles.error : '',
      isSuccess ? styles.success : '',
    ].filter(Boolean).join(' ');

    return (
      <div className={[styles.selectContainer, className].filter(Boolean).join(' ')}>
        {label && <label className={styles.label}>{label}</label>}
        <div className={styles.selectWrapper}>
          <select
            ref={ref}
            className={selectClasses}
            disabled={disabled}
            {...props}
          >
            {children}
          </select>
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

Select.displayName = 'Select';

export { Select };

