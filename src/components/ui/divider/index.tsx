import React from 'react';
import styles from './Divider.module.scss';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed';
  thickness?: 'thin' | 'thick';
  label?: React.ReactNode;
  labelAlign?: 'left' | 'center' | 'right';
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ 
    className, 
    orientation = 'horizontal', 
    variant = 'solid', 
    thickness = 'thin',
    label,
    labelAlign = 'center',
    children, 
    ...props 
  }, ref) => {
    
    const combinedClassName = [
      styles.divider,
      styles[orientation],
      variant === 'dashed' ? styles.dashed : '',
      thickness === 'thick' ? styles.thick : '',
      label ? styles.withLabel : '',
      label ? styles[labelAlign] : '',
      className
    ].filter(Boolean).join(' ');

    if (orientation === 'horizontal' && label) {
      return (
        <div ref={ref} className={combinedClassName} {...props}>
          <span className={styles.label}>{label}</span>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={combinedClassName}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';

export { Divider };

