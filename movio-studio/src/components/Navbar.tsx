'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Solusi', href: '/solusi' },
  { label: 'Servis', href: '/servis' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

const darkBgPages = ['/', '/portfolio'];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isDarkPage = darkBgPages.includes(pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  const textColor = scrolled || isDarkPage ? 'text-white' : 'text-[#1E3A8A]';
  const logoColor = scrolled || isDarkPage ? 'text-white' : 'text-[#1E3A8A]';

  return (
    <>
      {/* Navbar */}
      <nav
        id="navbar"
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
            ? 'bg-[#0A192F]/90 backdrop-blur-xl py-5 border-b border-blue-400/20'
            : 'py-8 border-b border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="cursor-pointer transition-opacity hover:opacity-80">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-movio.png" alt="Movio Studio Logo" className="h-10 w-auto md:h-12" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10 text-[13px] font-bold tracking-[0.2em] uppercase">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors cursor-pointer hover:text-[#FFB800] ${pathname === item.href
                    ? 'text-[#FFB800]'
                    : `${textColor} opacity-70`
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>



          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden cursor-pointer ${textColor} transition-colors duration-300`}
          >
            {menuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-[#0A192F] z-40 transition-transform duration-700 ease-in-out flex flex-col justify-center px-8 border-b-8 border-[#FFB800] ${menuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className="flex flex-col gap-8 text-4xl font-black text-white tracking-tighter uppercase">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-left transition-colors ${pathname === item.href ? 'text-[#FFB800]' : 'text-white/50'
                }`}
            >
              {item.label}
            </Link>
          ))}

        </div>
      </div>
    </>
  );
}
