/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eefdfe",
          100: "#dcfbfc",
          200: "#b9f7f9",
          300: "#96f4f7",
          400: "#73f0f4",
          500: "#50ecf1",
          600: "#40bdc1",
          700: "#308e91",
          800: "#205e60",
          900: "#102f30",
        },
        secondary: {
          50: " #ECF1FD",
          100: " #D9E3FB",
          200: "#B3C7F7",
          300: "#8EAAF4",
          400: "#688EF0",
          500: "#4272EC",
          600: "#355BBD",
          700: "#28448E",
          800: "#1A2E5E",
          900: "#0D172F",
        },
        customGreen: "#36884C",
        customRed: "#DA1C2C",
        borderColor: "#292829",
        customGray: "#161A25",
        textGray: "#808080",
        cardBackground: "#0F131A",
        accent: "#288FF0",
        buttonBackground: "#211E28",
        wiregaurd: "#1F5EFF",
        openvpnText: "#1F5EFF",
        openvpn: "#FFF",
        v2ray: "#7C99E2",
        headerText: "#CBCBCB",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
