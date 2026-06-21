GALANG & ASSOCIATES LAW OFFICE — WEBSITE PROFIL (SIAP GITHUB PAGES)
====================================================================

STRUKTUR FILE
-------------
/index.html        -> Halaman utama (struktur & konten)
/style.css         -> Seluruh tampilan/desain (warna navy, gold, putih, abu)
/script.js         -> Interaksi: menu mobile, link WhatsApp, animasi, form
/logo-galang.jpg   -> Logo kantor (dipakai di header, hero, footer, favicon)
/video-profil.mp4  -> Video profil kantor
/.nojekyll         -> Agar GitHub Pages menyajikan semua file apa adanya

DATA KANTOR
-----------
Nama       : Galang & Associates Law Office
Tagline    : Dedicated Corporate Legal Counsel | Reliable and Protecting Businesses
Alamat     : Ruko Royal Dharmahusada, Jl. Mulyorejo Barat No.225 Blok DD,
             Mulyorejo, Kec. Mulyorejo, Surabaya, Jawa Timur 60285
WhatsApp   : 085173404082  (link: https://wa.me/6285173404082)
Email      : law.office@galanglegal.com
Instagram  : https://instagram.com/galanglegal
Google Maps: https://share.google/kYEwpkKjf9zjNJohv

CARA MENJALANKAN DI LOKAL
-------------------------
Cara cepat : klik dua kali file index.html (langsung terbuka di browser).
Disarankan : jalankan lewat server lokal agar video & embed peta optimal,
             misalnya dengan XAMPP (taruh folder di htdocs) lalu buka
             http://localhost/galang%20associates/  ATAU jalankan
             "npx http-server" di dalam folder ini.

CARA UPLOAD KE GITHUB PAGES
---------------------------
1. Buat repository baru di GitHub.
2. Upload SEMUA file di folder ini ke root repository
   (index.html harus berada di root, bukan di dalam subfolder).
3. Buka repository > Settings > Pages.
4. Build and deployment > Source: "Deploy from a branch".
5. Branch: main, Folder: / (root), lalu Save.
6. Tunggu beberapa menit hingga link GitHub Pages aktif.

CARA EDIT CEPAT
---------------
- Ganti nomor WhatsApp / email / Instagram : edit objek SITE_CONFIG di script.js.
- Ganti warna tema                          : edit blok :root di bagian atas style.css.
- Ganti logo                                : timpa file logo-galang.jpg (nama sama).
- Ganti video profil                        : timpa file video-profil.mp4 (nama sama).
- Edit teks/section                         : cari komentar <!-- ... --> di index.html.
