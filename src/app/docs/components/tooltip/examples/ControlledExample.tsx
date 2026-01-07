'use client';

import React, { useState } from 'react';
import { Tooltip } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export const ControlledTooltipExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Tooltip 
      message="클릭으로 제어되는 툴팁입니다!" 
      open={isOpen} 
      openOnHover={false}
      position="top"
    >
      <Button variant="primary" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close Tooltip" : "Click Me"}
      </Button>
    </Tooltip>
  );
};

