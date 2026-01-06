import React from 'react';
import styles from './Checkbox.module.scss';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'circle' | 'line';
  label?: React.ReactNode;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, variant = 'circle', label, disabled, checked, ...props }, ref) => {
    
    return (
      <label className={[
        styles.checkboxContainer,
        disabled ? styles.disabled : '',
        className
      ].filter(Boolean).join(' ')}>
        <input
          type="checkbox"
          ref={ref}
          className={styles.input}
          disabled={disabled}
          checked={checked}
          {...props}
        />
        <div className={styles[variant]}>
          <svg 
            className={styles.icon} 
            width="14" 
            height="10" 
            viewBox="0 0 14 10" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M1 5L5 9L13 1" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {label && <span className={styles.label}>{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };

