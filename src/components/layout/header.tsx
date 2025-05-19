
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, CodeXml } from 'lucide-react';
import type { NavItem } from '@/types/portfolio';
import { useState, useEffect } from 'react';
import { ThemeToggleButton } from '@/components/theme-toggle-button';

const navItems: NavItem[] = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';
      navItems.forEach(item => {
        const section = document.getElementById(item.href.substring(1));
        if (section && section.offsetTop <= window.scrollY + 100) { // 100px offset
          currentSection = item.href;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <CodeXml className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-foreground">MyPortfolio</span>
        </Link>
        
        <div className="flex items-center gap-2">
          <nav className="hidden md:flex gap-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                asChild
                className={`transition-colors hover:text-accent-foreground ${activeSection === item.href ? 'text-accent-foreground bg-accent/20' : 'text-muted-foreground'}`}
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </nav>

          <ThemeToggleButton />

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background">
              <div className="flex flex-col gap-6 p-6 pt-12">
                <Link href="/" className="mb-4 flex items-center gap-2 self-start" onClick={handleLinkClick}>
                  <CodeXml className="h-7 w-7 text-primary" />
                  <span className="text-xl font-bold text-foreground">MyPortfolio</span>
                </Link>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    asChild
                    className={`w-full justify-start text-lg transition-colors hover:text-accent-foreground ${activeSection === item.href ? 'text-accent-foreground bg-accent/20' : 'text-muted-foreground'}`}
                    onClick={handleLinkClick}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
