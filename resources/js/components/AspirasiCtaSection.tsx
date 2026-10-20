import { ArrowUpRight, ShieldCheck, MessageSquare, ArrowRight } from './Icons';

export default function AspirasiCtaSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#102746] text-white overflow-hidden">
      {/* Dark Grid Texture */}
      <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-40" aria-hidden="true" />

      {/* Subtle Glow Accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#3182CE]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container-editorial relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-mono font-semibold tracking-wider uppercase text-blue-200">
            <MessageSquare className="w-3.5 h-3.5 text-[#3182CE]" />
            <span>Kanal Komunikasi Terbuka &amp; Responsif</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] text-white">
            Punya Ide untuk JTIK yang Lebih Baik?
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Sampaikan aspirasi, ide inovatif, saran kurikulum, atau masukan fasilitas secara transparan maupun anonim melalui portal resmi Aspirasi JTIK POLSUB.
          </p>

          {/* Feature Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#3182CE]" />
              Pilihan Pengiriman Anonim
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#3182CE]" />
              Pantau Status via Kode Tiket
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#3182CE]" />
              Ditindaklanjuti Pengurus Jurusan
            </span>
          </div>

          {/* Dual Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            {/* Primary Action Button */}
            <a
              href="https://aspirasi.jtik.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#3182CE] hover:bg-[#2563EB] active:bg-[#1D4ED8] text-white text-[15px] font-bold shadow-lg shadow-[#3182CE]/25 transition-all duration-200 group"
              aria-label="Kunjungi Portal Aspirasi JTIK di aspirasi.jtik.cloud (buka di tab baru)"
            >
              <span>Sampaikan Aspirasi Sekarang</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Secondary Action */}
            <a
              href="https://aspirasi.jtik.cloud/status"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-[15px] font-semibold transition-all duration-200"
            >
              <span>Cek Status Tiket Anda</span>
              <ArrowRight className="w-4 h-4 text-slate-300" />
            </a>
          </div>

          <div className="pt-2 text-[11px] font-mono text-slate-400">
            Domain Resmi: https://aspirasi.jtik.cloud • Terkoneksi dengan Manajemen JTIK POLSUB
          </div>
        </div>
      </div>
    </section>
  );
}
