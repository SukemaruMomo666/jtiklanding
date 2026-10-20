import { ProgramStudi, BeritaItem, PrestasiItem, GaleriItem, QuickAccessItem } from '../types/landing';

export const QUICK_ACCESS_ITEMS: QuickAccessItem[] = [
  {
    id: 'calon-mahasiswa',
    title: 'Calon Mahasiswa',
    description: 'Informasi jalur seleksi PMB (SNBP, SNBT, & Mandiri) Politeknik Negeri Subang.',
    href: '#pmb',
    icon: 'GraduationCap',
    badge: 'PMB 2026',
  },
  {
    id: 'program-studi',
    title: 'Program Studi',
    description: 'Kenali 3 program studi vokasi terapan berorientasi kebutuhan industri masa depan.',
    href: '#program-studi',
    icon: 'Code',
  },
  {
    id: 'berita-jtik',
    title: 'Berita & Pengumuman',
    description: 'Rangkuman kabar terkini, agenda akademik, seminar, serta torehan prestasi kampus.',
    href: '#berita',
    icon: 'Newspaper',
  },
  {
    id: 'sampaikan-aspirasi',
    title: 'Sampaikan Aspirasi',
    description: 'Kanal resmi penyampaian saran, pengaduan fasilitas, dan ide perbaikan untuk JTIK.',
    href: 'https://aspirasi.jtik.cloud',
    isExternal: true,
    badge: 'Portal Resmi',
    icon: 'MessageSquare',
  },
];

export const PROGRAM_STUDI_LIST: ProgramStudi[] = [
  {
    id: 'd3-si',
    name: 'D3 Sistem Informasi',
    code: 'D3-SI',
    degree: 'Diploma Tiga (D3)',
    degreeTitle: 'Ahli Madya Komputer (A.Md.Kom)',
    duration: '3 Tahun (6 Semester)',
    totalCredits: '108 SKS',
    description: 'Program studi yang berfokus pada pengembangan sistem informasi, pengelolaan data, dan analisis proses bisnis untuk mendukung kebutuhan organisasi dan dunia usaha modern.',
    competencies: [
      'Analisis Proses Bisnis & Requirement Engineering',
      'Pengelolaan Basis Data Relasional & Cloud Data',
      'Pengembangan Aplikasi Web Terintegrasi',
      'Pemeliharaan Infrastruktur Sistem Informasi Organisasi',
    ],
    careerProspects: [
      'Junior Systems Analyst',
      'Database Administrator',
      'Web Application Developer',
      'IT Support & Operations Specialist',
    ],
    laboratories: ['Lab Rekayasa Perangkat Lunak', 'Lab Basis Data & Informasi'],
    featuredImage: '/images/mahasiswa-menulis-aspirasi.webp',
    officialUrl: 'https://jtik.polsub.ac.id/sistem-informasi_elementor/',
  },
  {
    id: 'd4-trpl',
    name: 'D4 Teknologi Rekayasa Perangkat Lunak',
    code: 'D4-TRPL',
    degree: 'Sarjana Terapan (D4)',
    degreeTitle: 'Sarjana Terapan Komputer (S.Tr.Kom)',
    duration: '4 Tahun (8 Semester)',
    totalCredits: '144 SKS',
    description: 'Program studi yang mempersiapkan mahasiswa menjadi software engineer profesional dengan keahlian rekayasa sistem perangkat lunak skala enterprise, arsitektur cloud, dan pengembangan teknologi mutakhir.',
    competencies: [
      'Arsitektur Perangkat Lunak & Clean Code Engineering',
      'Full-Stack Web & Cross-Platform Mobile Development',
      'DevOps, CI/CD Pipeline & Cloud Deployment',
      'Software Testing, QA Automation & Security Fundamentals',
    ],
    careerProspects: [
      'Full-Stack Software Engineer',
      'Mobile Application Developer',
      'DevOps & Cloud Engineer',
      'Software Quality Assurance Specialist',
    ],
    laboratories: ['Lab Rekayasa Perangkat Lunak', 'Lab Jaringan Komputer & Cloud'],
    featuredImage: '/images/hero-arah-cta.webp',
    officialUrl: 'https://jtik.polsub.ac.id/teknologi-rekayasa-perangkat-lunak_elementor/',
  },
  {
    id: 'd4-bisnis-digital',
    name: 'D4 Bisnis Digital',
    code: 'D4-BD',
    degree: 'Sarjana Terapan (D4)',
    degreeTitle: 'Sarjana Terapan Komputer (S.Tr.Kom)',
    duration: '4 Tahun (8 Semester)',
    totalCredits: '144 SKS',
    description: 'Program studi strategis yang memadukan pemahaman bisnis komprehensif dengan keahlian teknologi digital, analisis data analitik, dan strategi inovasi transformasi digital.',
    competencies: [
      'Strategi E-Commerce & Omnichannel Architecture',
      'Data Analytics & Business Intelligence for Decision Making',
      'Digital Marketing Strategy & Growth Engineering',
      'FinTech Fundamentals & Digital Product Management',
    ],
    careerProspects: [
      'Digital Business Analyst',
      'Growth & Digital Marketing Manager',
      'Digital Product Manager',
      'E-Commerce Operations Specialist',
    ],
    laboratories: ['Lab Bisnis Digital & Data', 'Lab Komputer Aplikasi'],
    featuredImage: '/images/mahasiswa-diskusi-aspirasi.webp',
    officialUrl: 'https://jtik.polsub.ac.id/bisnis-digital_elementor/',
  },
];

export const BERITA_LIST: BeritaItem[] = [
  {
    id: 'berita-d4-bisnis-digital',
    title: 'Pembukaan Prodi D4 Bisnis Digital JTIK POLSUB, Jawaban Tantangan Era Transformasi Digital',
    category: 'Akademik',
    date: '16 Desember 2025',
    readTime: '3 min baca',
    excerpt: 'Perguruan tinggi terus beradaptasi dengan pesatnya perkembangan teknologi dan kebutuhan industri. Secara resmi dibuka Program Studi D4 (Sarjana Terapan) Bisnis Digital sebagai langkah strategis menyiapkan SDM unggul berdaya saing global.',
    content: 'JTIK POLSUB — Perguruan tinggi terus beradaptasi dengan pesatnya perkembangan teknologi dan kebutuhan dunia kerja. Menjawab tantangan tersebut, secara resmi dibuka Program Studi D4 (Sarjana Terapan) Bisnis Digital sebagai langkah strategis dalam menyiapkan sumber daya manusia unggul yang siap menghadapi era transformasi digital.\n\nPembukaan program studi ini menjadi wujud komitmen institusi pendidikan vokasi Politeknik Negeri Subang dalam mencetak lulusan yang adaptif, inovatif, dan berdaya saing global, dengan kurikulum yang memadukan keahlian analitik data, arsitektur platform digital, dan strategi bisnis modern.',
    imageUrl: '/images/hero-arah-cta.webp',
    featured: true,
  },
  {
    id: 'berita-coaching-bima-2026',
    title: 'JTIK POLSUB Gelar Coaching Clinic Hibah BIMA 2026 untuk Tingkatkan Kualitas Proposal Dosen',
    category: 'Riset & Pengabdian',
    date: '05 Desember 2025',
    readTime: '2 min baca',
    excerpt: 'Jurusan Teknologi Informasi dan Komputer (JTIK) POLSUB menyelenggarakan kegiatan Coaching Clinic Hibah BIMA 2026 bagi para dosen sebagai upaya strategis meningkatkan kualitas proposal penelitian dan pengabdian masyarakat.',
    content: 'JTIK POLSUB — Jurusan Teknologi Informasi dan Komputer (JTIK) Politeknik Negeri Subang (POLSUB) menyelenggarakan kegiatan Coaching Clinic Hibah BIMA 2026 bagi para dosen sebagai upaya strategis dalam meningkatkan kualitas dan kuantitas proposal penelitian serta pengabdian kepada masyarakat.\n\nKegiatan ini menjadi bagian dari komitmen JTIK POLSUB dalam mendukung budaya akademik yang produktif, inovatif, dan berdaya saing nasional.',
    imageUrl: '/images/mahasiswa-diskusi-aspirasi.webp',
  },
  {
    id: 'berita-prestasi-mahasiswa-nov-2025',
    title: 'Mahasiswa JTIK POLSUB Kembali Ukir Prestasi di Tingkat Regional dan Nasional',
    category: 'Prestasi Mahasiswa',
    date: '25 November 2025',
    readTime: '2 min baca',
    excerpt: 'Mahasiswa JTIK POLSUB kembali menorehkan catatan membanggakan di berbagai ajang kompetisi teknologi informasi, menunjukkan tingginya kompetensi dan daya saing vokasi.',
    content: 'JTIK POLSUB — Jurusan Teknologi Informasi dan Komputer (JTIK) Politeknik Negeri Subang (POLSUB) kembali menorehkan catatan membanggakan. Sepanjang bulan November 2025, para mahasiswa JTIK POLSUB berhasil menorehkan prestasi gemilang di kancah regional maupun nasional dalam bidang teknologi informasi dan rekayasa komputer, mencerminkan kualitas proses pembelajaran praktis di kampus.',
    imageUrl: '/images/mahasiswa-aspirasi-flat.webp',
  },
  {
    id: 'berita-sertikom-web-trpl',
    title: 'Siap Hadapi Dunia Kerja Digital: Mahasiswa D4 TRPL Sukses Kantongi Sertifikasi Junior Web Programmer BNSP',
    category: 'Sertifikasi',
    date: '22 Oktober 2025',
    readTime: '3 min baca',
    excerpt: 'JTIK POLSUB sukses menyelenggarakan uji sertifikasi kompetensi Junior Web Programmer berstandar BNSP yang diikuti seluruh mahasiswa D4 TRPL Tingkat 3.',
    content: 'JTIK POLSUB — Jurusan Teknologi Informasi dan Komputer (JTIK) Politeknik Negeri Subang (POLSUB) kembali menunjukkan komitmennya dalam mencetak lulusan yang kompeten dan siap bersaing di kancah nasional. Selama bulan Oktober 2025, JTIK POLSUB sukses menyelenggarakan program "Sertifikasi Junior Web Programmer" yang diikuti oleh seluruh mahasiswa D4 Teknologi Rekayasa Perangkat Lunak (TRPL) Tingkat 3 dengan standar lisensi Badan Nasional Sertifikasi Profesi (BNSP).',
    imageUrl: '/images/mahasiswa-cek-tiket.webp',
  },
];

export const PRESTASI_LIST: PrestasiItem[] = [
  {
    id: 'sertifikasi-bnsp',
    title: 'Uji Sertifikasi Kompetensi Junior Web Programmer (BNSP)',
    category: 'Sertifikasi Profesi Nasional',
    year: '2025',
    description: 'Penyelenggaraan uji kompetensi kejuruan programmer berstandar nasional bersama Lembaga Sertifikasi Profesi (LSP) untuk seluruh mahasiswa tingkat akhir.',
    badge: 'Terlisensi BNSP',
    imageUrl: '/images/mahasiswa-cek-tiket.webp',
  },
  {
    id: 'hibah-bima',
    title: 'Penerima Hibah Riset & Pengabdian BIMA Kemendikbudristek',
    category: 'Riset Terapan Dosen & Mahasiswa',
    year: '2025 - 2026',
    description: 'Pendanaan riset terapan dan inovasi pengabdian kepada masyarakat melalui skema pendanaan BIMA Kementerian Pendidikan Tinggi, Sains, dan Teknologi.',
    badge: 'Nasional',
    imageUrl: '/images/mahasiswa-diskusi-aspirasi.webp',
  },
  {
    id: 'desa-sidajaya',
    title: 'Digitalisasi Desa: Peluncuran Website Desa Wisata Sidajaya',
    category: 'Pengabdian Masyarakat & Inovasi',
    year: '2024 - 2025',
    description: 'Pengembangan dan implementasi platform informasi desa wisata berbasis web untuk mendorong pertumbuhan ekonomi digital masyarakat lokal Kabupaten Subang.',
    badge: 'Pengabdian Vokasi',
    imageUrl: '/images/hero-arah-cta.webp',
  },
  {
    id: 'fgd-perpustakaan',
    title: 'Kolaborasi Rekayasa Sistem Perpustakaan Daerah Subang',
    category: 'Kerjasama Pemerintah Daerah',
    year: '2025',
    description: 'Forum Group Discussion (FGD) dan asistensi teknis integrasi sistem perpustakaan digital bersama Dinas Kearsipan dan Perpustakaan Daerah Kabupaten Subang.',
    badge: 'Sinergi Daerah',
    imageUrl: '/images/mahasiswa-menulis-aspirasi.webp',
  },
];

