import { KONTAK_DATA } from '../data/landingData';
import { MapPin, Mail, Phone, ArrowUpRight } from './Icons';

interface FooterProps {
  onOpenProfilModal: () => void;
}

export default function Footer({ onOpenProfilModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="kontak" className="bg-[#0A192F] text-slate-300 border-t border-slate-800">
      {/* Upper Footer: Identity & Contact Channels */}
      <div className="container-editorial py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Col 1: Institutional Identity */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <img
                src="/images/polsub.png"
                alt="Logo Politeknik Negeri Subang"
                width="48"
                height="48"
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="block text-lg font-bold text-white tracking-tight leading-none">
                  Politeknik Negeri Subang
                </span>
                <span className="block text-xs text-slate-400 mt-1 font-medium">
                  Jurusan Teknologi Informasi dan Komputer
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Mencetak lulusan vokasi yang kompeten, profesional, beretika, dan siap bersaing di dunia industri teknologi informasi tingkat nasional maupun global.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-slate-800/80 text-slate-300 border border-slate-700/80">
                Pendidikan Vokasi Terapan
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800/80 text-slate-300 border border-slate-700/80">
                Subang, Jawa Barat
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#beranda" className="text-slate-400 hover:text-white transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenProfilModal}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Profil, Visi &amp; Misi JTIK
                </button>
              </li>
              <li>
                <a href="#program-studi" className="text-slate-400 hover:text-white transition-colors">
                  Program Studi Vokasi
                </a>
              </li>
              <li>
                <a href="#pmb" className="text-slate-400 hover:text-white transition-colors">
                  Penerimaan Mahasiswa Baru
                </a>
              </li>
              <li>
                <a href="#berita" className="text-slate-400 hover:text-white transition-colors">
                  Berita &amp; Agenda Kampus
                </a>
              </li>
              <li>
                <a href="#galeri" className="text-slate-400 hover:text-white transition-colors">
                  Galeri Kegiatan
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1.5 font-bold">
                Layanan Publik
              </span>
              <a
                href={KONTAK_DATA.aspirasiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3182CE] hover:text-blue-300"
              >
                <span>Portal Aspirasi JTIK</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 3: Verified Contact Info & Locations */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Lokasi &amp; Kontak Resmi
            </h4>

            <div className="space-y-3.5 text-xs text-slate-400 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#3182CE] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block text-xs">{KONTAK_DATA.ciereng.title}:</strong>
                  <span>{KONTAK_DATA.ciereng.alamat}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#3182CE] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-200 block text-xs">{KONTAK_DATA.cibogo.title}:</strong>
                  <span>{KONTAK_DATA.cibogo.alamat}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-[#3182CE] shrink-0 mt-0.5" />
                <div>
                  <a href={`mailto:${KONTAK_DATA.email[0]}`} className="hover:text-white transition-colors block">
                    {KONTAK_DATA.email[0]}
                  </a>
                  <a href={`mailto:${KONTAK_DATA.email[1]}`} className="hover:text-white transition-colors block">
                    {KONTAK_DATA.email[1]}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#3182CE] shrink-0 mt-0.5" />
                <div>
                  <span className="block">{KONTAK_DATA.telepon[0]}</span>
                  <span className="block">{KONTAK_DATA.telepon[1]}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Attribution */}
      <div className="border-t border-slate-800/90 py-6 bg-[#071324]">
        <div className="container-editorial flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {currentYear} Jurusan Teknologi Informasi dan Komputer — Politeknik Negeri Subang.
          </div>

          <div className="flex items-center gap-4">
            <a href="https://polsub.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              Website POLSUB
            </a>
            <span>•</span>
            <a href="https://pmb.polsub.ac.id" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              Portal PMB
            </a>
            <span>•</span>
            <a href="https://aspirasi.jtik.cloud" target="_blank" rel="noopener noreferrer" className="text-[#3182CE] hover:underline">
              Aspirasi JTIK
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
