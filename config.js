// config.js
const CONFIG = {
  // Цветовая схема
  COLORS: {
    PRIMARY: '#38cadd',
    SECONDARY: '#6a11cb',
    ACCENT: '#e62ecd',
    DARK: '#0d0d17',
    DARKER: '#090912',
    LIGHT: '#f0f0f0'
  },

  // Анимации
  ANIMATIONS: {
    DURATION: '0.5s',
    EASING: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    NAV_EASING: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    SCROLL_EASING: 'cubic-bezier(0.16, 1, 0.3, 1)'
  },

  // Размеры и отступы
  SIZES: {
    HEADER_PADDING: '15px 5%',
    HEADER_PADDING_MOBILE: '15px',
    MAIN_PADDING: '30px 5%',
    BANNER_PADDING: '50px 20px',
    POST_PADDING: '40px 20px',
    FOOTER_PADDING: '20px 0'
  },

  // Тексты
  TEXTS: {
    SITE_TITLE: 'Zed Red Games',
    BANNER_TITLE: 'Zed Red Games',
    BANNER_DESCRIPTION: 'Мы создаем захватывающие игровые вселенные',
    GAME_TITLE: 'Realm of Darkness',
    GAME_DESCRIPTION: 'Темное фэнтезийное приключение',
    COPYRIGHT: '© 2025 Zed Red Games'
  },

  // Навигация
  NAV_ITEMS: [
    { icon: 'icons/sections/about.svg', text: 'О нас', target: '#about' },
    { icon: 'icons/sections/play.svg', text: 'Играть', target: '#play' },
    { icon: 'icons/sections/updates.svg', text: 'Обновления', target: '#updates' },
    { icon: 'icons/sections/info.svg', text: 'Контакты', target: '#info' }
  ],

  // Социальные сети
  SOCIAL_LINKS: [
    { icon: 'icons/social-networks/black/Telegram.svg', url: '#', class: 'telegram' },
    { icon: 'icons/social-networks/black/YouTube.svg', url: '#', class: 'youtube' },
    { icon: 'icons/social-networks/black/TikTok.svg', url: '#', class: 'tiktok' }
  ],

  // Изображения
  IMAGES: {
    GAME: 'rof.png',
    GAME_ALT: 'Realm of Darkness'
  },

  // Адаптивность
  BREAKPOINTS: {
    MOBILE: 768
  }
};

// Экспорт конфигурации
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}