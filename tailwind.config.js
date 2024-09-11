module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  mode: "jit", // Enable Just-in-Time (JIT) mode for faster builds
  purge: ["./src/**/*.vue", "./public/index.html"],
};
