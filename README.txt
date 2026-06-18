PAKET WEBSITE GALANG & ASSOCIATES - SIAP GITHUB PAGES

Cara upload ke GitHub Pages:
1. Extract ZIP ini terlebih dahulu.
2. Upload ISI folder ke repository GitHub, bukan file ZIP-nya.
3. Pastikan file index.html berada di root repository, bukan di dalam folder tambahan.
4. Pastikan video-profil.mp4 berada satu folder dengan index.html.
5. Buka repository GitHub > Settings > Pages.
6. Pada Build and deployment, pilih Source: Deploy from a branch.
7. Branch: main, Folder: /root, lalu Save.
8. Tunggu beberapa menit sampai link GitHub Pages aktif.

Struktur yang benar:
/index.html
/video-profil.mp4
/logo-galang.jpg
/.nojekyll

Catatan:
Logo sudah tertanam di dalam index.html, sedangkan video masih memakai file eksternal video-profil.mp4 agar mudah diganti.