export const GALERI_LIST: GaleriItem[] = [
  {
    id: 'galeri-1',
    title: 'Praktikum Rekayasa Perangkat Lunak',
    category: 'Kegiatan Laboratorium',
    imageUrl: '/images/mahasiswa-diskusi-aspirasi.webp',
    caption: 'Mahasiswa melakukan perancangan arsitektur dan kolaborasi sprint coding di Laboratorium Rekayasa Perangkat Lunak JTIK.',
    colSpan: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 'galeri-2',
    title: 'Uji Sertifikasi Profesi BNSP',
    category: 'Kompetensi Vokasi',
    imageUrl: '/images/mahasiswa-cek-tiket.webp',
    caption: 'Pelaksanaan ujian kompetensi sertifikasi Junior Web Programmer di lingkungan laboratorium komputer JTIK POLSUB.',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'galeri-3',
    title: 'Asistensi & Pembimbingan Akademik',
    category: 'Aktivitas Mahasiswa',
    imageUrl: '/images/mahasiswa-menulis-aspirasi.webp',
    caption: 'Sesi mentoring dan bimbingan proyek terapan antara dosen pembimbing dan tim mahasiswa JTIK.',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'galeri-4',
    title: 'Sinergi Civitas & Aspirasi Kampus',
    category: 'Kehidupan Kampus',
    imageUrl: '/images/mahasiswa-aspirasi-flat.webp',
    caption: 'Pemanfaatan kanal digital untuk menyampaikan gagasan dan evaluasi mutu perkuliahan di lingkungan POLSUB.',
    colSpan: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'galeri-5',
    title: 'Kolaborasi Proyek Terapan Industri',
    category: 'Inovasi Digital',
    imageUrl: '/images/hero-arah-cta.webp',
    caption: 'Presentasi hasil rancang bangun solusi digital karya mahasiswa untuk implementasi di mitra industri.',
    colSpan: 'md:col-span-2 md:row-span-1',
  },
];

export const JALUR_PMB_LIST = [
  {
    id: 'snbp',
    name: 'SNBP',
    fullName: 'Seleksi Nasional Berdasarkan Prestasi',
    description: 'Jalur seleksi nasional berbasis penelusuran prestasi akademik (nilai rapor) dan portofolio prestasi non-akademik siswa SMA/SMK/MA sederajat.',
    url: 'https://pmb.polsub.ac.id/snbp/',
    badge: 'Jalur Prestasi',
  },
  {
    id: 'snbt',
    name: 'SNBT',
    fullName: 'Seleksi Nasional Berdasarkan Tes',
    description: 'Seleksi berbasis Ujian Tulis Berbasis Komputer (UTBK) yang diselenggarakan secara nasional untuk mengukur potensi skolastik dan literasi.',
    url: 'https://pmb.polsub.ac.id/snbt-2026/',
    badge: 'Jalur Tes UTBK',
  },
  {
    id: 'mandiri',
    name: 'Mandiri POLSUB',
    fullName: 'Seleksi Masuk Mandiri Politeknik Negeri Subang',
    description: 'Jalur seleksi resmi yang diselenggarakan langsung oleh Politeknik Negeri Subang bagi lulusan pendidikan menengah untuk seluruh program studi.',
    url: 'https://pmb.polsub.ac.id/seleksi-mandiri-2026/',
    badge: 'Jalur Mandiri',
  },
];

export const TENTANG_JTIK = {
  ringkasan: 'Jurusan Teknologi Informasi dan Komputer (JTIK) Politeknik Negeri Subang merupakan institusi pendidikan tinggi vokasi yang berkomitmen mencetak sumber daya manusia unggul, terampil, inovatif, dan berkarakter kuat untuk menjawab dinamika industri digital.',
  pilar: [
    {
      title: 'Kurikulum Terapan Vokasi 60:40',
      description: 'Komposisi 60% praktikum intensif di laboratorium modern dan 40% pemahaman konseptual teoritis yang kokoh.',
    },
    {
      title: 'Dosen Praktisi & Akademisi',
      description: 'Tenaga pengajar tersertifikasi profesi dengan pengalaman riset terapan dan rekayasa industri teknologi informasi.',
    },
    {
      title: 'Laboratorium Berspesifikasi Modern',
      description: 'Didukung sarana Lab RPL, Lab Jaringan Komputer, Lab Basis Data, dan perangkat pendukung standar industri terkini.',
    },
    {
      title: 'Kemitraan Industri & Sertifikasi',
      description: 'Kerjasama magang bersertifikat dan integrasi uji kompetensi Badan Nasional Sertifikasi Profesi (BNSP).',
    },
  ],
  visi: 'Menjadi institusi pendidikan tinggi vokasi bidang teknologi informasi dan komputer yang unggul, inovatif, berdaya saing global, dan berakar pada kebutuhan industri pada tahun 2030.',
  misi: [
    'Menyelenggarakan pendidikan vokasi bidang teknologi informasi yang adaptif terhadap dinamika transformasi digital global.',
    'Melaksanakan penelitian terapan yang inovatif dan solutif guna memecahkan permasalahan nyata di masyarakat dan dunia industri.',
    'Mengembangkan program pengabdian kepada masyarakat berbasis pemanfaatan teknologi informasi untuk peningkatan taraf hidup masyarakat.',
    'Membangun kemitraan strategis yang berkelanjutan dengan industri, pemerintah daerah, dan institusi akademik di tingkat nasional maupun internasional.',
  ],
  tujuan: [
    'Menghasilkan lulusan yang kompeten, beretika profesional, dan siap kerja pada sektor teknologi informasi dan ekonomi digital.',
    'Menghasilkan karya riset terapan yang berpotensi hilirisasi serta berorientasi pada kemajuan ilmu pengetahuan terapan.',
    'Mewujudkan tata kelola jurusan yang transparan, akuntabel, dan mengutamakan pelayanan prima kepada seluruh civitas akademika.',
  ],
};

export const KONTAK_DATA = {
  ciereng: {
    title: 'Kampus Ciereng (Utama)',
    alamat: 'Jl. Brigjen Katamso No. 37 (Belakang RSUD Subang), Dangdeur, Kec. Subang, Kabupaten Subang, Jawa Barat 41211',
  },
  cibogo: {
    title: 'Kampus Cibogo',
    alamat: 'Blok Kaleng Banteng Desa Cibogo, Kec. Cibogo, Kabupaten Subang, Jawa Barat 41285',
  },
  email: ['info@polsub.ac.id', 'jmi.polsub@gmail.com'],
  telepon: ['(+62) 224-966-749-2', '(+62) 0811-1111-2851'],
  aspirasiUrl: 'https://aspirasi.jtik.cloud',
  pmbUrl: 'https://pmb.polsub.ac.id',
  portalLamaUrl: 'https://jtik.polsub.ac.id',
  institusiUrl: 'https://polsub.ac.id',
};
