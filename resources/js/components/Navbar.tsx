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
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4 sm:py-5'
        }`}
      >
        <div className="container-editorial flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#beranda"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="Kembali ke Beranda JTIK POLSUB"
          >
            <img
              src="/images/polsub.png"
              alt="Logo Politeknik Negeri Subang"
              width="46"
              height="46"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain transition-transform group-hover:scale-105 duration-200"
            />
            <div className="flex flex-col">
              <span className="text-[15px] sm:text-[16px] font-extrabold tracking-tight text-[#102746] leading-none group-hover:text-[#3182CE] transition-colors">
                JTIK POLSUB
              </span>
              <span className="text-[11px] sm:text-[12px] font-medium text-slate-500 tracking-normal mt-0.5 leading-tight">
                Jurusan Teknologi Informasi &amp; Komputer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Navigasi Utama">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.onClick)}
                  className={`px-3 py-2 text-[14px] font-medium rounded-md transition-all duration-150 ${
                    isActive
                      ? 'text-[#3182CE] font-semibold bg-[#3182CE]/5'
                      : 'text-slate-700 hover:text-[#102746] hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Secondary CTA: Aspirasi */}
            <a
              href="https://aspirasi.jtik.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[13.5px] font-semibold text-[#102746] hover:text-[#3182CE] bg-slate-100/80 hover:bg-slate-200/70 border border-slate-200/90 rounded-lg transition-all duration-150"
              aria-label="Kunjungi Portal Aspirasi JTIK (buka di tab baru)"
            >
              <span>Aspirasi</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
            </a>

            {/* Primary CTA: Jelajahi Program Studi */}
            <a
              href="#program-studi"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-[13.5px] font-semibold text-white bg-[#102746] hover:bg-[#183B6B] active:bg-[#0A192F] shadow-sm rounded-lg transition-all duration-150"
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
          className="fixed inset-0 z-30 lg:hidden bg-[#0A192F]/60 backdrop-blur-sm animate-fade-in pt-20 pb-6 px-4 flex flex-col justify-between"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 shadow-2xl border border-slate-200/90 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-mono font-bold text-slate-400 tracking-wider uppercase">
                Menu Utama
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-md"
                aria-label="Tutup menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-1" aria-label="Navigasi Ponsel">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.onClick)}
                  className={`px-3.5 py-2.5 text-[15px] rounded-lg transition-colors font-medium ${
                    activeSection === link.id
                      ? 'bg-[#3182CE]/10 text-[#3182CE] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#102746]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="#program-studi"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 text-sm font-semibold text-white bg-[#102746] rounded-lg shadow-sm"
              >
                Jelajahi Program Studi
              </a>
              <a
                href="https://aspirasi.jtik.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 text-sm font-semibold text-[#102746] bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg"
              >
                <span>Portal Aspirasi JTIK</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
