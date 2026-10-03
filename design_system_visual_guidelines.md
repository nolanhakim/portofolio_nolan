# DESIGN.md
## Monochrome Design System & UI Specification

---

## 1. Filosofi & Konsep Visual
* **Estetika:** *Technical Minimalist / Editorial Monochrome*.
* **Prinsip Utama:** Tidak ada warna spektrum pelangi (merah, biru, hijau, dll.) untuk elemen tata letak struktural. Hirarki informasi dibangun murni melalui kontras nilai kecerahan (*luminance*), ketebalan font (*font-weight*), garis batas (*hairline borders*), dan spasi kosong (*whitespace*).
* **Media / Tangkapan Layar:** Screenshot proyek dapat diberi filter CSS grayscale `filter: grayscale(100%)` secara default, dan bertransisi menjadi warna normal saat di-hover pengunjung (`filter: grayscale(0%)`).

---

## 2. Token Warna (Color Tokens)

### 2.1. Light Mode (High-Contrast Clean Paper)
| Token | Nilai Hex | Keterangan Penggunaan |
| :--- | :--- | :--- |
| `--bg-canvas` | `#FFFFFF` | Latar belakang dasar halaman |
| `--bg-surface` | `#F4F4F5` (Zinc-100) | Latar kartu, pill tags, dan badge |
| `--bg-surface-hover` | `#E4E4E7` (Zinc-200) | State hover pada tombol sekunder atau kartu |
| `--border-subtle` | `#E4E4E7` (Zinc-200) | Garis pemisah, border kartu standar |
| `--border-strong` | `#18181B` (Zinc-900) | Garis border saat fokus atau aktif |
| `--text-primary` | `#09090B` (Zinc-950) | Teks headline, judul, dan konten utama |
| `--text-secondary`| `#52525B` (Zinc-600) | Paragraf deskripsi dan label pendukung |
| `--text-muted` | `#71717A` (Zinc-500) | Tanggal, metadata, dan placeholder |
| `--accent-contrast`| `#000000` | Elemen tombol utama (kontras terbalik) |

### 2.2. Dark Mode (Deep Carbon / OLED Black)
| Token | Nilai Hex | Keterangan Penggunaan |
| :--- | :--- | :--- |
| `--bg-canvas` | `#09090B` (Zinc-950) | Latar belakang dasar halaman |
| `--bg-surface` | `#18181B` (Zinc-900) | Latar kartu, pill tags, dan badge |
| `--bg-surface-hover` | `#27272A` (Zinc-800) | State hover pada tombol sekunder atau kartu |
| `--border-subtle` | `#27272A` (Zinc-800) | Garis pemisah, border kartu standar |
| `--border-strong` | `#FAFAFA` (Zinc-50) | Garis border saat fokus atau aktif |
| `--text-primary` | `#FAFAFA` (Zinc-50) | Teks headline, judul, dan konten utama |
| `--text-secondary`| `#A1A1AA` (Zinc-400) | Paragraf deskripsi dan label pendukung |
| `--text-muted` | `#71717A` (Zinc-500) | Tanggal, metadata, dan placeholder |
| `--accent-contrast`| `#FFFFFF` | Elemen tombol utama (kontras terbalik) |

---

## 3. Tipografi & Tipikal Skala

### 3.1. Font Families
* **Primary / Sans-Serif:** `Geist Sans`, `Inter`, atau `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.
* **Monospace / Code:** `Geist Mono`, `JetBrains Mono`, atau `"Fira Code", monospace` (digunakan untuk tech-stack tags, angka indeks proyek, dan tanggal).

### 3.2. Type Scale
| Level | Ukuran (Size) | Line Height | Weight | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Title** | `clamp(2.25rem, 6vw, 3.75rem)` | 1.1 | 700 (Bold) | `-0.035em` |
| **Section H2** | `1.5rem` (24px) | 1.25 | 600 (Semibold) | `-0.025em` |
| **Card Title** | `1.125rem` (18px) | 1.35 | 600 (Semibold) | `-0.015em` |
| **Body Large** | `1.125rem` (18px) | 1.6 | 400 (Regular) | normal |
| **Body Standard**| `0.9375rem` (15px) | 1.6 | 400 (Regular) | normal |
| **Badge / Mono** | `0.75rem` (12px) | 1.2 | 500 (Medium) | `+0.05em` (Caps) |

---

## 4. Panduan Komponen Antarmuka

### 4.1. Kartu Proyek (Project Card)
* **Bentuk & Struktur:** Kotak dengan border tipis `1px solid var(--border-subtle)` dan radius sudut `8px`.
* **Gambar Thumbnail:** Aspek rasio 16:9, grayscale 100% pada kondisi normal, bertransisi mulus ke warna asli dengan `transition: filter 0.3s ease` saat kursor berada di atas kartu.
* **Pill Stack Tag:**
  * Menggunakan font monospace ukuran 11–12px.
  * Background `var(--bg-surface)` dengan border `1px solid var(--border-subtle)`.
* **Tautan Aksi:** Ikon panah miring (*external link arrow*) `↗` atau tautan GitHub yang bereaksi saat kartu di-hover.

### 4.2. Tombol (Buttons)
* **Primary Button:**
  * Latar: `var(--accent-contrast)` (Hitam pekat di light mode, Putih solid di dark mode).
  * Teks: Latar sebaliknya (Putih di light mode, Hitam di dark mode).
  * Radius: `6px` atau `9999px` (kapsul penuh).
* **Outline / Ghost Button:**
  * Latar: Transparan.
  * Border: `1px solid var(--border-subtle)`.
  * Hover: Latar berubah menjadi `var(--bg-surface)` dan border menjadi `var(--border-strong)`.

### 4.3. Theme Toggle Control
* Ikon minimalis SVG matahari/bulan atau teks biner:
  ```text
  [ LIGHT ] / [ DARK ]
  ```
* Transisi warna global:
  ```css
  html {
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
                color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
                border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  ```

---

## 5. Pola Spasi & Layout
* **Max Content Width:** `1024px` atau `1120px` (menjaga fokus di tengah layar dan membatasi panjang baris teks artikel).
* **Grid Spacing:** Menggunakan kelipatan 4/8px:
  * Section gap: `64px` (mobile), `96px` - `128px` (desktop).
  * Card grid gap: `16px` atau `24px`.
* **Micro-interactions:** Hindari animasi melayang (*bouncing/spring*) yang terlalu ekspresif; gunakan animasi berbasis fade atau translate halus (`ease-out`, durasi 150ms–250ms) untuk mempertahankan kesan presisi.