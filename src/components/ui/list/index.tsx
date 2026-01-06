import React from 'react';
import styles from './List.module.scss';

export interface ListProps extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  variant?: 'dot' | 'ordered' | 'dash' | 'none';
  spacing?: 'sm' | 'md' | 'lg';
  color?: 'default' | 'primary';
}

const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({ className, variant = 'dot', spacing = 'md', color = 'default', children, ...props }, ref) => {
    
    const Tag = variant === 'ordered' ? 'ol' : 'ul';
    
    const combinedClassName = [
      styles.list,
      styles[variant],
      styles[spacing],
      color === 'primary' ? styles.primary : '',
      className
    ].filter(Boolean).join(' ');

    return (
      <Tag
        ref={ref as any}
        className={combinedClassName}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const element = child as React.ReactElement<{ className?: string }>;
            return React.cloneElement(element, {
              className: [styles.listItem, element.props.className].filter(Boolean).join(' ')
            });
          }
          return child;
        })}
      </Tag>
    );
  }
);

export const ListItem = ({ children, className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
  <li className={className} {...props}>
    {children}
  </li>
);

List.displayName = 'List';

export { List };

