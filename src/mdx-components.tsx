import type { MDXComponents } from 'mdx/types';
import React from 'react';
import Image, { ImageProps } from 'next/image';
import CodeBlock from './components/CodeBlock';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => {
      const text = React.Children.toArray(children).join('');
      const id = text
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\uAC00-\uD7A3-]/g, '');
      return (
        <h1 id={id} className="group flex whitespace-pre-wrap mt-12 mb-6 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          <a href={`#${id}`} className="absolute -ml-8 flex items-center opacity-0 group-hover:opacity-100 text-slate-400 no-underline">
            #
          </a>
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      const text = React.Children.toArray(children).join('');
      const id = text
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\uAC00-\uD7A3-]/g, '');
      return (
        <h2 id={id} className="group flex whitespace-pre-wrap mt-10 mb-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-5">
          <a href={`#${id}`} className="absolute -ml-8 flex items-center opacity-0 group-hover:opacity-100 text-slate-400 no-underline">
            #
          </a>
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const text = React.Children.toArray(children).join('');
      const id = text
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\uAC00-\uD7A3-]/g, '');
      return (
        <h3 id={id} className="group flex whitespace-pre-wrap mt-8 mb-4 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          <a href={`#${id}`} className="absolute -ml-8 flex items-center opacity-0 group-hover:opacity-100 text-slate-400 no-underline">
            #
          </a>
          {children}
        </h3>
      );
    },
    pre: (props) => <CodeBlock {...props} />,
    code: ({ children, ...props }) => {
      const isInline = typeof children === 'string' && !children.includes('\n');
      if (isInline) {
        return (
          <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-pink-600 dark:text-pink-400 font-mono text-[0.9em]" {...props}>
            {children}
          </code>
        );
      }
      return <code {...props}>{children}</code>;
    },
    img: (props) => {
      const { src, alt } = props as any;
      
      // MDX에서 들어오는 이미지는 단순하게 브라우저 기본 img 태그를 사용하는 것이 가장 안전합니다.
      // Next.js Image를 쓰려면 width, height 정보가 명확해야 하기 때문입니다.
      return (
        <div className="my-8 flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt || ''}
            className="rounded-xl shadow-md border border-slate-200 dark:border-slate-800"
            style={{ maxWidth: '100%', height: 'auto' }}
            loading="lazy"
          />
        </div>
      );
    },
  };
}
