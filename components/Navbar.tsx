'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Leo Club SC',
    href: '#',
    children: [
      { label: 'Current Leaders', href: '/current-leaders' },
      { label: 'Past Leaders', href: '/past-leaders' },
      { label: 'Awards', href: '/awards' },
      { label: 'Journey to Excellence', href: '/journey' },
      { label: 'Club Logo', href: '/club-logo' },
    ],
  },
  {
    label: 'About Us',
    href: '#',
    children: [
      { label: 'Leoism', href: '/leoism' },
      { label: 'Lions International', href: '/lions' },
      { label: 'Leo District 306 D2', href: '/district' },
      { label: 'Multiple District 306', href: '/multiple-district' },
    ],
  },
  {
    label: 'Projects',
    href: '#',
    children: [
      { label: 'Project Map', href: '/projects' },
      { label: 'Leo Navigation Map', href: '/navigation' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    label: 'Downloads',
    href: '#',
    children: [
      { label: 'Newsletter', href: '/newsletter' },
      { label: 'Club Directory', href: '/directory' },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0033A0] shadow-2xl shadow-blue-900/40'
          : 'bg-[#0033A0]/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-[#0033A0] font-black text-sm">LC</span>
            </div>
            <div className="leading-tight">
              <div className="text-white font-bold text-sm">Leo Club</div>
              <div className="text-[#FFD700] text-xs font-medium">Sample City</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="relative dropdown-parent group">
                  <button className="flex items-center gap-1 text-white/90 hover:text-[#FFD700] text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 navbar-link">
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  <div className="dropdown-menu absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#0033A0] hover:text-white transition-all duration-200 border-b border-gray-50 last:border-0"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/90 hover:text-[#FFD700] text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 navbar-link"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="#donate"
              className="bg-[#FFD700] text-[#0033A0] font-bold text-sm px-5 py-2 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-400/30 hover:scale-105 pulse-glow"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#001f6b] border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label
                        )
                      }
                      className="flex items-center justify-between w-full text-white/90 text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-white/10"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-white/70 text-sm px-3 py-2 rounded-lg hover:bg-white/10 hover:text-[#FFD700] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-white/90 text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-white/10 hover:text-[#FFD700]"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3">
              <Link
                href="#donate"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-[#FFD700] text-[#0033A0] font-bold text-sm px-5 py-3 rounded-full hover:bg-yellow-400 transition-all duration-300"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
