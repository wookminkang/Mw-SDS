'use client';
import React from 'react';
import styles from './Tabs.module.scss';

export interface TabItem {
  id: string;
  label: React.ReactNode;
  content?: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  activeTab?: string;
  onChange?: (id: string) => void;
  variant?: 'line' | 'pill';
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ 
  items, 
  activeTab, 
  onChange, 
  variant = 'line',
  className 
}) => {
  const [internalActiveTab, setInternalActiveTab] = React.useState(items[0]?.id);
  
  const currentActiveTab = activeTab !== undefined ? activeTab : internalActiveTab;

  const handleTabClick = (id: string) => {
    if (activeTab === undefined) {
      setInternalActiveTab(id);
    }
    if (onChange) {
      onChange(id);
    }
  };

  const activeContent = items.find(item => item.id === currentActiveTab)?.content;

  return (
    <div className={[styles.tabsContainer, className].filter(Boolean).join(' ')}>
      <div className={[styles.tabList, styles[variant]].join(' ')}>
        {items.map((item) => (
          <button
            key={item.id}
            className={[
              styles.tab,
              currentActiveTab === item.id ? styles.active : ''
            ].join(' ')}
            onClick={() => handleTabClick(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      {activeContent && (
        <div className={styles.tabPanel}>
          {activeContent}
        </div>
      )}
    </div>
  );
};

export { Tabs };

