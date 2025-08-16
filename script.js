document.addEventListener("DOMContentLoaded", function () {
  // Плавная прокрутка для якорных ссылок
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Анимация при скролле
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".post, .banner");

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (elementPosition < screenPosition) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
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
  animateOnScroll(); // Запустить при загрузке

  // Эффект параллакса для фона
  window.addEventListener("scroll", function () {
    const scrollPosition = window.pageYOffset;
    document.body.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  });

  // Интерактивность для социальных ссылок
  document.querySelectorAll(".social-links a").forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.style.transform = "scale(1.2)";
    });

    link.addEventListener("mouseout", () => {
      link.style.transform = "scale(1)";
    });
  });
});
