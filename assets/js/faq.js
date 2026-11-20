export function initFaq() {
  var faqItems = Array.prototype.slice.call(document.querySelectorAll(".faq-item"));

  faqItems.forEach(function (item) {
    var button = item.querySelector(".faq-q");
    var panel = item.querySelector(".faq-a");

    button.addEventListener("click", function () {
      var willOpen = !item.classList.contains("is-open");

      faqItems.forEach(function (other) {
        if (other !== item) {
          other.classList.remove("is-open");
          other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
          other.querySelector(".faq-a").setAttribute("aria-hidden", "true");
        }
      });

      item.classList.toggle("is-open", willOpen);
      button.setAttribute("aria-expanded", String(willOpen));
      panel.setAttribute("aria-hidden", String(!willOpen));
    });
  });
}
