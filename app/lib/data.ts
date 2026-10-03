export const contact = {
  name: "Catraliya Nolan Hakim",
  initials: "CNH",
  role: "Web Developer | Front-End & Back-End | IT Support",
  headline: "WEB DEVELOPER & IT SUPPORT",
  summary:
    "Lulusan D3 Teknologi Informasi Universitas Brawijaya (IPK 3,89/4,00) dengan spesialisasi pengembangan web Full Stack yang menitikberatkan pada keunggulan sisi Front-End. Terampil merancang antarmuka yang responsif, interaktif, dan performan menggunakan Laravel Blade, Next.js, JavaScript, dan HTML/CSS, yang terintegrasi secara solid dengan arsitektur backend Laravel serta CMS WordPress. Memegang sertifikasi resmi BNSP Junior Web Developer dengan rekam jejak praktis mengelola infrastruktur web di lingkungan akademik sebagai Web Master.",
  tagline: "let's build impactful digital solutions ✦",
  email: "nolanhakimm10@gmail.com",
  phone: "+62 895422854189",
  website: "https://nolanhakim.my.id",
  websiteDisplay: "nolanhakim.my.id",
  location: "Surakarta, Jawa Tengah, Indonesia",
  instagram: "https://instagram.com/catranolanhkm",
  instagramHandle: "@catranolanhkm",
  github: "https://github.com/nolanhakim",
  linkedin: "https://www.linkedin.com/in/catraliya-nolan-hakim-782aaa33b",
  ipk: "3.89 / 4.00",
  degree: "D3 Teknologi Informasi — Universitas Brawijaya",
  certBadge: "BNSP Junior Web Developer",
};

export const projects = [
  {
    id: "creanomic-2025",
    name: "Website CREANOMIC 2025",
    category: "Landing Page",
    description:
      "Merancang UI/UX dan membangun website resmi acara CREANOMIC dari awal hingga live. Mengembangkan modul profil acara, informasi kompetisi/seminar, download guidebook, timeline, FAQ, kontak panitia, serta konfigurasi domain, DNS, SSL & deployment.",
    stack: ["Next.js", "JavaScript", "Tailwind CSS", "Figma", "DNS/SSL"],
    source: "https://github.com/nolanhakim/creanomic.git",
    demo: "https://creanomic-delta.vercel.app/",
    image: "/images/creanomic-placeholder.svg",
  },
  {
    id: "sip-vokasi-ub",
    name: "Sistem Informasi Peminjaman Alat Vokasi UB",
    category: "Web App",
    description:
      "Platform terpusat pengajuan peminjaman ruangan, laboratorium, dan inventaris alat perkuliahan di lingkungan Fakultas Vokasi UB. Dilengkapi approval workflow bertingkat, pemantauan status pinjaman real-time, dan riwayat sarana.",
    stack: ["Laravel", "Tailwind CSS", "MySQL", "PHP", "Figma UI/UX"],
    source: "https://github.com/nolanhakim/tugas-akhir.git",
    image: "/images/sip-placeholder.svg",
  },
  {
    id: "web-vokasi-ub",
    name: "Website Fakultas Vokasi Universitas Brawijaya",
    category: "CMS",
    description:
      "Pemeliharaan dan pengembangan website resmi institusi dengan ratusan pengunjung aktif harian. Bertanggung jawab atas debugging, pengujian berkala, optimalisasi performa, serta pembaruan konten dan layanan interaktif kampus.",
    stack: ["WordPress", "PHP", "CSS", "MySQL", "Web Master"],
    source: "https://github.com",
    demo: "https://vokasi.ub.ac.id",
    image: "/images/vokasi-placeholder.svg",
  },
  {
    id: "restoran-cahaya-gemilang",
    name: "Website Restoran Cahaya Gemilang",
    category: "Landing Page",
    description:
      "Perancangan dan pengembangan website company profile restoran Cahaya Gemilang yang memuat katalog menu, informasi kontak, dan lokasi dengan tata letak responsif untuk perangkat mobile maupun desktop.",
    stack: ["Next.js", "Tailwind CSS", "JavaScript", "Figma"],
    source: "https://github.com/nolanhakim/kedaicahayagemilang.git",
    demo: "https://www.kedai-cahayagemilang.my.id/",
    image: "/images/restoran-placeholder.svg",
  },
  {
    id: "bali-jumeau",
    name: "Website Parfum Bali Jumeau",
    category: "Landing Page",
    description:
      "Website landing page produk brand parfum eksklusif asal Bali untuk kebutuhan digital marketing dan presentasi produk dengan desain antarmuka estetis sesuai identitas visual brand mewah.",
    stack: ["HTML5", "CSS3", "JavaScript", "Figma UI/UX"],
    source: "https://github.com/nolanhakim/jumeau.git",
    demo: "https://jumeau.vercel.app/",
    image: "/images/parfum-placeholder.svg",
  },
  {
    id: "warehouse-stock-counter",
    name: "F&B Warehouse Management & Stock Counter System",
    category: "Web App",
    description:
      "Aplikasi internal pengelola bahan baku gudang F&B: mutasi masuk/keluar, batch + expired FEFO, stock opname digital, waste approval, kartu stok audit trail, asisten gudang AI. Multi-role Staff/Admin/Super Admin.",
    stack: [
      "Laravel",
      "PHP 8.3",
      "MySQL",
      "Tailwind CSS",
      "Vite",
      "Gemini AI",
    ],
    source: "https://github.com/nolanhakim/F-B-Warehouse-Stock-Counter-System.git",
    image: "/images/warehouse-placeholder.svg",
  },
  {
    id: "website-photobooth",
    name: "Website Photobooth",
    category: "Web App",
    description:
      "Website interaktif photobooth berbasis browser yang memungkinkan pengguna mengambil foto langsung dengan berbagai efek frame, layout grid, dan unduhan instan dalam format digital.",
    stack: ["Next.js", "Tailwind CSS", "JavaScript"],
    source: "https://github.com/nolanhakim/photobooth_v2.0.git",
    demo: "https://photoboothkalahan.vercel.app/",
    image: "/images/photobooth-placeholder.svg",
  },
  {
    id: "website-refleksi-retach",
    name: "Website Refleksi - Retach",
    category: "Web App",
    description:
      "Website refleksi pembelajaran untuk guru menilai dan mengevaluasi setiap pembelajaran yang dilakukan, dilengkapi pencatatan refleksi, rekap hasil evaluasi, dan dashboard monitoring.",
    stack: ["Laravel", "MySQL", "Tailwind CSS"],
    source: "https://github.com/nolanhakim/website-refleksi_retech.git",
    image: "/images/refleksi-placeholder.svg",
  },
  {
    id: "smart-compost-village",
    name: "Website Pemantauan Kompos - Smart Compost Village",
    category: "Web App",
    description:
      "Sistem pemantauan proses pengomposan berbasis web yang memantau status kompos secara real-time, dilengkapi notifikasi otomatis via email saat kondisi tertentu tercapai.",
    stack: ["Laravel", "MySQL", "Tailwind CSS", "Email Notification"],
    source: "https://github.com/nolanhakim/Smart-Compost-Village.git",
    image: "/images/compost-placeholder.svg",
  },
  {
    id: "saerah-meubel",
    name: "Website Saerah Meubel",
    category: "Landing Page",
    description:
      "Website catalog mebel Saerah Meubel untuk menampilkan koleksi produk furniture, informasi produk, dan kontak pemesanan dengan tata letak responsif dan tampilan visual yang menarik.",
    stack: ["Next.js", "Tailwind CSS", "JavaScript"],
    source: "https://github.com/nolanhakim/saerahmeubel.git",
    demo: "https://saerahmeubel.vercel.app/",
    image: "/images/saerah-placeholder.svg",
  },
];

