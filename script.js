const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const currentYear = document.querySelector("[data-current-year]");

function syncHeaderState() {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
}

function closeNavigation() {
  nav?.classList.remove("is-open");
  navToggle?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
}

navToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  navToggle.classList.toggle("is-open", Boolean(isOpen));
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeNavigation();
  }
});

window.addEventListener("scroll", syncHeaderState, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 720) {
    closeNavigation();
  }
});

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

syncHeaderState();
