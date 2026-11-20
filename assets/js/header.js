export function initHeader() {
  var header = document.getElementById("site-header");
  if (!header) return;

  var onScroll = function () {
    header.classList.toggle("is-stuck", window.scrollY > 8);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}
