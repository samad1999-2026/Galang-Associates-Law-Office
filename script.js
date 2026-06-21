/* =================================================================
   GALANG & ASSOCIATES LAW OFFICE — SCRIPT.JS
   Berisi: konfigurasi kontak, link WhatsApp otomatis, menu mobile,
   efek scroll header, animasi reveal, active navbar, dan form konsultasi.
   ================================================================= */

/* -----------------------------------------------------------------
   KONFIGURASI KONTAK  (ubah di sini bila data kantor berganti)
   whatsappNumber memakai kode negara Indonesia: 62 + nomor tanpa angka 0 di depan.
   Nomor kantor: 085173404082  ->  6285173404082
   ----------------------------------------------------------------- */
const SITE_CONFIG = {
  whatsappNumber: "6285173404082",
  email: "law.office@galanglegal.com",
  instagramUrl: "https://instagram.com/galanglegal",
  mapsUrl: "https://share.google/kYEwpkKjf9zjNJohv"
};

const DEFAULT_WA_MESSAGE =
  "Halo Galang & Associates Law Office, saya ingin konsultasi hukum.";

/* Bangun URL WhatsApp lengkap dengan pesan ter-encode. */
function buildWhatsappUrl(message = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/* Pasang href WhatsApp pada semua elemen ber-atribut data-whatsapp. */
function applyWhatsappLinks() {
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.setAttribute("href", buildWhatsappUrl());
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
}

/* Menu mobile (hamburger) buka/tutup. */
function setupMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("navMenu");
  if (!toggle || !menu) return;

  const closeMenu = () => {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Buka menu navigasi");
  };

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Tutup menu navigasi" : "Buka menu navigasi");
  });

  // Tutup menu saat salah satu link diklik.
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  // Tutup menu saat layar diperbesar ke ukuran desktop.
  window.addEventListener("resize", () => { if (window.innerWidth > 760) closeMenu(); });
}

/* Tambah bayangan/solid pada header saat halaman digulir. */
function setupHeaderScroll() {
  const header = document.getElementById("siteHeader");
  if (!header) return;
  const update = () => header.classList.toggle("scrolled", window.scrollY > 12);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

/* Animasi fade-in ringan saat elemen masuk viewport. */
function setupRevealAnimation() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index % 4, 3) * 80}ms`;
    observer.observe(item);
  });
}

/* Tandai menu navbar aktif sesuai section yang sedang terlihat. */
function setupActiveNavigation() {
  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".nav-menu a[href^='#']");
  if (!("IntersectionObserver" in window) || !sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) =>
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`)
      );
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  sections.forEach((section) => observer.observe(section));
}

/* Form konsultasi: susun pesan dan buka WhatsApp resmi. */
function setupConsultationForm() {
  const form = document.getElementById("consultationForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }

    const data = new FormData(form);
    const message = [
      "Halo Galang & Associates Law Office, saya ingin konsultasi hukum.",
      "",
      `Nama: ${data.get("name")}`,
      `Nomor WhatsApp: ${data.get("phone")}`,
      `Email: ${data.get("email") || "-"}`,
      `Kebutuhan layanan: ${data.get("service")}`,
      "",
      "Kronologi / pesan singkat:",
      data.get("message")
    ].join("\n");

    window.open(buildWhatsappUrl(message), "_blank", "noopener,noreferrer");
  });
}

/* Inisialisasi semua fungsi setelah DOM siap. */
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  applyWhatsappLinks();
  setupMobileMenu();
  setupHeaderScroll();
  setupRevealAnimation();
  setupActiveNavigation();
  setupConsultationForm();
});
