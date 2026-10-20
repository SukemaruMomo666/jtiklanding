import { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import QuickAccessSection from '../components/QuickAccessSection';
import ProgramStudiSection from '../components/ProgramStudiSection';
import BeritaSection from '../components/BeritaSection';
import KaryaPrestasiSection from '../components/KaryaPrestasiSection';
import TentangSection from '../components/TentangSection';
import GaleriSection from '../components/GaleriSection';
import PmbSection from '../components/PmbSection';
import AspirasiCtaSection from '../components/AspirasiCtaSection';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import { TENTANG_JTIK } from '../data/landingData';
import { CheckCircle2, Building2 } from '../components/Icons';

export default function LandingPage() {
  const [profilModalOpen, setProfilModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FB] selection:bg-[#3182CE]/20 selection:text-[#102746]">
      {/* Accessible Sticky Header */}
      <Navbar onOpenProfilModal={() => setProfilModalOpen(true)} />

      {/* Main Page Landmark */}
      <main id="main-content" className="flex-1">
        {/* Section 1: Hero */}
        <HeroSection onOpenProfilModal={() => setProfilModalOpen(true)} />

        {/* Section 2: Quick Access Tiles */}
        <QuickAccessSection />

        {/* Section 3: Program Studi Cards */}
        <ProgramStudiSection />

        {/* Section 4: Berita Terbaru & Agenda */}
        <BeritaSection />

        {/* Section 5: Karya, Riset & Prestasi */}
        <KaryaPrestasiSection />

        {/* Section 6: Tentang JTIK & Keunggulan */}
        <TentangSection onOpenProfilModal={() => setProfilModalOpen(true)} />

        {/* Section 7: Penerimaan Mahasiswa Baru (PMB) */}
        <PmbSection />

        {/* Section 8: Galeri Kegiatan & Dinamika Kampus */}
        <GaleriSection />

        {/* Section 9: CTA Portal Aspirasi */}
        <AspirasiCtaSection />
      </main>

      {/* Section 10: Kontak & Institutional Footer */}
      <Footer onOpenProfilModal={() => setProfilModalOpen(true)} />

      {/* Global Profil, Visi & Misi Modal */}
      {profilModalOpen && (
        <Modal
          isOpen={profilModalOpen}
          onClose={() => setProfilModalOpen(false)}
          title="Profil Jurusan, Visi & Misi"
          subtitle="Jurusan Teknologi Informasi dan Komputer"
        >
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#3182CE] mb-2">
                <Building2 className="w-4 h-4" />
                <span>Mengenai JTIK POLSUB</span>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {TENTANG_JTIK.ringkasan}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#102746] block mb-1">
                Visi Institusi:
              </span>
              <p className="text-sm font-semibold text-[#102746] leading-relaxed italic">
                "{TENTANG_JTIK.visi}"
              </p>
            </div>

            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
                Misi Jurusan:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {TENTANG_JTIK.misi.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#3182CE] shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
                Tujuan Strategis:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {TENTANG_JTIK.tujuan.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#102746] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setProfilModalOpen(false)}
                className="px-5 py-2 bg-[#102746] hover:bg-[#183B6B] text-white text-xs font-bold rounded-lg transition-colors"
              >
                Tutup Profil
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
