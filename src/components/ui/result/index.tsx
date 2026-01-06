import React from 'react';
import styles from './Result.module.scss';

export interface ResultProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  figure?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  extra?: React.ReactNode;
}

const Result = React.forwardRef<HTMLDivElement, ResultProps>(
  ({ className, figure, title, description, extra, ...props }, ref) => {
    
    return (
      <div
        ref={ref}
        className={[styles.result, className].filter(Boolean).join(' ')}
        {...props}
      >
        {figure && <div className={styles.figure}>{figure}</div>}
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
        {extra && <div className={styles.extra}>{extra}</div>}
      </div>
    );
  }
);

Result.displayName = 'Result';

export { Result };

