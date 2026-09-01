import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';
import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="pt-16 bg-linear-to-br from-[#0a0f1e] via-[#001f6b] to-[#0033A0] min-h-[260px] flex items-end">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 w-full">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-white/50 mb-6 flex-wrap">
          <Link href="/" className="hover:text-[#FFD700] transition-colors flex items-center gap-1">
            <Home className="w-3 h-3" /> Home
          </Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              <ChevronRight className="w-3 h-3" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-[#FFD700] transition-colors">{crumb.label}</Link>
              ) : (
                <span className="text-white/80">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-4xl md:text-5xl font-black text-white font-display">{title}</h1>
        {subtitle && <p className="text-white/60 mt-2 max-w-xl">{subtitle}</p>}
      </div>
    </div>
  );
}
