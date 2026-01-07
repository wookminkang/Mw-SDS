'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './Tooltip.module.scss';

export interface TooltipProps {
  children: React.ReactElement;
  message: React.ReactNode;
  size?: 'sm' | 'md';
  position?: 'top' | 'bottom' | 'left' | 'right';
  openOnHover?: boolean;
  openOnClick?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  message,
  size = 'sm',
  position = 'top',
  openOnHover = true,
  openOnClick = false,
  open: controlledOpen,
  onOpenChange,
  defaultOpen = false,
  className,
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

  const handleToggle = (nextOpen: boolean) => {
    if (!isControlled) {
      setUncontrolledOpen(nextOpen);
    }
    onOpenChange?.(nextOpen);
  };

  useEffect(() => {
    if (!openOnClick || !isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        handleToggle(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, openOnClick]);

  const trigger = React.cloneElement(children, {
    onMouseEnter: (e: React.MouseEvent) => {
      if (children.props.onMouseEnter) children.props.onMouseEnter(e);
      if (openOnHover) handleToggle(true);
    },
    onMouseLeave: (e: React.MouseEvent) => {
      if (children.props.onMouseLeave) children.props.onMouseLeave(e);
      if (openOnHover) handleToggle(false);
    },
    onClick: (e: React.MouseEvent) => {
      if (children.props.onClick) children.props.onClick(e);
      if (openOnClick) handleToggle(!isOpen);
    },
  } as any);

  return (
    <div 
      ref={containerRef}
      className={[styles.tooltipContainer, className].filter(Boolean).join(' ')}
    >
      {trigger}
      <div 
        className={[
          styles.tooltip,
          styles[size],
          styles[position],
          isOpen ? styles.open : ''
        ].join(' ')}
      >
        {message}
      </div>
    </div>
  );
};

export { Tooltip };
