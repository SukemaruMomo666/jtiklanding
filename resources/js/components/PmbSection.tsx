import { JALUR_PMB_LIST } from '../data/landingData';
import { GraduationCap, ArrowUpRight, Award } from './Icons';

export default function PmbSection() {
  return (
    <section id="pmb" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200/80">
      <div className="container-editorial">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#3182CE]/10 text-[#3182CE] text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Penerimaan Mahasiswa Baru</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102746] tracking-tight">
            Jalur Masuk Politeknik Negeri Subang
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
            Bergabunglah bersama keluarga besar JTIK POLSUB dan kembangkan kompetensi teknologi terapan Anda melalui tiga jalur seleksi resmi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {JALUR_PMB_LIST.map((jalur) => (
            <div
              key={jalur.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#F4F7FB]/70 border border-slate-200/90 hover:border-[#3182CE]/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#102746] tracking-tight">
                    {jalur.name}
                  </span>
                  <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded bg-[#102746]/5 text-[#102746] border border-slate-200">
                    {jalur.badge}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-800 leading-snug">
                  {jalur.fullName}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-600 mt-2.5 leading-relaxed">
                  {jalur.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70">
                <a
                  href={jalur.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 hover:text-[#102746] text-xs font-bold shadow-2xs transition-colors"
                >
                  <span>Lihat Panduan &amp; Jadwal</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* PMB Direct Portal Card */}
        <div className="mt-8 p-6 rounded-2xl bg-[#102746] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-[#3182CE]" />
            </div>
            <div>
              <h4 className="text-base font-bold">Portal Resmi Pendaftaran Mahasiswa Baru</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Akses syarat pendaftaran, biaya kuliah (UKT), daya tampung, dan jadwal lengkap di pmb.polsub.ac.id
              </p>
            </div>
          </div>

          <a
            href="https://pmb.polsub.ac.id"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#3182CE] hover:bg-[#2563EB] text-white text-xs font-bold transition-colors shadow-sm"
          >
            <span>Kunjungi Portal PMB POLSUB</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
