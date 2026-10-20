import { ArrowRight, ChevronRight, Award, Building2 } from './Icons';

interface HeroSectionProps {
  onOpenProfilModal: () => void;
}

export default function HeroSection({ onOpenProfilModal }: HeroSectionProps) {
  return (
    <section
      id="beranda"
      className="relative pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 lg:pb-24 overflow-hidden bg-gradient-to-b from-white via-[#F4F7FB]/50 to-[#F4F7FB]"
    >
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60" aria-hidden="true" />

      <div className="container-editorial relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Editorial Text Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Eyebrow Institutional Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#102746]/5 border border-[#102746]/10 text-[#102746] text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#3182CE]" />
              <span>Politeknik Negeri Subang • JTIK</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#102746] leading-[1.12]">
              Teknologi untuk Berkarya.{' '}
              <span className="text-[#3182CE] inline-block">
                Inovasi untuk Masa Depan.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-[19px] text-slate-600 leading-relaxed max-w-2xl font-normal">
              Kenali Jurusan Teknologi Informasi dan Komputer Politeknik Negeri Subang, jelajahi program studi, dan temukan karya serta aktivitas akademik.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#program-studi"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#102746] hover:bg-[#183B6B] active:bg-[#0A192F] text-white text-[15px] font-semibold tracking-wide shadow-md shadow-[#102746]/10 transition-all duration-200 group"
              >
                <span>Jelajahi Program Studi</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                type="button"
                onClick={onOpenProfilModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 hover:text-[#102746] text-[15px] font-semibold transition-all duration-200"
              >
                <span>Tentang JTIK</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Institutional Credentials Bar */}
            <div className="pt-6 sm:pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#102746] tracking-tight">
                  3 Prodi
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  D3 SI, D4 TRPL, D4 BD
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#3182CE] tracking-tight">
                  60 : 40
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  Praktik &amp; Teori Vokasi
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#102746] tracking-tight">
                  2 Kampus
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  Ciereng &amp; Cibogo Subang
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl bg-white group">
              {/* Authentic Campus / Activity Image - high priority LCP, no lazy load */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] overflow-hidden bg-slate-100">
                <img
                  src="/images/hero-arah-cta.webp"
                  alt="Aktivitas dan lingkungan akademik Jurusan Teknologi Informasi dan Komputer POLSUB"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Refined gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102746]/90 via-[#102746]/20 to-transparent" />

                {/* Editorial Caption overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/20 backdrop-blur-md text-[11px] font-mono tracking-wider font-semibold uppercase text-white">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Politeknik Negeri Subang</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold leading-snug tracking-tight">
                    Pusat Keunggulan Pendidikan Vokasi Terapan Teknologi &amp; Komputer
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 font-normal">
                    Mempersiapkan talenta digital yang adaptif, siap kerja, dan berdaya saing tinggi di tingkat nasional dan global.
                  </p>
                </div>
              </div>

              {/* Floating Feature Tag */}
              <div className="hidden sm:flex absolute top-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200 rounded-lg p-2.5 shadow-lg items-center gap-2 text-xs font-semibold text-[#102746]">
                <Award className="w-4 h-4 text-[#D97706]" />
                <span>Terakreditasi BAN-PT</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
