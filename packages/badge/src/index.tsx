'use client';

import React from 'react';
import './mw-Badge.css';

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="mw-badge">
      {children}
    </span>
  );
}

export { Badge };
