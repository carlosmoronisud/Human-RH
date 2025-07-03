/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
        'rh-primary': '#253746', // Exemplo de cor escura
        'rh-secondary': '#FFFFFF', // Exemplo de cor clara
        'rh-accent': '#00A9E0',   // Exemplo de cor de destaque/botões
        'rh-background': '#F4F7F9', // Exemplo de cor de fundo
      },
  },
  plugins: [],
}