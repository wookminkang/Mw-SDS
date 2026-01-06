import React from 'react';
import styles from './Radio.module.scss';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, disabled, ...props }, ref) => {
    
    return (
      <label className={[
        styles.radioContainer,
        disabled ? styles.disabled : '',
        className
      ].filter(Boolean).join(' ')}>
        <input
          type="radio"
          ref={ref}
          className={styles.input}
          disabled={disabled}
          {...props}
        />
        <div className={styles.circle} />
        {label && <span className={styles.label}>{label}</span>}
      </label>
    );
  }
);

Radio.displayName = 'Radio';

export { Radio };

