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
        // Custom color definitions
        customGreen: "#36884C",
        customRed: "#DA1C2C",
        borderColor: "#292829",
        customGray: "#161A25",
        textGray: "#808080",
        cardBackground: "#0F131A",
        accent: "#288FF0",
        buttonBackground: "#211E28",

        // Custom colors for specific components or elements
        wiregaurd: "#1F5EFF",
        openvpnText: "#1F5EFF",
        openvpn: "#FFF",
        v2ray: "#7C99E2",
        headerText: "#CBCBCB",
      },
      // Custom background gradients
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    // Custom font families
    fontFamily: {
      tomorrow: ["Tomorrow", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
