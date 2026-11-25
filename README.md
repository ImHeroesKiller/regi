# regi — Professional Portfolio

Portfolio profesional Reggia Lovvita Mulyasari dengan arah visual editorial modern dan fokus pada administrasi, operasi, customer experience, serta digital workflow.

## Struktur

- `index.html` — semantic page structure, SEO metadata, JSON-LD, dan konten utama.
- `styles.css` — design tokens, responsive layout, komponen visual, dark section, dan reduced-motion support.
- `script.js` — mobile navigation, scroll state, reveal animation, back-to-top, year dinamis, dan validasi form.
- `favicon.svg` — favicon berbasis SVG.
- `robots.txt` dan `sitemap.xml` — fondasi SEO teknis.
- `CNAME` — konfigurasi custom domain.

## Menjalankan secara lokal

Buka `index.html` langsung di browser atau gunakan static server sederhana.

## Catatan form

Form kontak saat ini melakukan validasi client-side dan belum mengirim data ke endpoint produksi. Sebelum publish sebagai form aktif, hubungkan handler serverless atau provider form yang dipilih pada `script.js`, lalu tambahkan privacy notice sesuai kebutuhan.

## Arah pengembangan berikutnya

1. Tambahkan foto profil yang sudah dioptimalkan.
2. Ganti deskripsi proyek dengan case study, hasil, dan tautan yang sudah diverifikasi.
3. Tambahkan resume PDF versi final.
4. Jalankan Lighthouse mobile dan uji keyboard.
5. Pertimbangkan migrasi ke Astro jika jumlah halaman dan case study bertambah.
