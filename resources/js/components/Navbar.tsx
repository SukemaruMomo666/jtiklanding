import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from './Icons';

interface NavbarProps {
  onOpenProfilModal: () => void;
}

export default function Navbar({ onOpenProfilModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active section detection
      const sections = ['beranda', 'tentang-jtik', 'program-studi', 'berita', 'galeri', 'kontak'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Beranda', href: '#beranda', id: 'beranda' },
    { label: 'Profil JTIK', href: '#tentang-jtik', id: 'tentang-jtik', onClick: onOpenProfilModal },
    { label: 'Program Studi', href: '#program-studi', id: 'program-studi' },
    { label: 'Berita', href: '#berita', id: 'berita' },
    { label: 'Galeri', href: '#galeri', id: 'galeri' },
    { label: 'Kontak', href: '#kontak', id: 'kontak' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, onClick?: () => void) => {
    setMobileMenuOpen(false);
    if (onClick && href === '#tentang-jtik') {
      // Allow scroll and open modal
      onClick();
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Lewati ke konten utama
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(16,39,70,0.08)] border-b border-slate-200/80 py-3'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/60 py-3.5 sm:py-4'
        }`}
      >
        {/* Top Institutional Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#102746] via-[#3182CE] to-[#102746]" />

        <div className="container-editorial flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#beranda"
            className="flex items-center gap-3 sm:gap-3.5 group focus:outline-none"
            aria-label="Kembali ke Beranda Politeknik Negeri Subang"
          >
            <img
              src="/images/polsub.png"
              alt="Logo Politeknik Negeri Subang"
              width="44"
              height="44"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain drop-shadow-[0_4px_12px_rgba(49,130,206,0.38)] group-hover:drop-shadow-[0_6px_18px_rgba(49,130,206,0.6)] transition-all duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-[14.5px] sm:text-[16px] font-extrabold tracking-tight text-[#102746] leading-none group-hover:text-[#3182CE] transition-colors">
                Politeknik Negeri Subang
              </span>
              <span className="text-[11px] sm:text-[12px] font-medium text-slate-500 tracking-tight mt-1 leading-tight group-hover:text-slate-700 transition-colors">
                Jurusan Teknologi Informasi &amp; Komputer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Navigasi Utama">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.onClick)}
                  className={`relative px-3.5 py-2 text-[13.5px] font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-[#3182CE] font-semibold bg-[#3182CE]/10 shadow-xs'
                      : 'text-slate-600 hover:text-[#102746] hover:bg-slate-100/80'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3182CE] animate-pulse" />
                    )}
                    {link.label}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Secondary CTA: Aspirasi Portal */}
            <a
              href="https://aspirasi.jtik.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-3.5 py-2 text-[13px] font-semibold text-[#102746] hover:text-[#3182CE] bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#3182CE]/40 shadow-xs hover:shadow-sm rounded-lg transition-all duration-200"
              aria-label="Kunjungi Portal Aspirasi JTIK (buka di tab baru)"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Aspirasi</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#3182CE] transition-colors" />
            </a>

            {/* Primary CTA: Jelajahi Program Studi */}
            <a
              href="#program-studi"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-semibold text-white bg-gradient-to-r from-[#102746] via-[#14325c] to-[#183B6B] hover:from-[#183B6B] hover:to-[#3182CE] shadow-sm hover:shadow-md hover:shadow-[#102746]/15 hover:-translate-y-0.5 active:translate-y-0 rounded-lg transition-all duration-200"
            >
              <span>Jelajahi Prodi</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#102746] hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi utama'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-50 lg:hidden bg-[#0A192F]/70 backdrop-blur-md animate-fade-in pt-18 pb-6 px-4 flex flex-col justify-start"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-5 sm:p-6 shadow-2xl border border-slate-200/90 space-y-5 max-w-md mx-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Header Branding */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <img
                  src="/images/polsub.png"
                  alt="Logo Politeknik Negeri Subang"
                  width="36"
                  height="36"
                  className="w-8 h-8 object-contain drop-shadow-[0_3px_8px_rgba(49,130,206,0.35)]"
                />
                <div className="flex flex-col">
                  <span className="text-[13.5px] font-extrabold text-[#102746]">
                    Politeknik Negeri Subang
                  </span>
                  <span className="text-[11px] font-medium text-slate-500 mt-0.5">
                    Jurusan Teknologi Informasi &amp; Komputer
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Tutup menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-1" aria-label="Navigasi Ponsel">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.onClick)}
                  className={`flex items-center justify-between px-3.5 py-2.5 text-[14.5px] rounded-xl transition-all duration-150 font-medium ${
                    activeSection === link.id
                      ? 'bg-[#3182CE]/10 text-[#3182CE] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#102746]'
                  }`}
                >
                  <span>{link.label}</span>
                  {activeSection === link.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3182CE]" />
                  )}
                </a>
              ))}
            </nav>

            {/* Mobile Action Buttons */}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="#program-studi"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 text-sm font-semibold text-white bg-gradient-to-r from-[#102746] to-[#183B6B] hover:to-[#3182CE] rounded-xl shadow-xs transition-all"
              >
                Jelajahi Program Studi
              </a>
              <a
                href="https://aspirasi.jtik.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-[#102746] hover:text-[#3182CE] bg-slate-50 hover:bg-slate-100 border border-slate-200/90 rounded-xl transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Portal Aspirasi JTIK</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
