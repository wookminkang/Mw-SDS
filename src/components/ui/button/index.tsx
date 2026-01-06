import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'outline' | 'ghost' | 'danger' | 'blue';
  size?: 'xsmall' | 'small' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    
    // 클래스 결합 (Sass 변수 기반 플랫 구조)
    const combinedClassName = [      
      styles.button,
      styles[variant as string] || '',
      styles[size as string] || '',
      isLoading ? styles.isLoading : '',
      className
    ].filter(Boolean).join(' ');

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled}
        {...props}
      >
        {isLoading && <span className={styles.spinner} />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
