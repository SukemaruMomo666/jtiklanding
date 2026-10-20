import { TENTANG_JTIK } from '../data/landingData';
import { CheckCircle2, ChevronRight, Building2, MapPin } from './Icons';

interface TentangSectionProps {
  onOpenProfilModal: () => void;
}

export default function TentangSection({ onOpenProfilModal }: TentangSectionProps) {
  return (
    <section id="tentang-jtik" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200/80">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#102746]/5 text-[#102746] text-xs font-mono font-semibold tracking-wider uppercase">
              <Building2 className="w-3.5 h-3.5 text-[#3182CE]" />
              <span>Profil Jurusan</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102746] tracking-tight leading-tight">
              Membangun Generasi Unggul di Pusat Transformasi Digital
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {TENTANG_JTIK.ringkasan}
            </p>

            {/* 4 Pilar Keunggulan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {TENTANG_JTIK.pilar.map((pilar, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#F4F7FB]/70 border border-slate-200/80">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3182CE] shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-bold text-[#102746] leading-snug">
                        {pilar.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {pilar.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA to Profil Modal */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenProfilModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#102746] hover:bg-[#183B6B] text-white text-sm font-semibold shadow-sm transition-all duration-150 focus:outline-none"
              >
                <span>Lihat Visi, Misi &amp; Struktur Lengkap</span>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </button>
            </div>
          </div>

          {/* Visual Architecture & Highlights Column */}
          <div className="lg:col-span-6 space-y-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/images/mahasiswa-diskusi-aspirasi.webp"
                  alt="Aktivitas kolaboratif civitas akademika JTIK POLSUB"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102746]/85 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-200 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#3182CE]" />
                    <span>Subang, Jawa Barat</span>
                  </div>
                  <h3 className="text-lg font-bold tracking-tight">
                    Ekosistem Belajar Kolaboratif &amp; Aplikatif
                  </h3>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Memfasilitasi mahasiswa memecahkan persoalan dunia nyata melalui proyek rekayasa perangkat lunak dan bisnis digital.
                  </p>
                </div>
              </div>
            </div>

            {/* Sub-card Dual Campus Notice */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#F4F7FB] border border-slate-200/80">
                <span className="text-[11px] font-mono font-bold text-[#3182CE] uppercase block mb-1">
                  Kampus Ciereng
                </span>
                <p className="text-xs text-slate-600 leading-snug">
                  Gedung perkuliahan &amp; laboratorium komputer utama dekat pusat kota Subang.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F4F7FB] border border-slate-200/80">
                <span className="text-[11px] font-mono font-bold text-[#3182CE] uppercase block mb-1">
                  Kampus Cibogo
                </span>
                <p className="text-xs text-slate-600 leading-snug">
                  Kawasan kampus terpadu POLSUB dengan fasilitas pengembangan akademik luas.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
