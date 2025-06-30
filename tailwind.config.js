/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f172a',     // фон тёмной темы
        sidebar: '#1e293b',        // боковая панель
        card: '#1e293b',           // карточки
        primaryText: '#e2e8f0',    // основной текст
        accent: '#3b82f6',         // выделения
      },
    },
  },
  plugins: [],
}

