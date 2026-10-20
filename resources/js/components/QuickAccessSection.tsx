import { QUICK_ACCESS_ITEMS } from '../data/landingData';
import { GraduationCap, Code, Newspaper, MessageSquare, ArrowUpRight, ArrowRight } from './Icons';

export default function QuickAccessSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#3182CE]" />;
      case 'Code':
        return <Code className="w-6 h-6 text-[#3182CE]" />;
      case 'Newspaper':
        return <Newspaper className="w-6 h-6 text-[#3182CE]" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-[#3182CE]" />;
      default:
        return <Code className="w-6 h-6 text-[#3182CE]" />;
    }
  };

  return (
    <section className="py-8 sm:py-12 bg-white border-y border-slate-200/80">
      <div className="container-editorial">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#3182CE]">
              Layanan Utama
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#102746] tracking-tight mt-0.5">
              Akses Cepat Informasi JTIK
            </h2>
          </div>
          <span className="hidden sm:block text-xs text-slate-500 font-medium">
            Pintasan informasi penting kampus
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {QUICK_ACCESS_ITEMS.map((item) => {
            const isExternal = !!item.isExternal;
            return (
              <a
                key={item.id}
                href={item.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-xl bg-[#F4F7FB]/60 hover:bg-[#F4F7FB] border border-slate-200/90 hover:border-[#3182CE]/40 transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shadow-xs transition-transform group-hover:scale-105 duration-200">
                      {getIcon(item.icon)}
                    </div>
                    {item.badge && (
                      <span className="px-2 py-0.5 text-[11px] font-mono font-semibold rounded bg-[#3182CE]/10 text-[#3182CE] border border-[#3182CE]/20">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-[17px] font-bold text-[#102746] group-hover:text-[#3182CE] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-500 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-[#102746] group-hover:text-[#3182CE]">
                  <span>{isExternal ? 'Buka Portal' : 'Lihat Selengkapnya'}</span>
                  {isExternal ? (
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
