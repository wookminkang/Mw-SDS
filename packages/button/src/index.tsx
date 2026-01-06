import React from 'react';
import './mw-Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    
    // 클래스 결합 (문자열 방식)
    const combinedClassName = [
      'mw-button',
      `mw-variant-${variant}`,
      `mw-size-${size}`,
      className
    ].filter(Boolean).join(' ');

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <span className="mw-spinner" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
