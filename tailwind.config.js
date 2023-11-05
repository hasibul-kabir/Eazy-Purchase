/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#16161a",
        headline: "#fffffe",
        paragraph: "#94a1b2",
        main: "#fffffe",
        primary: "#7f5af0",
        secondary: "#72757e",
        tertiary: "#2cb67d",
        stroke: "#010101",
      },
      backgroundImage: {
        "banner-image":
          "url('https://s3-alpha-sig.figma.com/img/c667/8c36/3d4b927bffdfc41593ac285d4d44ab95?Expires=1699833600&Signature=X7kpeF4E-vQDdhyi7VJvWUrLjnkuMAx9XjEUsJYgqGnAI-mGk~3RG-oudjy18nHopedASfdr0T8lLiTeuV21FrGHPwXzDHYJOAaz5riZ634qiffo2ZE4dUIcNfDG-vxO2ctzW9a5rX4QpPI~ulXUhi~wQB22fDDnzcYiwLL7QCcqXc2RKSBbk8~pe3YoxB4HUgrupDbFPaM5uKpfCERVpk8NE2hvYVGJP4kszMd7b5miQQKSygkxvpW6EFfg4RWxCR26zwA0kkaB8RdlfM4Kf4CY-3UciEv8~WoIaA0Q4HFnn61ZvHiAjXBRoy25ysGTL7AM7-LrZ86ZdCuD5qx0Mg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')",
      },
    },
  },
  plugins: [],
};
