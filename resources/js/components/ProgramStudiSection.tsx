import { useState } from 'react';
import { PROGRAM_STUDI_LIST } from '../data/landingData';
import { ProgramStudi } from '../types/landing';
import { ArrowRight, CheckCircle2, Building2, ExternalLink } from './Icons';
import Modal from './Modal';

export default function ProgramStudiSection() {
  const [selectedProdi, setSelectedProdi] = useState<ProgramStudi | null>(null);

  return (
    <section id="program-studi" className="py-16 sm:py-20 lg:py-24 bg-[#F4F7FB]">
      <div className="container-editorial">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#3182CE]/10 text-[#3182CE] text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <span>Pendidikan Terapan Vokasi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102746] tracking-tight">
            Program Studi Unggulan JTIK
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Kurikulum berbasis kebutuhan industri dengan bobot 60% praktikum intensif, dirancang untuk melahirkan profesional teknologi informasi yang siap berkarya nyata.
          </p>
        </div>

        {/* 3 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PROGRAM_STUDI_LIST.map((prodi) => (
            <article
              key={prodi.id}
              className="group flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Card Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={prodi.featuredImage}
                  alt={`Aktivitas Program Studi ${prodi.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 text-xs font-semibold rounded bg-[#102746]/90 backdrop-blur-md text-white border border-white/20 shadow-xs">
                    {prodi.degree}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-mono font-medium text-slate-200">
                    Gelar: {prodi.degreeTitle}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#102746] group-hover:text-[#3182CE] transition-colors tracking-tight leading-snug">
                    {prodi.name}
                  </h3>

                  <p className="text-xs sm:text-[13.5px] text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                    {prodi.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                    <div className="text-xs font-semibold text-slate-500 uppercase font-mono tracking-wider">
                      Fokus Utama:
                    </div>
                    {prodi.competencies.slice(0, 2).map((comp, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#3182CE] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProdi(prodi)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#102746] hover:text-[#3182CE] transition-colors focus:outline-none"
                  >
                    <span>Detail Kurikulum &amp; Karir</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <span className="text-xs font-mono text-slate-400">
                    {prodi.duration.split(' ')[0]} {prodi.duration.split(' ')[1]}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Program Detail Modal */}
      {selectedProdi && (
        <Modal
          isOpen={!!selectedProdi}
          onClose={() => setSelectedProdi(null)}
          title={selectedProdi.name}
          subtitle={`Program Studi ${selectedProdi.degree}`}
        >
          <div className="space-y-6">
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {selectedProdi.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm">
              <div>
                <span className="text-slate-400 block font-mono text-[11px]">Jenjang &amp; Durasi</span>
                <span className="font-semibold text-[#102746]">{selectedProdi.degree} ({selectedProdi.duration})</span>
              </div>
              <div>
                <span className="text-slate-400 block font-mono text-[11px]">Gelar Kelulusan</span>
                <span className="font-semibold text-[#102746]">{selectedProdi.degreeTitle}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-mono text-[11px]">Beban Studi</span>
                <span className="font-semibold text-[#102746]">{selectedProdi.totalCredits}</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#102746] mb-2.5 font-mono">
                Kompetensi Utama Lulusan:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                {selectedProdi.competencies.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#3182CE] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#102746] mb-2.5 font-mono">
                Peluang &amp; Prospek Karir:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProdi.careerProspects.map((career, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-[#3182CE]/10 text-[#102746] text-xs font-semibold border border-[#3182CE]/20"
                  >
                    {career}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#102746] mb-2.5 font-mono">
                Laboratorium Penunjang:
              </h4>
              <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                {selectedProdi.laboratories.map((lab, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-100 border border-slate-200">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>{lab}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href={selectedProdi.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#3182CE] hover:text-[#102746]"
              >
                <span>Kunjungi Laman Resmi Kurikulum</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="#pmb"
                onClick={() => setSelectedProdi(null)}
                className="px-4 py-2 rounded-lg bg-[#102746] text-white text-xs font-bold hover:bg-[#183B6B]"
              >
                Daftar Melalui PMB
              </a>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
