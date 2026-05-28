(function () {
  if (window.__miamiNavbarMounted) return;
  window.__miamiNavbarMounted = true;

  const navbarMarkup = `
<header class="site-header">
  <div class="header-inner">
    <button id="mobile-menu-trigger" class="nav-toggle" aria-label="פתח תפריט" aria-expanded="false" type="button">
      <span class="material-symbols-outlined text-4xl">menu</span>
    </button>

    <a href="index.html" class="block hover:opacity-80 transition-opacity" aria-label="לוגו מלון מיאמי אשדוד">
      <img alt="Miami Hotel Ashdod Logo" class="h-12 w-auto object-contain"
           src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfln3QJRSEBXnYt6NuUoTj2Mh65AoHHSnkNuaP2pzC9qCJ7hqEDCINqVupupRQRa1UnU4IJ59SNMW7c-7FgxoJtcNG3wGvk-i3NvyNrnyV08LbLCrkBmS72-zulopyR40Fz-9ivXeJTVNHNx5tRfT1pFZbyyD2cdcHlPRU62MOel740wAwOJaiwSzInyoQ4mFrE5SW-BP2e5S4h522_djjniERn5Jqd-uH_Lvhu1W-pbSQhAWb6BM6-d7LBW7AMpjNu3NKKqsIHy_R"/>
    </a>

    <nav class="nav-desktop" aria-label="תפריט ראשי">
      <a href="contact.html">צור קשר</a>
      <a href="about.html">אודות</a>
      <a href="gallery.html">גלריה</a>
      <a href="events.html">כנסים ואירועים</a>
      <a href="shabbat.html">שבת חתן</a>
      <a href="rooms.html">חדרים</a>
    </nav>

    <a href="contact.html" class="header-cta">הזמינו עכשיו</a>
  </div>
</header>

<div class="announcement-bar">
  <p>כשרות הרב מחפוד | זמני כניסת שבת: 19:00 | זמני יציאת שבת: 20:00</p>
</div>

<div id="mobile-menu-overlay" class="mobile-nav-overlay"></div>
<aside id="mobile-nav-drawer" class="mobile-nav-drawer" dir="rtl" aria-hidden="true">
  <div class="mobile-nav-drawer__head">
    <button id="mobile-menu-close" class="mobile-nav-drawer__close" aria-label="סגור תפריט" type="button">
      <span class="material-symbols-outlined text-3xl">close</span>
    </button>
    <a href="index.html">
      <img alt="Miami Hotel Ashdod Logo" class="h-12 w-auto object-contain"
           src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfln3QJRSEBXnYt6NuUoTj2Mh65AoHHSnkNuaP2pzC9qCJ7hqEDCINqVupupRQRa1UnU4IJ59SNMW7c-7FgxoJtcNG3wGvk-i3NvyNrnyV08LbLCrkBmS72-zulopyR40Fz-9ivXeJTVNHNx5tRfT1pFZbyyD2cdcHlPRU62MOel740wAwOJaiwSzInyoQ4mFrE5SW-BP2e5S4h522_djjniERn5Jqd-uH_Lvhu1W-pbSQhAWb6BM6-d7LBW7AMpjNu3NKKqsIHy_R"/>
    </a>
  </div>

  <nav class="mobile-nav-drawer__links" aria-label="תפריט מובייל">
    <a href="rooms.html">חדרים</a>
    <a href="shabbat.html">שבת חתן</a>
    <a href="events.html">כנסים ואירועים</a>
    <a href="gallery.html">גלריה</a>
    <a href="about.html">אודות</a>
    <a href="contact.html">צור קשר</a>
    <a href="contact.html" class="mobile-nav-drawer__cta">הזמינו עכשיו</a>
  </nav>
</aside>
`;

  const root = document.getElementById("site-navbar");
  if (!root) return;
  root.outerHTML = navbarMarkup;

  const page = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  const navLinks = document.querySelectorAll(".nav-desktop a, .mobile-nav-drawer__links a:not(.mobile-nav-drawer__cta)");
  navLinks.forEach((link) => {
    const href = (link.getAttribute("href") || "").toLowerCase();
    if (href === page) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });

  const trigger = document.getElementById("mobile-menu-trigger");
  const closeBtn = document.getElementById("mobile-menu-close");
  const drawer = document.getElementById("mobile-nav-drawer");
  const overlay = document.getElementById("mobile-menu-overlay");

  if (!trigger || !drawer || !overlay) return;

  function setOpen(isOpen) {
    drawer.classList.toggle("is-open", isOpen);
    overlay.classList.toggle("is-open", isOpen);
    drawer.setAttribute("aria-hidden", isOpen ? "false" : "true");
    document.body.style.overflow = isOpen ? "hidden" : "";
    trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }

  trigger.addEventListener("click", () => setOpen(true));
  if (closeBtn) closeBtn.addEventListener("click", () => setOpen(false));
  overlay.addEventListener("click", () => setOpen(false));

  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
})();
