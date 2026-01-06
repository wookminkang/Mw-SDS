import React from 'react';
import styles from './TableRow.module.scss';

export interface TableRowProps extends React.HTMLAttributes<HTMLDivElement> {
  left: React.ReactNode;
  right: React.ReactNode;
  align?: 'top' | 'center' | 'bottom' | 'space-between';
  leftRatio?: number; // percentage (e.g., 30 for 30%)
}

const TableRow = React.forwardRef<HTMLDivElement, TableRowProps>(
  ({ className, left, right, align = 'center', leftRatio = 30, ...props }, ref) => {
    
    // styles[align]을 사용하여 'space-between' 등 모든 케이스 대응
    const combinedClassName = [
      styles.tableRow,
      styles[align],
      className
    ].filter(Boolean).join(' ');

    const leftStyle: React.CSSProperties = align === 'space-between' 
      ? {} 
      : { flexBasis: `${leftRatio}%` };

    return (
      <div
        ref={ref}
        className={combinedClassName}
        {...props}
      >
        <div 
          className={styles.left} 
          style={leftStyle}
        >
          {left}
        </div>
        <div className={styles.right}>
          {right}
        </div>
      </div>
    );
  }
);

TableRow.displayName = 'TableRow';

export { TableRow };
