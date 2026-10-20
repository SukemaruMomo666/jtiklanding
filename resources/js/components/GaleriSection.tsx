import { useState, useEffect } from 'react';
import { GALERI_LIST } from '../data/landingData';
import { GaleriItem } from '../types/landing';
import { X, ChevronLeft, ChevronRight } from './Icons';

export default function GaleriSection() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev !== null ? (prev + 1) % GALERI_LIST.length : null));
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev !== null ? (prev - 1 + GALERI_LIST.length) % GALERI_LIST.length : null));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeImageIndex]);

  const activeItem = activeImageIndex !== null ? GALERI_LIST[activeImageIndex] : null;

  return (
    <section id="galeri" className="py-16 sm:py-20 lg:py-24 bg-[#F4F7FB] border-t border-slate-200/80">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#3182CE]/10 text-[#3182CE] text-xs font-mono font-semibold tracking-wider uppercase mb-3">
              <span>Dokumentasi Kampus</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102746] tracking-tight">
              Galeri Kegiatan &amp; Dinamika Mahasiswa
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              Sorotan kegiatan praktikum, inovasi proyek, sertifikasi kejuruan, dan atmosfer akademik di lingkungan JTIK.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400 hidden sm:block">
            Klik foto untuk memperbesar
          </span>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[220px]">
          {GALERI_LIST.map((item: GaleriItem, idx: number) => (
            <div
              key={item.id}
              onClick={() => setActiveImageIndex(idx)}
              className={`group relative rounded-xl overflow-hidden cursor-pointer border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 bg-slate-200 ${item.colSpan || ''}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveImageIndex(idx);
                }
              }}
              aria-label={`Lihat foto ${item.title}`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay on hover / focus */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/85 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-white">
                <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#3182CE] bg-white/90 px-2 py-0.5 rounded shadow-xs inline-block mb-1.5">
                  {item.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold leading-snug tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-200 mt-1 line-clamp-2 hidden sm:block opacity-90">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {activeItem && activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={() => setActiveImageIndex(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-4 right-4 z-10 p-2.5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none"
            aria-label="Tutup pratinjau foto"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex((activeImageIndex - 1 + GALERI_LIST.length) % GALERI_LIST.length);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none hidden sm:block"
            aria-label="Foto sebelumnya"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex((activeImageIndex + 1) % GALERI_LIST.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none hidden sm:block"
            aria-label="Foto berikutnya"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Photo Card in Lightbox */}
          <div
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeItem.imageUrl}
              alt={activeItem.title}
              className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
            />
            <div className="mt-4 text-center text-white max-w-2xl px-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#3182CE]">
                {activeItem.category}
              </span>
              <h3 className="text-base sm:text-lg font-bold mt-0.5">
                {activeItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {activeItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
