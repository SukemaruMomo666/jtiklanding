export interface ProgramStudi {
  id: string;
  name: string;
  code: string;
  degree: string;
  degreeTitle: string;
  duration: string;
  totalCredits: string;
  description: string;
  competencies: string[];
  careerProspects: string[];
  laboratories: string[];
  featuredImage: string;
  officialUrl: string;
}

export interface BeritaItem {
  id: string;
  title: string;
  category: 'Akademik' | 'Riset & Pengabdian' | 'Prestasi Mahasiswa' | 'Sertifikasi';
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  featured?: boolean;
}

export interface PrestasiItem {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  badge: string;
  imageUrl: string;
}

export interface GaleriItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  caption: string;
  colSpan?: string; // for masonry variety
}

export interface QuickAccessItem {
  id: string;
  title: string;
  description: string;
  href: string;
  isExternal?: boolean;
  badge?: string;
  icon: string;
}