export const categories = ["All", "Web App", "CMS", "Landing Page"];

export const skills = {
  frontend: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TailwindCSS",
    "NextJS",
    "Bootstrap",
    "Laravel Blade",
  ],
  backend: ["PHP", "Laravel", "REST API", "MySQL", "Postman"],
  jaringanIT: [
    "MikroTik (Routing, Firewall, Wireless, VLAN)",
    "Instalasi CCTV",
    "NVR / DVR",
    "Ruijie",
    "Hardware & PC Troubleshooting",
  ],
  cmsTools: [
    "WordPress",
    "VS Code",
    "Git",
    "Postman",
    "Figma",
    "Canva",
    "Cisco Packet Tracer",
    "Arduino IDE",
    "Corel Draw",
    "Adobe Lightroom",
  ],
  softSkill: [
    "Kepemimpinan",
    "Problem Solving",
    "Kreativitas",
    "Koordinasi Tim",
    "Adaptabilitas",
  ],
};

export const timeline = [
  {
    year: "Jun 2026 — Sep 2026",
    type: "Magang",
    role: "Staff EDP",
    place: "Papaya Fresh Gallery",
    desc: "Instalasi, konfigurasi, pemeliharaan, dan troubleshooting komputer & pendukung IT (CCTV, PC, Timbangan, Mesin Kasir, Printer, Jaringan) serta editing materi POP (Point of Purchase).",
  },
  {
    year: "Feb 2026 — Apr 2026",
    type: "Full-time",
    role: "SPV Kitchen",
    place: "Kedai Cahaya Gemilang",
    desc: "Mengatur pembagian stasiun masak, shift kru, SOP opening/closing, mengawasi ticket time jam sibuk, penyelesaian komplain, serta konsistensi hidangan & kepatuhan resep standar.",
  },
  {
    year: "Okt 2025 — Feb 2026",
    type: "Magang",
    role: "Web Master",
    place: "PSIK Vokasi Universitas Brawijaya",
    desc: "Mengembangkan & memelihara website internal Fakultas Vokasi UB berbasis WordPress, debugging, optimalisasi performa berkala, dan integrasi fitur berita & layanan interaktif.",
  },
  {
    year: "Feb 2025 — Feb 2026",
    type: "Part-time",
    role: "Crew Kitchen",
    place: "Kedai Cahaya Gemilang",
    desc: "Preparasi bahan baku SOP, portioning, manajemen metode penyimpanan FIFO, memasak pesanan sesuai takaran, dan plating makanan secara cepat, higienis & rapi.",
  },
  {
    year: "Ags 2022 — Nov 2022",
    type: "Magang",
    role: "Helper Teknisi",
    place: "Sainstek Media Pabrik PC Software",
    desc: "Membantu instalasi dan perbaikan sistem CCTV serta jaringan WiFi, perakitan PC/komputer, dan konfigurasi perangkat teknis.",
  },
];

