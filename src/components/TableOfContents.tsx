'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function TableOfContents() {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const pathname = usePathname();

  useEffect(() => {
    // 페이지가 이동하거나 마운트된 후 잠시 대기하여 콘텐츠가 렌더링되기를 기다립니다.
    const timer = setTimeout(() => {
      const elements = Array.from(document.querySelectorAll('article h2, article h3'))
        .map((elem) => ({
          id: elem.id,
          text: elem.textContent || '',
          level: Number(elem.tagName.substring(1)),
        }));
      setHeadings(elements);

      // Intersection Observer 설정
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: '-100px 0px -70% 0px' }
      );

      elements.forEach((heading) => {
        const el = document.getElementById(heading.id);
        if (el) observer.observe(el);
      });

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]); // 경로가 바뀔 때마다 다시 실행

  if (headings.length === 0) return null;

  return (
    <nav className="hidden lg:block w-64 sticky top-12 h-fit max-h-[calc(100vh-100px)] overflow-y-auto px-4 border-l border-gray-100 dark:border-gray-800">
      <p className="text-sm font-semibold mb-4 text-gray-900 dark:text-gray-100 uppercase tracking-wider">
        On This Page
      </p>
      <ul className="space-y-3">
        {headings.map((heading) => (
          <li
            key={heading.id + heading.text}
            style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
          >
            <a
              href={`#${heading.id}`}
              className={`text-sm transition-colors ${
                activeId === heading.id
                  ? 'text-blue-600 font-medium dark:text-blue-400'
                  : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
              onClick={(e) => {
                e.preventDefault();
                if (heading.id) {
                  document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', `#${heading.id}`);
                }
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
