import React from 'react';
import styles from './Skeleton.module.scss';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  variant?: 'rect' | 'circle' | 'rounded';
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, width, height, variant = 'rect', style, ...props }, ref) => {
    
    const combinedClassName = [
      styles.skeleton,
      styles[variant],
      className
    ].filter(Boolean).join(' ');

    const customStyle: React.CSSProperties = {
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height,
      ...style
    };

    return (
      <div
        ref={ref}
        className={combinedClassName}
        style={customStyle}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

export { Skeleton };

