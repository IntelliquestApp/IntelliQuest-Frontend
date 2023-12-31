/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        second : "#1F2636",
        primary: "#6a5ae0",
        primaryBg: "#0C0C0C",
        primaryLight: "#ff8127",
        secondary: "#F9FAFB",
        secondaryBg: "#181818",
        linkedinBg: "#0e9fff",
        instagramBg: "#fe0582",
        githubBg: "#000000",
        leetcodeBg: "#000000",
      },
      boxShadow: {
        sidebar: "0px 2px 10px rgba(0, 0, 0, 0.1);",
        dropdownPopup: "0px 4px 26px rgba(0, 0, 0, 0.125)",
        formCard:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      },
      fontFamily: {
        nunito: ["nunito"],
        dm_sans: ["dm_sans"],
        lily: ["lily"],
        lora: ["lora"]
      },
      keyframes: {
        arrowDown: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(90deg)" },
        },
      },
      animation: {
        arrowDown: "arrowDown .2s ease-in-out forwards",
      },
      translate: {
        extra: '200%',
      },
      screens: {
        'xsm_desktop': '1000px',
        'sm_desktop': '1310px',
        'md_tablet': '1100px',
        'lg_tablet': '1200px',
        'xl_tablet': '1145px',
        'sm_tablet': '710px',
        'xl_phone': '855px',
        'lg_phone': '500px',
        'xsm_tablet': '534px',
        'sm_skill': '463px',
        'md_phone': '410px',
      },
    },
  },
  plugins: [],
}
