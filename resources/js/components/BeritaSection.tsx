import { useState } from 'react';
import { BERITA_LIST } from '../data/landingData';
import { BeritaItem } from '../types/landing';
import { Calendar, Clock, ArrowRight, ArrowUpRight } from './Icons';
import Modal from './Modal';

export default function BeritaSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeArticle, setActiveArticle] = useState<BeritaItem | null>(null);

  const categories = ['Semua', 'Akademik', 'Riset & Pengabdian', 'Prestasi Mahasiswa', 'Sertifikasi'];

  const filteredNews = selectedCategory === 'Semua'
    ? BERITA_LIST
    : BERITA_LIST.filter((item) => item.category === selectedCategory);

  const featuredArticle = filteredNews.find((item) => item.featured) || filteredNews[0];
  const companionArticles = filteredNews.filter((item) => item.id !== featuredArticle?.id);

  return (
    <section id="berita" className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-200/80">
      <div className="container-editorial">
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#3182CE]/10 text-[#3182CE] text-xs font-mono font-semibold tracking-wider uppercase mb-3">
              <span>Warta &amp; Aktivitas</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102746] tracking-tight">
              Kabar Terkini JTIK POLSUB
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2" role="tablist" aria-label="Filter Kategori Berita">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150 focus:outline-none ${
                  selectedCategory === cat
                    ? 'bg-[#102746] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Layout: 1 Featured Large + 3 Companions */}
        {filteredNews.length === 0 ? (
          <div className="p-12 text-center text-slate-400 bg-slate-50 rounded-xl border border-dashed border-slate-200">
            Tidak ada artikel untuk kategori ini.
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Featured Main Article */}
            {featuredArticle && (
              <article
                className="lg:col-span-7 bg-[#F4F7FB]/60 rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div
                  className="relative aspect-[16/10] overflow-hidden bg-slate-100 cursor-pointer"
                  onClick={() => setActiveArticle(featuredArticle)}
                >
                  <img
                    src={featuredArticle.imageUrl}
                    alt={featuredArticle.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-[#102746] text-white shadow-sm font-mono">
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-4 text-xs font-mono text-slate-500 mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {featuredArticle.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {featuredArticle.readTime}
                      </span>
                    </div>

                    <h3
                      onClick={() => setActiveArticle(featuredArticle)}
                      className="text-xl sm:text-2xl font-bold text-[#102746] group-hover:text-[#3182CE] transition-colors tracking-tight cursor-pointer leading-snug"
                    >
                      {featuredArticle.title}
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed line-clamp-3">
                      {featuredArticle.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveArticle(featuredArticle)}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#3182CE] hover:text-[#102746] transition-colors focus:outline-none"
                    >
                      <span>Baca Selengkapnya</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <span className="text-xs font-mono text-slate-400">Liputan Utama</span>
                  </div>
                </div>
              </article>
            )}

            {/* Companion Articles List */}
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
              {companionArticles.map((article) => (
                <article
                  key={article.id}
                  onClick={() => setActiveArticle(article)}
                  className="group p-5 rounded-xl bg-white border border-slate-200/90 hover:border-[#3182CE]/50 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col sm:flex-row gap-4 items-start"
                >
                  <div className="w-full sm:w-32 h-24 sm:h-24 rounded-lg overflow-hidden shrink-0 bg-slate-100 relative">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5 text-[11px] font-mono text-slate-500 mb-1.5">
                      <span className="text-[#3182CE] font-bold uppercase">{article.category}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>

                    <h4 className="text-sm sm:text-[15px] font-bold text-[#102746] group-hover:text-[#3182CE] transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h4>

                    <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </article>
              ))}

              <div className="p-4 rounded-xl bg-[#F4F7FB] border border-slate-200/70 flex items-center justify-between text-xs font-medium text-slate-600">
                <span>Ingin melihat arsip berita selengkapnya?</span>
                <a
                  href="https://jtik.polsub.ac.id/berita_elementor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-[#3182CE] hover:text-[#102746]"
                >
                  <span>Portal Berita</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <Modal
          isOpen={!!activeArticle}
          onClose={() => setActiveArticle(null)}
          title={activeArticle.title}
          subtitle={`${activeArticle.category} • ${activeArticle.date}`}
        >
          <div className="space-y-4">
            <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-100">
              <img
                src={activeArticle.imageUrl}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-500 border-y border-slate-100 py-2">
              <span>Kategori: <strong className="text-[#102746]">{activeArticle.category}</strong></span>
              <span>•</span>
              <span>Waktu Baca: {activeArticle.readTime}</span>
              <span>•</span>
              <span>Sumber: Dokumentasi JTIK POLSUB</span>
            </div>

            <div className="space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base whitespace-pre-line">
              {activeArticle.content}
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 bg-[#102746] text-white text-xs font-bold rounded-lg hover:bg-[#183B6B]"
              >
                Tutup Berita
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
