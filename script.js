// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Плавная прокрутка
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Анимация при скролле
  const animateOnScroll = () => {
    document.querySelectorAll(".post, .banner").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  };

  // Инициализация анимаций
  document.querySelectorAll(".post, .banner").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll();

  // Параллакс эффект
  window.addEventListener("scroll", function () {
    document.body.style.backgroundPositionY = `${window.pageYOffset * 0.5}px`;
  });

  // Анимация соцсетей
  document.querySelectorAll(".social-links a").forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.style.transform = "scale(1.2)";
    });
    link.addEventListener("mouseout", () => {
      link.style.transform = "scale(1)";
    });
  });
});
