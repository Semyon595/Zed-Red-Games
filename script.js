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
    el.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
  });

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll();

  // Параллакс эффект
  window.addEventListener("scroll", function () {
    document.body.style.backgroundPositionY = `${window.pageYOffset * 0.5}px`;
  });

  // Яркие иконки навигации с анимацией
  document.querySelectorAll("nav a").forEach((link) => {
    const img = link.querySelector("img");

    link.addEventListener("mouseenter", () => {
      link.style.background = "rgba(255, 255, 255, 0.1)";
      link.style.transform = "translateY(-3px)";
      img.style.transform = "scale(1.2) rotate(5deg)";
      img.style.filter =
        "brightness(0) invert(1) drop-shadow(0 0 12px rgba(255, 255, 255, 0.9))";
    });

    link.addEventListener("mouseleave", () => {
      link.style.background = "";
      link.style.transform = "";
      img.style.transform = "";
      img.style.filter =
        "brightness(0) invert(1) drop-shadow(0 0 0px rgba(255, 255, 255, 0.7))";
    });
  });

  // Плавные анимации для соцсетей
  document.querySelectorAll(".social-links a").forEach((link) => {
    const img = link.querySelector("img");
    const originalSrc = img.src;
    const coloredSrc = originalSrc.replace("/black/", "/colored/");

    // Создаем элемент для цветной версии
    const coloredImg = document.createElement("img");
    coloredImg.src = coloredSrc;
    coloredImg.style.position = "absolute";
    coloredImg.style.top = "0";
    coloredImg.style.left = "0";
    coloredImg.style.width = "100%";
    coloredImg.style.height = "100%";
    coloredImg.style.opacity = "0";
    coloredImg.style.transition =
      "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";

    link.appendChild(coloredImg);

    link.addEventListener("mouseenter", () => {
      link.style.transform = "scale(1.3) translateY(-5px)";
      img.style.opacity = "0";
      img.style.transform = "rotate(-90deg)";
      coloredImg.style.opacity = "1";
      coloredImg.style.transform = "rotate(0)";
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "";
      img.style.opacity = "1";
      img.style.transform = "";
      coloredImg.style.opacity = "0";
      coloredImg.style.transform = "rotate(90deg)";
    });
  });

  // Анимация карточек
  document.querySelectorAll(".banner, .post").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = card.classList.contains("banner")
        ? "translateY(0px)"
        : "scale(1.03)";
      card.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.4)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "none";
      card.style.boxShadow = "";
    });
  });

  document.querySelectorAll(".post img").forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.05)";
      img.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.5)";
    });

    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
      img.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
    });
  });

  // Анимация изображений в постах
  document.querySelectorAll(".post img").forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.05)";
      img.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.5)";
      img.style.transition = "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    });

    img.addEventListener("mouseleave", () => {
      img.style.transform = "";
      img.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
    });
  });

  // Анимация изображений в постах
  document.querySelectorAll(".logo-link").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "scale(1.05)";
      link.style.transition = "transform 0.5s ease";
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "";
      link.style.background = "";
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
      if (bannerTitle) bannerTitle.style.fontSize = "48px";
    } else {
      header.style.flexDirection = "";
      header.style.padding = "15px 5%";
      nav.style.marginTop = "";
      nav.style.flexWrap = "";
      nav.style.justifyContent = "";
      if (bannerTitle) bannerTitle.style.fontSize = "72px";
    }
  }

  window.addEventListener("resize", handleResponsive);
  handleResponsive();
});
