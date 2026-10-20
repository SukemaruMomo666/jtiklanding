import { PRESTASI_LIST } from '../data/landingData';
import { Award, Sparkles } from './Icons';

export default function KaryaPrestasiSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F4F7FB] border-t border-slate-200/80">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#D97706]/10 text-[#D97706] text-xs font-mono font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Rekam Jejak Keunggulan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102746] tracking-tight">
              Karya, Riset &amp; Prestasi Civitas
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
              Bukti nyata komitmen JTIK POLSUB dalam riset terapan, pengabdian masyarakat, dan sertifikasi kompetensi kejuruan yang diakui secara nasional.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-500">
            <Award className="w-4 h-4 text-[#D97706]" />
            <span>Dokumentasi Resmi 2024–2026</span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRESTASI_LIST.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 text-[10.5px] font-mono font-bold tracking-wider rounded bg-[#102746]/90 backdrop-blur-xs text-white border border-white/20">
                      {item.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-white/90 text-slate-700 shadow-xs">
                      {item.year}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#3182CE] block mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-[#102746] group-hover:text-[#3182CE] transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>JTIK POLSUB</span>
                  <span className="text-[#3182CE] font-bold">Terverifikasi</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
