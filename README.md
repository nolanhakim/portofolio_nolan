# Portofolio — Catraliya Nolan Hakim

Website portofolio pribadi dengan estetika *Technical Minimalist / Editorial Monochrome*. Satu halaman, hitam-putih, tanpa warna spektrum — hierarki dibangun dari kontras luminance, tebal font, hairline border, dan whitespace.

**Live:** [nolanhakim.my.id](https://nolanhakim.my.id)

---

## Tech Stack

| | |
| :-- | :-- |
| Framework | Next.js 16 (App Router) + React 19 |
| Bahasa | TypeScript |
| Styling | Tailwind CSS v4 |
| Animasi | GSAP + `@gsap/react` + ScrollTrigger |
| Font | Geist Sans / Geist Mono (`next/font`) |

---

## Fitur

**Tema**
- Default **light** pada kunjungan pertama (tampilan awal selalu putih)
- Persistensi `localStorage` — pilihan dark/light dipertahankan di kunjungan berikutnya
- Anti-flicker: `theme-init.js` dijalankan `beforeInteractive`, sebelum paint pertama
- Transisi global `0.35s` pada `background-color`, `color`, `border-color`
- Toggle sun/moon dengan crossfade GSAP

**Konten**
- Hero dengan status ketersediaan, bio, ringkasan data (IPK, sertifikasi, lokasi)
- CTA di atas fold: **Lihat Proyek**, **Unduh CV** (`/cv.pdf`), **Email** (`mailto:`), GitHub, LinkedIn
- 10 proyek dengan filter kategori (`All` / `Web App` / `CMS` / `Landing Page`)
- Skills terkelompok: Frontend, Backend & Database, Jaringan & IT Support, CMS/Tools/Design, Soft Skills
- Timeline pengalaman kerja dengan badge tipe (Magang / Full-time / Part-time)
- Pendidikan, 7 sertifikasi, dan pengalaman organisasi
- Copy-email ke clipboard dengan toast, jam lokal WIB yang live

**Motion**
- Reveal on-scroll (`rise` / `slideLeft` / `zoom` / `drop`) via ScrollTrigger
- Hero mask-reveal headline + stagger fade
- Marquee dua arah (skills atas, tagline rekrutmen bawah), **pause saat hover**
- Semua animasi dibungkus pengecekan `prefers-reduced-motion`

**Aksesibilitas**
- Focus ring global `:focus-visible` dua-cincin (terbaca di tombol filled dan dark mode)
- Touch target 44px untuk semua icon button
- Menu mobile berupa overlay solid dengan body scroll lock — tidak mendorong konten
- Kontras teks: primary 19.9:1, secondary 7.73:1, muted 6.22:1 (light) — semua ≥ WCAG AA
- `aria-label` pada seluruh kontrol ikon, `aria-live` pada status copy

---

## Struktur

```
app/
├── layout.tsx          Metadata SEO (OG/Twitter), font, theme-init
├── page.tsx            Komposisi seluruh section
├── globals.css         Color token light/dark, focus ring, keyframes
├── lib/
│   └── data.ts         ★ Sumber tunggal seluruh konten
└── components/
    ├── Header.tsx      Sticky nav + menu mobile overlay
    ├── Hero.tsx
    ├── Marquee.tsx
    ├── Projects.tsx    Grid + filter kategori
    ├── Skills.tsx
    ├── Experience.tsx
    ├── Credentials.tsx
    ├── Contact.tsx     Copy-email + toast + footer
    ├── ThemeToggle.tsx
    └── Reveal.tsx      Wrapper animasi on-scroll

public/
├── cv.pdf              Resume yang bisa diunduh
└── images/*.svg        Thumbnail proyek 640×360
```

---

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start
npm run lint
```

---

## Mengubah Konten

Semua teks, proyek, timeline, sertifikasi, dan kontak ada di **`app/lib/data.ts`**. Tidak perlu menyentuh komponen untuk memperbarui konten.

```ts
export const contact = { name, role, email, github, linkedin, ... };

export const projects = [
  {
    id, name, category,   // category harus salah satu dari `categories`
    description, stack,   // stack: string[]
    source,               // URL repo; "https://github.com" menyembunyikan tombol Code
    demo,                 // opsional — tanpa field ini tombol Live Demo tidak muncul
    image,                // path ke /public/images/*
  },
];

export const categories = ["All", "Web App", "CMS", "Landing Page"];
export const skills = { frontend, backend, jaringanIT, cmsTools, softSkill };
export const timeline = [{ year, type, role, place, desc }];
export const education, certifications, organizations;
```

### Menambah proyek

1. Taruh thumbnail 640×360 di `public/images/` (pakai nama `-placeholder.svg` atau PNG/JPG asli)
2. Tambah objek ke array `projects`
3. Pastikan `category` cocok dengan salah satu entri `categories`

Thumbnail di-render grayscale 100% dan kembali berwarna saat hover — **screenshot asli akan terlihat jauh lebih baik daripada wireframe placeholder**.

---

## Design System

Token warna didefinisikan di `globals.css` (`:root` untuk light, `.dark` untuk dark).

| Token | Light | Dark | Fungsi |
| :-- | :-- | :-- | :-- |
| `--bg-canvas` | `#ffffff` | `#09090b` | Latar halaman |
| `--bg-surface` | `#f4f4f5` | `#18181b` | Kartu, pill |
| `--border-subtle` | `#e4e4e7` | `#27272a` | Garis pemisah |
| `--border-strong` | `#18181b` | `#fafafa` | Border hover/fokus |
| `--text-primary` | `#09090b` | `#fafafa` | Headline |
| `--text-secondary` | `#52525b` | `#a1a1aa` | Paragraf |
| `--text-muted` | `#606069` | `#8e8e99` | Metadata, tanggal |
| `--accent-contrast` | `#000000` | `#ffffff` | Tombol utama (inverse) |

Panduan lengkap: [`design_system_visual_guidelines.md`](./design_system_visual_guidelines.md)

---

## Dokumentasi Terkait

- [`product_requirement_document.md`](./product_requirement_document.md) — kebutuhan fungsional & non-fungsional
- [`design_system_visual_guidelines.md`](./design_system_visual_guidelines.md) — spesifikasi visual & komponen

---

## Kontak

**Catraliya Nolan Hakim** — Web Developer (Front-End & Back-End) & IT Support · Surakarta, Indonesia

- Email: [nolanhakimm10@gmail.com](mailto:nolanhakimm10@gmail.com)
- GitHub: [github.com/nolanhakim](https://github.com/nolanhakim)
- LinkedIn: [catraliya-nolan-hakim](https://www.linkedin.com/in/catraliya-nolan-hakim-782aaa33b)
- Instagram: [@catranolanhkm](https://instagram.com/catranolanhkm)
