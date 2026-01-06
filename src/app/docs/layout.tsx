'use client';

import { useState } from 'react';
import Sidebar from "@/components/Sidebar";
import TableOfContents from "@/components/TableOfContents";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white dark:bg-black">
      {/* Desktop Sidebar */}
      <div className="hidden md:block border-r border-gray-200 dark:border-gray-800">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-950 transform transition-transform duration-300 ease-in-out md:hidden
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar onLinkClick={() => setIsSidebarOpen(false)} />
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="flex items-center justify-between px-4 h-14 border-b border-gray-200 dark:border-gray-800 md:hidden sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-md z-30">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 -ml-2 text-gray-600 dark:text-gray-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
          <span className="font-bold text-sm tracking-tight">My Docs</span>
          <div className="w-10" /> {/* Spacer */}
        </header>

        <main className="flex-1 flex justify-center">
          <div className="flex w-full max-w-7xl">
            <div className="flex-1 min-w-0 px-4 sm:px-8 py-8 sm:py-12">
              <article className="prose prose-slate dark:prose-invert max-w-none prose-sm sm:prose-base">
                {children}
              </article>
            </div>
            <div className="hidden lg:block w-64 pt-12 pr-8 shrink-0">
              <TableOfContents />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
