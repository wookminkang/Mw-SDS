import React from 'react';
import styles from './Badge.module.scss';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  isFilled?: boolean;
  isPill?: boolean;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'primary', size = 'md', isFilled = false, isPill = false, children, ...props }, ref) => {
    
    const combinedClassName = [
      styles.badge,
      styles[variant],
      styles[size],
      isFilled ? styles.filled : '',
      isPill ? styles.pill : '',
      className
    ].filter(Boolean).join(' ');

    return (
      <span
        ref={ref}
        className={combinedClassName}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };

