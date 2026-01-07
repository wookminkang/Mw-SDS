import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MenuItem {
  name: string;
  href?: string;
  children?: MenuItem[];
}

interface SidebarProps {
  onLinkClick?: () => void;
}

export default function Sidebar({ onLinkClick }: SidebarProps) {
  const pathname = usePathname();

  const menuItems: MenuItem[] = [    
    { 
      name: '가이드 (Guides)', 
      children: [
        { name: '설치하기', href: '/docs/install' },
        { name: '기본 설정', href: '/docs/config' },
      ]
    },
    { 
      name: '컴포넌트 (Components)', 
      children: [
        { name: 'Button', href: '/docs/components/button' },
        { name: 'Badge', href: '/docs/components/badge' },
        { name: 'Skeleton', href: '/docs/components/skeleton' },
        { name: 'Divider', href: '/docs/components/divider' },
        { name: 'TableRow', href: '/docs/components/table-row' },
        { name: 'Tooltip', href: '/docs/components/tooltip' },
        { name: 'Toast', href: '/docs/components/toast' },
        { name: 'Checkbox', href: '/docs/components/checkbox' },
        { name: 'Radio', href: '/docs/components/radio' },
        { name: 'List', href: '/docs/components/list' },
        { name: 'Result', href: '/docs/components/result' },
        { name: 'Input', href: '/docs/components/input' },
        { name: 'Select', href: '/docs/components/select' },
        { name: 'Tabs', href: '/docs/components/tabs' },
      ]
    },
    { name: '테스트 페이지', href: '/docs/hello' },
  ]

  const renderMenuItem = (item: MenuItem, depth = 0) => {
    const isActive = item.href === pathname;
    
    if (item.children) {
      return (
        <div key={item.name} className="mt-6 first:mt-0">
          <h3 className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 ${depth > 0 ? 'ml-4' : ''}`}>
            {item.name}
          </h3>
          <div className="space-y-1">
            {item.children.map(child => renderMenuItem(child, depth + 1))}
          </div>
        </div>
      );
    }

    return (
      <Link
        key={item.href}
        href={item.href || '#'}
        onClick={onLinkClick}
        className={`
          block px-3 py-2 text-sm font-medium rounded-md transition-colors
          ${depth > 0 ? 'ml-4' : ''}
          ${isActive 
            ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20 font-semibold' 
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800'}
        `}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <aside className="w-64 h-full p-6 overflow-y-auto bg-gray-50/50 dark:bg-gray-900/50 border-r border-gray-200 dark:border-gray-800">
      <div className="mb-8 px-3">
        <Link href="/" onClick={onLinkClick}>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">SSDS Docs</h1>
        </Link>
        <p className="text-[10px] text-slate-500 mt-1 font-mono uppercase tracking-widest">Design System v0.1.0</p>
      </div>
      <nav className="space-y-1">
        {menuItems.map(item => renderMenuItem(item))}
      </nav>
    </aside>
  )
}