export const education = [
  {
    year: "2023 — 2026",
    degree: "D3 Teknologi Informasi",
    institution: "Universitas Brawijaya, Fakultas Vokasi",
    grade: "IPK: 3,89 / 4,00",
    courses:
      "Pemrograman Web, Rekayasa Perangkat Lunak, Basis Data, Desain UI/UX, Pemrograman Framework (Laravel), Cloud Computing, Kecerdasan Buatan, Keamanan Komputer, Manajemen Proyek.",
  },
  {
    year: "2020 — 2023",
    degree: "Teknik Komputer Jaringan",
    institution: "SMK Negeri 1 Sukoharjo",
    grade: "Nilai Rata-Rata: 87,05",
    courses:
      "Infrastruktur Jaringan Komputer, Troubleshooting Hardware/Software, Routing MikroTik, Administrasi Server & Jaringan Nirkabel.",
  },
];

export const certifications = [
  {
    year: "Januari 2026",
    name: "BNSP Junior Web Developer",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    badge: "Official Certified",
  },
  {
    year: "Januari 2026",
    name: "BEPT (Brawijaya English Proficiency Test)",
    issuer: "Brawijaya Language Center, Universitas Brawijaya",
  },
  {
    year: "Januari 2026",
    name: "Microsoft Office (Word, Excel, PowerPoint)",
    issuer: "Universitas Brawijaya",
  },
  {
    year: "2025",
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
  },
  {
    year: "November 2025",
    name: "Machine Learning Fundamentals",
    issuer: "Dicoding Indonesia",
  },
  {
    year: "2023",
    name: "Sertifikasi Jaringan MikroTik (Nilai: 90)",
    issuer: "PT. Lintas Data Prima",
  },
  {
    year: "2023",
    name: "Sertifikat Magang",
    issuer: "SMKN 1 Sukoharjo",
  },
];

export const organizations = [
  {
    year: "Desember 2024 — Februari 2026",
    role: "Ketua Umum",
    org: "Ikatan Mahasiswa Sukoharjo (IKAMADA)",
    desc: "Memimpin seluruh kegiatan organisasi, rapat koordinasi pengurus, dan program kerja tahunan serta menjadi representasi resmi IKAMADA dalam hubungan kemitraan pemda dan aliansi eksternal.",
  },
  {
    year: "Oktober 2025",
    role: "Staff DDM PIT (Desain, Dokumentasi, Multimedia & Publikasi IT)",
    org: "CREANOMIC 2025",
    desc: "Merancang landing page resmi CREANOMIC, modul panduan & timeline, FAQ, konfigurasi domain, DNS, SSL (HTTPS), dan deployment server.",
  },
  {
    year: "Juli 2025",
    role: "Staff Divisi PDD (Publikasi, Dekorasi & Dokumentasi)",
    org: "Brawijaya Voli Cup 2025",
    desc: "Membuat sub-identitas visual/logo, mendesain konten Instagram (feed, carousel, story, reels cover), merchandise (ID card, sertifikat, lanyard), dan dokumentasi acara.",
  },
  {
    year: "29 — 31 Juli 2025",
    role: "Staff Liaison Officer (LO)",
    org: "OLIVIA X 2025 – Lomba Cybersecurity",
    desc: "Narahubung utama (single point of contact) delegasi cabang Cybersecurity, pendampingan uji coba sistem/lingkungan lomba (technical meeting), verifikasi administrasi & jadwal delegasi.",
  },
  {
    year: "2022 — 2023",
    role: "Ketua Umum",
    org: "Marching Band Gema Wijaya Nusantara",
    desc: "Mengkoordinasikan seluruh anggota dalam kejuaraan/acara, memimpin rapat evaluasi berkala dan musyawarah kerja organisasi, serta menjaga disiplin tim.",
  },
];
