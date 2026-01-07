'use client';

import React, { useState } from 'react';
import { Toast, useToast } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";

export const ToastExample = () => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<'top' | 'bottom' | 'center'>('bottom');

  const showToast = (p: 'top' | 'bottom' | 'center') => {
    setPosition(p);
    setOpen(true);
  };

  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="outline" onClick={() => showToast('top')}>Top Toast</Button>
      <Button variant="outline" onClick={() => showToast('bottom')}>Bottom Toast</Button>
      <Button variant="outline" onClick={() => showToast('center')}>Center Toast</Button>
      
      <Toast
        position={position}
        open={open}
        text={`이것은 ${position} 위치의 토스트 메시지입니다.`}
        button={<Toast.Button onClick={() => setOpen(false)}>확인</Toast.Button>}
        duration={3000}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export const ToastActionExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button variant="primary" onClick={() => setOpen(true)}>액션 토스트 열기</Button>
      <Toast
        open={open}
        text="버튼이 포함된 토스트이에요"
        button={<Toast.Button onClick={() => alert('확인 클릭!')}>확인</Toast.Button>}
        duration={5000}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export const ToastHookExample = () => {
  const { toast } = useToast();

  const handleHookToast = () => {
    toast("Hook을 사용하여 띄운 토스트입니다!", {
      position: "top",
      duration: 2000,
    });
  };

  return (
    <Button variant="secondary" onClick={handleHookToast}>
      Hook으로 토스트 열기
    </Button>
  );
};

