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

  // Анимация навигации с свечением
  document.querySelectorAll(".nav-link").forEach((link) => {
    const img = link.querySelector("img");

    // Создаем элемент для свечения
    const glow = document.createElement("div");
    glow.style.position = "absolute";
    glow.style.width = "100%";
    glow.style.height = "100%";
    glow.style.background =
      "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)";
    glow.style.opacity = "0";
    glow.style.transition = "opacity 0.3s ease";
    glow.style.pointerEvents = "none";
    glow.style.borderRadius = "50%";
    glow.style.filter = "blur(5px)";

    // Добавляем свечение к иконке
    img.style.position = "relative";
    img.appendChild(glow);

    link.addEventListener("mouseenter", () => {
      link.style.background = "rgba(255, 255, 255, 0.05)";
      link.style.transform = "translateY(-2px)";
      img.style.transform = "scale(1.1)";
      img.style.filter =
        "brightness(0) invert(1) drop-shadow(0 0 5px rgba(255, 255, 255, 0.5))";
      glow.style.opacity = "0.6";
    });

    link.addEventListener("mouseleave", () => {
      link.style.background = "";
      link.style.transform = "";
      img.style.transform = "";
      img.style.filter = "brightness(0) invert(1)";
      glow.style.opacity = "0";
    });
  });

  // Анимация карточек
  document.querySelectorAll(".banner, .post").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = card.classList.contains("banner")
        ? "translateY(-5px)"
        : "scale(1.01)";
      card.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.3)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
      card.style.boxShadow = "";
    });
  });

  // Анимация изображений в постах
  document.querySelectorAll(".post img").forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.02)";
      img.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.4)";
    });

    img.addEventListener("mouseleave", () => {
      img.style.transform = "";
      img.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
    });
  });

  // Анимация соцсетей
  document.querySelectorAll(".social-links a").forEach((link) => {
    const img = link.querySelector("img");
    const originalSrc = img.src;
    const coloredSrc = originalSrc.replace("/black/", "/colored/");

    // Создаем элемент для цветной версии
    const coloredImg = new Image();
    coloredImg.src = coloredSrc;
    coloredImg.style.position = "absolute";
    coloredImg.style.top = "0";
    coloredImg.style.left = "0";
    coloredImg.style.width = "100%";
    coloredImg.style.height = "100%";
    coloredImg.style.opacity = "0";
    coloredImg.style.transition = "opacity 0.3s ease";

    link.appendChild(coloredImg);

    link.addEventListener("mouseenter", () => {
      img.style.opacity = "0";
      coloredImg.style.opacity = "1";
      link.style.transform = "scale(1.2)";
    });

    link.addEventListener("mouseleave", () => {
      img.style.opacity = "1";
      coloredImg.style.opacity = "0";
      link.style.transform = "";
    });
  });

  // Адаптивность
  function handleResponsive() {
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    const bannerTitle = document.querySelector(".banner h1");

    if (window.innerWidth <= 768) {
      header.style.flexDirection = "column";
      header.style.padding = "15px";
      nav.style.marginTop = "15px";
      nav.style.flexWrap = "wrap";
      nav.style.justifyContent = "center";
      if (bannerTitle) bannerTitle.style.fontSize = "2.5rem";
    } else {
      header.style.flexDirection = "";
      header.style.padding = "15px 5%";
      nav.style.marginTop = "";
      nav.style.flexWrap = "";
      nav.style.justifyContent = "";
      if (bannerTitle) bannerTitle.style.fontSize = "";
    }
  }

  window.addEventListener("resize", handleResponsive);
  handleResponsive();

  // Анимация плавающего баннера
  const banner = document.querySelector(".banner");
  if (banner) {
    banner.classList.add("floating");
    const style = document.createElement("style");
    style.textContent = `
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .floating {
            animation: float 6s ease-in-out infinite;
          }
        `;
    document.head.appendChild(style);
  }
});
