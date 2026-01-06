'use client';

import { useState, useEffect } from 'react';
import Prism from 'prismjs';

// 공통 언어들을 불러옵니다.
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-markdown';

export default function CodeBlock({ children }: any) {
  const [copied, setCopied] = useState(false);
  
  // MDX에서 전달된 언어 정보 추출 (예: language-javascript)
  const language = children?.props?.className?.replace('language-', '') || 'javascript';
  const code = children?.props?.children || '';

  useEffect(() => {
    // Prism 하이라이팅 적용
    Prism.highlightAll();
  }, [code, language]);

  const onCopy = () => {
    if (typeof code === 'string') {
      navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative my-6 group">
      <div className="absolute top-0 left-0 right-0 h-9 bg-slate-800 rounded-t-lg flex items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-[10px] text-slate-500 font-mono uppercase ml-2 tracking-wider">
            {language}
          </span>
        </div>
        <button
          onClick={onCopy}
          className="text-xs text-slate-400 hover:text-slate-200 transition-colors focus:outline-none"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className={`mt-0 mb-0 pt-12 pb-4 px-4 bg-slate-900 rounded-lg overflow-x-auto text-sm font-mono leading-relaxed shadow-xl border border-slate-800 language-${language}`}>
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
