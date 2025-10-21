const config = {
  plugins: [
    ["@tailwindcss/postcss", {
      config: {
        darkMode: 'class',  // ← Альтернативный вариант
      }
    }]
  ],
};

export default config;