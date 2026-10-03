# Product Requirement Document (PRD)
## Minimalist Monochrome Portfolio Website

---

## 1. Ringkasan Eksekutif & Visi Produk
Website portofolio ini dirancang sebagai etalase karya digital profesional dengan pendekatan visual minimalis hitam-putih (*monochrome brutalist/editorial*). Fokus utama platform ini adalah kecepatan akses, keterbacaan tinggi, serta pengalaman interaksi tanpa distraksi elemen visual yang berlebihan. Portofolio menyediakan transisi instan antara **Light Mode** (koleksi editorial terang) dan **Dark Mode** (tampilan terminal/dark canvas) untuk kenyamanan pengunjung di segala kondisi pencahayaan.

---

## 2. Tujuan & Sasaran (Goals & Objectives)
1. **Representasi Portofolio:** Menyajikan karya-karya terbaik (Web, Mobile, Tools/IoT, Desain) dengan ringkasan masalah, solusi, stack teknologi, dan tautan langsung.
2. **Keterbacaan Optimal:** Memanfaatkan palet hitam-putih kontras tinggi yang memudahkan hiring manager dan klien membaca informasi dalam hitungan detik.
3. **Fleksibilitas Tema:** Menyediakan mode gelap dan terang yang persisten sesuai preferensi pengguna dan preferensi sistem operasi (`prefers-color-scheme`).
4. **Performa Unggul:** Memastikan *Core Web Vitals* optimal (Lighthouse score 95+ untuk Performance, Accessibility, Best Practices, dan SEO).

---

## 3. Target Pengguna (User Persona)
* **Tech Recruiter & HR:** Memeriksa riwayat kerja, ketersediaan, resume, dan tautan kontak dengan cepat.
* **Engineering Manager / Lead Developer:** Memeriksa kualitas kode (GitHub), arsitektur proyek, dan stack teknologi yang digunakan.
* **Calon Klien / Mitra Bisnis:** Mengevaluasi hasil karya nyata, demo interaktif, dan kapabilitas solusi digital.

---

## 4. Cakupan Fitur & Kebutuhan Fungsional

### 4.1. Core Features (P0 - Wajib)
* **Theme Engine (Dark/Light Switcher):**
  * Deteksi otomatis `prefers-color-scheme`.
  * Penyimpanan state tema di `localStorage` agar tidak terjadi *flicker* saat navigasi/refresh.
  * Tombol toggle minimalis (ikon matahari/bulan atau indikator teks monokrom).
* **Hero Section:**
  * Headline nama profesional, status pekerjaan terkini (misal: *Available for full-time / freelance*).
  * Ringkasan spesialisasi singkat (1–2 kalimat).
  * Quick Actions: Unduh Resume/CV, tombol email langsung, dan tautan sosial (GitHub, LinkedIn).
* **Project Showcase (Etalase Proyek):**
  * Tampilan grid atau list kartu proyek.
  * Informasi esensial tiap proyek: Nama, Deskripsi singkat, Tag Stack Teknologi, Tautan Source Code, dan Live Demo.
  * Efek visual kartu monokrom dengan interaksi hover dinamis.
* **Contact & Footer:**
  * Tombol salin alamat email ke clipboard (*click-to-copy* dengan toast feedback).
  * Tautan repositori profil, hak cipta tahunan, dan status zona waktu lokal.

### 4.2. Supporting Features (P1 - Sangat Direkomendasikan)
* **Project Filtering / Categories:** Filter proyek berdasarkan kategori (misal: *All*, *Web App*, *Backend/API*, *Mobile/Hardware*).
* **Tech Stack & Skills Matrix:** Daftar teknologi terbagi menurut keahlian (Frontend, Backend, Database, Cloud/Tools).
* **Experience & Education Timeline:** Riwayat kerja atau pencapaian disajikan dalam bentuk garis waktu tipografis minimalis.

### 4.3. Future Scope (P2 - Tahap Lanjutan)
* **Project Detail Page / Modal:** Halaman studi kasus lengkap yang memuat latar belakang, tantangan teknis, dan arsitektur sistem.
* **Mini Blog / Writing:** Tempat membagikan artikel teknis atau catatan pribadi.

---

## 5. Kebutuhan Non-Fungsional (Non-Functional Requirements)
* **Performa:** Waktu muat halaman pertama di bawah 1.2 detik pada koneksi 4G standar.
* **Aksesibilitas (a11y):** Rasio kontras teks memenuhi standar WCAG AAA (minimal 7:1) untuk elemen utama.
* **Responsif:** Tampilan adaptif sempurna dari perangkat mobile (320px) hingga layar ultra-wide (1920px+).
* **SEO & Metadata:** Integrasi OpenGraph tags, Twitter Card, dan structured JSON-LD untuk indeks mesin pencari.

---

## 6. Arsitektur Informasi Halaman

```text
[Header / Navbar]
├── Logo / Monogram
├── Navigasi Cepat (Projects, Skills, Experience, Contact)
└── Theme Toggle (Dark / Light)

[Hero Section]
├── Status Badge (misal: "● Available for opportunities")
├── Headline & Bio Singkat
└── Primary Action (Lihat Proyek) & Social Icons

[Selected Projects Section]
├── Category Filters (All / Web / System / Mobile)
└── Project Grid
    └── Project Cards (Thumbnail B&W, Judul, Tech Tags, Links)

[Skills & Toolkit]
└── Tag Cloud / Categorized Monochrome Pills

[Experience / Milestones]
└── Minimalist Vertical Timeline

[Footer & Contact]
├── "Let's build something together"
├── Copyable Email Button
└── Copyright & Social Links
```