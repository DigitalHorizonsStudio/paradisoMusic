export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '7xl': '5rem', // Tamaño de texto 7xl
        '8xl': '6rem', // Tamaño de texto 8xl (ejemplo adicional)
      },
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0.5px',
      '1': '3px',
    }
  },
  plugins: [],
}
