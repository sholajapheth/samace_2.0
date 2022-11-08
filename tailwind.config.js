/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        dl: "57px",
        dm: "45px",
        ds: "36px",
        hl: "32px",
        hm: "28px",
        hs: "24px",
        tl: "22px",
        tm: "16px",
        ts: "14px",
        ll: "14px",
        lm: "12px",
        ls: "11px",
        bl: "16px",
        bm: "14px",
        bs: "12px",
      },
      colors: {
        pri: "#08193E",
        sec: "#1F222A",
      },
      fontFamily: {
        roboto: "'Roboto, sans-serif",
        inter: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
